const romanNumerals = ["I", "V", "X", "L", "C", "D", "M"] as const;
type RomanNumeral = typeof romanNumerals[number];

const map: Record<RomanNumeral, number> = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
};
function romanToInt(s: string): number {
    const input = s.split("") as Array<RomanNumeral>
    if (input.length === 0) { return 0; }
    if (input.length === 1) { return map[input[0] as RomanNumeral]; }
    let val:number = map[input[0] as RomanNumeral];
    for (let i = 1; i < input.length; i++) {
        if (
            ((input[i] === "V" || input[i] === "X") && input[i - 1] === "I") ||
            ((input[i] === "L" || input[i] === "C") && input[i - 1] === "X") ||
            ((input[i] === "D" || input[i] === "M") && input[i - 1] === "C")
        ) {
            val += map[input[i]] - 2 * map[input[i - 1]];
        }
        else {
            val += map[input[i]];
        }
    }
    return val;
};


