// EducationalQualificationForm.js
import React from 'react';
import { Grid, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const EducationalQualificationForm = ({ formData, onChange }) => {
  const handleTableChange = (index, field, value) => {
    const newTableData = [...formData.educationalQualifications];
    newTableData[index][field] = value;
    onChange('educationalQualifications', newTableData);
  };

  return (
    <Grid container spacing={2} style={{marginTop:"30px"}}>
      <Typography variant="h6">Educational Qualifications</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Degree</TableCell>
              <TableCell>Name of School/College</TableCell>
              <TableCell>Percentage</TableCell>
              <TableCell>Year of Passing</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[0, 1, 2].map((index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    fullWidth
                    value={formData.educationalQualifications[index].degree}
                    onChange={(e) => handleTableChange(index, 'degree', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    value={formData.educationalQualifications[index].school}
                    onChange={(e) => handleTableChange(index, 'school', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    value={formData.educationalQualifications[index].percentage}
                    onChange={(e) => handleTableChange(index, 'percentage', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    value={formData.educationalQualifications[index].yearOfPassing}
                    onChange={(e) => handleTableChange(index, 'yearOfPassing', e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default EducationalQualificationForm;
