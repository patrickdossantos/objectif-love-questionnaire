import { Reducer } from 'react'

import type { AppState } from './app.state.ts'
import { questionnaire, colorSpecificities } from '../../index.content.tsx'

import { SelectColorAction, reduceColorSelection, ColorSelectionType } from './actions/select-color.action.ts'
import { NextPageAction, reduceNextPage, NextPageType } from './actions/next.action.ts'
import { GotoFormAction, reduceGotoForm, GotoFormType } from './actions/goto-form.action.ts'
import { SetFormAction, reduceSetForm, SetFormType } from './actions/set-form.action.ts'
import { GotoResultsAction, reduceGotoResults, GotoResultsType } from './actions/goto-results.action.ts'

export type Actions = SelectColorAction | NextPageAction | GotoFormAction | SetFormAction | GotoResultsAction

export const initialState: AppState = {
  step: 'landing',
  personalData: undefined,
  allQuestions: questionnaire,
  colorSpecificities,
  answers: questionnaire.map(() => undefined),
  percentilePerAnswer: 100 / questionnaire.length,
  currentQuestionIndex: 0,
  count: {
    bleu: 0,
    violet: 0,
    orange: 0,
    rouge: 0,
    jaune: 0,
    vert: 0,
  }
}

const assertEmpty = (item: never): never => {
  throw `Not implemented :${item}`
}

export const reducer: Reducer<AppState, Actions> = (appState: AppState, action: Actions) => {
  const { type } = action
  switch (type) {
    case ColorSelectionType:
      return reduceColorSelection(appState, action)
    case NextPageType:
      return reduceNextPage(appState)
    case GotoFormType:
      return reduceGotoForm(appState)
    case SetFormType:
      return reduceSetForm(appState, action)
    case GotoResultsType:
      return reduceGotoResults(appState)

    default:
      return assertEmpty(type)
  }
}
