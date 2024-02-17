export const changeTeachers = (changedKey, indexCard, podgroup, indexPodgroup, data) =>
  (podgroup[changedKey] = data[`${changedKey}-${indexPodgroup}-${indexCard}`]?.value || podgroup[changedKey]);

export const changeCountStudents = (indexCard, podgroup, indexPodgroup, data) =>
  (podgroup.countStudents = data[`countStudents-${indexPodgroup}-${indexCard}`] || podgroup.countStudents);
