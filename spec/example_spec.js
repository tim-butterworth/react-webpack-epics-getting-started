import {myElement} from '../src/my_element';

describe("initial test", () => {
    it("this is the initial test", () => {
	expect(true).toBe(true);
    });

    it("this is the second test", () => {
	expect(true).toBe(true);
    });

    it("it works for importing", () => {
	expect(myElement()).toBe("neato");
    });
});
