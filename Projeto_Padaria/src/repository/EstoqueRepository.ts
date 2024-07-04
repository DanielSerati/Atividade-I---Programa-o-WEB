import { EstoquePaes } from '../model/estoquePaesModel';

export class EstoqueRepository {
  private estoques: EstoquePaes[] = [];

  findAll(): EstoquePaes[] {
    return this.estoques;
  }

  findById(id: number): EstoquePaes | undefined {
    return this.estoques.find(estoque => estoque.id === id);
  }

  save(estoque: EstoquePaes): EstoquePaes {
    this.estoques.push(estoque);
    return estoque;
  }

  update(estoque: EstoquePaes): EstoquePaes | undefined {
    const index = this.estoques.findIndex(est => est.id === estoque.id);
    if (index !== -1) {
      this.estoques[index] = estoque;
      return estoque;
    }
    return undefined;
  }

  delete(id: number, quantidade: number): boolean {
    const index = this.estoques.findIndex(est => est.id === id);
    if (index !== -1 && this.estoques[index].quantidade >= quantidade) {
      this.estoques[index].quantidade -= quantidade;
      return true;
    }
    return false;
  }
}
