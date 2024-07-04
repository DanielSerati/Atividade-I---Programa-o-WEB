import { Request, Response } from 'express';
import { VendaPaes, VendaItem } from '../model/vendaPaesModel';
import { EstoquePaes } from '../model/estoquePaesModel';
import { ModalidadePaes } from '../model/modalidadePaesModel';

let vendas: VendaPaes[] = [];
let estoques: EstoquePaes[] = [];
let modalidades: ModalidadePaes[] = [];

export const createVenda = (req: Request, res: Response) => {
  const { cpf, itens } = req.body;

  let total = 0;
  let vendaItens: VendaItem[] = [];

  for (let item of itens) {
    const estoque = estoques.find(est => est.id === item.estoquePaesID);

    if (estoque && estoque.quantidade >= item.quantidade) {
      estoque.quantidade -= item.quantidade;
      const modalidade = modalidades.find(mod => mod.id === estoque.modalidadeID);
      total += item.quantidade * estoque.precoVenda;
      vendaItens.push({ ...item, nome: modalidade ? modalidade.nome : "Desconhecido" });
    } else {
      return res.status(400).json({ message: 'Quantidade insuficiente no estoque!' });
    }
  }

  const novaVenda: VendaPaes = {
    idVenda: vendas.length + 1,
    cpf,
    itens: vendaItens,
    total
  };

  vendas.push(novaVenda);
  res.status(201).json(novaVenda);
};

export const getVendaById = (req: Request, res: Response) => {
  const idVenda = parseInt(req.params.id);
  const venda = vendas.find(v => v.idVenda === idVenda);

  if (venda) {
    res.status(200).json(venda);
  } else {
    res.status(404).json({ message: 'Venda não encontrada!' });
  }
};
