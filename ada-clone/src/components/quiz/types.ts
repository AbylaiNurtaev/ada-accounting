export const TOTAL_STEPS = 3

export type QuizFormState = {
  projectDescription: string
  goals: string
  contactName: string
  contactEmail: string
  contactPhone: string
}

export const initialQuizFormState = (): QuizFormState => ({
  projectDescription: 'МАРКЕТИНГОВОЕ АГЕНТСТВО',
  goals: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
})
