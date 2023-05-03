import React, {useState} from "react";

export default function TextForm(props) {
  const [text, setText] = useState("")
 const handleUpper= () =>{
      let newText = text.toUpperCase()
      setText(newText)
      props.showAlert("Converted to upper case", "success")
  }
  const handleLower= () =>{
    let newText = text.toLocaleLowerCase()
    setText(newText)
    props.showAlert("Converted to Lower case", "success")
}
const handleClear= () =>{
  setText("")
  props.showAlert("Text Cleared", "success")
}
const handleCopy=() =>{
  navigator.clipboard.writeText(text)
  props.showAlert("Text Copied", "success")
}
const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}
  const handleOnChange = (event)=>{
    setText(event.target.value)

  }
  return (
    <>
        <div className="container" style={{color: props.mode === 'dark'? 'white':'#042743'}}>
            <div className="mb-3">
              <h2>{props.heading}</h2>
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode === 'dark'? 'white':'#042743'}} id="Box" rows="8"></textarea>
            </div>
            <div className="container my-3">
              <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpper}>Convert To UpperCase</button>
              <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLower}>Convert To LowerCase</button>
              <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
              <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
              <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <h2>Text Sumarry</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Words Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing To Preview!"}</p>
        </div>
    </>
  );
}
