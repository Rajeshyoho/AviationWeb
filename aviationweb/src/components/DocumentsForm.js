import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const DocumentsForm = () => {
  // Sample data for the table
  const [uploadOptions, setUploadOptions] = useState(new Set());
  const [fileInputs, setFileInputs] = useState({});

  const rows = [
    { documentName: 'Copy of Class 10th Certificate' },
    { documentName: 'Copy of Class 12th or 10+2 Certificate' },
    { documentName: 'Copy of degree or graduation Certificate' },
    { documentName: 'Copies of Professional Certificates' },
    { documentName: 'Copy of Residence Proof' },
    { documentName: 'Copy of Identity Proof' },
    { documentName: 'Passport size photograph-3' },
  ];

  const handleCheckboxChange = (index) => {
    setUploadOptions((prevOptions) => {
      const newOptions = new Set(prevOptions);
      newOptions.has(index) ? newOptions.delete(index) : newOptions.add(index);
      return newOptions;
    });
  };

  const handleFileInputChange = (index, event) => {
    const { files } = event.target;
    setFileInputs((prevInputs) => ({
      ...prevInputs,
      [index]: files[0],
    }));
  };

  const handleFileUpload = (index) => {
    const file = fileInputs[index];

    // Simulate file upload to the server (replace with actual API call)
    console.log(`Uploading file ${file.name} for document at index ${index}`);
    // You would typically use a library like axios to make an API call to your server
    // axios.post('/api/upload', formData);

    // Reset file input after upload
    setFileInputs((prevInputs) => {
      const newInputs = { ...prevInputs };
      delete newInputs[index];
      return newInputs;
    });
  };

  return (
    <div style={{marginTop:"30px"}}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Documents to be Attached</TableCell>
              <TableCell align="center">Yes</TableCell>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Documents</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.documentName}</TableCell>
                <TableCell align="center">
                  <Checkbox
                    checked={uploadOptions.has(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </TableCell>
                <TableCell align="center">
                  <Checkbox
                    checked={!uploadOptions.has(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </TableCell>
                <TableCell align="center">
                  {uploadOptions.has(index) && (
                    <>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileInputChange(index, e)}
                      />
                      <IconButton
                        color="primary"
                        component="span"
                        onClick={() => handleFileUpload(index)}
                      >
                        <CloudUploadIcon />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DocumentsForm;
