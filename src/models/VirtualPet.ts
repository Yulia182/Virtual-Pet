import { decay } from "../pet-functions";

export default class VirtualPet {
  // properties
  name: string;
  hunger: number;
  happiness: number;
  // constructor - creating and initializing instances
  // default values hunger = 50, happiness = 50
  constructor(name: string, hunger = 50, happiness = 50) {
    this.name = name;
    if (hunger > 100) {
      this.hunger = 100;
    } else if (hunger < 0) {
      this.hunger = 0;
    } else {
      this.hunger = hunger;
    }
    if (happiness > 100) {
      this.happiness = 100;
    } else if (happiness < 0) {
      this.happiness = 0;
    } else {
      this.happiness = happiness;
    }
  }
  // methods that return values
  describe(): string {
    return `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}`;
  }
  getSatisfaction(): number {
    return this.happiness - this.hunger;
  }
  makeSound(sound: string): string {
    return `${this.name} says ${sound}`;
  }
  // methods that modify properties and don't retrun anything
  feed(): void {
    this.hunger -= 10;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
  }
  play(): void {
    this.happiness += 10;
    if (this.happiness > 100) {
      this.happiness = 100;
    }
  }
}

// const newPet = new VirtualPet("Nala");
// decay(newPet);
// decay(newPet);
// decay(newPet);
// console.log(newPet);
