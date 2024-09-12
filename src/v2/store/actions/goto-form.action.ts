import { AppState } from '../app.state.ts';

export type GotoFormAction = {
  type: '@navigation/landing';
}

export const GotoFormType: GotoFormAction['type'] = '@navigation/landing';

export const reduceGotoForm = (state: AppState): AppState => ({
  ...state,
  step: 'infos',
})

export default (): GotoFormAction => ({ type: GotoFormType })
