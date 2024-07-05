import express from 'express';
import bodyParser from 'body-parser';
import { criarEstoque, recuperarTodosOsEstoques, recuperarEstoquePorID, alterarEstoque, deletarEstoque } from './controller/estoquePaesController';
import { criarModalidade, recuperarTodasAsModalidades, recuperarModalidadePorID, alterarModalidade, deletarModalidade } from './controller/modalidadePaesController';
import { realizarVenda, recuperarVendaPorID } from './controller/vendaPaesController';

const app = express();
app.use(bodyParser.json());

// Rotas para estoque
app.post('/estoque', criarEstoque);
app.get('/estoque', recuperarTodosOsEstoques);
app.get('/estoque/:id', recuperarEstoquePorID);
app.put('/estoque', alterarEstoque);
app.delete('/estoque', deletarEstoque);

// Rotas para modalidade
app.post('/modalidade', criarModalidade);
app.get('/modalidade', recuperarTodasAsModalidades);
app.get('/modalidade/:id', recuperarModalidadePorID);
app.put('/modalidade', alterarModalidade);
app.delete('/modalidade', deletarModalidade);

// Rotas para venda
app.post('/venda', realizarVenda);
app.get('/venda/:id', recuperarVendaPorID);

export default app;
