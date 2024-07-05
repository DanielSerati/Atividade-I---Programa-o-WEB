export class EstoquePaes {
  private static nextId: number = 1;
  id: number;
  amount: number;
  modalidadeID: number;
  price: number;

  constructor(amount: number, modalidadeID: number, price: number) {
      this.id = EstoquePaes.nextId++;
      this.amount = amount;
      this.modalidadeID = modalidadeID;
      this.price = price;
  }
}