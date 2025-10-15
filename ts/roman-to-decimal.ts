export const romanNumerals = ["I", "V", "X", "IV", "IX", "L", "C", "XL", "XC", "D", "M", "CD", "CM"] as const;
export type RomanNumeral = typeof romanNumerals[number];

const map: Record<RomanNumeral, number> = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000,
};

export function romanToInt(s: string): number {
    const input = s.split("") as Array<RomanNumeral>
    if (input.length === 0) { return 0; }
    if (input.length === 1) { return map[input[0] as RomanNumeral]; }
    let val: number = 0;
    const tokens = tokenizer(s);
    // console.log({tokens});
    let lastValue = 4000;
    tokens.forEach(token => {
        const currVal = map[token];
        if (currVal > lastValue) {
            val = NaN;
        }
        val += map[token];
        lastValue = currVal;
    });
    return val;
};

export function tokenizer(input: string): Array<RomanNumeral> {
    const tokens: Array<RomanNumeral> = [];
    for (let i = 0; i < input.length; i++) {
        if ("IXC".includes(input[i]!) && (i + 1) < input.length && "VLDXCM".includes(input[i + 1]!)) {
            if (input[i] === "I") {
                if (input[i + 1] === "V") {
                    tokens.push("IV");
                    i++;
                }
                else if (input[i + 1] === "X") {
                    tokens.push("IX");
                    i++;
                }
                else {
                    tokens.push("I");
                }
            } else if (input[i] === "X") {
                if (input[i + 1] === "L") {
                    tokens.push("XL");
                    i++;
                }
                else if (input[i + 1] === "C") {
                    tokens.push("XC");
                    i++;
                }
                else {
                    tokens.push("X");
                }
            } else if (input[i] === "C") {
                if (input[i + 1] === "D") {
                    tokens.push("CD");
                    i++;
                }
                else if (input[i + 1] === "M") {
                    tokens.push("CM");
                    i++;
                }
                else {
                    tokens.push("C");
                }
            }
        }
        else {
            if (romanNumerals.includes(input[i] as RomanNumeral)) {
                tokens.push(input[i] as RomanNumeral);
            }
        }
    }
    return tokens;
}