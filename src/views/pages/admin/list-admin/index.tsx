import React, { useEffect, useState } from 'react';
import { Button, Grid, InputLabel, Select, TextField, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { HiPlus, HiOutlineXCircle, HiOutlineNewspaper, HiOutlinePencil } from 'react-icons/hi';
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { QLAdmin } from 'types/manage-admin';
import QLAdminService, { AdminParams, StatusAdmin, StatusOptionsAdmin } from 'contexts/admin';

const DanhSachAdmin = () => {
  const columns = [
    { field: 'id', headerName: 'Stt', width: 70 },
    { field: 'name', headerName: 'Họ tên', width: 150 },
    { field: 'bod', headerName: 'Phòng ban quản lý', width: 190 },
    {
      field: 'phone',
      headerName: 'Số điện thoại',
      width: 180
    },
    {
      field: 'email',
      headerName: 'Email',
      sortable: true,
      width: 190
    },
    {
      field: 'gender',
      headerName: 'Giới tính',
      sortable: true,
      width: 140
    },
    {
      field: 'status',
      headerName: 'Trạng thái',
      sortable: true,
      width: 150
    },
    {
      field: 'action',
      headerName: '',
      width: 140,
      render: (text: string, record: any) => (
        <Button variant="contained" size="small" startIcon={<HiOutlinePencil className="mr-1 mb-1" />} autoFocus>
          Lưu
        </Button>
      )
    }
  ];

  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [status, setStatus] = useState<number>();

  const [dsAdmin, setDsAdmin] = useState<QLAdmin[]>([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getDsAdmin = async () => {
    try {
      const params: AdminParams = {
        search,
        status
      };
      const resp = await QLAdminService.getDsAdmin(params);
      console.log(12222, resp);

      setDsAdmin(resp?.data?.success?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDsAdmin();
  }, []);
  useEffect(() => {
    getDsAdmin();
  }, [status, search]);
  return (
    <>
      <MainCard
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h2">Quản lý Admin</Typography>
            <Button variant="contained" size="medium" startIcon={<HiPlus className="mr-1 mb-1" />} onClick={handleClickOpen}>
              Thêm mới
            </Button>
          </div>
        }
      >
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4}>
            <InputLabel style={{ color: 'black' }}>Tên quản lý</InputLabel>
            <TextField name="name" fullWidth autoFocus size="small" onChange={(e) => setSearch(e.target.value)} />
          </Grid>
          <Grid item xs={6} sm={4}>
            <InputLabel style={{ color: 'black' }}>Phòng ban quản lý</InputLabel>
            <TextField name="management" fullWidth autoFocus size="small" />
          </Grid>
          <Grid item xs={6} sm={4}>
            <InputLabel style={{ color: 'black' }}>Trạng thái</InputLabel>
            <Select
              name="status"
              fullWidth
              autoFocus
              size="small"
              // onChange={(value: StatusAdmin) => setStatus(value)}
              // options={StatusOptionsAdmin.map((stt) => ({
              //   label: stt.label,
              //   value: stt.value
              // }))}
            />
          </Grid>
        </Grid>
        <div style={{ marginTop: '20px', border: '1px solid #ddd', height: 400, width: 'auto' }}>
          <DataGrid rows={dsAdmin} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
      </MainCard>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Thêm mới Admin</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={24} sm={24}>
              <InputLabel style={{ color: 'black' }}>Tên quản lý</InputLabel>
              <TextField name="name1" fullWidth autoFocus size="small" />
            </Grid>
            <Grid item xs={24} sm={24}>
              <InputLabel style={{ color: 'black' }}>Phòng ban quản lý</InputLabel>
              <TextField name="bod1" fullWidth autoFocus size="small" />
            </Grid>
            <Grid item xs={24} sm={24}>
              <InputLabel style={{ color: 'black' }}>Trạng thái</InputLabel>
              <TextField name="status1" fullWidth autoFocus size="small" />
            </Grid>
            <Grid item xs={24} sm={24}>
              <InputLabel style={{ color: 'black' }}>Email</InputLabel>
              <TextField name="email" fullWidth autoFocus size="small" />
            </Grid>
            <Grid item xs={24} sm={24}>
              <InputLabel style={{ color: 'black' }}>Phone</InputLabel>
              <TextField name="phone" fullWidth autoFocus size="small" />
            </Grid>
            <Grid item xs={24} sm={24}>
              <InputLabel style={{ color: 'black' }}>Giới tính</InputLabel>
              <TextField name="gender" fullWidth autoFocus size="small" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            size="small"
            startIcon={<HiOutlineXCircle className="mr-1 mb-1" />}
            style={{ backgroundColor: 'gray' }}
            onClick={handleClose}
          >
            Hủy
          </Button>
          <Button variant="contained" size="small" startIcon={<HiOutlineNewspaper className="mr-1 mb-1" />} onClick={handleClose} autoFocus>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DanhSachAdmin;
