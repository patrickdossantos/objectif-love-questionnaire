import { Color, Question } from '../../types.ts';
import { cn } from '../../utils.ts';

type Props = {
  question: Question
  selectedColor: Color | undefined
  selectColor: (color: Color) => unknown
  onPrevious: () => unknown
  onNext: () => unknown
};

export default function QuestionComponent({ question, onPrevious, onNext, selectColor, selectedColor }: Props) {
  return (
    <>
      { question.motivation }
      <h3 className="mb-5">{question.label}</h3>
      <ul className="list-group mb-5">
        {
          Object.entries(question.answers).map(([color, label]) => {
            const thisColor = color as Color
            const isSelected = thisColor === selectedColor
            const classnames = cn({'list-group-item': true, 'bg-red': isSelected})

            return <li key={color} className={classnames} onClick={() => selectColor(thisColor)}>{label}</li>
          })
        }
      </ul>
      <div className="d-flex justify-content-between">
        <button className="btn bg-red" onClick={() => onPrevious()}>Précédent</button>
        {selectedColor ? <button className="btn bg-red" onClick={() => onNext()}>Suivant</button> :
          <span></span>}
      </div>
    </>
  )
}
