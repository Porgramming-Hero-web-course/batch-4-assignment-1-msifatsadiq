{
  //
  function removeDuplicates(numbers: number[]): number[] {
    const arrayOfNumbers: number[] = [];
    numbers.forEach((num) => {
      if (!arrayOfNumbers.includes(num)) {
        arrayOfNumbers.push(num);
      }
    });
    return arrayOfNumbers;
  }
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

  //
}
