import { PersonalInfos, Situation } from '../../types.ts';
import { useRef, useState } from 'react';
import { SITUATIONS } from '../../constants.ts';
import { cn } from '../../utils.ts';

type Props = {
  setPersonalInfos: (personalInfos: PersonalInfos) => unknown
  previousValue: PersonalInfos | undefined
}

const PersonalInfosHeader = () => (<>
  <div style={{textAlign: "justify", fontSize: "1rem"}} className="mb-3 fs-3 fw-bold">
    Ce qui suit pourrait bien changer la façon dont vous voyez vos relations. Prêt(e) ?
  </div>
  <div className="text-center mb-5">
    <img className="img-fluid ratio-16x9 w-50" alt="circle"
         src="https://app.evalandgo.com/files/img_user/admin_550602/Capture%20d%E2%80%99e%CC%81cran%202024-07-08%20a%CC%80%2015_02_08(1).png"/>
  </div>
</>)

export default function PersonalInfosComponent({setPersonalInfos, previousValue}: Props) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Situation | undefined>(previousValue?.situation)
  const [errors, setErrors] = useState<string[]>([])

  const validate = () => {
    const isNameInvalid = !nameRef.current?.value.length
    const isEmailInvalid = (emailRef.current?.value ?? '').match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) === null
    const isStatusInvalid = typeof status === 'undefined'
    const isNotAccepted = !acceptRef.current?.checked

    const errors: string[] = [
      isNameInvalid ? 'Le nom doit être rempli': '',
      isEmailInvalid ? "L'email n'est pas valide": '',
      isStatusInvalid ? 'Veuillez renseigner votre situation amoureuse': '',
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
      <span className="input-group-text">Email</span>
      <input type="text" className="form-control" placeholder="Email" ref={emailRef} defaultValue={previousValue?.email} />
    </div>
    <div className="input-group mb-3">
      <span className="input-group-text">Nom</span>
      <input type="text" className="form-control" placeholder="Prénom" ref={nameRef} defaultValue={previousValue?.name} />
    </div>
    <div className="form-check my-5">
      <input className="form-check-input" type="checkbox" value="" id="acceptDataUsage" ref={acceptRef} />
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
