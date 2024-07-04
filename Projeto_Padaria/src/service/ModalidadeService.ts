import { ModalidadeRepository } from '../repository/ModalidadeRepository';
import { ModalidadePaes } from '../model/modalidadePaesModel';

export class ModalidadeService {
  private modalidadeRepository: ModalidadeRepository;

  constructor() {
    this.modalidadeRepository = new ModalidadeRepository();
  }

  getAllModalidades(): ModalidadePaes[] {
    return this.modalidadeRepository.findAll();
  }

  getModalidadeById(id: number): ModalidadePaes | undefined {
    return this.modalidadeRepository.findById(id);
  }

  createModalidade(modalidade: ModalidadePaes): ModalidadePaes {
    return this.modalidadeRepository.save(modalidade);
  }

  updateModalidade(modalidade: ModalidadePaes): ModalidadePaes | undefined {
    return this.modalidadeRepository.update(modalidade);
  }

  deleteModalidade(id: number): boolean {
    return this.modalidadeRepository.delete(id);
  }
}
