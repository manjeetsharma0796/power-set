const getPowerSet = function(set) {
  const powerset = [[]];
  // fs.writeFileSync('./write.txt', `${powerset}\n`);

  set.forEach((number) => {
    powerset.forEach((subset) => {
      // const nextSubset = [...subset];
      powerset.push([...[...subset], number]);
      //  let current = [...nextSubset, number];
      // fs.appendFileSync('./write.txt', `${powerset.toString()}\n`);
    })
  })

  return powerset;
};

console.log(getPowerSet([1,2,3]));

exports.getPowerSet = getPowerSet;
