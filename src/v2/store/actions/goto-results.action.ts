import { AppState } from '../app.state.ts';

export type GotoResultsAction = {
  type: '@navigation/results';
}

export const GotoResultsType: GotoResultsAction['type'] = '@navigation/results';

export const reduceGotoResults = (state: AppState): AppState => ({
  ...state,
  step: 'result',
})

export default (): GotoResultsAction => ({ type: GotoResultsType })
