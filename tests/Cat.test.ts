import { Cat } from "../src/models/Cat";

describe("test Cat subclass", () => {
  test("a new instance of Cat has name set from the constructor", () => {
    const cat: Cat = new Cat("twix", "orange");
    expect(cat.name).toBe("twix");
  });
  test("a new instance of Cat has color set from the constructor.", () => {
    const cat: Cat = new Cat("twix", "orange");
    expect(cat.color).toBe("orange");
  });
  test("a new instance of Cat has happiness set to 50.", () => {
    const cat: Cat = new Cat("twix", "orange");
    expect(cat.happiness).toBe(50);
  });
  test("a new instance of Cat has hunger set to 50.", () => {
    const cat: Cat = new Cat("twix", "orange");
    expect(cat.hunger).toBe(50);
  });
  test(`getAttitude() returns "inquisitive" for positive satisfaction.`, () => {
    const cat: Cat = new Cat("twix", "orange");
    cat.feed();
    expect(cat.getAttitude()).toBe("inquisitive");
  });
  test(`getAttitude() returns "grumpy" for zero satisfaction.`, () => {
    const cat: Cat = new Cat("twix", "orange");
    expect(cat.getAttitude()).toBe("grumpy");
  });
  test(`describe() returns a string with name, hunger, happiness, color, and attitude`, () => {
    const cat: Cat = new Cat("Twix", "orange");
    expect(cat.describe()).toBe(
      "Name: Twix, Hunger: 50, Happiness: 50 Color: orange, Attitude: grumpy"
    );
  });
});
