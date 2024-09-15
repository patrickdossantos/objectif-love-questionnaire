import { ColorAttributes, ColorSpecificities } from '../../types.ts';

import circle from '../assets/circle.png'

type ColorProps = { attributes: ColorAttributes }
const ColorTextWrittenInItsColor = ({ attributes }: ColorProps) => {
  return <span style={{color: attributes.textColor}}>{ attributes.title }</span>
}

type Props = {
  colorSpecificities: ColorSpecificities
}
export default function LandingPageComponent({ colorSpecificities }: Props) {
  return (<>
    <h3 className="my-3 text-center fw-bold bg-red text-uppercase">Exclusif : 3 conseils par profil amoureux pour am&eacute;liorer vos relations amoureuses à la fin du test !</h3>
    <h5 className="text-center fw-bold">Et c'est offert ! Restez bien jusqu'au bout 😉</h5>
    <div className="text-center">
      <img className="img-fluid ratio-16x9 w-50" alt="circle" src={circle} />
    </div>
    <p style={{textAlign: 'justify'}}>
      Ce test de personnalit&eacute; est con&ccedil;u pour identifier votre profil amoureux parmi six options :
      &nbsp;<ColorTextWrittenInItsColor attributes={colorSpecificities['violet']} />,
      &nbsp;<ColorTextWrittenInItsColor attributes={colorSpecificities['bleu']} />,
      &nbsp;<ColorTextWrittenInItsColor attributes={colorSpecificities['vert']} />,
      &nbsp;<ColorTextWrittenInItsColor attributes={colorSpecificities['jaune']} />,
      &nbsp;<ColorTextWrittenInItsColor attributes={colorSpecificities['orange']} />,
      &nbsp;<ColorTextWrittenInItsColor attributes={colorSpecificities['rouge']} />.
    </p>
    <p style={{textAlign: 'justify'}}>
      Il explore les différentes dimensions de votre comportement et de vos préférences dans les relations amoureuses, couvrant des aspects tels que les émotions, la gestion des conflits, les qualités en couple, les peurs et la sexualité.
    </p>
  </>)
}
