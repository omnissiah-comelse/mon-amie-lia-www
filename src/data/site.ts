export const siteConfig = {
  name: "Mon Amie Lia",
  tagline: "Aide aux devoirs IA, cadrée pour les familles.",
  description:
    "Lia aide les 10–14 ans à comprendre, réviser et s'entraîner après l'école, avec supervision parentale et résumés utiles pour la maison.",
};

export const navLinks = [
  { label: "Pourquoi Lia", href: "#why-lia" },
  { label: "Comparatif", href: "#comparison" },
  { label: "Aperçu produit", href: "#preview" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Cadre parental", href: "#guardrails" },
] as const;

export const heroChecks = [
  "Pensé pour les 10–14 ans et les devoirs du quotidien.",
  "Guide étape par étape au lieu de servir la réponse finale.",
  "Donne aux parents une vue hebdomadaire simple et utile.",
] as const;

export const heroStats = [
  {
    value: "10–14 ans",
    label: "cœur de cible V1, avec des usages scolaires concrets",
  },
  {
    value: "Chaque soir",
    label: "disponible sans rendez-vous quand un exercice bloque",
  },
  {
    value: "1 résumé / semaine",
    label: "pour aider les parents sans les transformer en surveillants",
  },
] as const;

export const quickHighlights = [
  {
    title: "Utile dès le premier devoir",
    description:
      "Comprendre une consigne, revoir une notion, vérifier un raisonnement: Lia part du besoin réel du soir, pas d'une discussion floue.",
  },
  {
    title: "Les parents restent dans la boucle",
    description:
      "Le produit prévoit de la visibilité parentale dès la conception, avec un cadre clair et des résumés lisibles plutôt qu'un usage caché.",
  },
  {
    title: "Moins de dépendance au tutorat ponctuel",
    description:
      "Lia absorbe beaucoup des questions répétitives du quotidien pour réserver le soutien privé aux vrais blocages ou aux matières plus lourdes.",
  },
] as const;

export const studyModes = [
  {
    title: "Débloquer un exercice",
    description:
      "Lia repère la consigne, découpe l'exercice et donne un premier indice avant toute réponse complète.",
  },
  {
    title: "Réviser avant un contrôle",
    description:
      "Rappels ciblés, mini questions et fiches courtes pour revoir l'essentiel sans surcharge.",
  },
  {
    title: "Quiz me",
    description:
      "Questions rapides avec correction expliquée pour vérifier si la notion tient vraiment.",
  },
  {
    title: "Explique autrement",
    description:
      "Une autre méthode, un exemple concret ou une reformulation plus simple quand le cours ne passe pas.",
  },
  {
    title: "Vérifie ma réponse",
    description:
      "Relecture d'un raisonnement pour corriger une étape fausse sans encourager la copie ni la triche.",
  },
] as const;

export type ComparisonTone = "best" | "good" | "mixed" | "limited";

export const comparisonColumns = [
  { name: "Lia", caption: "Compagnon d'étude encadré", highlight: true },
  { name: "ChatGPT", caption: "Assistant généraliste", highlight: false },
  { name: "Soutien privé", caption: "Humain mais ponctuel", highlight: false },
  { name: "Parents seuls", caption: "Présents, mais pas toujours disponibles", highlight: false },
] as const;

export const comparisonRows = [
  {
    feature: "Adapté aux devoirs des 10–14 ans",
    values: [
      { title: "Oui, dès la conception", description: "Indices, reformulations et exercices courts pensés pour l'étude.", tone: "best" },
      { title: "Possible, mais générique", description: "Peut sortir du cadre scolaire ou du niveau attendu.", tone: "mixed" },
      { title: "Souvent très bon", description: "Dépend fortement du tuteur, du créneau et du format.", tone: "good" },
      { title: "Variable selon la matière", description: "Beaucoup de bonne volonté, mais pas toujours la bonne méthode.", tone: "mixed" },
    ],
  },
  {
    feature: "Disponible après l'école, au quotidien",
    values: [
      { title: "Oui, tout de suite", description: "Accessible à la maison quand le blocage arrive.", tone: "best" },
      { title: "Oui, mais sans cadre dédié", description: "Disponible, sans supervision ni logique parentale native.", tone: "mixed" },
      { title: "Par créneaux", description: "Très utile, mais pas disponible à chaque devoir imprévu.", tone: "limited" },
      { title: "Pas toujours", description: "Le temps, la fatigue et le travail limitent souvent l'aide.", tone: "limited" },
    ],
  },
  {
    feature: "Visibilité et supervision parentales",
    values: [
      { title: "Prévu nativement", description: "Résumé hebdo, signaux utiles et pas de logique de secret.", tone: "best" },
      { title: "Faible par défaut", description: "Souvent utilisé en solo, sans vue simple pour les parents.", tone: "limited" },
      { title: "Partielle", description: "Retour possible, mais selon la qualité du suivi du tuteur.", tone: "mixed" },
      { title: "Totale, mais coûteuse", description: "Visibilité directe, au prix d'une forte charge mentale.", tone: "good" },
    ],
  },
  {
    feature: "Autonomie de l'enfant",
    values: [
      { title: "Renforcée", description: "Lia guide, questionne et corrige sans prendre toute la place.", tone: "best" },
      { title: "Inégale", description: "Peut aider, mais peut aussi donner trop vite la réponse.", tone: "limited" },
      { title: "Excellente en séance", description: "Très efficace quand le bon tuteur et le bon moment sont réunis.", tone: "good" },
      { title: "Variable", description: "L'aide existe, mais les devoirs peuvent vite devenir un bras de fer.", tone: "mixed" },
    ],
  },
  {
    feature: "Coût et dépendance au soutien extérieur",
    values: [
      { title: "Plus léger au quotidien", description: "Réduit le besoin de tutorat répétitif pour les questions courantes.", tone: "best" },
      { title: "Peu coûteux, mais peu cadré", description: "Accessible, sans garanties éducatives ou parentales spécifiques.", tone: "mixed" },
      { title: "Efficace mais onéreux", description: "Excellent levier ponctuel, difficile à généraliser tous les soirs.", tone: "limited" },
      { title: "Sans coût direct", description: "Mais au prix du temps, de la disponibilité et parfois de la tension.", tone: "mixed" },
    ],
  },
  {
    feature: "Positionnement relationnel",
    values: [
      { title: "Compagnon d'étude, pas amie virtuelle", description: "Le cadre est éducatif et transparent dès le départ.", tone: "best" },
      { title: "Neutre, non spécialisé enfance", description: "Pas conçu pour porter un cadre relationnel familial.", tone: "mixed" },
      { title: "Relation humaine réelle", description: "Précieuse, mais dépendante de la personne et du contexte.", tone: "good" },
      { title: "Relation naturelle", description: "Très forte, mais les devoirs peuvent vite devenir chargés émotionnellement.", tone: "mixed" },
    ],
  },
] as const;

export const childPreview = {
  tabs: ["Devoirs", "Révision", "Quiz me"],
  activeTab: "Devoirs",
  messages: [
    { role: "child", text: "Je bloque sur les fractions équivalentes. J'ai essayé mais je ne vois pas comment passer de 3/9 à 1/3." },
    { role: "lia", text: "On va y aller étape par étape. Quel nombre peut diviser 3 et 9 en même temps ?" },
    { role: "child", text: "Je crois que c'est 3." },
    { role: "lia", text: "Oui. Si tu divises le numérateur et le dénominateur par 3, qu'obtiens-tu ?" },
  ],
  coachNotes: [
    "Lia commence par ce que l'enfant a déjà essayé.",
    "Elle pousse le raisonnement au lieu de donner la solution immédiatement.",
    "Le ton reste scolaire et calme, jamais affectif ou ambigu.",
  ],
} as const;

export const weeklySummaryPreview = {
  weekLabel: "Semaine du 18 mars",
  status: "Rassurant",
  metrics: [
    { label: "Sessions utiles", value: "4" },
    { label: "Matières", value: "2" },
    { label: "Alertes", value: "0" },
  ],
  subjects: [
    { subject: "Maths · fractions", progress: 76, note: "Encore un peu d'aide sur la simplification." },
    { subject: "Français · analyse de texte", progress: 84, note: "Bonne autonomie, surtout sur les questions de compréhension." },
  ],
  notes: [
    "Lia a surtout servi à reformuler des consignes et à décomposer les étapes de maths.",
    "Les révisions ont été courtes et ciblées avant le contrôle de français.",
    "Aucun usage tardif ou inhabituel cette semaine.",
  ],
  followUp: [
    "Prévoir 15 minutes samedi pour revoir les fractions équivalentes.",
    "Peu de soutien externe nécessaire cette semaine.",
  ],
} as const;

export const pricingPlan = {
  badge: "Bêta ouverte",
  price: "Gratuit",
  period: "pendant toute la bêta",
  description: "Lia est en phase de test avec de vraies familles. L'accès est entièrement gratuit, sans engagement, sans carte bancaire.",
  features: [
    "Accès complet aux 5 modes d'étude",
    "Résumés hebdomadaires pour les parents",
    "Jusqu'à 3 enfants par compte",
    "Supervision parentale native",
    "Aucune carte bancaire requise",
  ],
  futureNote: "Après la bêta, Lia proposera un abonnement simple et transparent. Les familles bêta seront prévenues à l'avance.",
} as const;

export const familyGuardrails = [
  "Pas de posture d'ami virtuel, de confident ni de substitut affectif.",
  "Pas de secret vis-à-vis des parents ni de logique de conversation cachée.",
  "Cadre produit pensé pour les usages d'étude concrets des 10–14 ans.",
  "Supervision utile et mesurée, sans transformer les parents en modérateurs permanents.",
] as const;

export const familyOutcomes = [
  "Les devoirs du soir deviennent plus fluides, même quand les parents manquent de temps.",
  "Le soutien privé redevient un renfort ciblé, pas la béquille de tous les soirs.",
  "L'enfant gagne en autonomie sans être lâché seul face à un chatbot généraliste.",
  "Les parents récupèrent une vision simple de la semaine: matières, points de friction, signaux à suivre.",
] as const;
