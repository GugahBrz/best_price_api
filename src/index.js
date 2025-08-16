import dotenv from 'dotenv';
dotenv.config();

import express, { json } from 'express';
import routes from './routes/index.js';
import sequelize from './config/database.js';

const app = express();
app.use(json());
app.use('/api', routes);

sequelize.authenticate()
  .then(() => console.log('🟢 Banco de dados conectado com sucesso!'))
  .catch(err => console.error('🔴 Erro ao conectar com o banco de dados:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
