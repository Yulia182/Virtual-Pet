import VirtualPet from "./VirtualPet";

export class Cat extends VirtualPet {
  color: string;
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
  getAttitude(): string {
    const satisfaction: number = super.getSatisfaction();
    if (satisfaction > 0) {
      return "inquisitive";
    } else {
      return "grumpy";
    }
  }
  describe(): string {
    return `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${
      this.happiness
    } Color: ${this.color}, Attitude: ${this.getAttitude()}`;
  }
}

// const newCat = new Cat("twix", "orange");
// console.log(newCat.describe());
