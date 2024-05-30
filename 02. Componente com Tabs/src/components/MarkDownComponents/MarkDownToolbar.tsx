interface IMarkDownToolbarProps {
	insertText: Function
}

const MarkDownToolbar = ({insertText}: IMarkDownToolbarProps) => {
  return (
    <div className="MarkDownToolbar">
      <button onClick={() => insertText('# ', '')}>h1</button>
      <button onClick={() => insertText('## ', '')}>h2</button>
      <button onClick={() => insertText('**', '**')}>Bold</button>
      <button onClick={() => insertText('*', '*')}>Italic</button>
      <button onClick={() => insertText('[', '](https://)')}>Link</button>
      <button onClick={() => insertText('```\n', '\n```')}>Code Block</button>
      <button onClick={() => insertText('- ', '')}>List Item</button>
      <button onClick={() => insertText('\n---\n', '')}>Horizontal Line</button>
    </div>
  )
}

export default MarkDownToolbar