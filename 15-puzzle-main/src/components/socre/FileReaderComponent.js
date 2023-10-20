import React, { useState } from 'react';

function FileReaderComponent() {
  const [fileContent, setFileContent] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFileName(selectedFile.name);

      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      {fileContent && (
        <div>
          <h2>File Name: {fileName}</h2>
          <h3>File Content:</h3>
          <pre>{fileContent}</pre>
        </div>
      )}
    </div>
  );
}

export default FileReaderComponent;