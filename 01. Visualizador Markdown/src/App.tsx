import { MutableRefObject, useEffect, useRef, useState } from "react";
import Toolbar from "./components/Toolbar";
import ReactMarkdown from "react-markdown";


function App() {
  const [text, setText] = useState(localStorage.getItem("markdownText") || "# Olá, eu sou feito de markdown!");

  const textAreaRef = useRef<HTMLTextAreaElement>() as MutableRefObject<HTMLTextAreaElement>;  

  useEffect(() => {
    localStorage.setItem("markdownText", text);
  }, [text]);

  const insertText = (initialSimbol:string, finalSimbol:string) => {
      const textArea = textAreaRef.current;
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;

      const originalText = textArea.value;
      const beforeText = originalText.substring(0, start);
      const selectedText = originalText.substring(start, end);
      const afterText = originalText.substring(end);
      const newText = `${beforeText}${initialSimbol}${selectedText}${finalSimbol}${afterText}`;
      textArea.value = newText;
      setText(newText);
      textArea.focus();
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
        {/* {textAreaRef.current && textAreaRef.current.value && <ReactMarkdown>{textAreaRef.current.value}</ReactMarkdown>} */}
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  )
}

export default App
