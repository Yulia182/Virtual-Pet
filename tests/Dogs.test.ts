import { Dog } from "../src/models/Dog";

describe("test Dog subclass", () => {
  test("New instance of Dog has name set from the constructor", () => {
    const dog: Dog = new Dog("Charlie");
    expect(dog.name).toBe("Charlie");
  });
  test("Calling play increases happiness by 15.", () => {
    const dog: Dog = new Dog("Charlie", 50, 50);
    dog.play();
    expect(dog.happiness).toBe(65);
  });
  test("Calling play does not increase happiness past 100.", () => {
    const dog: Dog = new Dog("Charlie", 50, 90);
    dog.play();
    dog.play();
    dog.play();
    dog.play();
    expect(dog.happiness).toBe(100);
  });
});
