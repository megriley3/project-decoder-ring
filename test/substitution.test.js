const {substitution} = require("../src/substitution");
const expect = require("chai").expect;
describe("code should encode and decode given an alphabet", () => {
    it("returns false if the given alphabet is less than 26 characters long", () =>{
        const actual = substitution('thinkful', "short");
        expect(actual).to.be.false;
    })
    it("returns false if the given alphabet is more than 26 characters long", () =>{
        const actual = substitution('thinkful', "abcdefghiklmnopqrstuvwxyz12345");
        expect(actual).to.be.false;
    })
    it("correctly encodes a phrase based on the given alphabet", () => {
        const expected = 'ykrrpik';
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
    })
    it("correctly decodes a phrase based on the given alphabet", () => {
        const expected = "thinkful";
        const actual = substitution('jrufscpw', "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    })
    it("maintains spaces", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
    it("ignores capital letters", () => {
        const expected = 'jrufscpw';
        const actual = substitution("ThiNkfUl", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
    it("returns false if there are duplicate characters in the given alphabet", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    })
})
