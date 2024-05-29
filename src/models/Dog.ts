import VirtualPet from "./VirtualPet";

export class Dog extends VirtualPet {
  play(): void {
    this.happiness += 5;
    super.play();
  }
}
const newPet = new Dog("dog", 50, 87);
newPet.play();
console.log(newPet);
