import React from "React";
import path from "../static/appform.PDFViewer.pdf";

const PDFViewer = () => {
  console.log(path, "path from PDFViewer");
  return (
    <div>
      <iframe src={path} width="100%" height="500px" />
    </div>
  );
};

export default PDFViewer;
