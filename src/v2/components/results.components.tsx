import { ColorAttributes, ColorSpecificities, GroupByColor } from '../../types.ts';
import { useState } from 'react';
import { COLORS } from '../../constants.ts';

type SortResult = { percentile: number, title: string }
const ColorResultComponent = ({ title, percentile }: SortResult) => {
  return <>
    <div className="progress mb-3 position-relative" style={{height: "50px"}}>
      <div style={{height: "50px", color: "black", top: "50%", right: "50%"}}
           className="fw-bold progress-text percentile-result">{title}: {percentile}%
      </div>
      <div className="progress-bar bg-red" role="progressbar" aria-valuenow={percentile} aria-valuemin={0}
           aria-valuemax={100} style={{width: `${percentile}%`}}></div>
    </div>
  </>
}

type ColorDescriptionProps = { attribute: ColorAttributes }
const ColorDescriptionComponent = ({ attribute }: ColorDescriptionProps) => {
  const { description } = attribute;
  const [isCollapsed, setCollapsed] = useState(true)

  return isCollapsed
    ? <button className="rounded w-100 mb-3" onClick={() => setCollapsed(!isCollapsed)}>Cliquez pour voir son descriptif</button>
    : <>
      <div className="mb-5">
        <h2 className="text-center mb-5" style={{color: attribute.textColor}}>{attribute.title}</h2>
        <div className="fw-bold">Fonctionnement en amour</div>
        <p style={{textAlign: 'justify'}}>{description.behaviorInLove}</p>
        <div className="fw-bold">Forces en relation amoureuse</div>
        <p style={{textAlign: 'justify'}}>{description.relationshipStrength}</p>
        <div className="fw-bold">Zones de difficult&eacute; et de challenge</div>
        <p style={{textAlign: 'justify'}}>{description.relationshipWeakness}</p>
      </div>
      {
        !description.advises.length ? <></> :
          <div className="mb-5">
            <div style={{color: attribute.textColor}} className="fs-3 mb-3">{description.advises.length} conseils pour am&eacute;liorer vos
              relations amoureuses
            </div>
            {
              description.advises.map((advise, i) => (
                <div key={`${attribute.textColor}-advice-${i}`}>
                  <div className="mb-3 fw-bold">{i + 1}. {advise.title}</div>
                  <div className="mb-3">{advise.content}</div>
                </div>
              ))
            }
            <button className="rounded w-100 mb-3" onClick={() => setCollapsed(!isCollapsed)}>Cliquez pour fermer le descriptif</button>
          </div>
      }
    </>
}

type Props = {
  percentilePerColor: GroupByColor<number>
  colorSpecificities: ColorSpecificities
}

export default function ResultsComponent({ percentilePerColor, colorSpecificities }: Props) {
  return <>
    <h3 className="mb-5 text-center">Bravo !</h3>
    <h2 className="mb-5 text-center">Voici vos r&eacute;sultats</h2>
    {
      COLORS.map((color) => {
        const percentile = percentilePerColor[color]

        return (<div key={color}>
          <ColorResultComponent title={colorSpecificities[color].title} percentile={percentile}/>
          <ColorDescriptionComponent attribute={colorSpecificities[color]} />
        </div>)
      })
    }
  </>
}
