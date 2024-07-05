import { ModalidadePaes } from '../model/modalidadePaesModel';

export class ModalidadeRepository {
    private modalidades: ModalidadePaes[] = [];

    findAll(): ModalidadePaes[] {
        return this.modalidades;
    }

    findById(id: number): ModalidadePaes | undefined {
        return this.modalidades.find(m => m.id === id);
    }

    save(modalidade: ModalidadePaes): ModalidadePaes {
        this.modalidades.push(modalidade);
        return modalidade;
    }

    update(updatedModalidade: ModalidadePaes): ModalidadePaes | undefined {
        const index = this.modalidades.findIndex(m => m.id === updatedModalidade.id);
        if (index !== -1) {
            this.modalidades[index] = updatedModalidade;
            return updatedModalidade;
        }
        return undefined;
    }

    delete(id: number): boolean {
        const index = this.modalidades.findIndex(m => m.id === id);
        if (index !== -1) {
            this.modalidades.splice(index, 1);
            return true;
        }
        return false;
    }
}