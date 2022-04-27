// THIRD-PARTY
import AddIcon from '@mui/icons-material/AddTwoTone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MainCard from 'ui-component/cards/MainCard';
import React, { useCallback, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SortStatus from 'views/pages/questions/SortStatus';
import {
  Button,
  Fab,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// PROJECT IMPORTS
import Question from 'views/pages/questions/Question';
import { useDispatch, useSelector, RootState } from 'store';
import { getQuestionsList } from 'store/slices/question';
import { QuestionType, QuestionFilter } from 'types/question';
import AddQuestion from './AddQuestion';
import { gridSpacing } from 'store/constant';
import RankFilters from 'ui-component/CommonFilters/RankFilters';
import DepartmentFilters from 'ui-component/CommonFilters/DepartmentFilters';
import LanguageFilters from 'ui-component/CommonFilters/LanguageFilters';

const initialState: QuestionFilter = {
  search: '',
  status: '',
  rank_id: '',
  department_id: '',
  language_id: '',
  currentPage: 1
};

const Questions = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const spacingMD = matchDownMD ? 1 : 1.5;

  const questionState = useSelector((state: RootState) => state.question);
  const [data, setData] = React.useState<QuestionType[]>([]);

  const [filter, setFilter] = useState(initialState);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const openSort = Boolean(anchorEl);

  useEffect(() => {
    setData(questionState.questions);
  }, [questionState]);

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setFilter({ ...filter, currentPage: page! });
  };

  const handleSearch = async (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
    const newString = event?.target.value;
    setFilter({ ...filter, search: newString! });
  };

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortStatusClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: any) => {
    setFilter({ ...filter, status: index });
    setAnchorEl(null);
  };

  const sortLabel = SortStatus.filter((items) => items.value === filter.status);

  const filterData = async () => {
    await dispatch(getQuestionsList(filter));
  };

  const handleDrawerOpen = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  const addQuestion = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  // rank
  const [anchorElRank, setAnchorElRank] = useState(null);
  const handleRank = (event: any) => {
    setAnchorElRank(event.currentTarget);
  };

  const handleCloseRank = () => {
    setAnchorElRank(null);
  };

  const handleRankClick = (index: number | string) => {
    setFilter({ ...filter, rank_id: index });
    setAnchorElRank(null);
  };
  // rank-end

  // department
  const [anchorElDepartment, setAnchorElDepartment] = useState(null);
  const handleDepartment = (event: any) => {
    setAnchorElDepartment(event.currentTarget);
  };

  const handleCloseDepartment = () => {
    setAnchorElDepartment(null);
  };

  const handleDepartmentClick = (index: number | string) => {
    setFilter({ ...filter, department_id: index });
    setAnchorElDepartment(null);
    console.log(index);
  };
  // department

  // Language
  const [anchorElLanguage, setAnchorElLanguage] = useState(null);
  const handleLanguage = (event: any) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleCloseLanguage = () => {
    setAnchorElLanguage(null);
  };

  const handleLanguageClick = (index: number | string) => {
    setFilter({ ...filter, language_id: index });
    setAnchorElLanguage(null);
    console.log(121, index);
  };
  // language
  return (
    <MainCard
      title={
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Grid container alignItems="center" justifyContent="space-between" spacing={matchDownMD ? 0.5 : 2}>
              <Grid item>
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={matchDownSM ? 0.5 : spacingMD}>
                  <TextField
                    sx={{ width: { xs: 140, md: '250px' } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon fontSize="small" />
                        </InputAdornment>
                      )
                    }}
                    value={filter.search}
                    placeholder="Search...."
                    size="small"
                    onChange={handleSearch}
                  />

                  <Typography sx={{ display: { xs: 'none', sm: 'flex' }, fontSize: '1rem', color: 'grey.500', fontWeight: 400 }}>
                    |
                  </Typography>
                  <Stack direction="row" alignItems="center" justifyContent="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <Typography variant="h5" style={{ width: '50px' }}>
                      Sort by:{' '}
                    </Typography>
                    <Button
                      id="demo-positioned-button"
                      aria-controls="demo-positioned-menu"
                      aria-haspopup="true"
                      aria-expanded={openSort ? 'true' : undefined}
                      onClick={handleClickListItem}
                      sx={{ color: 'grey.500', fontWeight: 400 }}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      {sortLabel.length > 0 && sortLabel[0].label}
                    </Button>
                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={openSort}
                      onClose={handleSortStatusClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                    >
                      {SortStatus.map((status, index) => (
                        <MenuItem
                          sx={{ p: 1.5 }}
                          key={index}
                          selected={status.value === filter.status}
                          onClick={(event) => handleMenuItemClick(event, status.value)}
                        >
                          {status.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Stack>

                  <RankFilters
                    filters={filter}
                    anchorElRank={anchorElRank}
                    handleRank={handleRank}
                    handleCloseRank={handleCloseRank}
                    handleRankClick={handleRankClick}
                  />
                  <DepartmentFilters
                    filters={filter}
                    anchorElDepartment={anchorElDepartment}
                    handleDepartment={handleDepartment}
                    handleCloseDepartment={handleCloseDepartment}
                    handleDepartmentClick={handleDepartmentClick}
                  />
                  <LanguageFilters
                    filters={filter}
                    anchorElLanguage={anchorElLanguage}
                    handleLanguage={handleLanguage}
                    handleCloseLanguage={handleCloseLanguage}
                    handleLanguageClick={handleLanguageClick}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
            <Tooltip title="Add">
              <Fab
                color="primary"
                size="small"
                onClick={addQuestion}
                sx={{ boxShadow: 'none', ml: 1, width: 32, height: 32, minHeight: 32 }}
              >
                <AddIcon fontSize="small" />
              </Fab>
            </Tooltip>
          </Grid>
        </Grid>
      }
      content={false}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 3 }}>#</TableCell>
              <TableCell>Question Content</TableCell>
              <TableCell>Rank</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center" sx={{ pr: 3 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ '& th,& td': { whiteSpace: 'nowrap' } }}>
            {data && data.map((question, index) => <Question key={question.id} question={question} index={index} />)}
          </TableBody>
        </Table>
        <AddQuestion open={openDrawer} handleDrawerOpen={handleDrawerOpen} />
      </TableContainer>
      <Grid item xs={12} sx={{ p: 3 }}>
        <Grid container justifyContent="space-between" spacing={gridSpacing}>
          <Grid item>
            <Pagination count={questionState.pageCount} page={questionState.currentPage} onChange={handleChange} color="primary" />
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Questions;