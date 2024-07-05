import { Request, Response } from "express";
import { EstoqueService } from "../service/EstoqueService";
const estoqueService = new EstoqueService();

export function criarEstoque(req: Request, res: Response) {
    try {
        const novoEstoque = estoqueService.createEstoque(req.body);
        res.status(200).json({ mensagem: "Novo estoque adicionado com sucesso.", produto: novoEstoque });
    } catch (error: any) {
        res.status(400).json({ mensagem: `Erro ao adicionar estoque: ${error.message}` });
    }
}

export function recuperarTodosOsEstoques(req: Request, res: Response) {
    try {
        res.status(200).json(estoqueService.getAllEstoques());
    } catch (error: any) {
        res.status(400).json({ mensagem: `Erro ao recuperar estoques: ${error.message}` });
    }
}

export function recuperarEstoquePorID(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const produto = estoqueService.getEstoqueById(id);
        if (produto) {
            res.status(200).json({ mensagem: `Estoque encontrado para o ID: ${id}.`, produto });
        } else {
            res.status(404).json({ mensagem: "Estoque não encontrado." });
        }
    } catch (error: any) {
        res.status(400).json({ mensagem: `Erro ao buscar estoque por ID: ${error.message}` });
    }
}

export function alterarEstoque(req: Request, res: Response) {
    try {
        const novoEstoque = estoqueService.updateEstoque(req.body);
        res.status(200).json({ mensagem: "Estoque alterado com sucesso.", produto: novoEstoque });
    } catch (error: any) {
        res.status(400).json({ mensagem: `Erro ao alterar estoque: ${error.message}` });
    }
}

export function deletarEstoque(req: Request, res: Response) {
    try {
        const { id, quantidade } = req.body;
        const sucesso = estoqueService.deleteEstoque(id, quantidade);
        if (sucesso) {
            res.status(200).json({ mensagem: "Estoque removido com sucesso." });
        } else {
            res.status(400).json({ mensagem: "Erro ao deletar estoque." });
        }
    } catch (error: any) {
        res.status(400).json({ mensagem: `Erro ao deletar estoque: ${error.message}` });
    }
}