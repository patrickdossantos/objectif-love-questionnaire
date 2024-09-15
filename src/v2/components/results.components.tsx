import { ColorAttributes, ColorSpecificities, GroupByColor } from '../../types.ts';
import { COLORS } from '../../constants.ts';

type SortResult = { percentile: number, title: string }
const ColorResultComponent = ({ title, percentile }: SortResult) => (<>
  <div className="progress mb-3 position-relative" style={{height: "50px"}}>
    <div style={{height: "50px", color: "black", top: "50%", right: "50%"}}
         className="fw-bold progress-text percentile-result">{title}: {percentile}%
    </div>
    <div className="progress-bar bg-red" role="progressbar" aria-valuenow={percentile} aria-valuemin={0}
         aria-valuemax={100} style={{width: `${percentile}%`}}></div>
  </div>
</>)

type ColorDescriptionProps = { attribute: ColorAttributes }
const ColorDescriptionComponent = ({ attribute }: ColorDescriptionProps) => (<>
  <div className="mb-5">
    <h2 className="text-center mb-5" style={{color: attribute.textColor}}>{attribute.title}</h2>
    <div className="fw-bold">Fonctionnement en amour</div>
    <p style={{textAlign: 'justify'}}>{attribute.description.behaviorInLove}</p>
    <div className="fw-bold">Forces en relation amoureuse</div>
    <p style={{textAlign: 'justify'}}>{attribute.description.relationshipStrength}</p>
    <div className="fw-bold">Zones de difficult&eacute; et de challenge</div>
    <p style={{textAlign: 'justify'}}>{attribute.description.relationshipWeakness}</p>
  </div>
  {
    !attribute.description.advises.length ? <></> :
      <div className="mb-5">
        <div style={{color: attribute.textColor}} className="fs-3 mb-3">{attribute.description.advises.length} conseils pour am&eacute;liorer vos
          relations amoureuses
        </div>
        {
          attribute.description.advises.map((advise, i) => (
            <div key={`${attribute.textColor}-advice-${i}`}>
              <div className="mb-3 fw-bold">{i + 1}. {advise.title}</div>
              <div className="mb-3">{advise.content}</div>
            </div>
          ))
        }
      </div>
  }
</>)

const HeaderComponent = () => (<>
  <h3 className="mb-5 text-center">Bravo !</h3>
  <h2 className="mb-5 text-center">Voici vos r&eacute;sultats</h2>
  <img className="img-fluid w-100 my-5" alt="Resultats"
       src="https://app.evalandgo.com/files/img_user/admin_550602/people-gf4565b6bd_1920(1).jpg" />
</>)

type FooterType = {
  colorSpecificities: ColorSpecificities
}
const FooterComponent = ({ colorSpecificities }: FooterType) => (<>
  <p className="fs-3 fw-bold mt-5">Prenez en compte vos 3 couleurs principales. Ce sont elles qui d&eacute;terminent
    votre personnalit&eacute;.</p>
  <p className="fs-3 text-center fw-bold">Qui sont les 6 profils amoureux ?</p>
  {
    COLORS.map((color) =>
      (<ColorDescriptionComponent attribute={colorSpecificities[color]} key={color}/>))
  }
  <div className="fw-bold mb-3">F&eacute;licitations pour avoir d&eacute;couvert votre profil amoureux ! 🎉</div>
  <div>
    Vous avez maintenant une meilleure compr&eacute;hension de votre personnalit&eacute; amoureuse. Mais pourquoi
    s'arr&ecirc;ter l&agrave; ?
  </div>
  <br/><br/>
  <div>💡 Vous souhaitez aller plus loin ?</div>

  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100">
        <img
          src="https://app.evalandgo.com/files/img_user/admin_550602/Capture%20d%E2%80%99e%CC%81cran%202024-09-05%20a%CC%80%2011_26_45.png"
          className="card-img-top buy-more" alt="..."/>
        <div className="card-body">
          <p className="card-text">
            Explorez en profondeur votre profil pour mieux comprendre vos comportements et désirs amoureux.
            Apprenez à vous aimer pour être mieux aimé(e).
          </p>
        </div>
        <div className="card-footer">
          <a href="https://objectif-love.com/connaissance-de-soi" target="_parent"
             className="btn-link bg-red d-block text-decoration-none py-1 text-center">Acc&eacute;der</a>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img
          src="https://app.evalandgo.com/files/img_user/admin_550602/Capture%20d%E2%80%99e%CC%81cran%202024-09-05%20a%CC%80%2011_26_55(1).png"
          className="card-img-top buy-more" alt="..."/>
        <div className="card-body">
          <p className="card-text">
            Découvrez avec qui vous êtes vraiment compatible.
            Identifiez les forces et défis dans vos relations pour bâtir une histoire d'amour solide et épanouissante.
          </p>
        </div>
        <div className="card-footer">
          <a href="https://objectif-love.com/compatibilites-amoureuses" target="_parent"
             className="btn-link bg-red d-block text-decoration-none py-1 text-center">Acc&eacute;der</a>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img
          src="https://app.evalandgo.com/files/img_user/admin_550602/Capture%20d%E2%80%99e%CC%81cran%202024-09-05%20a%CC%80%2011_27_11.png"
          className="card-img-top buy-more" alt="..."/>
        <div className="card-body">
          <p className="card-text">
            Offrez-vous ou &agrave; votre partenaire un moment unique gr&acirc;ce &agrave; nos coffrets cadeaux remplis
            de
            surprises pour renforcer votre complicit&eacute; et pimenter votre relation.
          </p>
        </div>
        <div className="card-footer">
          <a href="https://objectif-love.com/coffrets-cadeaux" target="_parent"
             className="btn-link bg-red d-block text-decoration-none py-1 text-center">Acc&eacute;der</a>
        </div>
      </div>
    </div>
  </div>
</>)

type Props = {
  percentilePerColor: GroupByColor<number>
  colorSpecificities: ColorSpecificities
}

export default function ResultsComponent({percentilePerColor, colorSpecificities}: Props) {
  return <>
    <HeaderComponent/>
    {
      COLORS.map((color) =>
        (<ColorResultComponent title={colorSpecificities[color].title} percentile={percentilePerColor[color]}
                               key={color}/>))
    }
    <FooterComponent colorSpecificities={colorSpecificities}/>
  </>
}
