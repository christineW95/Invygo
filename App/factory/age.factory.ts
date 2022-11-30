const generateAgeArray = () => {
  const ageArray = [];
  for (let age = 13; age <= 80; age++) {
    ageArray.push(age.toString());
  }
  return ageArray;
};
export { generateAgeArray };
