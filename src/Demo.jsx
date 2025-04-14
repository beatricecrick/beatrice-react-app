import React, {use, useState} from "react";

function Demo(){

    const [name, setName] = useState("enter name above")
    const handleNameInput = () => (
        setName(document.getElementById("myName").value)
    )
    return(
        <div>
            <input id="MyName" placeholder="Name.."></input>
            <button onClick={handleNameInput}>Submit Name</button>
            <p>Name: {name}</p>
            <p>Answer: {answer}</p>
            <p></p>
        </div>
    );
}
export default Demo