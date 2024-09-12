import { PersonalInfos, Situation } from '../../types.ts';
import { useCallback, useState } from 'react';
import { SITUATIONS } from '../../constants.ts';
import { cn } from '../../utils.ts';

type Props = {
  setPersonalInfos: (personalInfos: PersonalInfos) => unknown
  previousValue: PersonalInfos | undefined
}

export default function PersonalInfosComponent({ setPersonalInfos, previousValue }: Props) {
  const [name, setName] = useState(previousValue?.name ?? '')
  const [email, setEmail] = useState(previousValue?.email ?? '')
  const [status, setStatus] = useState<Situation | undefined>(previousValue?.situation)
  const [errors, setErrors] = useState<string[]>([])

  const validate = useCallback(() => {
    const isNameInvalid = !name.length
    const isEmailInvalid = email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) === null
    const isStatusInvalid = typeof status === 'undefined'

    const errors: string[] = [
      isNameInvalid ? 'Le nom doit être rempli': '',
      isEmailInvalid ? "L'email n'est pas valide": '',
      isStatusInvalid ? 'Veuillez renseigner votre situation amoureuse': '',
    ].filter((item) => item.length > 0);

    errors.length ? setErrors(errors): setPersonalInfos({ situation: status!, name, email })
  }, [name, email, status, setErrors, setPersonalInfos]);


  return <form>
    <div className="input-group mb-3">
      <span className="input-group-text">Email</span>
      <input type="text" className="form-control" placeholder="Email"
             value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div className="input-group mb-3">
      <span className="input-group-text">Nom</span>
      <input type="text" className="form-control" placeholder="Prénom"
             value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    <div className="fw-bold mb-3">Quelle est votre situation amoureuse aujourd'hui ?</div>
    <ul className="list-group mb-5">
      {
        SITUATIONS.map((situation) => {
          const isSelected = situation === status
          const classnames = cn({'list-group-item': true, 'bg-red': isSelected})
          return <li key={situation} className={classnames} onClick={() => setStatus(situation)}>{ situation }</li>
        })
      }
    </ul>
    {
      errors.map((error) => (<div className="bg-red text-white mb-3 px-3 rounded" key={error}>{error}</div>))
    }
    <div className="text-end">
      <button type="button" className="btn bg-red" onClick={() => validate()}>Commencer</button>
    </div>
  </form>
}
