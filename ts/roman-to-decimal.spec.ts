import { romanToInt, tokenizer, romanNumerals } from './roman-to-decimal.js';

describe("roman to decimal", () => {


    describe('romanToInt', () => {
        it('should return 0 for empty string', () => {
            expect(romanToInt('')).toBe(0);
        });

        it('should convert single numerals', () => {
            expect(romanToInt('I')).toBe(1);
            expect(romanToInt('V')).toBe(5);
            expect(romanToInt('X')).toBe(10);
            expect(romanToInt('L')).toBe(50);
            expect(romanToInt('C')).toBe(100);
            expect(romanToInt('D')).toBe(500);
            expect(romanToInt('M')).toBe(1000);
        });

        it('should convert subtractive numerals', () => {
            expect(romanToInt('IV')).toBe(4);
            expect(romanToInt('IX')).toBe(9);
            expect(romanToInt('XL')).toBe(40);
            expect(romanToInt('XC')).toBe(90);
            expect(romanToInt('CD')).toBe(400);
            expect(romanToInt('CM')).toBe(900);
        });

        it('should convert compound numerals', () => {
            expect(romanToInt('III')).toBe(3);
            expect(romanToInt('VIII')).toBe(8);
            expect(romanToInt('XIV')).toBe(14);
            expect(romanToInt('XXIX')).toBe(29);
            expect(romanToInt('XLII')).toBe(42);
            expect(romanToInt('XCIX')).toBe(99);
            expect(romanToInt('CXLIV')).toBe(144);
            expect(romanToInt('CDXLIV')).toBe(444);
            expect(romanToInt('CMXCIX')).toBe(999);
            expect(romanToInt('MCMXCIV')).toBe(1994);
        });

        it('should handle numerals with repeated letters', () => {
            expect(romanToInt('XX')).toBe(20);
            expect(romanToInt('XXX')).toBe(30);
            expect(romanToInt('CC')).toBe(200);
            expect(romanToInt('CCC')).toBe(300);
            expect(romanToInt('MM')).toBe(2000);
        });

        it('should handle invalid numerals gracefully (returns NaN)', () => {
            expect(romanToInt('A')).toBeUndefined();
            expect(romanToInt('IIII')).toEqual(4);
            expect(romanToInt('VX')).toBeNaN();
        });
    });

    describe('tokenizer', () => {
        it('should tokenize single numerals', () => {
            expect(tokenizer('I')).toEqual(['I']);
            expect(tokenizer('V')).toEqual(['V']);
            expect(tokenizer('X')).toEqual(['X']);
        });

        it('should tokenize subtractive numerals', () => {
            expect(tokenizer('IV')).toEqual(['IV']);
            expect(tokenizer('IX')).toEqual(['IX']);
            expect(tokenizer('XL')).toEqual(['XL']);
            expect(tokenizer('XC')).toEqual(['XC']);
            expect(tokenizer('CD')).toEqual(['CD']);
            expect(tokenizer('CM')).toEqual(['CM']);
        });

        it('should tokenize compound numerals', () => {
            expect(tokenizer('XIV')).toEqual(['X', 'IV']);
            expect(tokenizer('MCMXCIV')).toEqual(['M', 'CM', 'XC', 'IV']);
            expect(tokenizer('XXIX')).toEqual(['X', 'X', 'IX']);
            expect(tokenizer('CDXLIV')).toEqual(['CD', 'XL', 'IV']);
        });

        it('should tokenize numerals with repeated letters', () => {
            expect(tokenizer('III')).toEqual(['I', 'I', 'I']);
            expect(tokenizer('XX')).toEqual(['X', 'X']);
            expect(tokenizer('CCC')).toEqual(['C', 'C', 'C']);
        });

        it('should return empty array for empty string', () => {
            expect(tokenizer('')).toEqual([]);
        });

        it('should handle invalid characters as single tokens', () => {
            expect(tokenizer('A')).toEqual([]);
            expect(tokenizer('IXA')).toEqual(['IX']);
        });
    });

});