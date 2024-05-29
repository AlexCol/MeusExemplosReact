interface IToolbarProps {
	insertText: Function
}

const Toolbar = ({insertText}: IToolbarProps) => {
  return (
    <div className="toolbar">
      <button onClick={() => insertText('#', '')}>h1</button>
      <button>h2</button>
      <button>Bold</button>
      <button>Italic</button>
      <button>Link</button>
      <button>Code Block</button>
      <button>List Item</button>
      <button>Horizontal Line</button>
    </div>
  )
}

export default Toolbar