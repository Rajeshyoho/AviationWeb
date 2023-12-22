import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { MenuItem , FormControlLabel, Checkbox} from '@mui/material';
import Typography from '@mui/material/Typography';

const AddressDetailsForm = ({ formData, onChange,copyResidentialAddress }) => {
    const handleCheckboxChange = () => {
        onChange('copyResidentialAddress', !copyResidentialAddress);
      };
  return (
    <Grid container spacing={2} style={{marginTop:"30px"}}>
       <Grid item md={12} sm={12}>
        <Typography>Residential Address</Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          fullWidth
          label="Address Line 1"
          value={formData.residentialAddressLine1}
          onChange={(e) => onChange('residentialAddressLine1', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          fullWidth
          label="Address Line 2"
          value={formData.residentialAddressLine2}
          onChange={(e) => onChange('residentialAddressLine2', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          fullWidth
          label="Address Line 3"
          value={formData.residentialAddressLine3}
          onChange={(e) => onChange('residentialAddressLine3', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          select
          label="City"
          value={formData.residentialCity}
          onChange={(e) => onChange('residentialCity', e.target.value)}
        >
          {/* Add your city options here */}
          <MenuItem value="City1">City 1</MenuItem>
          <MenuItem value="City2">City 2</MenuItem>
          <MenuItem value="City3">City 3</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          select
          label="State"
          value={formData.residentialState}
          onChange={(e) => onChange('residentialState', e.target.value)}
        >
          {/* Add your state options here */}
          <MenuItem value="State1">State 1</MenuItem>
          <MenuItem value="State2">State 2</MenuItem>
          <MenuItem value="State3">State 3</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Pincode"
          value={formData.residentialPincode}
          onChange={(e) => onChange('residentialPincode', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Email"
          value={formData.residentialEmail}
          onChange={(e) => onChange('residentialEmail', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Mobile (student)"
          value={formData.mobilestudent}
          onChange={(e) => onChange('mobile student', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Mobile (Father)"
          value={formData.mobilefather}
          onChange={(e) => onChange('mobile father', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Mobile (Mother)"
          value={formData.mobilemother}
          onChange={(e) => onChange('mobile mother', e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Mobile (Guardian)"
          value={formData.mobileguardian}
          onChange={(e) => onChange('mobile guardian', e.target.value)}
        />
      </Grid>

      <Grid item md={12} sm={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={copyResidentialAddress}
              onChange={handleCheckboxChange}
            />
          }
          label="Same as Residential Address"
        />
      </Grid>

      <Grid item md={12} sm={12}>
        <Typography>Correspondence Address</Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          fullWidth
          label="Address Line 1"
          value={
            copyResidentialAddress
              ? formData.residentialAddressLine1
              : formData.correspondenceAddressLine1
          }
          onChange={(e) =>
            onChange(
              'correspondenceAddressLine1',
              e.target.value,
              copyResidentialAddress
            )
          }
          disabled={copyResidentialAddress}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          fullWidth
          label="Address Line 2"
          value={
            copyResidentialAddress
              ? formData.residentialAddressLine2
              : formData.correspondenceAddressLine2
          }
          onChange={(e) =>
            onChange(
              'correspondenceAddressLine2',
              e.target.value,
              copyResidentialAddress
            )
          }
          disabled={copyResidentialAddress}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          fullWidth
          label="Address Line 3"
          value={
            copyResidentialAddress
              ? formData.residentialAddressLine3
              : formData.correspondenceAddressLine3
          }
          onChange={(e) =>
            onChange(
              'correspondenceAddressLine3',
              e.target.value,
              copyResidentialAddress
            )
          }
          disabled={copyResidentialAddress}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          select
          label="City"
          value={
            copyResidentialAddress
              ? formData.residentialCity
              : formData.correspondenceCity
          }
          onChange={(e) =>
            onChange(
              'correspondenceCity',
              e.target.value,
              copyResidentialAddress
            )
          }
          disabled={copyResidentialAddress}
        >
          {/* Add your city options here */}
          <MenuItem value="City1">City 1</MenuItem>
          <MenuItem value="City2">City 2</MenuItem>
          <MenuItem value="City3">City 3</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          select
          label="State"
          value={
            copyResidentialAddress
              ? formData.residentialState
              : formData.correspondenceState
          }
          onChange={(e) =>
            onChange(
              'correspondenceState',
              e.target.value,
              copyResidentialAddress
            )
          }
          disabled={copyResidentialAddress}
        >
          {/* Add your state options here */}
          <MenuItem value="State1">State 1</MenuItem>
          <MenuItem value="State2">State 2</MenuItem>
          <MenuItem value="State3">State 3</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          label="Pincode"
          value={
            copyResidentialAddress
              ? formData.residentialPincode
              : formData.correspondencePincode
          }
          onChange={(e) =>
            onChange(
              'correspondencePincode',
              e.target.value,
              copyResidentialAddress
            )
          }
          disabled={copyResidentialAddress}
        />
      </Grid>


    </Grid>
  );
};

export default AddressDetailsForm;
