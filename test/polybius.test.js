const {polybius} = require("../src/polybius");
const expect = require("chai").expect;
describe("use a grid to encode and decode a string", () =>{
    it("when encoding, i should transform into 42", () => {
        const expected = "42";
        const actual = polybius("i");
        expect(actual).to.equal(expected);
    })
    it("when encoded, j should transform into 42", () => {
        const expected = "42";
        const actual = polybius("j");
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters", () => {
        const expected = "2124111543"
        const actual = polybius("BraVo");
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces when encoding", () => {
        const expected = "3251131343 2543241341";
        const actual = polybius("Hello world");
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces when decoding", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    })
    it("decode 42 should return (i/j)", () => {
        const expected = "(i/j)";
        const actual = polybius("42", false);
        expect(actual).to.equal(expected);
    })
    it("correctly encodes", () => {
        const expected = "23513434112251";
        const actual = polybius("message");
        expect(actual).to.equal(expected);
    })
})