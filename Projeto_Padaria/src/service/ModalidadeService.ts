import { ModalidadeRepository } from "../repository/ModalidadeRepository";
import { ModalidadePaes } from "../model/modalidadePaesModel";

export class ModalidadeService {
    private repository: ModalidadeRepository;

    constructor() {
        this.repository = new ModalidadeRepository();
    }

    getAllModalidades(): ModalidadePaes[] {
        return this.repository.findAll();
    }

    getModalidadeById(id: number): ModalidadePaes | undefined {
        return this.repository.findById(id);
    }

    createModalidade(data: { name: string, vegan: boolean }): ModalidadePaes {
        const novaModalidade = new ModalidadePaes(data.name, data.vegan);
        return this.repository.save(novaModalidade);
    }

    updateModalidade(data: { id: number, name: string, vegan: boolean }): ModalidadePaes | undefined {
        const modalidadeExistente = this.repository.findById(data.id);
        if (modalidadeExistente) {
            modalidadeExistente.name = data.name;
            modalidadeExistente.vegan = data.vegan;
            return this.repository.update(modalidadeExistente);
        }
        return undefined;
    }

    deleteModalidade(id: number): boolean {
        return this.repository.delete(id);
    }
}