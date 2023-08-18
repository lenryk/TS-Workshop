function squares(array: number[]) {
    const result = array.map(x => x * x);
    return result;
}

console.log(squares([1,5]))