interface IToolbarProps {
	insertText: Function
}

const Toolbar = ({insertText}: IToolbarProps) => {
  return (
    <div className="toolbar">
      <button onClick={() => insertText('# ', '')}>h1</button>
      <button onClick={() => insertText('## ', '')}>h2</button>
      <button onClick={() => insertText('**', '**')}>Bold</button>
      <button onClick={() => insertText('*', '*')}>Italic</button>
      <button onClick={() => insertText('[', '](https://)')}>Link</button>
      <button onClick={() => insertText('```\n', '\n```')}>Code Block</button>
      <button onClick={() => insertText('- ', '')}>List Item</button>
      <button onClick={() => insertText('\n---\n', '')}>Horizontal Line</button>
      {/* apenas pra exemplo, se for ter marcadores, melhor colocar num 'drop down' */}
      <button onClick={() => insertText('❌', '')}>❌</button>
    </div>
  )
}

export default Toolbar