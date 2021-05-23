const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
}

// Prints
for(key in traineeGrades){
  if(key.length<6){
    let touppercasename = key.toUpperCase();
     console.log(touppercasename + "-" + traineeGrades[key] );
  }
 
}
// (`${to}`)
// TOM - 20
// ABDUL - 19
