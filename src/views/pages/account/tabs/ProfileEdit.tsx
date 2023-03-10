// THIRD-PARTY
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import * as yup from 'yup';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useFormik } from 'formik';

// PROJECT IMPORTS
import { gridSpacing } from 'store/constant';
import { SelectProps } from 'types/customer';
import { dispatch, useSelector } from 'store';
import { openSnackbar } from 'store/slices/snackbar';
import { editProfile, getProfile } from 'store/slices/profile';
import { isFullName, isPhone } from 'utils/regexHelper';
import { ChangePassword } from 'types/profile';
import { useEffect, useState } from 'react';

interface Props {
  open: boolean;
  handleDialogOpen: () => void;
  // getUserProfile: () => any;
  // user: any;
}

const Gender: SelectProps[] = [
  {
    value: 'male',
    label: 'Male'
  },
  {
    value: 'female',
    label: 'Female'
  }
];

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Name must have at least 2 characters')
    .max(50, `Maximum characters allowed is 50`)
    .matches(isFullName, 'Sorry, only letters (a-z) are allowed ')
    .required('Name is required'),
  phone: yup.string().trim().required('Phone is required').matches(isPhone, 'Enter the correct format phone'),
  dob: yup.date().required('Date of Birth is required').nullable(),
  gender: yup.string().required('Gender is required')
});

const ProfileEdit = ({ open, handleDialogOpen }: Props) => {
  const currUser = useSelector((state) => state.profile.userProfile);
  const [user, setUser] = useState(currUser);

  const getUserProfile = async () => {
    await dispatch(getProfile());
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  useEffect(() => {
    setUser(currUser);
  }, [currUser]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user?.name,
      phone: user?.phone,
      dob: user?.dob,
      gender: user?.gender
    },
    validationSchema,
    onSubmit: async (values) => {
      await onEditProfile(values);
      formik.resetForm();
    }
  });

  const Notification = (color: string, message: string) => {
    dispatch(
      openSnackbar({
        open: true,
        message,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        variant: 'alert',
        alert: {
          color
        },
        close: true
      })
    );
  };

  const onEditProfile = async (values: ChangePassword) => {
    await dispatch(
      editProfile({
        params: values,
        callback: (res) => {
          if (res?.data?.success) {
            getUserProfile();
            Notification('success', 'Edit Success');
            handleDialogOpen();
            formik.resetForm();
          } else if (res?.message === 'The given data was invalid.') {
            Notification('error', 'Phone Number has already been taken');
          } else {
            Notification('error', res?.message);
          }
        }
      })
    );
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        handleDialogOpen();
        formik.resetForm();
      }}
      sx={{
        '&>div:nth-of-type(3)': {
          '&>div': {
            m: 0,
            borderRadius: '0px',
            width: 850,
            maxWidth: 850,
            maxHeight: '100%'
          }
        }
      }}
    >
      {open && (
        <>
          <Box sx={{ p: 3 }}>
            <Grid container alignItems="center" spacing={0.5} justifyContent="space-between">
              <Grid item sx={{ width: 'calc(100% - 50px)' }}>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Button
                    variant="text"
                    color="error"
                    sx={{ p: 0.5, minWidth: 32, display: { xs: 'block', md: 'none' } }}
                    onClick={handleDialogOpen}
                  >
                    <HighlightOffIcon />
                  </Button>
                  <Typography
                    variant="h4"
                    sx={{
                      display: 'inline-block',
                      width: 'calc(100% - 34px)',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      verticalAlign: 'middle'
                    }}
                  >
                    Edit Profile
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <form onSubmit={formik.handleSubmit}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DialogContent>
                <Grid container spacing={gridSpacing} sx={{ mt: 0.25 }}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="name"
                      name="name"
                      label="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="phone"
                      name="phone"
                      label="Phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <DesktopDatePicker
                      label="Date of Birth"
                      value={formik.values.dob}
                      inputFormat="dd/MM/yyyy"
                      allowSameDateSelection
                      maxDate={new Date()}
                      onChange={(date) => {
                        formik.setFieldValue('dob', date);
                      }}
                      renderInput={(props) => (
                        <TextField
                          fullWidth
                          {...props}
                          error={formik.values.dob === null}
                          helperText={formik.touched.dob && formik.errors.dob}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <Select
                        id="gender"
                        name="gender"
                        displayEmpty
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        {Gender.map((gender: SelectProps, index: number) => (
                          <MenuItem key={index} value={gender.value}>
                            {gender.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button size="large" variant="contained" type="submit">
                  Save
                </Button>
                <Button size="large" type="reset" variant="outlined" color="error" onClick={(e) => formik.resetForm()}>
                  Clear
                </Button>
              </DialogActions>
            </LocalizationProvider>
          </form>
        </>
      )}
    </Dialog>
  );
};

export default ProfileEdit;
