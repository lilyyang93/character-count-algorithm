exports.charCount = function(string) {
    let allowed = 'abcdefghijklmnopqrstuvwxyz'
    let trackArr = []
    let tracker = {}
    let str = string.split('')
    for (let char of str) {
        if (allowed.includes(char)) {
            if (!tracker[char]) {
                tracker[char] = 1
            } else {
                tracker[char] += 1
            }
        }
    }
    for (let letter in tracker) {
        trackArr.push([letter,tracker[letter]])
    }
    return trackArr.sort().sort((a,b) => b[1]-a[1])
};