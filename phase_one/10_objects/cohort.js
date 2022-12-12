const printCohortInfo = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
};

const cohort = {
  name: 'BlueNovember2022',
  id: 1234,
  students: [
    'Shah', 'Graeme', 'Marina', 'Thomas'
  ]
};

printCohortInfo(cohort);
