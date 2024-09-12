import type { PropsWithChildren } from 'react';

export default function HeaderComponent({ children }: PropsWithChildren) {
  return (<>
    <h3 className="my-3 text-center fw-bold">Vous voulez connaître votre</h3>
    <h2 className="my-3 text-center fw-bold">profil amoureux ?</h2>
    <h2 className="my-3 text-center fw-bold text-secondary" style={{ fontFamily: 'Lobster', fontWeight: "400" }}>
      <span>🌟</span> Faites le test gratuit <span>🌟</span>
    </h2>
    <div className="d-flex justify-content-between">
      <img className="img-fluid" alt="objectif love" style={{height: "auto", width: "150px"}}
           src="https://app.evalandgo.com/files/img_user/admin_550602/443712290_27570834549229584_7720344591814806486_n.jpg" />
      <div style={{margin: "auto 0"}}>
        <div className="text-red fw-bold fs-3">Quel(s) profil(s) amoureux êtes-vous ?</div>
        {children}
      </div>
    </div>
  </>)
}
