// THIRD PARTY
import React, { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  Box,
  Button,
  Stack,
  DialogContent,
  Typography,
  Divider,
  TextField,
  Grid,
  Dialog,
  FormHelperText,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import moment from 'moment';
import { useTheme } from '@mui/material/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

// PROJECT IMPORT
import AnimateButton from 'ui-component/extended/AnimateButton';
import { addCandidate, editCandidate } from 'store/slices/history';
import { dispatch } from 'store';
import { openSnackbar } from 'store/slices/snackbar';
import { gridSpacing } from 'store/constant';
import { Candidates } from 'types/history';
import { SelectProps } from 'types/customer';
import { isPhone, isFullName, emailRegEx } from 'utils/regexHelper';

interface Props {
  dataEdit: Candidates;
  visible: boolean;
  handleVisibleModal: () => void;
  getList: () => void;
}

const AddHistory = ({ dataEdit, visible, handleVisibleModal, getList }: Props) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [errors, setErrors] = useState<any>({});

  const handleAdd = (values: Candidates) => {
    if (dataEdit.id) {
      dispatch(
        editCandidate({
          id: dataEdit.id,
          params: values,
          callback: (res) => {
            if (res?.data?.success) {
              openNotification('success', 'Edit record successfully!');
              changeModal('close');
            } else {
              openNotification('error', res?.message);
              setErrors(res?.errors);
            }
          }
        })
      );
    } else {
      dispatch(
        addCandidate({
          params: values,
          callback: (res) => {
            if (res?.data?.success) {
              getList();
              openNotification('success', 'Add new record successfully!');
              changeModal('close');
            } else {
              openNotification('error', res?.message);
              setErrors(res?.errors);
            }
          }
        })
      );
    }
  };

  const openNotification = (color: string, message: string) => {
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

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .min(2, 'Name must have at least 2 characters')
      .max(50, `Maximum characters allowed is 50`)
      .matches(isFullName, 'Sorry, only letters (a-z) are allowed')
      .required('Name is required'),
    email: yup.string().trim().email('Email is not valid').matches(emailRegEx, 'Email is not valid').max(50).required('Email is required'),
    phone: yup.string().trim().max(12).matches(isPhone, 'Please enter the correct phone number format').required('Phone is required'),
    age: yup.number().max(100, 'Too old').min(0, 'Too young').required('Age is required'),
    time: yup.string().trim().required('Interview time is required'),
    address: yup.string().trim().max(255),
    note: yup.string().trim().max(255)
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: dataEdit?.name,
      email: dataEdit?.email,
      phone: dataEdit?.phone || '',
      age: dataEdit?.age,
      note: dataEdit?.note || '',
      address: dataEdit?.address || '',
      time: dataEdit?.time || moment().format('L'),
      status: dataEdit?.id ? dataEdit?.status : 0
    },
    validationSchema,
    onSubmit: (values) => {
      handleAdd(values);
    }
  });

  const changeModal = (type: string) => {
    if (type === 'close') {
      handleVisibleModal();
      setErrors({});
      formik.resetForm();
    }
  };

  const Status: SelectProps[] = [
    {
      value: 0,
      label: 'InProgress'
    },
    {
      value: 1,
      label: 'Complete'
    },
    {
      value: 2,
      label: 'Cancel'
    }
  ];

  return (
    <Dialog
      open={visible}
      onClose={() => {
        changeModal('close');
      }}
      fullScreen={matchDownSM}
      sx={{
        '&>div:nth-of-type(3)': {
          '&>div': {
            m: 0,
            borderRadius: '0px',
            width: matchDownSM ? '100%' : 850,
            maxHeight: '100%'
          }
        }
      }}
    >
      {visible && (
        <>
          <Box sx={{ p: 3 }}>
            <Grid container alignItems="center" spacing={0.5} justifyContent="space-between">
              <Grid item sx={{ width: '100%' }}>
                <Stack direction="row" spacing={0.5} alignItems="center">
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
                    {dataEdit?.id ? `Edit candidate profile ${dataEdit?.name}` : 'Add new record'}
                  </Typography>
                  <Button
                    variant="text"
                    color="error"
                    sx={{ p: 0.5, minWidth: 32, display: { xs: 'block', md: 'none' } }}
                    onClick={() => changeModal('close')}
                  >
                    <HighlightOffIcon />
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Divider />

          <form noValidate onSubmit={formik.handleSubmit}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DialogContent>
                <Grid container spacing={gridSpacing} sx={{ mt: 0.25 }}>
                  <Grid item xs={12} xl={12}>
                    <TextField
                      id="name"
                      name="name"
                      value={formik?.values?.name}
                      label={
                        <span>
                          <span style={{ color: '#f44336' }}>*</span> Name
                        </span>
                      }
                      fullWidth
                      onChange={formik.handleChange}
                      error={(formik?.touched?.name && Boolean(formik?.errors?.name)) || errors?.name}
                      helperText={(formik?.touched?.name && formik?.errors?.name) || errors?.name}
                    />
                  </Grid>

                  <Grid item xs={12} xl={12}>
                    <TextField
                      id="age"
                      name="age"
                      value={formik?.values?.age}
                      type="number"
                      label={
                        <span>
                          <span style={{ color: '#f44336' }}>*</span> Age
                        </span>
                      }
                      fullWidth
                      onChange={formik.handleChange}
                      error={(formik?.touched?.age && Boolean(formik?.errors?.age)) || errors?.age}
                      helperText={(formik?.touched?.age && formik?.errors?.age) || errors?.age}
                    />
                  </Grid>

                  <Grid item xs={12} xl={12}>
                    <TextField
                      id="phone"
                      name="phone"
                      value={formik?.values?.phone}
                      label={
                        <span>
                          <span style={{ color: '#f44336' }}>*</span> Phone
                        </span>
                      }
                      fullWidth
                      onChange={formik.handleChange}
                      error={(formik?.touched?.phone && Boolean(formik?.errors?.phone)) || errors?.phone}
                      helperText={(formik?.touched?.phone && formik?.errors?.phone) || errors?.phone}
                    />
                  </Grid>

                  <Grid item xs={12} xl={12}>
                    <TextField
                      id="email"
                      name="email"
                      type="email"
                      value={formik?.values?.email}
                      label={
                        <span>
                          <span style={{ color: '#f44336' }}>*</span> Email
                        </span>
                      }
                      fullWidth
                      onChange={formik.handleChange}
                      error={(formik?.touched?.email && Boolean(formik?.errors?.email)) || errors?.email}
                      helperText={(formik?.touched?.email && formik?.errors?.email) || errors?.email}
                    />
                  </Grid>

                  <Grid item xs={12} xl={12}>
                    <TextField
                      id="address"
                      name="address"
                      value={formik?.values?.address}
                      label={<span>Address</span>}
                      fullWidth
                      onChange={formik.handleChange}
                      error={(formik?.touched?.address && Boolean(formik?.errors?.address)) || errors?.address}
                      helperText={(formik?.touched?.address && formik?.errors?.address) || errors?.address}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <DateTimePicker
                      renderInput={(props) => <TextField fullWidth {...props} />}
                      label={
                        <span style={{ color: formik?.touched?.time && Boolean(formik?.errors?.time) ? '#f44336' : '' }}>
                          <span style={{ color: '#f44336' }}>*</span> Interview Time
                        </span>
                      }
                      value={formik?.values.time}
                      onChange={(date) => {
                        if (date === null) {
                          formik.setFieldValue('time', '');
                        } else {
                          formik.setFieldValue('time', date);
                        }
                      }}
                    />

                    {formik?.errors?.time && (
                      <FormHelperText error id="standard-weight-helper-text-rank-login">
                        Interview time is required
                      </FormHelperText>
                    )}
                  </Grid>

                  <Grid item xs={12} xl={12}>
                    <TextField
                      minRows={2}
                      rows={2}
                      id="note"
                      name="note"
                      value={formik?.values?.note}
                      label={<span>Note</span>}
                      fullWidth
                      onChange={formik.handleChange}
                      error={(formik?.touched?.note && Boolean(formik?.errors?.note)) || errors?.note}
                      helperText={(formik?.touched?.note && formik?.errors?.note) || errors?.note}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>
                        <span style={{ color: '#f44336' }}>*</span> Status
                      </InputLabel>
                      <Select
                        id="status"
                        name="status"
                        label="Status"
                        displayEmpty
                        value={formik?.values?.status}
                        onChange={formik.handleChange}
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        {Status.map((status: SelectProps, index: number) => (
                          <MenuItem key={index} value={status.value}>
                            {status.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <AnimateButton>
                      <Button fullWidth variant="contained" type="submit">
                        Save
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </DialogContent>
            </LocalizationProvider>
          </form>
        </>
      )}
    </Dialog>
  );
};

export default AddHistory;
