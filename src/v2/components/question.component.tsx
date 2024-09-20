import type { Color, Question } from '../../types.ts'

type Props = {
  question: Question
  selectColor: (color: Color) => unknown
};

export default function QuestionComponent({ question, selectColor }: Props) {
  return (
    <>
      { question.motivation }
      <h3 className="mb-5">{question.label}</h3>
      <ul className="list-group mb-5">
        {
          Object.entries(question.answers)
            .map(([color, label]) => <li key={color} className="list-group-item" onClick={() => selectColor(color as Color)}>{label}</li>)
        }
      </ul>
    </>
  )
}
