# ScrEv-Project

# Pré-Requisitos

- Instalar Node.js
- Instalar MySQL

# Funcionais
 - Criar uma base com nome "screv" (MySQL).
   - rodar o comando na raiz do projeto com git bash (Preferencialmente).
    - npx sequelize-cli db:migrate

# Variaveis de ambiente
  - Criar arquivo com nome ".env" contendo seu usuário e senha do banco MySQL previamente configurado, instalado e no ar em localhost.
    - Onde <USER_SQL>, substituir pelo seu usuário do banco.
    - Onde <USER_PASSWORD>, substituir pelo sua senha.
  
USER = <USER_SQL>
PASSWORD = <USER_PASSWORD>

# Instalar dependencias

Abrir o cmd dentro da pasta do projeto
executar os comandos abaixo, uma linha de cada vez em ordem.
  - npm i
  - cd front
  - npm i
  - cd ..
# Executar a Aplicacao
  - npm run dev
  Nota: Deve ser executado no diretório raiz da aplicação.

Caso ocorra com sucesso, ira abrir uma pagina na porta 3000 com a pagina da aplicação.

# ESTE PROJETO ESTÁ SOB LICENCIAMENTO GPLV3
