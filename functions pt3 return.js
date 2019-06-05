function rectangleArea(width, height) {
    let area = width * height;
    return area;
  }
  console.log(rectangleArea(5, 7));

//new code below

  function rectArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }
console.log(rectArea(-4, 7));

//new code below

function monitorCount(rows, columns) {
    return rows * columns;
}
let numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);