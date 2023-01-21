import { useEffect, useState } from "react";
import "./Letter.css";
const date = new Date();
let DateString = date.getDate() + "-" + date.getMonth()+1 + "-" + date.getFullYear();
console.log(DateString);


const Letter = () => {
  
        
  
    
    
    return (
        <div className="max-w-3xl m-auto my-10 h-full w-full">
         <div>
            <p className=" text-sm "><input className="Input" placeholder="To"></input><br/>
            <input className="Input" placeholder="Department Name"></input><br/>
            Guru Nanak Dev University, Amritsar<br/>
            <br/>
            {DateString}
            <br/>
            <br/>
            Subject: <input className="Input" placeholder="Subject"></input> <br/><br/>
            </p>
            {/* Main Body */}
            <p className="text-sm">
            I am writing to request a fee concession for the upcoming semester. Due to <input size="50" className="Input" placeholder="Add Specific Reason"></input>, I am currently facing financial difficulties and am unable to pay the full amount of tuition and fees.

I am a hard-working and dedicated student, and I am committed to completing my education at <input className="Input" placeholder="College Name"></input>. However, without a fee concession, I fear that I will not be able to continue my studies.

I would be grateful if you could consider my request and grant me a fee concession for the upcoming semester. I am willing to provide any additional documentation or information that may be required to support my request.

Thank you for your time and consideration.

            </p>

            <p className="text-sm">
<br/>           
Sincerely,
<br/><input className="Input" placeholder="Your Name"></input>
<br></br>
<input className="Input" placeholder="Roll Number"></input>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
Signature
            </p>
      
         </div>
        </div>
    )
}

export default Letter;