import { useEffect, useState } from "react";
import "./Letter.css";

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';

const date = new Date();
let DateString = date.getDate() + "-" + date.getMonth()+1 + "-" + date.getFullYear();
console.log(DateString);


const Letter = () => {
    const [FinalLetter, SetFinalLetter] = useState(true);

    const [ToValue, setTo] = useState("");
    const [DepartmentValue, setDepartment] = useState("");
    const [SubjectValue, setSubject] = useState("");
    const [ReasonValue, setReason] = useState("");
    const [NameValue, setName] = useState("");
    const [RollnoValue, setRollno] = useState("");


    function HandleSubmit(){
    SetFinalLetter(false);
    }
    // Input Getters 

    function getTo(e){
     var To = e.target.value;
     setTo(To);
    }
    function getDepartment(e){
    var Department = e.target.value;
    setDepartment(Department);
    }
    function getSubject(e){
    var Subject = e.target.value;
    setSubject(Subject);
    }
    function getReason(e){
    var Reason = e.target.value;
    setReason(Reason);
    }
    function getName(e){
    var Name = e.target.value;
    setName(Name);
    }
    function getRollno(e){
    var Rollno = e.target.value;
    setRollno(Rollno);
    }


    // Print Doc 
    function printDocument() {
  
        const doc = new jsPDF();
       
        //get letter
        const letter = document.querySelector(".letter");
        //html to pdf format
        var html = htmlToPdfmake(letter.innerHTML);
  
      
        const documentDefinition = { content: html };
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        pdfMake.createPdf(documentDefinition).open();
      
  }
    
    return (
        <div>
        {FinalLetter?
            <div style={{border:"2px solid" , borderColor:"#EEEEEE"}} className="max-w-3xl m-auto my-10 h-full w-full p-5">
            <p className=" text-sm ">
            <input onChange={getTo}  className="Input" placeholder="To"></input><br/>
            <input onChange={getDepartment} className="Input" placeholder="Department Name"></input><br/>
            Guru Nanak Dev University, Amritsar<br/>
            <br/>
            {DateString}
            <br/>
            <br/>
            Subject: <input onChange={getSubject} className="Input" placeholder="Subject"></input> <br/><br/>
            </p>
            {/* Main Body */}
            <p className="text-sm">
            I am writing to request a fee concession for the upcoming semester. Due to <input onChange={getReason} size="30" className="Input" placeholder="Add Specific Reason"></input>, I am currently facing financial difficulties and am unable to pay the full amount of tuition and fees.

I am a hard-working and dedicated student, and I am committed to completing my education at Guru Nanak Dev University. However, without a fee concession, I fear that I will not be able to continue my studies.

I would be grateful if you could consider my request and grant me a fee concession for the upcoming semester. I am willing to provide any additional documentation or information that may be required to support my request.

Thank you for your time and consideration.

            </p>

            <p className="text-sm">
<br/>           
Sincerely,
<br/><input onChange={getName} className="Input" placeholder="Your Name"></input>
<br></br>
<input onChange={getRollno} className="Input" placeholder="Roll Number"></input>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
Signature
            </p>
         </div>:
         <div  style={{border:"2px solid" , borderColor:"#EEEEEE"}} className="letter max-w-3xl m-auto my-10 h-full w-full p-5">
            <p className=" text-sm ">
            <br/>
            {ToValue}<br/>
            {DepartmentValue}
            <br/>
            Guru Nanak Dev University, Amritsar<br/>
            <br/>
            {DateString}
            <br/>
            <br/>
            Subject: {SubjectValue} <br/><br/>
            </p>
            {/* Main Body */}
            <p className="text-sm">
            I am writing to request a fee concession for the upcoming semester. Due to {ReasonValue}, I am currently facing financial difficulties and am unable to pay the full amount of tuition and fees.

I am a hard-working and dedicated student, and I am committed to completing my education at Guru Nanak Dev University. However, without a fee concession, I fear that I will not be able to continue my studies.

I would be grateful if you could consider my request and grant me a fee concession for the upcoming semester. I am willing to provide any additional documentation or information that may be required to support my request.

Thank you for your time and consideration.

            </p>

            <p className="text-sm">
<br/>           
Sincerely,
<br/>{NameValue}
<br></br>
{RollnoValue}

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
Signature
            </p>
         </div>
        }
         
 {/* Final Preview  */}
         {FinalLetter? <button onClick={HandleSubmit} style={{backgroundColor:"#ff6e6d",color:"white",padding:"4px",borderRadius:"5px"}}  className="w-40">Final</button>:    <div className="flex gap-5"> <button className="w-30" style={{backgroundColor:"#ff6e6d",color:"white",padding:"4px 8px",borderRadius:"5px"}} onClick={printDocument}>Download Pdf</button>
         <button style={{backgroundColor:"white",color:"#ff6e6d",border:"1px solid #ff6e6d",padding:"4px 6px",borderRadius:"5px"}}><a href="mailto:shivaphotostate6@gmail.com" className="w-20">Mail Pdf to Stationery shop</a></button></div>}
        

        </div>
    )
}

export default Letter;


