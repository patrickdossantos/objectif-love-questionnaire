import type { Questionnaire, ColorSpecificities } from "./types.ts";

export const colorSpecificities: ColorSpecificities = {
  jaune: {
    title: "Jaune – L'explorateur",
    textColor: "hsl(60,100%,40%)",
    description: {
      heartUrl: "https://app.evalandgo.com/files/img_user/admin_550602/Capture%20d%E2%80%99e%CC%81cran%202024-06-18%20a%CC%80%2010_33_06(2).png",
      advises: [
        {
          title: "Créez des moments de stabilité",
          content: "Intégrez des rituels réguliers ou des traditions dans votre relation pour apporter un peu de stabilité tout en maintenant l’excitation. Ces moments peuvent être aussi simples que des soirées spéciales ou des projets communs.",
        },
        {
          title: "Engagez-vous progressivement",
          content: "Au lieu de vous lancer dans des engagements importants de manière brusque, procédez par étapes pour vous sentir plus à l’aise avec la stabilité. Cela peut aider à concilier votre besoin de liberté avec des aspects plus durables.",
        },
        {
          title: "Discutez de l’avenir",
          content: "Prenez le temps d’aborder les sujets concernant l’avenir de votre relation avec votre partenaire. Une communication ouverte sur vos visions et vos attentes aidera à aligner vos objectifs tout en gardant l’aventure vivante.",
        },
      ],
      behaviorInLove: "Vous voyez l'amour comme une aventure excitante à vivre sans contraintes. Toujours en quête de nouveauté, vous aimez les surprises et les découvertes, et vous avez besoin de liberté pour vous épanouir pleinement dans une relation. Pour vous, l'amour doit être stimulant et dynamique, et la routine est l'une de vos plus grandes peurs. Vous êtes constamment à la recherche de nouvelles expériences et vous aimez insuffler du dynamisme dans votre couple, en explorant ensemble de nouveaux horizons.",
      relationshipStrength: "Votre enthousiasme, votre optimisme et votre spontanéité sont contagieux. Vous apportez une énergie positive dans votre relation, rendant chaque moment ensemble joyeux et mémorable. Votre ouverture d'esprit et votre soif de découverte encouragent votre partenaire à sortir de sa zone de confort et à explorer de nouvelles perspectives. Vous créez une relation riche en expériences partagées, où chaque jour est une nouvelle aventure.",
      relationshipWeakness: "Votre besoin constant de nouveauté peut parfois vous empêcher de vous engager pleinement sur le long terme. Vous craignez la routine et l'ennui, ce qui peut vous rendre distant(e) ou superficiel(le) dans vos relations. Vous avez tendance à éviter les discussions profondes sur l'avenir de votre couple, préférant vous concentrer sur l'instant présent. Apprendre à trouver un équilibre entre votre soif d'aventure et les aspects plus stables de l'amour vous permettra de construire une relation durable et épanouissante.",
    }
  },
  rouge: {
    title: "Rouge – Le Leader",
    textColor: "hsl(0,100%,50%)",
    description: {
      heartUrl: "https://app.evalandgo.com/files/img_user/admin_550602/Capture%20d%E2%80%99e%CC%81cran%202024-06-18%20a%CC%80%2010_30_54.png",
      advises: [
        {
          title: "Pratiquez le lâcher-prise",
          content: "Essayez de déléguer certaines décisions à votre partenaire, même si elles vous semblent mineures. Cela renforcera l'équilibre dans la relation et vous permettra de vous détendre davantage.",
        },
        {
          title: "Cultivez la patience",
          content: "La prochaine fois que vous vous sentez frustré ou impatient, prenez une pause. Respirez profondément et rappelez-vous que chaque personne avance à son propre rythme. Apprendre à accepter les imperfections peut renforcer votre relation.",
        },
        {
          title: "Communiquez avec douceur",
          content: "Exprimez vos attentes clairement, mais de manière douce. Encouragez également votre partenaire à partager ses besoins et ses ressentis. Un dialogue ouvert et respectueux aidera à réduire les tensions liées au contrôle.",
        },
      ],
      behaviorInLove: "Vous êtes passionné(e), déterminé(e) et aimez prendre les choses en main dans votre relation amoureuse. Pour vous, l'amour est un engagement sérieux qui nécessite structure et direction. Vous avez un instinct protecteur et un désir de guider la relation vers un avenir solide et sécurisant. Vous aimez définir des objectifs clairs pour votre couple et n'avez pas peur des défis qui peuvent renforcer votre lien. Votre leadership se manifeste par votre capacité à prendre des décisions importantes et à orienter la relation selon vos normes élevées.",
      relationshipStrength: "Votre charisme et votre ambition inspirent confiance et sécurité chez votre partenaire. Vous êtes prêt(e) à affronter les obstacles avec courage, et votre détermination vous permet de surmonter les difficultés qui se présentent. Vous êtes un(e) partenaire sur lequel on peut compter, toujours prêt(e) à protéger et à défendre votre relation. Votre force de caractère et votre capacité à prendre les rênes font de vous un pilier solide pour votre couple.",
      relationshipWeakness: "Votre besoin de contrôle peut parfois se traduire par un comportement autoritaire, ce qui peut créer des tensions avec votre partenaire. Vous avez tendance à être impatient(e) et à avoir du mal à accepter les imperfections, que ce soit les vôtres ou celles de votre partenaire. Cela peut rendre la relation exigeante. Apprendre à lâcher prise et à accepter que tout ne soit pas toujours parfait pourrait vous aider à créer une relation plus équilibrée et épanouissante.",
    },
  },
  orange: {
    title: "Orange – Le Conciliateur",
    textColor: "hsl(30,100%,50%)",
    description: {
      heartUrl: "https://app.evalandgo.com/files/img_user/admin_550602/Capture%20d%E2%80%99e%CC%81cran%202024-06-18%20a%CC%80%2010_31_14.png",
      advises: [
        {
          title: "Exprimez vos besoins",
          content: "N’hésitez pas à partager vos propres désirs et besoins avec votre partenaire. Une communication honnête permet de prévenir l’accumulation de ressentiments et favorise un équilibre dans la relation.",
        },
        {
          title: "Fixez des limites",
          content: "Apprenez à établir des limites saines au fur et à mesure pour préserver votre bien-être tout en continuant à être attentif(ve) aux besoins de votre partenaire. Protéger votre espace personnel est crucial pour éviter le sentiment de frustration.",
        },
        {
          title: "Affrontez les petits conflits",
          content: "Plutôt que d'éviter les désaccords, essayez de les aborder dès qu'ils se présentent. Résoudre les petits conflits au fur et à mesure permet d'éviter que des tensions ne s'accumulent. Cela peut même renforcer votre relation en la rendant plus authentique.",
        },
      ],
      behaviorInLove: "Vous recherchez avant tout l'harmonie et la paix dans votre relation amoureuse. Vous êtes prêt(e) à faire des compromis et à mettre de côté vos propres désirs pour maintenir une atmosphère sereine et équilibrée. Pour vous, l'amour est un espace de refuge, où vous pouvez vous sentir en sécurité et apaisé(e). Vous avez un grand sens de l'écoute et vous faites tout pour satisfaire les besoins de votre partenaire, évitant autant que possible les conflits. Votre priorité est de préserver la stabilité et l'équilibre dans votre couple, même si cela signifie sacrifier vos propres envies.",
      relationshipStrength: "Votre douceur, votre compréhension et votre diplomatie font de vous un(e) partenaire précieux(se) et apprécié(e). Vous savez désamorcer les conflits avant qu'ils ne prennent de l'ampleur, grâce à votre capacité à écouter sans juger et à offrir un soutien inconditionnel. Vous créez une relation harmonieuse et stable, où votre partenaire se sent écouté(e) et respecté(e). Votre empathie et votre sens du compromis permettent de construire une relation équilibrée et sans tension.",
      relationshipWeakness: "Votre tendance à éviter les conflits peut entraîner une accumulation de ressentiments non exprimés, ce qui peut affecter la relation à long terme. En mettant toujours les besoins de l'autre en avant, vous risquez de vous oublier vous-même, ce qui peut mener à de la frustration et à un sentiment de ne pas être pleinement valorisé(e). Apprendre à affirmer vos besoins et à exprimer vos émotions vous aidera à maintenir une relation saine et épanouissante pour vous-même aussi.",
    },
  },
  violet: {
    title: "Violet – Le Penseur Rêveur",
    textColor: "hsl(270, 100%, 60%)",
    description: {
      heartUrl: "https://app.evalandgo.com/files/img_user/admin_550602/Capture%20d%E2%80%99e%CC%81cran%202024-06-18%20a%CC%80%2010_34_17.png",
      advises: [
        {
          title: "Ancrez vos rêves dans la réalité :",
          content: "Essayez d’équilibrer vos pensées profondes avec des actions concrètes. En partageant vos rêves et aspirations de manière pratique avec votre partenaire, vous pouvez les intégrer dans votre vie commune.",
        },
        {
          title: "Partagez vos réflexions :",
          content: "Exprimez régulièrement vos pensées et émotions à votre partenaire. Une communication ouverte et honnête permet d’éviter les malentendus et de renforcer la compréhension mutuelle. Equilibrez introspection et interaction. Accordez-vous du temps pour vous ressourcer dans vos pensées, mais veillez à ne pas vous isoler trop longtemps. Planifiez des activités qui permettent de mêler réflexion et interaction, comme des discussions philosophiques ou des projets créatifs communs.",
        },
        {
          title: "Soyez présent :",
          content: "Faites un effort pour vous connecter au quotidien avec votre partenaire. En équilibrant vos moments d’introspection avec des activités partagées, vous renforcez votre lien et évitez de vous éloigner dans vos pensées.",
        },
      ],
      behaviorInLove: "Vous êtes un(e) romantique introspectif(ve), en quête d'une connexion profonde et significative. Vous voyez l'amour comme un voyage intérieur, où les échanges intellectuels et émotionnels jouent un rôle central. Pour vous, l'amour est un espace d'exploration, où vous cherchez à comprendre les complexités des relations humaines à un niveau profond. Vous êtes souvent plongé(e) dans vos pensées, cherchant à décoder les mystères de l'amour et à en découvrir les significations les plus subtiles.",
      relationshipStrength: "Votre créativité, votre sensibilité et votre attention aux détails émotionnels apportent une profondeur unique à votre relation. Vous enrichissez la relation d'une dimension artistique et poétique, créant des moments spéciaux et mémorables avec votre partenaire. Votre sens de l'esthétique et votre vision romantique font de l'amour une expérience presque transcendante, où chaque échange devient une expression de vos pensées et émotions les plus intimes.",
      relationshipWeakness: "Votre tendance à vous perdre dans vos rêveries peut parfois vous éloigner des réalités quotidiennes de la relation. Vous pouvez être difficile à comprendre pour un(e) partenaire plus pragmatique, et votre besoin d'introspection peut créer de la distance dans la relation. Il est important de trouver un équilibre entre votre monde intérieur riche et la réalité partagée avec votre partenaire pour maintenir une connexion profonde et réelle.",
    },
  },
  bleu: {
    title: "Bleu – Le Perfecteur",
    textColor: "hsl(210,100%,50%)",
    description: {
      heartUrl: "https://app.evalandgo.com/files/img_user/admin_550602/Capture%20d%E2%80%99e%CC%81cran%202024-06-18%20a%CC%80%2010_33_50.png",
      advises: [
        {
          title: "Adoptez une approche flexible",
          content: "Essayez de rester ouvert(e) aux imprévus et aux changements. Accepter que certaines choses ne se déroulent pas toujours comme prévu peut alléger la pression et améliorer la fluidité de votre relation.",
        },
        {
          title: "Canalisez votre perfectionnisme",
          content: "Concentrez-vous sur l’essentiel et acceptez les imperfections. Reconnaître que personne n’est parfait et que la relation peut être enrichie par ses défauts peut contribuer à un climat plus détendu. Essayez de voir les imperfections comme des opportunités de croissance, plutôt que des échecs. Cultiver la flexibilité peut aider à alléger la pression que vous ressentez pour que tout soit parfait.",
        },
        {
          title: "Exprimez vos émotions positives",
          content: "Accordez plus d'importance aux émotions et à la communication émotionnelle. Cela vous aidera à mieux comprendre votre partenaire et à créer une connexion plus profonde, au-delà des aspects pratiques de la relation. Montrez votre gratitude et reconnaissez les efforts de votre partenaire. Des expressions régulières d’appréciation renforcent la confiance et la satisfaction mutuelle dans la relation.",
        },
      ],
      behaviorInLove: "Vous abordez l'amour avec rigueur et organisation, cherchant à structurer votre relation de manière efficace. Pour vous, l'amour est un projet qui nécessite une planification minutieuse et des objectifs clairs. Vous valorisez la stabilité, la loyauté et la fidélité, et vous vous concentrez sur la création d'une relation durable basée sur des fondations solides. Votre approche méthodique et disciplinée assure que votre couple reste sur une voie claire et prévisible, ce qui peut être rassurant pour votre partenaire.",
      relationshipStrength: "Vous êtes un(e) partenaire fiable et méthodique, capable de construire une relation stable et bien planifiée. Votre sens du devoir et votre loyauté font de vous un(e) partenaire de confiance, sur qui on peut compter pour le long terme. Vous excellez dans l'organisation de la vie commune, veillant à ce que tout soit en ordre et fonctionnel. Votre capacité à anticiper les besoins de la relation et à y répondre avec efficacité renforce la stabilité et la sécurité de votre couple.",
      relationshipWeakness: "Votre besoin de perfection et de contrôle peut parfois rendre la relation rigide. Vous avez tendance à être critique, tant envers vous-même qu'envers votre partenaire, et cela peut créer des tensions. Vous pouvez avoir du mal à gérer les imprévus ou les moments d'incertitude émotionnelle, préférant les éviter ou les minimiser. Apprendre à relâcher votre besoin de contrôle et à accepter les imperfections vous aidera à créer une relation plus fluide et équilibrée.",
    },
  },
  vert: {
    title: "Vert – Le Donneur",
    textColor: "hsl(120,100%,40%)",
    description: {
      heartUrl: "https://app.evalandgo.com/files/img_user/admin_550602/Capture%20d%E2%80%99e%CC%81cran%202024-06-18%20a%CC%80%2010_33_20.png",
      advises: [
        {
          title: "Écoutez vos propres besoins",
          content: "Prenez le temps d’écouter et de répondre à vos propres besoins et désirs. Assurez-vous de ne pas vous oublier dans le processus de donner aux autres, afin de maintenir un équilibre sain dans la relation.",
        },
        {
          title: "Exprimez vos sentiments",
          content: "N’hésitez pas à partager vos émotions et vos besoins avec votre partenaire. Une communication ouverte sur ce que vous ressentez et ce que vous attendez peut prévenir les frustrations et renforcer votre connexion.",
        },
        {
          title: "Fixez des limites saines",
          content: "Apprenez à dire non. Évitez de vous sacrifier au point de vous oublier. Posez des limites pour vous assurer que la relation reste équilibrée, avec un échange réciproque de soins et d'attention.",
        },
      ],
      behaviorInLove: "Vous êtes généreux(se) et altruiste, trouvant votre bonheur dans celui de votre partenaire. Pour vous, l'amour consiste à donner sans compter et à vous dévouer pleinement à l'autre. Vous aimez prendre soin de votre relation en anticipant les besoins de votre partenaire et en créant un environnement affectueux et sécurisant. Vous valorisez les gestes d'attention et vous êtes toujours prêt(e) à offrir votre soutien, quelle que soit la situation. Pour vous, l'amour est un échange où l'autre passe avant tout.",
      relationshipStrength: "Votre bienveillance et votre dévouement créent un environnement chaleureux et sécurisant pour votre partenaire. Vous êtes attentif(ve) aux besoins de l'autre et vous faites tout pour les satisfaire, renforçant ainsi le lien émotionnel entre vous. Votre amour inconditionnel et votre capacité à anticiper les désirs de votre partenaire font de vous un(e) partenaire attentionné(e) et apprécié(e). Vous êtes une véritable source de réconfort et de soutien dans la relation.",
      relationshipWeakness: "Votre tendance à vous oublier dans la relation peut parfois mener à des frustrations. En mettant constamment les besoins de votre partenaire en avant, vous risquez de négliger vos propres désirs et de vous sentir épuisé(e) ou non reconnu(e). Il est essentiel de trouver un équilibre entre donner et recevoir, et de prendre soin de vous-même tout autant que de votre partenaire. Cela vous permettra de maintenir une relation saine et épanouissante pour vous deux.",
    },
  },
}

export const questionnaire: Questionnaire = [
  {
    motivation: <></>,
    label: "1- Comment vous sentez-vous lorsque vous tombez amoureux(se) de quelqu'un ?",
    answers: {
      jaune: "Je me sens enthousiaste et plein de joie.",
      rouge: "Je me sens stimulé et déterminé.",
      violet: "Je me sens distant et passionné.",
      orange: "Je me sens serein et détendu.",
      bleu: "Je me sens enthousiaste et anxieux.",
      vert: "Je me sens attentionné et aimant.",
    },
  },
  {
    motivation: <></>,
    label: "2- Dans une relation amoureuse, qu'est-ce qui est le plus important pour vous ?",
    answers: {
      bleu: "La loyauté et la confiance.",
      vert: "Le don de soi et la réciprocité.",
      jaune: "Le plaisir et l'aventure.",
      violet: "La profondeur émotionnelle et intellectuelle.",
      orange: "L'harmonie et la paix.",
      rouge: "Le respect et l'accomplissement de chacun.",
    },
  },
  {
    motivation: <div style={{textAlign: "justify", fontSize: "1rem"}} className="mb-5">
      <h2 className="fw-bold">
        <span>💡</span>
        <span className="text-red">Saviez-vous que les relations &agrave; long terme augmentent votre esp&eacute;rance de vie ?</span>
      </h2>
      <h3 className="fw-bold">Continuez pour découvrir votre profil amoureux !</h3>
    </div>,
    label: "3- Comment gérez-vous les conflits dans une relation ?",
    answers: {
      rouge: "Je mets les pieds dans le plat, quitte à faire des étincelles.",
      bleu: "Je cherche à les résoudre de manière juste et logique.",
      violet: "Je peux avoir besoin de temps et de réflexion avant de parler des problèmes.",
      vert: "Je préfère les éviter. Mais si je dois m'exprimer, je le fais !",
      jaune: "Je préfère minimiser la situation et me focaliser sur le positif.",
      orange: "Je fais tout pour les éviter.",
    },
  },
  {
    motivation: <></>,
    label: "4- Qu'est-ce qui peut rapidement vous agacer dans une relation ?",
    answers: {
      orange: "Le conflit et les tensions constant(e)s.",
      bleu: "Le manque de fiabilité et l'irresponsabilité.",
      vert: "L'égoïsme et l'indifférence.",
      jaune: "La monotonie et le manque d'aventure.",
      rouge: "Le manque d'ambition et de détermination.",
      violet: "Le manque de profondeur et de connexion.",
    },
  },
  {
    motivation: <></>,
    label: "5- Quel est, selon vous, vos meilleures qualités en couple ?",
    answers: {
      vert: "Mon amour débordant et mon côté attentionné.",
      orange: "Ma patience et mon calme.",
      jaune: "Mon enthousiasme et ma joie de vivre.",
      rouge: "Ma détermination et ma capacité à stimuler.",
      violet: "Ma richesse émotionnelle et intellectuelle.",
      bleu: "Ma loyauté et mon sens de la responsabilité.",
    },
  },
  {
    motivation: <></>,
    label: "6- Quel est votre mode d'expression de l'Amour ?",
    answers: {
      jaune: "Je planifie des sorties et des moments de plaisir.",
      orange: "Je créé un environnement harmonieux et serein.",
      bleu: "Montrer mon engagement et partager mon discernement.",
      vert: "Je prends soin de l'Autre et je suis tout disponible.",
      rouge: "Je n'hésite pas à sortir les grands moyens et à soutenir ma moitié.",
      violet: "Je partage mes pensées et mes émotions les plus profond(e)s.",
    },
  },
  {
    motivation: <></>,
    label: "7- Quelle est votre plus grande peur dans la relation ?",
    answers: {
      rouge: "Être dévalorisé et négligé.",
      violet: "Me sentir banal et incompris.",
      orange: "Me perdre à travers l'autre.",
      bleu: "Être trahi ou déçu.",
      vert: "Être ignoré ou pris pour acquis.",
      jaune: "Être privé de liberté et m'ennuyer.",
    },
  },
  {
    motivation: <></>,
    label: "8- Comment vous comportez-vous lorsque vous vous sentez négligé par votre partenaire ?",
    answers: {
      bleu: "Je cherche à comprendre ce qui ne va pas et je critique.",
      vert: "Je redouble d'attention et d'Amour en attendant qu'il/elle revienne.",
      jaune: "Je cherche des distractions et je compense le manque.",
      violet: "Je me recentre et réfléchis à la situation.",
      orange: "Je m'efforce de rester stable, avec patience et compréhension.",
      rouge: "Je cherche à attirer l'attention sur moi et j'aborde le sujet.",
    },
  },
  {
    motivation: <></>,
    label: "9- Comment réagissez-vous face aux changements dans votre relation ?",
    answers: {
      rouge: "Je m'adapte rapidement et je tire le meilleur parti de la situation.",
      bleu: "Je reste prudent. J'analyse le pour et le contre.",
      violet: "Je cherche à profondément à comprendre ce que cela signifie pour nous.",
      vert: "Je m'adapte en me focalisant sur les besoins de mon/ma partenaire.",
      jaune: "Je suis enthousiaste à l'idée de faire de nouvelles expériences.",
      orange: "Je cherche à m'adapter en douceur et avec harmonie.",
    },
  },
  {
    motivation: <></>,
    label: "10- Comment maintenir l'intérêt et l'excitation sur le long terme ?",
    answers: {
      orange: "En avançant avec calme et sérénité.",
      bleu: "En travaillant constamment sur la relation, de façon ouverte et honnête.",
      vert: "En montrant mon amour de différentes manières.",
      jaune: "En se renouvelant et en cherchant la nouveauté constamment.",
      rouge: "En se fixant des objectifs communs avec un rythme dynamique.",
      violet: "Le manque de profondeur et de connexion.",
    },
  },
  {
    motivation: <div style={{textAlign: "justify", fontSize: "1rem"}} className="mb-5 fs-3 fw-bold">
      <span className="text-red">Les &eacute;tudes montrent que comprendre son style amoureux am&eacute;liore les relations.</span>
      &nbsp;<span>Vous êtes sur la bonne voie !</span><span>✨</span>
    </div>,
    label: "11- Qu'est-ce qui vous attire chez un/votre partenaire ?",
    answers: {
      vert: "Sa réciprocité.",
      orange: "Son humour et sa stabilité.",
      jaune: "Sa richesse intérieur.",
      rouge: "Sa disponibilité.",
      violet: "Sa confiance en elle/lui.",
      bleu: "Sa fiabilité.",
    },
  },
  {
    motivation: <></>,
    label: "12- Quelle est votre façon de montrer votre soutien à votre partenaire ?",
    answers: {
      bleu: "Je suis à l'écoute et donne des conseils très avisés.",
      vert: "Je montre mon empathie et mon investissement à ses cotés.",
      jaune: "J'essaie d'apporter de la joie et de la légèreté.",
      violet: "J'offre une écoute attentive et l'emmène dans des réflexions profondes.",
      orange: "Je suis présent, calme et à l'écoute.",
      rouge: "Je soutiens mon partenaire en l'encourageant de façon solide.",
    },
  },
  {
    motivation: <></>,
    label: "13- Comment réagissez-vous lorsque vous êtes jaloux ?",
    answers: {
      jaune: "J'essaie de minimiser et trouve d'autres points d'intérêts.",
      rouge: "Mon égo me dit de ne rien montrer. Mais je peux être affecté et vulnérable.",
      violet: "Je m'isole pendant quelques temps pour entrer en introspection.",
      orange: "Je préfère ignorer la jalousie et reste calme.",
      bleu: "Je tente de rationaliser les fondements de mon ressenti. J'ouvre un dialogue franc.",
      vert: "Je mets en avant mes plus belles qualités et je redouble d'attention.",
    },
  },
  {
    motivation: <></>,
    label: "14- Qu'est-ce qui vous rend le plus heureux en Amour ?",
    answers: {
      jaune: "Les aventures partagées.",
      rouge: "Les réussites de notre union.",
      violet: "Les moments de connexion profonde.",
      orange: "Être aimé pour qui je suis vraiment.",
      bleu: "La confiance et la sécurité.",
      vert: "Me sentir apprécié pour ce que je fais.",
    },
  },
  {
    motivation: <></>,
    label: "15- Comment gérer-vous le stress dans votre relation ?",
    answers: {
      bleu: "Je m'efforce de rester pragmatique et organisé.",
      vert: "J'aide d'abord l'autre à réduire son stress. Cela m'aide aussi.",
      jaune: "J'essaie d'esquiver et de m'amuser malgré tout.",
      violet: "Je prends du recul pour ne pas me laisser absorber par la situation.",
      orange: "Je tente de rester calme et de trouver des compromis.",
      rouge: "Je réagis vite et bien.",
    },
  },
  {
    motivation: <></>,
    label: "16- Quelle est votre plus grande faiblesse en tant que partenaire ?",
    answers: {
      rouge: "J'ai des difficultés à me canaliser et à lâcher-prise.",
      bleu: "J'ai besoin d'avoir du contrôle et je peux être critique.",
      violet: "Mon manque de communication et ma tendance au repli.",
      vert: "J'ai tendance à m'oublier en voulant trop donner.",
      jaune: "Ma peur de l'engagement et de l'ennui.",
      orange: "Ma tendance à être trop passif(ve).",
    },
  },
  {
    motivation: <>
      <div style={{textAlign: "justify", fontSize: "1rem"}} className="mb-5 fs-3 fw-bold">
        <span>🚀</span>
        <span>Vous y êtes presque !!</span>
      </div>
      <div style={{textAlign: "justify", fontSize: "1rem"}} className="mb-5 fs-3">
        <div className="text-red fw-bold">Le saviez-vous ? L'ocytocine, appel&eacute;e "hormone de l'amour", renforce les liens affectifs.</div>
        <div className="fst-italic">Quand vous êtes amoureux, votre corps libère de l'ocytocine, ce qui vous rend encore plus connecté à votre partenaire.</div>
      </div>
    </>,
    label: "17- Comment décririez-vous votre style de communication dans le couple ?",
    answers: {
      jaune: "Enjoué et spontané.",
      orange: "Stable et posé.",
      bleu: "Clair et direct.",
      vert: "Chaleureux et attentionné.",
      rouge: "Franc et assertif.",
      violet: "Raisonnable et profond.",
    },
  },
  {
    motivation: <></>,
    label: "18- Dans votre sexualité, vous êtes plutôt à l'écoute de... ?",
    answers: {
      bleu: "La performance du rapport.",
      vert: "Des besoins de mon partenaire.",
      jaune: "La diversité et la fréquence des rapports.",
      violet: "La connexion avec mon partenaire.",
      orange: "Des prises d'initiatives de mon partenaire.",
      rouge: "Mon propre plaisir avant tout.",
    },
  },
  {
    motivation: <>
      <div style={{textAlign: "justify", fontSize: "1rem"}} className="mb-5 fs-3 fw-bold">
        <span>🎉</span>
        <span className="text-red">Presque terminé ! Plus que 2 réponses pour tout découvrir.</span>
      </div>
      <div style={{textAlign: "justify", fontSize: "1rem"}} className="mb-5 fs-3 fw-bold">
        <span>😍</span>
        <span>Le saviez-vous ?</span>&nbsp;
        <span className="text-red">Les couples qui communiquent ouvertement sur leur personnalit&eacute; et leur fonctionnement sont plus &eacute;panouis.</span>
      </div>
    </>,
    label: "19- Quel rôle joue la famille dans votre relation amoureuse ?",
    answers: {
      rouge: "La famille peut être un grand soutien. Je fixe cependant des limites claires contre l'ingérence.",
      bleu: "La famille est importante. Il faut composer avec chacun des membres et s'inclure les uns les autres.",
      violet: "J'apprécie la connexion avec la famille, mais je m'efforce de protéger notre intimité de couple.",
      vert: "Je me dévoue à ma famille, surtout aux personnes en situation compliquée. J'inclue mon partenaire dans ma vie familiale.",
      orange: "Je m'efforce de maintenir l'harmonie entre la famille et la relation amoureuse. Je veille à ce que chacun s'entende bien.",
      jaune: "J'aime que nous passions de bons moments ensemble. Sans contraintes et avec légèreté.",
    },
  },
  {
    motivation: <></>,
    label: "20- Quelle importance accordez-vous aux projets futurs dans votre relation ?",
    answers: {
      orange: "Je préfère me concentrer sur le présent plutôt que sur des plans à long terme.",
      bleu: "Les projets futurs sont essentiels ; Ils donnent un sens à notre relation.",
      vert: "Les projets futurs sont importants, mais je m'assure qu'ils respectent nos besoins individuels.",
      jaune: "J'aime avoir des objectifs communs, mais je vis aussi au jour le jour.",
      rouge: "Je suis motivé par les projets futurs ; ils dynamisent notre couple.",
      violet: "Je suis ouvert aux projets futurs, mais je privilégie une approche flexible.",
    },
  },
]
