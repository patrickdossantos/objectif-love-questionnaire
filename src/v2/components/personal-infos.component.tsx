import { PersonalInfos, Situation } from '../../types.ts'
import { useRef, useState } from 'react'
import { SITUATIONS } from '../../constants.ts'
import { cn } from '../../utils.ts'

import couple from '../assets/couple.png'

type Props = {
  setPersonalInfos: (personalInfos: PersonalInfos) => unknown
}

const PersonalInfosHeader = () => (<>
  <div style={{textAlign: "justify", fontSize: "1rem"}} className="mb-3 fs-3 fw-bold">
    Ce qui suit pourrait bien changer la façon dont vous voyez vos relations. Prêt(e) ?
  </div>
  <div className="text-center mb-5">
    <img className="img-fluid ratio-16x9 w-50" alt="circle" src={couple} />
  </div>
  <div className="my-5 fw-bold">
    Avant de commencer, je rentre mes coordonn&eacute;es <span className="text-red">*</span>:
  </div>
</>)

export default function PersonalInfosComponent({ setPersonalInfos }: Props) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Situation | undefined>(undefined)
  const [errors, setErrors] = useState<string[]>([])

  const validate = () => {
    const isNameInvalid = !nameRef.current?.value.length
    const isEmailInvalid = (emailRef.current?.value ?? '').match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) === null
    const isNotAccepted = !acceptRef.current?.checked

    const errors: string[] = [
      isNameInvalid ? 'Le nom doit être rempli': '',
      isEmailInvalid ? "L'email n'est pas valide": '',
      isNotAccepted ? 'Veuillez accepter le traitement de vos données personnelles': ''
    ].filter((item) => item.length > 0);

    errors.length ? setErrors(errors): setPersonalInfos({ situation: status!, name: nameRef.current!.value, email: emailRef.current!.value })
  }


  return <form>
    <PersonalInfosHeader/>
    {
      errors.map((error) => (<div className="bg-red text-white mb-3 px-3 rounded" key={error}>{error}</div>))
    }
    <div className="input-group mb-3">
      <span className="input-group-text">Nom</span>
      <input type="text" className="form-control" placeholder="Prénom" ref={nameRef} defaultValue=""/>
    </div>
    <div className="input-group mb-3">
      <span className="input-group-text">Email</span>
      <input type="text" className="form-control" placeholder="Email" ref={emailRef} defaultValue=""/>
    </div>
    <div className="form-check my-5">
      <input className="form-check-input" type="checkbox" value="" id="acceptDataUsage" ref={acceptRef}/>
      <label className="form-check-label me-2" htmlFor="acceptDataUsage">
        J'accepte le traitement de mes données personnelles par Objectif Love.
      </label>
      <a href="https://objectif-love.com/conditions-de-service" target="_blank">En savoir plus</a>
    </div>
    <div className="fw-bold mb-3">Quelle est votre situation amoureuse aujourd'hui ?</div>
    <ul className="list-group mb-5">
      {
        SITUATIONS.map((situation) => {
          const isSelected = situation === status
          const classnames = cn({'list-group-item': true, 'bg-red': isSelected})
          return <li key={situation} className={classnames} onClick={() => setStatus(situation)}>{situation}</li>
        })
      }
    </ul>
    <div className="text-end">
      <button type="button" className="btn bg-red" onClick={() => validate()}>Commencer</button>
    </div>
  </form>
}
