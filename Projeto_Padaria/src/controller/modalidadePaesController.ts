import { Request, Response } from "express";
import { ModalidadeService } from "../service/ModalidadeService";
const modalidadeService = new ModalidadeService();

export function criarModalidade(req: Request, res: Response) {
    try {
        const novaModalidade = modalidadeService.createModalidade(req.body);
        res.status(200).json({ mensagem: "Nova modalidade adicionada com sucesso.", produto: novaModalidade });
    } catch (error: any) {
        res.status(400).json({ mensagem: `Erro ao adicionar modalidade: ${error.message}` });
    }
}

export function recuperarTodasAsModalidades(req: Request, res: Response) {
    try {
        res.status(200).json(modalidadeService.getAllModalidades());
    } catch (error: any) {
        res.status(400).json({ mensagem: `Erro ao recuperar modalidades: ${error.message}` });
    }
}

export function recuperarModalidadePorID(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const produto = modalidadeService.getModalidadeById(id);
        if (produto) {
            res.status(200).json({ mensagem: `Modalidade encontrada para o ID: ${id}.`, produto });
        } else {
            res.status(404).json({ mensagem: "Modalidade não encontrada." });
        }
    } catch (error: any) {
        res.status(400).json({ mensagem: `Erro ao buscar modalidade por ID: ${error.message}` });
    }
}

export function alterarModalidade(req: Request, res: Response) {
    try {
        const novaModalidade = modalidadeService.updateModalidade(req.body);
        res.status(200).json({ mensagem: "Modalidade alterada com sucesso.", produto: novaModalidade });
    } catch (error: any) {
        res.status(400).json({ mensagem: `Erro ao alterar modalidade: ${error.message}` });
    }
}

export function deletarModalidade(req: Request, res: Response) {
    try {
        const { id } = req.body;
        const sucesso = modalidadeService.deleteModalidade(id);
        if (sucesso) {
            res.status(200).json({ mensagem: "Modalidade removida com sucesso." });
        } else {
            res.status(400).json({ mensagem: "Erro ao deletar modalidade." });
        }
    } catch (error: any) {
        res.status(400).json({ mensagem: `Erro ao deletar modalidade: ${error.message}` });
    }
}