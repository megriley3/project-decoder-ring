const { caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caeser shift decoder/encoder", () => {
    it("if the shift value isn't present the function should return false", () =>{
        const actual = caesar('thinkful');
        expect(actual).to.be.false;
    })
    it("if the shift value is 0, the function should return false", () =>{
        const actual = caesar('thinkful', 0);
        expect(actual).to.be.false;
    })
    it("if the shift value is less than -25, the function should return false", () =>{
        const actual = caesar('thinkful', -26);
        expect(actual).to.be.false;
    })
    it("if the shift value is greater than 25, the function should return false", () =>{
        const actual = caesar('thinkful', 99);
        expect(actual).to.be.false;
    })
    it("the solution should ignore capital letters", () => {
        const expected = 'thinkful';
        const actual = caesar("wKlQniXo", 3, false);
        expect(actual).to.equal(expected);

    })
    it("code should maintain spaces and symbols", () => {
        const expected = 'this is a secret message!'
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    })
    it("shifts past the end of the alphabet should wrap", () => {
        const expected = 'babe';
        const actual = caesar('zyzc', -2, false);
        expect(actual).to.equal(expected);
    })
    it("it should wrap past the beginning", () => {
        const expected = 'way';
        const actual = caesar('cge', 6, false);
        expect(actual).to.equal(expected);
    })
})
