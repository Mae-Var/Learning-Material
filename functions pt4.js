function monitorCount(rows, columns) {
    return rows * columns;
  }
  
function costOfMonitors(rows, columns) {
 return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// new code below - FUNCTION EXPRESSIONS - it's a function within a variable / const. The function is omitted and exists only within the variable value.

const calcArea = function(width, height) {
    const area = width * height;
    return area;
  };
  
  console.log (calcArea(5, 6));


// new code below

const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
 };
 
 console.log(plantNeedsWater('Tuesday'));

// new code below - ARROW FUNCTION - you simply skip the keyword "function" and instead add the parameters in the () then add => and the code automatically detects this as a function, since ES6.

const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
  };

  console.log(rectangleArea(7, 7));
// new code below - 

// !!! THE BELOW IS VERY IMPORTANT !!!


const plantNW = (day) => {
    return day === 'Wednesday' ? true : false;
  };
// below is the converted Concise Body Arrow Function:

const plantNeedWater = day => day === 'Wednesday' ? true : false;
console.log(plantNeedWater('Tuesday'));