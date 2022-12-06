export const questions = [
  {
    section: 1,
    items: [
      {
        label: "Nom et prénom",
        type: "text",
        placeholder: "nom et prénom",
        value: "username",
      },
      {
        label: "E-mail",
        type: "email",
        placeholder: "addresse électronique",
        value: "email",
      },
      {
        label: "Mot de passe",
        type: "password",
        placeholder: "mot de passe",
        value: "password",
      },
      {
        label: "confim mot de passe",
        type: "password",
        placeholder: "confirmer votre mot de passe",
        value: "confirmPassword",
      },
    ],
  },
  {
    section: 2,
    items: [
      {
        label: "Addresse",
        type: "text",
        placeholder: "addresse personnelle",
        value: "street",
      },
      {
        label: "ville",
        placeholder: "ville",
        type: "text",
        value: "city",
      },
      {
        label: "State",
        type: "select",
        placeholder: "pays",
        value: "state",
      },
    ],
  },
  {
    section: 3,
    items: [
      {
        label:
          "En continuant, j’accepte la Politique de confidentialité et les Conditions d’utilisation de Comeetium.",
        type: "information",
      },
    ],
  },
];
