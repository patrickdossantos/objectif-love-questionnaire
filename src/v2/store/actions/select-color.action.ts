import type { Color } from '../../../types.ts';
import { AppState } from '../app.state.ts';

export type SelectColorAction = {
  type: '@question/select-color';
  color: Color
}

export const ColorSelectionType: SelectColorAction['type'] = '@question/select-color';

export const reduceColorSelection = (state: AppState, action: SelectColorAction): AppState => {
  const currentIndex = state.currentQuestionIndex
  const _currentAnswers = [...state.answers]
  const currentValue = _currentAnswers[currentIndex]
  const _currentCount = { ...state.count };

  const percentile = state.percentilePerAnswer;

  if (currentValue) {
    // On doit retirer une réponse pour cette couleur
    _currentCount[currentValue] -= percentile;
  }
  // Quoi qu'il arrive, on ajoute une réponse pour la couleur sélectionnée
  _currentCount[action.color] += percentile;
  _currentAnswers[currentIndex] = action.color;

  return {
    ...state,
    answers: _currentAnswers,
    count: _currentCount,
  }
}

export default (color: Color): SelectColorAction => ({ type: '@question/select-color', color })
