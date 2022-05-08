//calculate sleep hours
const getSleepHours = day => {
  day = day.toLowerCase();
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 6;
  } else if (day === 'thursday') {
    return 4;
  } else if (day === 'friday') {
    return 5;
  } else if (day === 'saturday') {
    return 9;
  } else if (day === 'sunday') {
    return 3;
  } else {
    return "Error!";
  }
};
//test getSleepHours - success
//console.log(getSleepHours('monday'));

//calculate total amount of sleep hours
const getTotalSleepHours = () => {
return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('Sunday');
}
//test getTotalSleepHours - success 
// dont forget to use 'return' command before fn begins
//console.log(getTotalSleepHours());

//calculate ideal sleep hours
const getIdealSleepHours = idealHours => {
  return idealHours * 7 
};
//test idealSleepHours - Success
//console.log(idealSleepHours());

//calculate sleep debt
const calculateSleepDebt = () => {
  totalSleepHours = getTotalSleepHours();
  idealSleepHours = getIdealSleepHours(6);
//create variable for oversleeping / undersleeping
  let overUnderHrs = (totalSleepHours - idealSleepHours);
//allow for absolute values
  overUnderHrs = Math.abs(overUnderHrs);
  //code logic for if/else fn
  if (totalSleepHours === idealSleepHours) {
    console.log('Patient has gotten the perfect amount of sleep.')
  } else if (totalSleepHours > idealSleepHours) {
    console.log('Patient has gotten more sleep than needed.')
    console.log(`They have slept ${overUnderHrs} hours more than necessary.`)
    //console.log(`Patient has slept ${}`)
  } else if (totalSleepHours < idealSleepHours) {
    console.log('Patient should get more sleep.')
    console.log(`They need to sleep ${overUnderHrs} hours more.`)
  }
};

//test calculateSleepDebt fn - success
calculateSleepDebt();


