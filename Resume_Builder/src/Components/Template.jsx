
import React, { useRef } from "react";

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Temp1 from "./Templates/Temp1";

const ResumeTemplate = () => {
  const resumeRef = useRef();

  const templateArray = [<Temp1 />]


  const handlePrint = async () => {
    const element = resumeRef.current;

    const canvas = await html2canvas(element, {  // create canvas
      scale: 2,

    });

    const imgData = canvas.toDataURL('image/png'); // convert to image

    const pdf = new jsPDF({  // pdf settings
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });



    pdf.addImage(imgData, 'PNG', 0, 0, 105, 105);
    pdf.save('My_Resume.pdf');
  };

  return (
    <div className="bg-gray-300 p-6 flex flex-col items-center gap-6 w-full">
      <button
        onClick={handlePrint}
        className="bg-blue-600 p-2 rounded-2xl text-white w-1/3"
      >
        Download Resume
      </button>

      <div
        ref={resumeRef}
        className="outer_template"
      >
        {templateArray[0]}
      </div>
    </div>
  );
};

export default ResumeTemplate;

