const reverseMaker = (word) => {
    let str = "GeeksforGeeks";
    let revers = str.split("").reverse().join("");
    return revers
};

console.log(reverseMaker());

const rev = (word) => {
    const reverse = word.split('').reverse().join('')

    return reverse;
}
console.log(rev(Hello));