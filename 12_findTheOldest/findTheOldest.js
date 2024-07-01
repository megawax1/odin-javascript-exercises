
const findTheOldest = function(array) {
  let sorted = array.slice(0)
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let hasntDied = function(arr) {
    for (let i = 0; i < arr.length; i++)  {
      if (!arr[i].yearOfDeath) {
        arr[i].yearOfDeath = currentYear;
      }
    }
   }
   hasntDied(sorted);
   
  sorted
  .sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
 return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
