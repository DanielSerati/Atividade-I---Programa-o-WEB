import { VendaRepository } from "../repository/VendaRepository";
import { EstoqueRepository } from "../repository/EstoqueRepository";
import { VendaPaes, ItemVenda } from "../model/vendaPaesModel";

export class VendaService {
    private vendaRepository: VendaRepository;
    private estoqueRepository: EstoqueRepository;

    constructor() {
        this.vendaRepository = new VendaRepository();
        this.estoqueRepository = new EstoqueRepository();
    }

    fazerVenda(data: { cpfCliente: string, itensComprados: { estoquePaesID: number, quantidade: number }[] }): VendaPaes {
        const itensVendidos: ItemVenda[] = [];
        let valorTotal = 0;

        data.itensComprados.forEach(item => {
            const estoque = this.estoqueRepository.findById(item.estoquePaesID);
            if (estoque && estoque.amount >= item.quantidade) {
                estoque.amount -= item.quantidade;
                valorTotal += item.quantidade * estoque.price;
                itensVendidos.push(new ItemVenda(item.estoquePaesID, item.quantidade, estoque.modalidadeID.toString()));
            }
        });

        const novaVenda = new VendaPaes(data.cpfCliente, valorTotal, itensVendidos);
        return this.vendaRepository.save(novaVenda);
    }

    consultarVenda(id: number): VendaPaes | undefined {
        return this.vendaRepository.findById(id);
    }
}