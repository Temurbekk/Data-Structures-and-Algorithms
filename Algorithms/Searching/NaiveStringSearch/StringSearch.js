let findOccurances = (str, target) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (target[j] !== str[i + j]) break;
      if (j === target.length) counter++;
    }
  }
  return counter;
};

findOccurances('omg this is awesome omg i love programming omg', 'omg');
