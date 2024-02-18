export const formConstantData = (item) => [
  {
    key: 1,
    lesson: 'Лекции',
    hours: item.lecturesHours,
    name: 'lectureTeacher',
  },
  {
    key: 2,
    lesson: 'Лабораторные работы',
    hours: item.laboratoryHours,
    name: 'laboratoryTeacher',
  },
  {
    key: 3,
    lesson: 'Практические',
    hours: item.practicHours,
    name: 'practiceTeacher',
  },
  {
    key: 4,
    lesson: 'Семинарские',
    hours: item.seminarHours,
    name: 'seminarTeacher',
  },
];
