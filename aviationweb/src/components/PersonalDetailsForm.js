// PersonalDetailsForm.js
import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

const genderOptions = ['Male', 'Female', 'Other'];
const smallFontStyle = { fontSize: '0.5rem' };


const initialFormData = {
  firstName: '',
  lastName: '',
  fathersName: '',
  mothersName: '',
  fathersOccupation: '',
  heightCms: '',
  weightKgs: '',
  bloodGroup: '',
  dateOfBirth: null,
  age: '',
  gender: '',
  category: '',
  maritalStatus: '',
  language1: { name: '', read: false, write: false, study: false },
  language2: { name: '', read: false, write: false, study: false },
  language3: { name: '', read: false, write: false, study: false },
  hasPassport: false,
  passportNumber: '',
  passportValidity: null,
};


const PersonalDetailsForm = ({  onChange }) => {
  const handleCheckboxChange = (language, skill) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [language]: {
        ...prevFormData[language],
        [skill]: !prevFormData[language][skill],
      },
    }));
  };
  
  const handleFormChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  
  
const [formData, setFormData] = useState(initialFormData);

  return (
    <Grid container spacing={2} style={{marginTop:"30px"}}>
      <Grid item xs={12} md={6}>
        <TextField
         fullWidth
         label="First Name"
         value={formData.firstName}
         onChange={(e) => handleFormChange('firstName', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Last Name"
          value={formData.lasttName}
          onChange={(e) => handleFormChange('lastName', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="fathers Name"
          value={formData.fathersName}
          onChange={(e) => handleFormChange('fathersName', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
           fullWidth
           label="Mothers Name"
           value={formData.mothersName}
           onChange={(e) => handleFormChange('mothersName', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Fathers Occupation"
          value={formData.fathersOccupation}
          onChange={(e) => handleFormChange('fathersOccupation', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Height (cms)"
          value={formData.heightCms}
          onChange={(e) => handleFormChange('heightCms', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Weight (kgs)"
          value={formData.weightKgs}
          onChange={(e) => handleFormChange('weightKgs', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Blood Group"
          value={formData.bloodGroup}
          onChange={(e) => handleFormChange('bloodGroup', e.target.value)}
        />
      </Grid>

      <Grid item xs={12} md={6}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker fullWidth  label="Date of Birth" />
  </LocalizationProvider>
</Grid>


      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Age (yrs)"
          value={formData.age}
          onChange={(e) => handleFormChange('age', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          select
          label="Gender"
          value={formData.gender}
          onChange={(e) => handleFormChange('gender', e.target.value)}
        >
          {genderOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          select
          label="Category"
          value={formData.category}
          onChange={(e) => handleFormChange('category', e.target.value)}
        >
          <MenuItem value="Option 3">GENRAL</MenuItem>
          <MenuItem value="Option 1">SC</MenuItem>
          <MenuItem value="Option 2">ST</MenuItem>
          <MenuItem value="Option 3">BC</MenuItem>
          <MenuItem value="Option 3">MBC</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          label="Marital Status"
          value={formData.maritalStatus}
          onChange={(e) => handleFormChange('maritalStatus', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        {/* Language 1 */}
        <TextField
          fullWidth
          label="Language 1"
          value={formData.language1.name}
          onChange={(e) => handleFormChange('language1', { ...formData.language1, name: e.target.value })}
        />
        <FormControlLabel
          control={
            <Checkbox
            sx={{ '& .MuiTypography-root': { fontSize: 8 }}}
              checked={formData.language1.read}
              onChange={() => handleCheckboxChange('language1', 'read')}
              color="primary"
            />
          }
          label="Read"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.language1.write}
              onChange={() => handleCheckboxChange('language1', 'write')}
              color="primary"
            />
          }
          label="Write"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.language1.study}
              onChange={() => handleCheckboxChange('language1', 'study')}
              color="primary"
            />
          }
          label="Study"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        {/* Language 1 */}
        <TextField
          fullWidth
          label="Language 1"
          value={formData.language1.name}
          onChange={(e) => handleFormChange('language1', { ...formData.language1, name: e.target.value })}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.language1.read}
              onChange={() => handleCheckboxChange('language1', 'read')}
              color="primary"
            />
          }
          label="Read"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.language1.write}
              onChange={() => handleCheckboxChange('language1', 'write')}
              color="primary"
            />
          }
          label="Write"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.language1.study}
              onChange={() => handleCheckboxChange('language1', 'study')}
              color="primary"
            />
          }
          label="Study"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        {/* Language 1 */}
        <TextField
          fullWidth
          label="Language 1"
          value={formData.language1.name}
          onChange={(e) => handleFormChange('language1', { ...formData.language1, name: e.target.value })}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.language1.read}
              onChange={() => handleCheckboxChange('language1', 'read')}
              color="primary"
            />
          }
          label="Read"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.language1.write}
              onChange={() => handleCheckboxChange('language1', 'write')}
              color="primary"
            />
          }
          label="Write"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.language1.study}
              onChange={() => handleCheckboxChange('language1', 'study')}
              color="primary"
            />
          }
          label="Study"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.hasPassport}
              onChange={() => handleCheckboxChange('hasPassport')}
              color="primary"
            />
          }
          label="Do you have a passport?"
        />
      </Grid>
      {formData.hasPassport && (
        <>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Passport Number"
              value={formData.passportNumber}
              onChange={(e) => handleFormChange('passportNumber', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                fullWidth
                label="Passport Validity"
                value={formData.passportValidity}
                onChange={(date) => handleFormChange('passportValidity', date)}
              />
            </LocalizationProvider>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default PersonalDetailsForm;
