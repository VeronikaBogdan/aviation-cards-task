export const formTeachersOptions = (teachers) => {
  const teachersOptions = [{ value: 'vacancy', label: 'Вакансия', isDisabled: true }];

  return teachers.reduce((acc, teacher) => {
    acc.push({ value: teacher.id, label: teacher.name });
    return acc;
  }, teachersOptions);
};
