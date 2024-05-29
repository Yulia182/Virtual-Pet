import VirtualPet from "../src/models/VirtualPet";

describe("test that properties are initialized to the correct values", () => {
  test("name set from param", () => {
    const pet: VirtualPet = new VirtualPet("cat");
    expect(pet.name).toBe("cat");
  });
  test("hunger prop is assigned from the constructor", () => {
    const pet: VirtualPet = new VirtualPet("cat", 80);
    expect(pet.hunger).toBe(80);
  });
  test("happiness prop is assigned from the default value", () => {
    const pet: VirtualPet = new VirtualPet("");
    expect(pet.happiness).toBe(50);
  });
});

describe("test methods that retrun a value", () => {
  test("describe() returns a string describing a pet name, and initial hunger and happiness", () => {
    const pet: VirtualPet = new VirtualPet("cat", 20, 80);
    expect(pet.describe()).toBe(
      `Name: ${pet.name}, Hunger: ${pet.hunger}, Happiness: ${pet.happiness}`
    );
  });
  //   test("describe() returns a string describing a pet name, and initial hunger and happiness", () => {
  //     const pet: VirtualPet = new VirtualPet(5);
  //     expect(pet.describe()).toThrow("Must be a string!");
  //   });
  test("getSatisfaction() returns a number equals happiness minus hunger", () => {
    const pet: VirtualPet = new VirtualPet("");
    const satisfaction: number = pet.happiness - pet.hunger;
    expect(pet.getSatisfaction()).toBe(satisfaction);
  });
});

describe("test methods that modify properties", () => {
  test("feed() - decreases the hunger level by 10 and doesn't go below 0).", () => {
    const pet: VirtualPet = new VirtualPet("cat", 30, 80);
    pet.feed();
    expect(pet.hunger).toBe(20);
  });
  test("feed() - decreases the hunger level by 10 and doesn't go below 0).", () => {
    const pet: VirtualPet = new VirtualPet("cat", 30, 80);
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    expect(pet.hunger).toBe(0);
  });
  test("play() - increases the happiness level by 10 and doesn't go below 100).", () => {
    const pet: VirtualPet = new VirtualPet("cat", 30, 80);
    pet.play();
    expect(pet.happiness).toBe(90);
  });
  test("play() - increases the happiness level by 10 and doesn't go below 100).", () => {
    const pet: VirtualPet = new VirtualPet("cat", 30, 80);
    pet.play();
    pet.play();
    pet.play();
    pet.play();
    pet.play();
    expect(pet.happiness).toBe(100);
  });
});
