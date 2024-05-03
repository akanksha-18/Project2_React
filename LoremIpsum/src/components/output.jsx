import React from "react";

const Output = (props) => {
    const { paragraphs,  includeHTML ,tag} = props;

    return (
        <div className="output">
            {includeHTML === "Yes" ? (
                <p>{paragraphs.map((p)=>`<${tag}>`+paragraphs+`<${tag}/>`)}</p>
            ):(
               <p>{paragraphs.map((p)=>paragraphs)}</p>
            )}
        </div>
    );
}

export default Output;
