import { Color, ColorSpecificities, GroupByColor, PersonalInfos, Question } from '../../types.ts';

export type Step = 'landing' | 'infos' | 'questionnaire' | 'result'

export type AppState = {
  step: Step
  personalData: PersonalInfos | undefined
  currentQuestionIndex: number
  allQuestions: Question[]
  answers: (Color | undefined)[]
  count: GroupByColor<number>
  percentilePerAnswer: number
  colorSpecificities: ColorSpecificities
}
