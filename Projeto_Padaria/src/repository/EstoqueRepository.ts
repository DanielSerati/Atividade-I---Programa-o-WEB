import { EstoquePaes } from '../model/estoquePaesModel';

export class EstoqueRepository {
    private estoques: EstoquePaes[] = [];

    findAll(): EstoquePaes[] {
        return this.estoques;
    }

    findById(id: number): EstoquePaes | undefined {
        return this.estoques.find(e => e.id === id);
    }

    save(estoque: EstoquePaes): EstoquePaes {
        this.estoques.push(estoque);
        return estoque;
    }

    update(updatedEstoque: EstoquePaes): EstoquePaes | undefined {
        const index = this.estoques.findIndex(e => e.id === updatedEstoque.id);
        if (index !== -1) {
            this.estoques[index] = updatedEstoque;
            return updatedEstoque;
        }
        return undefined;
    }

    delete(id: number, quantidade: number): boolean {
        const index = this.estoques.findIndex(e => e.id === id);
        if (index !== -1 && this.estoques[index].amount >= quantidade) {
            this.estoques[index].amount -= quantidade;
            if (this.estoques[index].amount === 0) {
                this.estoques.splice(index, 1);
            }
            return true;
        }
        return false;
    }
}