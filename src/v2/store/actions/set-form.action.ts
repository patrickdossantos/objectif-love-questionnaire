import { AppState } from '../app.state.ts';
import { PersonalInfos } from '../../../types.ts';

export type SetFormAction = {
  type: '@form/set'
  form: PersonalInfos
}

export const SetFormType: SetFormAction['type'] = '@form/set';

export const reduceSetForm = (state: AppState, action: SetFormAction): AppState => ({
  ...state,
  step: 'questionnaire',
  currentQuestionIndex: 0,
  personalData: action.form,
})

export default (form: PersonalInfos): SetFormAction => ({ type: SetFormType, form })
