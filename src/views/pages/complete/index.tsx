// THIRD-PARTY
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Stack, Grid, FormControl, Typography, MenuItem, Menu, useMediaQuery } from '@mui/material';
import { Formik } from 'formik';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// PROJECT IMPORTS
import MainCard from 'ui-component/cards/MainCard';
import { RootState } from 'store/index';
import { Candidates, SearchValues } from 'types/complete';
import { fetchCandidates, filter } from 'store/slices/complete';
import RankSelect from 'components/Common/RankSelect';
import SortStatus from 'views/pages/complete/SortStatus';
import CompleteList from './CompleteList';

const Complete = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const spacingMD = matchDownMD ? 1 : 1.5;

  const token = localStorage.getItem('serviceToken');
  const complete = useSelector((state: RootState) => state.complete);

  const [candidate, setCandidate] = useState<Candidates[]>(complete.data.list);
  const [anchorElSoft, setAnchorElSoft] = useState(null);
  const initialState: SearchValues = {
    search: '',
    rank: '',
    status: ''
  };
  const [filters, setFilters] = useState(initialState);

  const openSort = Boolean(anchorElSoft);

  const handleSearch = (values: SearchValues) => {
    const queryName = {
      search: values?.search?.trim(),
      rank: values?.rank
    };
    if (!values.search) {
      delete queryName.search;
    }
    if (!values.rank) {
      delete queryName.rank;
    }
    const params = queryName;
    dispatch(filter(params));
    dispatch(
      fetchCandidates({
        params,
        token
      })
    );
  };

  const handleSort = (event: any) => {
    setAnchorElSoft(event.currentTarget);
  };

  const handleCloseSort = () => {
    setAnchorElSoft(null);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: string | '') => {
    setFilters({ ...filters, status: index });
    setAnchorElSoft(null);
  };

  const renderSearchForm = () => {
    const sortLabel = SortStatus.filter((items) => items.value === filters.status);

    const filterRedux = complete.filter;
    return (
      <Formik
        initialValues={{
          search: '',
          rank: ''
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSearch(values);
          setSubmitting(false);
        }}
      >
        {({ handleBlur, handleChange, handleSubmit, isSubmitting, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={{ xl: 2, sx: 1 }}>
              <Grid item>
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={matchDownSM ? 0.5 : spacingMD}>
                  <FormControl size="small" sx={{ width: { xl: 236, md: 'auto', xs: 140 } }}>
                    <TextField
                      id="outlined-basic"
                      name="search"
                      value={values?.search}
                      label={<span>Name</span>}
                      fullWidth
                      size="small"
                      variant="outlined"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      inputProps={{}}
                    />
                  </FormControl>
                  <Typography sx={{ display: { xs: 'none', sm: 'flex' }, fontSize: '1rem', color: 'grey.500', fontWeight: 400 }}>
                    |
                  </Typography>

                  <FormControl size="small" sx={{ width: { xl: 236, md: 'auto', xs: 140 } }}>
                    <RankSelect blur={handleBlur} change={handleChange} values={values} />
                  </FormControl>

                  <Typography sx={{ display: { xs: 'none', sm: 'flex' }, fontSize: '1rem', color: 'grey.500', fontWeight: 400 }}>
                    |
                  </Typography>
                  <Stack direction="row" alignItems="center" justifyContent="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <Typography variant="h5">Sort by: </Typography>
                    <Button
                      id="demo-positioned-button"
                      aria-controls="demo-positioned-menu"
                      aria-haspopup="true"
                      aria-expanded={openSort ? 'true' : undefined}
                      onClick={handleSort}
                      sx={{ color: 'grey.500', fontWeight: 400 }}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      {sortLabel.length > 0 && sortLabel[0].label}
                    </Button>
                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorElSoft}
                      open={openSort}
                      onClose={handleCloseSort}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                    >
                      {SortStatus?.map((status, index) => (
                        <MenuItem
                          sx={{ p: 1.5 }}
                          key={index}
                          selected={status.value === filters.status}
                          onClick={(event) => handleMenuItemClick(event, status.value || '')}
                        >
                          {status.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    );
  };

  return (
    <>
      <MainCard title={renderSearchForm()}>
        <CompleteList />
      </MainCard>
    </>
  );
};

export default Complete;