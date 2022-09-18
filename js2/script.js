function alphabet_soup(str){
    return str.split("").sort().join("");
}
console.log(alphabet_soup("python"));

console.log(alphabet_soup("Exercise"));