function transformToObjects(numberArray) {
    return numberArray.map((num) => ({ val: num }))
}

numberArray = [1,2,3]

console.log(transformToObjects(numberArray));