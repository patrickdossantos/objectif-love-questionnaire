import { useReducer } from 'react';
import { initialState, reducer } from './store/use-app-state.reducer.ts'

import QuestionComponent from './components/question.component.tsx'
import HeaderComponent from './components/header.component.tsx'
import ResultsComponent from './components/results.components.tsx'
import LandingPageComponent from './components/landing-page.component.tsx'
import PersonalInfosComponent from './components/personal-infos.component.tsx'

import createSelectionAction from './store/actions/select-color.action.ts'
import createNextAction from './store/actions/next.action.ts'
import createGotoFormAction from './store/actions/goto-form.action.ts'
import createSetFormAction from './store/actions/set-form.action.ts'
import createGotoResultsAction from './store/actions/goto-results.action.ts'

import { saveContact } from './app.service.ts'

const ComponentToDisplay = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  switch(state.step) {
    case 'infos':
      return (<>
        <HeaderComponent/>
        <PersonalInfosComponent setPersonalInfos={async (infos) => {
          dispatch(createSetFormAction(infos))
          await saveContact(infos);
        }} />
      </>)
    case 'landing':
      return (<>
        <HeaderComponent/>
        <LandingPageComponent colorSpecificities={state.colorSpecificities}/>
        <div className="text-end">
          <button className="btn bg-red" onClick={() => dispatch(createGotoFormAction())}>Commencer</button>
        </div>
      </>)
    case 'result':
      return (<>
        <HeaderComponent/>
        <ResultsComponent percentilePerColor={state.count} colorSpecificities={state.colorSpecificities} />
      </>)
    case 'questionnaire': {
      const currentIndex = state.currentQuestionIndex
      const currentQuestion = state.allQuestions[currentIndex]
      const percentile = state.currentQuestionIndex * 100 / state.allQuestions.length
      const height = "30px"

      const next = currentIndex === state.allQuestions.length - 1 ? createGotoResultsAction() : createNextAction()

      return <>
        <HeaderComponent>
          <div className="progress mb-3 position-relative" style={{height}}>
            <div style={{height, color: "black", top: "50%", right: "50%"}}
                 className="fw-bold progress-text questionnaire-advance">
              {state.currentQuestionIndex}/{state.allQuestions.length}
            </div>
            <div className="progress-bar bg-red" role="progressbar" aria-valuenow={state.currentQuestionIndex} aria-valuemin={0}
                 aria-valuemax={state.allQuestions.length} style={{width: `${percentile}%`}}></div>
          </div>
        </HeaderComponent>
        <QuestionComponent
          question={currentQuestion}
          selectColor={(color) => {
            dispatch(createSelectionAction(color))
            dispatch(next)
          }}
          key={currentIndex}
        />
      </>
    }
  }
}

const AppComponent = () => {
  return (<div className="container">
    <ComponentToDisplay/>
  </div>)
}

export default AppComponent
