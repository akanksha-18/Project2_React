// import React from "react";

// const Output = (props) => {
//     const { paragraphs,  includeHTML ,tag} = props;

//     return (
//         <div className="output">
//             {includeHTML === "Yes" ? (
//                 <p>{paragraphs.map((p)=>`<${tag}>`+paragraphs+`<${tag}/>`)}</p>
//             ):(
//                <p>{paragraphs.map((p)=>paragraphs)}</p>
//             )}
//         </div>
//     );
// }

// export default Output;

// import React from "react";

// const Output = (props) => {
//     const { paragraphs, includeHtml, tag } = props;

//     return (
//         <div className="output">
//             {includeHtml === "Yes" ? (
//                 paragraphs.map((p, index) => (
//                     <p key={index} dangerouslySetInnerHTML={{ __html: `<${tag}>${p}</${tag}>` }} />
//                 ))
//             ) : (
//                 paragraphs.map((p, index) => <p key={index}>{p}</p>)
//             )}
//         </div>
//     );
// }

// export default Output;

import React from "react";

const Output = (props) => {
    const { paragraphs, includeHtml, tag } = props;

    return (
        <div className="output">
            {includeHtml === "Yes" ? (
                paragraphs.map((p, index) => (
                    <p key={index}>{`<${tag}>${p}</${tag}>`}</p>
                ))
            ) : (
                paragraphs.map((p, index) => <p key={index}>{p}</p>)
            )}
        </div>
    );
}

export default Output;


