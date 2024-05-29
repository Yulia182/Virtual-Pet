import { Dog } from "./models/Dog";
import { Cat } from "./models/Cat";
import VirtualPet from "./models/VirtualPet";

export const decay = (pet: VirtualPet): void => {
  if (pet.hunger > 100) {
    pet.hunger = 100;
  } else {
    pet.hunger += 5;
  }
  if (pet.happiness < 0) {
    pet.happiness = 0;
  } else {
    pet.happiness -= 5;
  }
};

export const makePet = (name: string, type: string): VirtualPet => {
  if (type === "cat") {
    return new Cat(name, "black");
  } else if (type === "dog") {
    return new Dog(name);
  } else {
    return new VirtualPet(name);
  }
};

export const findMostSatisfied = (virtualPetArr: []): VirtualPet => {
  return new VirtualPet("Nala");
};
