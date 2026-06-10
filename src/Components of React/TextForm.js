import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUppercaseClick=()=>{
    props.showAlert("Text Changed to Uppercase","success")
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLowercaseClick=()=>{
    props.showAlert("Text Changed to Lowercase","success")     
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const ClearText=()=>{
    props.showAlert("Text Cleared","success")
    let newText='';
    setText(newText)
  }
  const reverseText=()=>{
    props.showAlert("Text has been reversed","success")
    let newText=text.split("").reverse().join("")
    setText(newText)
  }
  const copyText=()=>{
    navigator.clipboard.writeText(text)
    props.showAlert("Text copied successfully but needs to be carefull","danger")
  }
  const removeExtraSpaces=()=>{
    let newText=text.split(" ").filter(word=> word!=="").join(" ")
    setText(newText)
    props.showAlert("Extra Spaces Removed but text could be changed so be carefull","warning")
  }
  const countandDisplayFrequency=()=>{
    let newText=text.toLowerCase();
    let freq={};
    for(let ch of newText)
    {
       if(ch <'a' || ch > 'z')
        continue
      {
        if(freq[ch])
         freq[ch]++;
       else 
         freq[ch]=1;
      }
    }
    let result=Object.entries(freq);
    result.sort((a,b)=>b[1] - a[1])
    setFrequency(result)
    props.showAlert("Frequencies has been successfully calculated and displayed","success")
  }
  const [text,setText]=useState('')
  const [frequency,setFrequency]=useState([])
  return (
    <>
    <div className="container" style={{backgroundColor:props.mode==='dark'?'#042743':'white',
      color:props.mode==='dark'?'white':'#042743'}} >
    <h1 className="heading my-3" id="heading-1">TextUtils Website Demo</h1>
    <div className="mb-3">
    <label htmlFor="text-1" className="htmlForm-label"><b>Enter your text and see the magic</b></label>
    <textarea className="form-control" id="text-1" rows="7" placeholder="Enter your text here"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
      color:props.mode==='dark'?'white':'#042743'}}></textarea><br/>
    </div>
    <button className="btn btn-primary" value={text} onClick={handleUppercaseClick} id="btn-1">Convert to Uppercase</button>
    <button className="btn btn-primary mx-3" value={text} onClick={handleLowercaseClick} id="btn-2">Convert to Lowercase</button>
    <button className="btn btn-primary mx-3" value={text} onClick={ClearText} id="btn-1">Clear Text</button>
    <button className="btn btn-primary mx-2" value={text} onClick={reverseText} id="btn-2">Reverse Text</button>
    <button className="btn btn-primary mx-2" value={text} onClick={copyText} id="btn-2">Copy to Clipboard</button>
    <button className="btn btn-primary mx-2" value={text} onClick={removeExtraSpaces} id="btn-1">Remove Extra Spaces</button>
    <button className="btn btn-primary mx-2" value={text} onClick={countandDisplayFrequency} id="btn-2">Display Frequency</button>
    </div>
    <div className="container" style={{backgroundColor:props.mode==='dark'?'#042743':'white',
      color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Text Summary</h2>
    <p>{text.split(" ").length-1} words,{text.length} characters,{text.split("\n").length} lines and {0.008*text.split(" ").length} minutes read</p>
    <h2>Text Preview</h2>
    <p><b>{text.length>0?text:"Enter something in the text box to preview it"}</b></p>
    </div>
    <div className="container my-1" style={{backgroundColor:props.mode==='dark'?'#042743':'white',
      color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Count and Display Frequency</h2>
      {frequency.map((item,index)=>(
        <p key={index}>
          {item[0]} - {item[1]}
        </p>
      ))}
    </div>
    </>
  )
}
