import { AppState } from '../app.state.ts';

export type PreviousPageAction = {
  type: '@question/previous';
}

export const PreviousPageType: PreviousPageAction['type'] = '@question/previous';

export const reducePreviousPage = (state: AppState): AppState => ({ ...state, currentQuestionIndex: state.currentQuestionIndex - 1 })

export default (): PreviousPageAction => ({ type: PreviousPageType })
