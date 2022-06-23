module.exports = function toReadable (number) {
    let dig = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let dozens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    for (let i = 2; i<10; i++) {
        for (let j = 0; j<10; j++) {
            if (j === 0) {
                dig[Number(String(i)+String(j))] = dozens[i];
            }else {
                dig[Number(String(i)+String(j))] = dozens[i]+" "+dig[j];
            }
        }
        for (let n = 100; n < 1000; n++) {
            if (n%100 === 0) {
                dig[n]=dig[(Math.floor(n/100))] + " hundred";
            } else {
                dig[n]=dig[(Math.floor(n/100))] + " hundred " + dig[n%100];
            }        
        }
    }
    return dig[number];
}
