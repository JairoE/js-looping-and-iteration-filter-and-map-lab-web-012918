// Code your solution here:
function driversWithRevenueOver(arr, revenue) {
  let newAr = arr.filter(function(el) {
    return el.revenue > revenue;
  })
  return newAr;
}

function driverNamesWithRevenueOver(arr, revenue) {
  let newAr = driversWithRevenueOver(arr, revenue);
  return newAr.map(function(el) {
    return el.name;
  });
}

function exactMatch(arr, obj) {
  let newAr = arr.filter(function(el) {
    let word = Object.keys(obj);
    return el[word[0]] === obj[word[0]];
  })
  return newAr;
}

function exactMatchToList(arr, obj) {
  let newAr = exactMatch(arr, obj);
  return newAr.map(function(el) {
    return el.name;
  });
  
}
