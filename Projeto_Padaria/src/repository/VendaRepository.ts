import { VendaPaes } from '../model/vendaPaesModel';

export class VendaRepository {
  private vendas: VendaPaes[] = [];

  findAll(): VendaPaes[] {
    return this.vendas;
  }

  findById(idVenda: number): VendaPaes | undefined {
    return this.vendas.find(venda => venda.idVenda === idVenda);
  }

  save(venda: VendaPaes): VendaPaes {
    this.vendas.push(venda);
    return venda;
  }
}
