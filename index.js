// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key , value) {

}
function destructivelyUpdateDriverWithKeyAndValue() {
return Object.assign(driver, { [key]: value});
}
function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign{{}, driver};
  newDriver[key];
  return newDriver;
}
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
