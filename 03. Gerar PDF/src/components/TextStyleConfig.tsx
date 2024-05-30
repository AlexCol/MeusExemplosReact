interface ITextStyleConfig {
  fontSize: string,
  setFontSize: Function,
  fontColor: string,
  setFontColor: Function,
  isBold: boolean,
  setIsBold: Function  
}


export const TextStyleConfig = ({fontSize, setFontSize, fontColor, setFontColor, isBold, setIsBold} : ITextStyleConfig) => {
  return (
    <div className="textStyleConfig">
      <label className="configLabel">
        Font Size:
        <input type="text" className="input" value={fontSize} onChange={(e) => setFontSize(e.target.value)}/>
      </label>
      <label className="configLabel">
        Color:
        <input type="color" className="colorPicker" value={fontColor} onChange={(e) => setFontColor(e.target.value)}/>
      </label>
      <label className="configLabel">
        Bold:
        <input type="checkBox" checked={isBold} onChange={(e) => setIsBold(e.target.checked)}/>
      </label>      
    </div>
  )
}
