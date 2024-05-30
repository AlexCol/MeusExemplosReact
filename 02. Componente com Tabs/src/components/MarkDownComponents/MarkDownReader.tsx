import ReactMarkdown from "react-markdown"

export const MarkDownReader = () => {
  const text = localStorage.getItem("markdownText") || "# Digite algo na primeira aba e veja aqui como fica!"
  return (      
    <div className="markdown_output">
      {/* {textAreaRef.current && textAreaRef.current.value && <ReactMarkdown>{textAreaRef.current.value}</ReactMarkdown>} */}
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  )
}
