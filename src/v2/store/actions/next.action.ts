import { AppState } from '../app.state.ts';

export type NextPageAction = {
  type: '@question/next';
}

export const NextPageType: NextPageAction['type'] = '@question/next';

export const reduceNextPage = (state: AppState): AppState => ({ ...state, currentQuestionIndex: state.currentQuestionIndex + 1 })

export default (): NextPageAction => ({ type: NextPageType })
