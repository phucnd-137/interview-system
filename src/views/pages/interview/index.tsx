// THIRD-PARTY
import {
  Box,
  Button,
  TextareaAutosize,
  Stack,
  Typography,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Select,
  MenuItem,
  Chip,
  TableContainer
} from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';

// PROJECT IMPORTS
import personalDetail from './personalDetailGroup';
import tableColumns from './tableColumns';
import { useSelector } from 'store';
import { axiosPut } from 'utils/helpers/axios';
import { activeItem } from 'store/slices/menu';
import MainCard from 'ui-component/cards/MainCard';
import { handleAnswerStatus, handleInterviewNote, sortDataByKey } from 'store/slices/applicant/applicantReferences';
import { getInterviewDataThunk } from 'store/slices/applicant/applicantAsyncAction';
import InterviewDialog from './dialogMessage';

type personalKey = 'name' | 'email' | 'phone' | 'address' | 'age' | 'time';

interface ChipByTypeProps {
  type: 'base' | 'focus' | 'advanced';
}
const ChipByType = ({ type }: ChipByTypeProps) => {
  switch (type) {
    case 'base':
      return <Chip size="small" label="Base" sx={{ color: 'white', background: '#03a9f4' }} />;
    case 'focus':
      return <Chip size="small" label="Focus" sx={{ color: 'white', background: '#4caf50' }} />;
    case 'advanced':
      return <Chip size="small" label="Advanced" sx={{ background: '#f57f17', color: 'white' }} />;
    default:
      return null;
  }
};

const colorStatus = (status: number) => {
  switch (status) {
    case 2:
      return '#2196f3';
    case 0:
      return 'red';
    case 1:
      return 'green';
    default:
      return '#2196f3';
  }
};

const Interview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { applicantInfo, interviewQuestions } = useSelector((state) => state.applicant);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogMessage, setDialogMessage] = useState({
    rank: '',
    status: ''
  });
  const handleDialogOpen = (message: { rank: string; status: string }) => setDialogMessage(message);
  const handleDialogClose = () => setDialogMessage({ rank: '', status: '' });
  const dispatch = useDispatch();
  useEffect(() => {
    id && dispatch(getInterviewDataThunk(id));
    dispatch(activeItem(['interview']));
  }, [id, dispatch]);
  const getEvaluateValue = (candidate_id: number) => {
    const result = applicantInfo.questions && [...applicantInfo.questions].find((question) => question.question_id === candidate_id);
    return result && result.status;
  };

  const updateEvaluateValue = async (candidate_id: number, value: number) => {
    await dispatch(handleAnswerStatus({ id: candidate_id, status: value }));
  };

  const sendInterviewResult = async () => {
    await setIsSubmitting(true);
    const data = {
      ...applicantInfo,
      candidateQuestions: applicantInfo.questions,
      status: 1
    };
    await axiosPut(`${process.env.REACT_APP_API_URL}/v1/client/candidates/${id}`, data, 'Complete').then((res: any) => {
      const filterRank = res.message === 'advance' ? 'advanced' : 'focus';
      const questionInRank = res.success.candidate_question.find((element: any) => element.type === filterRank);
      const getRank = questionInRank.question.rank.name;
      handleDialogOpen({ rank: getRank, status: res.message || 'No message' });
    });
    setIsSubmitting(false);
  };

  return (
    <MainCard title={`Interview Applicant ${applicantInfo.name}`}>
      {applicantInfo.name ? (
        <>
          <Stack direction="column" spacing={4}>
            {personalDetail.map((group) => (
              <Stack direction="row" key={group.label}>
                {group.render.map((detail) => (
                  <Typography
                    variant="h4"
                    sx={{ width: `calc(100% / ${group.render.length})`, overflow: 'hidden', textOverflow: 'ellipsis' }}
                    key={detail.key}
                  >
                    {detail.label}:{' '}
                    <span style={{ fontWeight: 'initial', textTransform: 'capitalize', wordWrap: 'break-word' }}>
                      {detail.key === 'time'
                        ? moment(applicantInfo[detail.key as personalKey]).format('DD/MM/YYYY HH:mm')
                        : applicantInfo[detail.key as personalKey]}
                    </span>
                  </Typography>
                ))}
              </Stack>
            ))}
          </Stack>
          <Divider sx={{ marginTop: 6 }} />
          <Box
            sx={{
              maxHeight: '800px',
              overflow: 'hidden'
            }}
          >
            <TableContainer
              sx={{
                maxHeight: '600px',
                '&::-webkit-scrollbar': {
                  width: '5px'
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(100,100,100,0.5)',
                  borderRadius: '3px'
                }
              }}
            >
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {tableColumns.map((column) => (
                      <TableCell
                        key={column.name}
                        sx={column.sx}
                        onClick={() => {
                          column.sort_key &&
                            dispatch(sortDataByKey(column.sort_key as 'type' | 'status' | 'rank_id' | 'language_id' | 'question_content'));
                        }}
                      >
                        {column.name}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {interviewQuestions.map((question) =>
                    Object.keys(question.questions).map((key) =>
                      question.questions[key as 'base' | 'advanced' | 'focus'].map((item, itemIndex) => (
                        <TableRow
                          key={item.candidate_id}
                          sx={{
                            '&:hover': {
                              backgroundColor: '#f6f6f6'
                            }
                          }}
                        >
                          <TableCell align="center">{itemIndex + 1}</TableCell>
                          <TableCell sx={{ maxWidth: '350px', overflow: 'hidden', wordBreak: 'break-word' }}>
                            {item.question_content}
                          </TableCell>
                          <TableCell>{(item.language && item.language.name) || ''}</TableCell>
                          <TableCell>{(item.rank && item.rank.name) || ''}</TableCell>
                          <TableCell sx={{ color: item.type ? 'red' : '#2196f3' }}>
                            <ChipByType type={item.type as 'base' | 'focus' | 'advanced'} />
                          </TableCell>
                          <TableCell>
                            <Select
                              fullWidth
                              labelId="demo-simple-select-standard-label"
                              value={getEvaluateValue(item.candidate_id || 2)}
                              sx={{
                                '& .MuiSelect-standard': {
                                  color: colorStatus(Number(getEvaluateValue(item.candidate_id || 2)))
                                }
                              }}
                              id="demo-simple-select-standard"
                              label="Age"
                              variant="standard"
                              onChange={(e) => updateEvaluateValue(item.candidate_id || 0, Number(e.target.value))}
                            >
                              <MenuItem value={0} sx={{ color: 'red' }}>
                                Fail
                              </MenuItem>
                              <MenuItem value={1} sx={{ color: 'green' }}>
                                Pass
                              </MenuItem>
                              <MenuItem value={2} sx={{ color: '#2196f3' }}>
                                Skip
                              </MenuItem>
                            </Select>
                          </TableCell>
                        </TableRow>
                      ))
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box marginTop={6}>
            <TextareaAutosize
              name="note"
              onChange={(e) => dispatch(handleInterviewNote(e.target.value))}
              value={applicantInfo.note}
              aria-label="minimum height"
              minRows={3}
              placeholder="Note"
              style={{ width: '100%', minHeight: '24px', padding: '8px', fontFamily: 'roboto', fontSize: '14px', resize: 'vertical' }}
            />
          </Box>
          <Box marginTop={6}>
            <AnimateButton>
              <Button
                disableElevation
                disabled={isSubmitting}
                onClick={sendInterviewResult}
                fullWidth
                size="large"
                variant="contained"
                color="primary"
              >
                Send Result
              </Button>
            </AnimateButton>
          </Box>
          {dialogMessage.status && <InterviewDialog message={dialogMessage} handleClose={handleDialogClose} />}
        </>
      ) : (
        <Typography variant="h4">No data</Typography>
      )}
    </MainCard>
  );
};

export default Interview;
