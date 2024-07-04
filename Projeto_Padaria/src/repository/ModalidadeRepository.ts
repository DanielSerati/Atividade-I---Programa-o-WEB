import { ModalidadePaes } from '../model/modalidadePaesModel';

export class ModalidadeRepository {
  private modalidades: ModalidadePaes[] = [
    { id: 1, nome: "pao frances", vegano: false },
    { id: 2, nome: "pao australiano", vegano: false },
    { id: 3, nome: "pao de tapioca", vegano: true }
  ];

  findAll(): ModalidadePaes[] {
    return this.modalidades;
  }

  findById(id: number): ModalidadePaes | undefined {
    return this.modalidades.find(modalidade => modalidade.id === id);
  }

  save(modalidade: ModalidadePaes): ModalidadePaes {
    this.modalidades.push(modalidade);
    return modalidade;
  }

  update(modalidade: ModalidadePaes): ModalidadePaes | undefined {
    const index = this.modalidades.findIndex(mod => mod.id === modalidade.id);
    if (index !== -1) {
      this.modalidades[index] = modalidade;
      return modalidade;
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = this.modalidades.findIndex(mod => mod.id === id);
    if (index !== -1) {
      this.modalidades.splice(index, 1);
      return true;
    }
    return false;
  }
}
