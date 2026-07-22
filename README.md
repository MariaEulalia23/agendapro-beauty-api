# AgendaPro Beauty API

API REST desenvolvida como Projeto Integrador do curso **Desenvolvedor Back-End** da Bolsa Futuro Digital (Instituto Hardware / IFRS).

O objetivo do projeto é criar um sistema para gerenciamento de um salão de beleza, permitindo o cadastro de profissionais, serviços, horários de trabalho e agendamentos.

## Tecnologias utilizadas

- Node.js
- Express.js
- MySQL
- DBeaver
- REST Client (Visual Studio Code)
- Git e GitHub

## Estrutura do projeto

```
src/
├── config/
├── controllers/
├── database/
├── middlewares/
├── models/
├── routes/
├── services/
├── tests/
└── utils/

server.js
package.json
```

## Funcionalidades implementadas

### Sprint 1
- Estrutura inicial da API
- Conexão com banco de dados MySQL
- Organização em arquitetura MVC
- Configuração do Express

### Sprint 2
- CRUD completo de profissionais
- CRUD completo de serviços
- Filtro de serviços por área
- Validação básica dos dados recebidos
- Retornos HTTP adequados (200, 201, 400 e 404)
- Testes utilizando REST Client

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/MariaEulalia23/agendapro-beleza-api.git
```

Entre na pasta:

```bash
cd agendapro-beleza-api
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` com as informações do banco de dados.

Inicie o servidor:

```bash
npm run dev
```

A API ficará disponível em:

```
http://localhost:3000
```

## Endpoints implementados

### Profissionais

- GET `/profissionais`
- POST `/profissionais`
- PUT `/profissionais/:id`
- DELETE `/profissionais/:id`

### Serviços

- GET `/servicos`
- GET `/servicos?area_id=1`
- POST `/servicos`
- PUT `/servicos/:id`
- DELETE `/servicos/:id`

## Próximas etapas

- Horários de trabalho
- Horários bloqueados
- Disponibilidade automática
- Agendamentos
- Autenticação JWT
- Relatórios

## Observação

Este projeto foi desenvolvido para fins acadêmicos. Durante o desenvolvimento foram utilizadas ferramentas de Inteligência Artificial, como o ChatGPT, para apoio na consulta de conceitos, esclarecimento de dúvidas, depuração de erros e auxílio na implementação de partes do código. Todas as funcionalidades foram testadas, adaptadas e integradas ao projeto antes de sua utilização.

## Autora

**Maria Eulália Soares Rodrigues**

Projeto Integrador — Curso Desenvolvedor Back-End  
Bolsa Futuro Digital
