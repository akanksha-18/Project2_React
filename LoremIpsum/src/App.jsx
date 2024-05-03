import React,{useState,useEffect} from "react";
import "./App.css";
import Options from "./components/Option";
import Output from "./components/output";

const App=()=>{
  const [paragraphs,setParagraphs]=useState([]);
  const [tag,setTag]=useState('p');
  const [inputValue,setInputValue]=useState(1);
  const [includeHtml,setIncludeHtml]=useState("Yes");
  const [copiedCode, setCopiedCode] = useState(false);
  useEffect(()=>{
   const url=`https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`;
   fetch(url)
   .then(res=>res.json())
   .then(data=> setParagraphs(data));
  },[inputValue]);
  return(
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>Lorem Ipsum Text Generator</h1>
        </div>
        <Options 
        paragraphs={paragraphs}
        includeHtml={includeHtml}
        setIncludeHtml={setIncludeHtml}
        inputValue={inputValue}
        setInputValue={setInputValue}
        copiedCode={copiedCode}
        setCopiedCode={setCopiedCode}
        tag={tag}
        setTag={setTag}/>
        <Output
         paragraphs={paragraphs}
         tag={tag}
         includeHtml={includeHtml}
        />
      </div>
    </div>
  )
}
export default App;