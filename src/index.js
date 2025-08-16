require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const sequelize = require('./config/database');

app.use(express.json());
app.use('/api', routes);

sequelize.authenticate()
  .then(() => console.log('🟢 Banco de dados conectado com sucesso!'))
  .catch(err => console.error('🔴 Erro ao conectar com o banco de dados:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
