const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Merge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: true },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: true },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: true },
];

const everyOneCanDrive = users.every(user => user.isDriver === true);
console.log(everyOneCanDrive);