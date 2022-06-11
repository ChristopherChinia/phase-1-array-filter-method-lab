// Code your solution here

function findMatching(drivers, values) {
  return drivers.filter(
    (personName) => personName.toLowerCase() === values.toLowerCase()
  );
}
function fuzzyMatch(drivers, values) {
  return drivers.filter((personName) => personName.startsWith(values));
}
function matchName(drivers, values){
    return drivers.filter(personName => personName.name === values)
}
