import { Request, Response } from 'express';
import { EstoquePaes } from '../model/estoquePaesModel';

let estoques: EstoquePaes[] = [];

export const getTodosEstoque = (req: Request, res: Response) => {
  res.status(200).json(estoques);
};

export const createEstoque = (req: Request, res: Response) => {
  const newEstoque: EstoquePaes = {
      id: estoques.length + 1,
      modalidadeID: req.body.modalidadeID,
      quantidade: req.body.quantidade,
      precoVenda: req.body.precoVenda,
      precoPromocional: 0
  };
  estoques.push(newEstoque);
  res.status(201).json({ message: 'Estoque adicionado com sucesso!' });
};

export const updateEstoque = (req: Request, res: Response) => {
  const { id, quantidade, precoVenda } = req.body;
  const estoqueIndex = estoques.findIndex(est => est.id === id);

  if (estoqueIndex >= 0) {
    estoques[estoqueIndex].quantidade += quantidade;
    estoques[estoqueIndex].precoVenda = precoVenda;
    res.status(200).json({ message: 'Estoque atualizado com sucesso!' });
  } else {
    res.status(400).json({ message: 'Estoque não encontrado!' });
  }
};

export const deleteEstoque = (req: Request, res: Response) => {
  const { id, quantidade } = req.body;
  const estoqueIndex = estoques.findIndex(est => est.id === id);

  if (estoqueIndex >= 0) {
    if (estoques[estoqueIndex].quantidade >= quantidade) {
      estoques[estoqueIndex].quantidade -= quantidade;
      res.status(200).json({ message: 'Quantidade removida do estoque com sucesso!' });
    } else {
      res.status(400).json({ message: 'Quantidade insuficiente no estoque!' });
    }
  } else {
    res.status(400).json({ message: 'Estoque não encontrado!' });
  }
};

export const getEstoqueById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const estoque = estoques.find(est => est.id === id);

  if (estoque) {
    res.status(200).json(estoque);
  } else {
    res.status(404).json({ message: 'Estoque não encontrado!' });
  }
};
