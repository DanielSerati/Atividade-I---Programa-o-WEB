import { Request, Response } from 'express';
import { VendaService } from '../service/VendaService';
const vendaService = new VendaService();

export function realizarVenda(req: Request, res: Response) {
    try {
        const venda = vendaService.fazerVenda(req.body);
        res.status(200).json({ mensagem: "Venda realizada com sucesso.", venda });
    } catch (error: any) {
        res.status(400).json({ erro: `Erro ao realizar venda: ${error.message}` });
    }
}

export function recuperarVendaPorID(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const venda = vendaService.consultarVenda(id);
        if (venda) {
            res.status(200).json({ mensagem: `Registro da venda encontrado para o ID: ${id}.`, venda });
        } else {
            res.status(404).json({ mensagem: "Registro da venda não encontrado." });
        }
    } catch (error: any) {
        res.status(400).json({ erro: `Erro ao buscar registro da venda: ${error.message}` });
    }
}