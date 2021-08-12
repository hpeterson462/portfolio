import React from 'react';
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import PDF from './assets/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => (
  <Document
    className='flex justify-center m-5'
    file={PDF}
    onContextMenu={(e) => e.preventDefault()}
  >
    <Page pageNumber={1} />
  </Document>
);

export default Resume;
