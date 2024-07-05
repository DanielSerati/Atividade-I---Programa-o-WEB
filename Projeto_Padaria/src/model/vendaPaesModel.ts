export class ItemVenda {
  estoquePaesID: number;
  quantidade: number;
  nomeItem: string | undefined;

  constructor(estoquePaesID: number, quantidade: number, nomeItem: string | undefined) {
      this.estoquePaesID = estoquePaesID;
      this.quantidade = quantidade;
      this.nomeItem = nomeItem;
  }
}

export class VendaPaes {
  private static nextId: number = 1;
  id: number;
  cpfCliente: string;
  valorTotal: number;
  itensComprados: ItemVenda[];

  constructor(cpfCliente: string, valorTotal: number, itensComprados: ItemVenda[]) {
      this.id = VendaPaes.nextId++;
      this.cpfCliente = cpfCliente;
      this.valorTotal = valorTotal;
      this.itensComprados = itensComprados;
  }
}