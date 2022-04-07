// THIRD-PARTY
import { Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// PROJECT IMPORTS
import MainCard from 'ui-component/cards/MainCard';
import EmployeeForm from './employeeForm';
import QuestionList from './questionList/index';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { activeItem } from 'store/slices/menu';
import { useSelector } from 'store';

// const state = {
//   firstName: '',
//   lastName: '',
//   age: '',
//   email: '',
//   phone: '',
//   address: '',
//   notes: '',
//   applyPosition: [
//     {
//       position: '',
//       level: ''
//     }
//   ],
//   questionList: [
//     {
//       questionId: '',
//       question: ''
//     }
//   ],
//   interviewTime: ''
// };

const questionListData = [
  {
    type: 'Basic',
    questions: [
      {
        questionId: '1',
        question: 'What is your name?',
        answerScore: '',
        notes: ''
      },
      {
        questionId: '2',
        question: 'What is your age?',
        answerScore: '',
        notes: ''
      },
      {
        questionId: '3',
        question: 'Expected salary?',
        answerScore: '',
        notes: ''
      }
    ]
  },
  {
    type: 'React J1',
    questions: [
      {
        questionId: '4',
        question: 'What is ReactJS?',
        answerScore: '',
        notes: ''
      },
      {
        questionId: '5',
        question: 'What is Redux?',
        answerScore: '',
        notes: ''
      },
      {
        questionId: '6',
        question: 'What is J1?',
        answerScore: '',
        notes: ''
      },
      {
        questionId: '9',
        question: 'explain about React lifecycle?',
        answerScore: '',
        notes: ''
      }
    ]
  },
  {
    type: 'Advanced',
    questions: [
      {
        questionId: '7',
        question: 'How to increase performance?',
        answerScore: '',
        notes: ''
      },
      {
        questionId: '8',
        question: 'How to increase security?',
        answerScore: '',
        notes: ''
      }
    ]
  }
];

const AddApplicantReference = () => {
  const dispatch = useDispatch();
  const interviewQuestions = useSelector((state) => state.applicant.interviewQuestions);
  useEffect(() => {
    dispatch(activeItem(['applicant']));
  }, [dispatch]);
  return (
    <Box>
      <MainCard title="Applicant Reference Form" sx={{ margin: '1em 0' }}>
        <EmployeeForm />
      </MainCard>
      {interviewQuestions.length > 0 && (
        <>
          <MainCard title="Question List" sx={{ margin: '1em 0' }}>
            <QuestionList questionList={interviewQuestions} />
          </MainCard>
          <MainCard sx={{ margin: '1em 0' }}>
            <AnimateButton>
              <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
                Submit
              </Button>
            </AnimateButton>
          </MainCard>
        </>
      )}
    </Box>
  );
};

export default AddApplicantReference;
