import { Dog } from "../src/models/Dog";
import { Cat } from "../src/models/Cat";
import VirtualPet from "../src/models/VirtualPet";
import { decay, makePet } from "../src/pet-functions";

describe("test decay function", () => {
  test("Test that  happiness decreases by 5", () => {
    const pet: VirtualPet = new VirtualPet("Nala");
    decay(pet);
    expect(pet.happiness).toBe(45);
  });
  test("Test that hunger increases by 5 and", () => {
    const pet: VirtualPet = new VirtualPet("Nala");
    decay(pet);
    expect(pet.hunger).toBe(55);
  });
  test("Test that hunger does not go above 100", () => {
    const pet: VirtualPet = new VirtualPet("Nala");
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    expect(pet.hunger).toBe(100);
  });
  test("Test that happiness does not go below 0", () => {
    const pet: VirtualPet = new VirtualPet("Nala");
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    decay(pet);
    expect(pet.happiness).toBe(0);
  });
});

describe("test makePet function", () => {
  test("A test case for returning a Dog.", () => {
    const pet: Dog = makePet("Bark", "dog");
    expect(pet instanceof Dog).toBeTruthy();
  });
  test("A test case for returning a Dog. Verify the name.", () => {
    const pet: Dog = makePet("Bark", "dog");
    expect(pet.name).toBe("Bark");
  });
  test("A test case for returning a Cat.", () => {
    const pet: VirtualPet = makePet("Nala", "cat");
    expect(pet instanceof Cat).toBeTruthy();
  });
  test("A test case for returning a Cat. Verify the name.", () => {
    const pet: VirtualPet = makePet("Nala", "cat");
    expect(pet.name).toBe("Nala");
  });

  test("A test case for returning a VirtualPet.", () => {
    const pet: VirtualPet = makePet("Bunny", "rabbit");
    expect(pet instanceof VirtualPet).toBeTruthy();
  });
  test("A test case for returning a VirtualPet. Verify the name.", () => {
    const pet: VirtualPet = makePet("Bunny", "rabbit");
    expect(pet.name).toBe("Bunny");
  });
  //   explicit casting
  test("A test case for returning a Cat. Verify the color.", () => {
    const pet: VirtualPet = makePet("Nala", "cat");
    const newPet = pet as Cat;
    expect(newPet.color).toBe("black");
  });
});
