export class ModalidadePaes {
  private static nextId: number = 1;
  id: number;
  name: string;
  vegan: boolean;

  constructor(name: string, vegan: boolean) {
      this.id = ModalidadePaes.nextId++;
      this.name = name;
      this.vegan = vegan;
  }
}