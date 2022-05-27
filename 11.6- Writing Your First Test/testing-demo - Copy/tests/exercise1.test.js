const lib = require('../exercise1');

describe('fizzBuzz', () => {
    it('should throw if the input is not a number', () => {
        const args = [null, undefined, NaN, '', 'A', '4',  false, {}];
        args.forEach(a => { 
            expect(() => { lib(a) }).toThrow();
         });
    });

    it('should return "FizzBuzz" if input is divisible of 3 and 5', () => {
        const result = lib.fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });

    it('should return "Fizz" if input is divisible of 3', () => {
        const result = lib.fizzBuzz(3);
        expect(result).toBe('Fizz');
    });

    it('should return "Buzz" if input is divisible of 5', () => {
        const result = lib.fizzBuzz(5);
        expect(result).toBe('Buzz');
    });

    it('should return the input if input is not divisible of 3 or 5', () => {
        const result = lib.fizzBuzz(1);
        expect(result).toBe(1);
    });
});