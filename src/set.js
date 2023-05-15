const getPowerSet = function(set) {
  const powerset = [[]];
 
  set.forEach((number) => {
    powerset.forEach((subset) => {
      const nextSubset = [...subset];
      // powerset.push([...nextSubset, number]);
      fs.appendFileSync('./write.txt', `${[...nextSubset, number]}`);
    })
  })

  // return powerset;
};

exports.getPowerSet = getPowerSet;