const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
};
function romanToInt(s: string): number {
    if (s.length === 0) { return 0; }
    if (s.length === 1) { return map[s[0]]; }
    let val = map[s[0]];
    for (let i = 1; i < s.length; i++) {
        if (
            ((s[i] === "V" || s[i] === "X") && s[i - 1] === "I") ||
            ((s[i] === "L" || s[i] === "C") && s[i - 1] === "X") ||
            ((s[i] === "D" || s[i] === "M") && s[i - 1] === "C")
        ) {
            val += map[s[i]] - 2 * map[s[i - 1]];
        }
        else {
            val += map[s[i]];
        }
    }
    return val;
};


