import React from 'react';
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import PDF from './assets/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const handleWindow = (e) => {
    e.preventDefault();
  }

  return (
    <Document
      className='flex justify-center m-5'
      file={PDF}
      onContextMenu={handleWindow}
    >
      <Page pageNumber={1} />
    </Document>
  )
}
