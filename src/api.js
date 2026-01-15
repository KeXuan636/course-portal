const diplomas = [
  {
    id: "information-technology",
    name: "Information Technology",
    modules: [
      {
        id: "uiux-design",
        name: "UI/UX Design for Apps",
        description:
          "Students will be equipped with knowledge in User Experience (UX) design.",
        speaker: {
          name: "Azhar Kamar",
          title: "Lecturer",
        },
      },
      {
        id: "mobile-app-dev",
        name: "Mobile App Development",
        description:
          "In this module, students will learn the basics of creating Android applications.",
        speaker: {
          name: "Derek Lee",
          title: "Lecturer",
        },
      },
    ],
  },
  {
    id: "financial-technology",
    name: "Financial Technology Diploma",
    modules: [
      {
        id: "software-app-dev",
        name: "Software Application Development",
        description:
          "Develop software applications for web and mobile platforms.",
        speaker: {
          name: "Hannah Lim",
          title: "Lecturer",
        },
      },
      {
        id: "payment-tech",
        name: "Payment Technologies",
        description:
          "Introduction to different payment technologies and systems.",
        speaker: {
          name: "Magdalene Lim",
          title: "Lecturer",
        },
      },
    ],
  },
];

export function getDiplomas() {
  return diplomas.map(({ id, name }) => ({ id, name }));
}

export function getModules(diplomaId) {
  return diplomas.find(({ id }) => id === diplomaId);
}

export function getModuleDetails(moduleId, diplomaId) {
  return diplomas
    .find(({ id }) => id === diplomaId)
    .modules.find(({ id }) => id === moduleId);
}
