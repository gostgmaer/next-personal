"use client"
import html2pdf from 'html2pdf.js';
import React from 'react'

const DownloadResume = () => {
   function downloadFile(filePath, fileName) {
    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
      }
  
    const handlePrint = () => {
      window.print();
    };
  

  return (
    <div className="action-btn print:hidden">
    <div className="mt-4 flex w-full items-center justify-end">
      <button
        onClick={()=>downloadFile('./assets/file/kishor.pdf','Kishor.pdf')}
        // onClick={()=>window.print()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Download
      </button>
      <button
        onClick={handlePrint}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Print
      </button>
    </div>
    </div>
  )
}

export default DownloadResume