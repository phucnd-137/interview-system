// PROJECT IMPORTS
import { ApplicantDataInterface, ApplicantInfo, ReferenceEvaluate } from 'types/applicantData';
import { ResponseInterviewQuestion, InterviewQuestions } from 'types/interviewQuestion';
import { axiosGet, axiosPost } from 'utils/helpers/axios';
import { QuestionType } from 'types/question';
// THIRD-PARTY
import { createSlice } from '@reduxjs/toolkit';

const initialState: ApplicantDataInterface = {
  applicantInfo: {
    name: '',
    age: '',
    email: '',
    phone: '',
    address: '',
    time: `${new Date().toISOString().split('T')[0]}T09:00`,
    applyPosition: [
      {
        rank_advanced_id: '',
        language_id: '',
        rank_id: ''
      }
    ],
    questions: [],
    note: ''
  },
  interviewQuestions: [],
  questions: []
};

const applicantReferences = createSlice({
  name: 'applicantReferences',
  initialState,
  reducers: {
    applicantInit: () => initialState,
    setApplicantInfo(state, action: { payload: { applicant: ApplicantInfo; questions: QuestionType[] } }) {
      state.interviewQuestions = action.payload.questions;
      state.applicantInfo = action.payload.applicant;
      state.applicantInfo.questions = [];
      action.payload.questions.forEach((question) => {
        state.applicantInfo.questions && question.id && state.applicantInfo.questions.push({ question_id: question.id });
      });
      // state.applicantInfo = action.payload.applicant;
      // const questions = action.payload.questions.map((element) => Object.keys(element).map((key) => [...element[key]])).flat(2);
      // state.applicantInfo.questions = [];
      // questions.forEach((question) => {
      //   state.applicantInfo.questions && question.id && state.applicantInfo.questions.push({ question_id: question.id });
      // });
      // state.applicantInfo.questions = applicantInterviewQuestion;
    },
    setInterviewData(
      state,
      action: {
        payload: {
          applicant: ApplicantInfo;
          interviewQuestions: QuestionType[];
          questions: Array<{
            question_id: number;
            status?: string | number | undefined;
          }>;
        };
      }
    ) {
      state.applicantInfo = action.payload.applicant;
      state.interviewQuestions = action.payload.interviewQuestions;
      state.applicantInfo.questions = action.payload.questions;
    },
    // setReferenceEvaluate(state, action: { payload: ReferenceEvaluate }) {
    //   Object.assign(state, { referenceEvaluate: action.payload });
    // },
    setQuestions(state, action: { payload: InterviewQuestions[] }) {
      const questions = action.payload.map((element) => Object.keys(element).map((key) => [...element[key]])).flat(2);
      state.questions = questions;
    },
    questionsInit(state) {
      state.questions = [];
    },
    deleteInterviewQuestions(state, action: { payload: { questionType: string; id: number } }) {
      // const { questionType, id } = action.payload;
      // const newInterviewQuestions = state.interviewQuestions.map((element) => {
      //   element.questions[questionType] = element.questions[questionType].filter((question) => question.id !== id);
      //   return element;
      // });
      // state.interviewQuestions = newInterviewQuestions;
    },
    addInterviewQuestions(state, action: { payload: { questionType: string; language: string; question: QuestionType } }) {
      // const { questionType, question } = action.payload;
      // const isExisted = state.interviewQuestions.some((element) => element.questions[questionType].some((item) => item.id === question.id));
      // if (!isExisted) {
      //   state.interviewQuestions[0].questions[questionType].push(question);
      //   state.questions = state.questions.filter((element) => element.id !== question.id);
      // }
    },
    handleAnswerStatus(state, action: { payload: { id: number; status: number | string } }) {
      const { id, status } = action.payload;
      state.applicantInfo.questions?.forEach((element) => {
        if (element.question_id === id) {
          element.status = status;
        }
      });
      state.interviewQuestions.forEach((element) => {
        if (element.candidate_id === id) {
          element.status = status;
        }
      });
    }
    //   handleInterviewQuestionNotes(state, action: { payload: { id: string; notes: string } }) {
    //     const { id, notes } = action.payload;
    //     state.interviewQuestions.map((item) => {
    //       item.questions.map((question) => {
    //         if (question.id === id) {
    //           question.notes = notes;
    //         }
    //         return question;
    //       });
    //       return item;
    //     });
    //   }
  }
});

export default applicantReferences.reducer;

export const {
  applicantInit,
  addInterviewQuestions,
  deleteInterviewQuestions,
  handleAnswerStatus,
  // handleInterviewQuestionNotes,
  setApplicantInfo,
  setInterviewData,
  // setReferenceEvaluate,
  setQuestions,
  questionsInit
} = applicantReferences.actions;

// ASYNC ACTIONS

export const applicantAPI = {
  applicantReferenceInit: (applicantId: string) =>
    axiosGet<ApplicantDataInterface>(`${process.env.REACT_APP_FAKE_API_URL}/applicant/reference/${applicantId}`),
  getQuestionsThunk: (language_id: number, rank_id: number) =>
    axiosPost<ResponseInterviewQuestion>(`${process.env.REACT_APP_API_URL}/v1/client/questions/candidate`, {
      data: [{ rank_advanced_id: rank_id, language_id, rank_id }]
    }),
  getInterviewQuestionThunk: (params: {
    data: Array<{
      language_id: string | number;
      rank_id: string | number;
      rank_advanced_id: string | number;
    }>;
  }) => axiosPost<ResponseInterviewQuestion>(`${process.env.REACT_APP_API_URL}/v1/client/questions/candidate`, params, 'Success'),
  getReferenceEvaluateThunk: (applicantInfo: ApplicantDataInterface) =>
    axiosPost<ReferenceEvaluate>(`${process.env.REACT_APP_FAKE_API_URL}/referenceEvaluate`, applicantInfo),
  getInterviewDataThunk: (id: string | number) => axiosGet<any>(`${process.env.REACT_APP_API_URL}/v1/client/candidates/${id}`)
};