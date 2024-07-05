import { EstoqueRepository } from "../repository/EstoqueRepository";
import { EstoquePaes } from "../model/estoquePaesModel";

export class EstoqueService {
    private repository: EstoqueRepository;

    constructor() {
        this.repository = new EstoqueRepository();
    }

    getAllEstoques(): EstoquePaes[] {
        return this.repository.findAll();
    }

    getEstoqueById(id: number): EstoquePaes | undefined {
        return this.repository.findById(id);
    }

    createEstoque(data: { amount: number, modalidadeID: number, price: number }): EstoquePaes {
        const novoEstoque = new EstoquePaes(data.amount, data.modalidadeID, data.price);
        return this.repository.save(novoEstoque);
    }

    updateEstoque(data: { id: number, amount: number, modalidadeID: number, price: number }): EstoquePaes | undefined {
        const estoqueExistente = this.repository.findById(data.id);
        if (estoqueExistente) {
            estoqueExistente.amount = data.amount;
            estoqueExistente.modalidadeID = data.modalidadeID;
            estoqueExistente.price = data.price;
            return this.repository.update(estoqueExistente);
        }
        return undefined;
    }

    deleteEstoque(id: number, quantidade: number): boolean {
        return this.repository.delete(id, quantidade);
    }
}