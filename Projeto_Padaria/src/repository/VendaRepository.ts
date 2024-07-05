import { VendaPaes } from '../model/vendaPaesModel';

export class VendaRepository {
    private vendas: VendaPaes[] = [];

    findAll(): VendaPaes[] {
        return this.vendas;
    }

    findById(id: number): VendaPaes | undefined {
        return this.vendas.find(v => v.id === id);
    }

    save(venda: VendaPaes): VendaPaes {
        this.vendas.push(venda);
        return venda;
    }
}