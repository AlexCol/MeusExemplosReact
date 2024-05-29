import { MutableRefObject, useEffect, useRef, useState } from "react";
import Toolbar from "./components/Toolbar";
import ReactMarkdown from "react-markdown";


function App() {
  const [text, setText] = useState(localStorage.getItem("markdownText") || "# Olá, eu sou feito de markdown!");

  const textAreaRef = useRef<HTMLTextAreaElement>() as MutableRefObject<HTMLTextAreaElement>;  

  useEffect(() => {
    localStorage.setItem("markdownText", text);
  }, [text]);

  const insertText = (before:number, after:number) => {
      const textArea = textAreaRef.current;
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;

      console.log(`${start} e ${end}`);
  };

  return (
    <div className="app_container">
      <Toolbar insertText={insertText}/>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="markdown_output">
        {text && <ReactMarkdown>{text}</ReactMarkdown>}
      </div>
    </div>
  )
}

export default App
