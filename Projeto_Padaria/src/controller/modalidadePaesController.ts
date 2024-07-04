import { Request, Response } from 'express';
import { ModalidadePaes } from '../model/modalidadePaesModel';

let modalidades: ModalidadePaes[] = [
  { id: 1, nome: "pao frances", vegano: false },
  { id: 2, nome: "pao australiano", vegano: false },
  { id: 3, nome: "pao de tapioca", vegano: true }
];

export const getTodasModalidades = (req: Request, res: Response) => {
  res.status(200).json(modalidades);
};

export const createModalidade = (req: Request, res: Response) => {
  const newModalidade: ModalidadePaes = {
    id: modalidades.length + 1,
    nome: req.body.nome,
    vegano: req.body.vegano
  };
  modalidades.push(newModalidade);
  res.status(201).json({ message: 'Modalidade criada com sucesso!' });
};

export const updateModalidade = (req: Request, res: Response) => {
  const { id, nome, vegano } = req.body;
  const modalidadeIndex = modalidades.findIndex(mod => mod.id === id);
  
  if (modalidadeIndex >= 0) {
    modalidades[modalidadeIndex] = { id, nome, vegano };
    res.status(200).json({ message: 'Modalidade atualizada com sucesso!' });
  } else {
    res.status(400).json({ message: 'Modalidade não encontrada!' });
  }
};

export const deleteModalidade = (req: Request, res: Response) => {
  const { id } = req.body;
  const modalidadeIndex = modalidades.findIndex(mod => mod.id === id);

  if (modalidadeIndex >= 0) {
    modalidades.splice(modalidadeIndex, 1);
    res.status(202).json({ message: 'Modalidade deletada com sucesso!' });
  } else {
    res.status(400).json({ message: 'Modalidade não encontrada!' });
  }
};

export const getModalidadeById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const modalidade = modalidades.find(mod => mod.id === id);

  if (modalidade) {
    res.status(200).json(modalidade);
  } else {
    res.status(404).json({ message: 'Modalidade não encontrada!' });
  }
};
