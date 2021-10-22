function solve(first, second, third) {
    let sumLength = 0;
    let averageLength = 0;

    let firstArgumentLength = first.length;
    //console.log(firstArgumentLength);
    let secondArgumentLength = second.length;
   // console.log(secondArgumentLength);
   let thirdArgumentLength = third.length;
  // console.log(thirdArgumentLength);

  sumLength = firstArgumentLength + secondArgumentLength +  thirdArgumentLength;
  averageLength = Math.floor(sumLength / 3);
  console.log(sumLength);
  console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');


function str(first, second, third) {
    let totalLength = first.length + second.length + third.length;
    let averageLength = Math.floor(totalLength / 3);
    console.log(totalLength);
    console.log(averageLength);
}


str('chocolate', 'ice cream', 'cake');