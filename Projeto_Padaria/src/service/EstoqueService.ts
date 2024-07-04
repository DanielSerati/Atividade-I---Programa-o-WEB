import { EstoqueRepository } from '../repository/EstoqueRepository';
import { EstoquePaes } from '../model/estoquePaesModel';

export class EstoqueService {
  private estoqueRepository: EstoqueRepository;

  constructor() {
    this.estoqueRepository = new EstoqueRepository();
  }

  getAllEstoques(): EstoquePaes[] {
    return this.estoqueRepository.findAll();
  }

  getEstoqueById(id: number): EstoquePaes | undefined {
    return this.estoqueRepository.findById(id);
  }

  createEstoque(estoque: EstoquePaes): EstoquePaes {
    return this.estoqueRepository.save(estoque);
  }

  updateEstoque(estoque: EstoquePaes): EstoquePaes | undefined {
    return this.estoqueRepository.update(estoque);
  }

  deleteEstoque(id: number, quantidade: number): boolean {
    return this.estoqueRepository.delete(id, quantidade);
  }
}
