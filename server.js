const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear o body das requisições
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Captura todas as rotas
app.all('/*', (req, res) => {
    console.log('--- Nova Requisição ---');
    console.log('Método:', req.method);
    console.log('URL:', req.originalUrl);
    console.log('Cabeçalhos:', req.headers);
    console.log('Query Params:', req.query);
    console.log('Body:', req.body);

    res.send('Dados recebidos. Confira o console do servidor.');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
