# Frontend Challenge 20210823

<p align="center">
  <a href="https://github.com/lgsfarias/challenge-space-flight-news-20210823">
    <img src="./src/assets/rocket.png" alt="readme-logo" width=100" height="100">
  </a>

  <h3 align="center">
    Space Flight News
  </h3>
  <p align="center">
    Um app para ver as últimas notícias sobre o mundo espacial.
    <br />
    <a href="https://github.com/lgsfarias/challenge-space-flight-news-20210823"><strong>Explore the docs »</strong></a>
    <br />
</p>

<p align="center">
  <img src="./src/assets/demo.gif" alt="demo" width="100%">
</p>

## 🎯 Objetivo

Nesse desafio devo desenvolver uma aplicação web para consumir as informações da API Space Flight News, uma API pública com informações relacionadas a voos espaciais.

<br/>

## ⛏️ Ferramentas utilizadas

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-20232A?style=for-the-badge&logo=axios&logoColor=61DAFB)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![NGINX](https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Docker-Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![EsLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

<br/>

## 🏁 instruções de instalação

Para rodar este projeto, você precisará instalar [Node.js](https://nodejs.org/en/).

Clone o repositório

```bash
git clone https://github.com/lgsfarias/challenge-space-flight-news-20210823.git
```

Accesse a pasta do projeto

```bash
cd challenge-space-flight-news-20210823
```

Preencha o arquivo .env com as variáveis de ambiente conforme o arquivo .env.example

```bash
cp .env.example .env
```

Instale as dependências

```bash
npm install
# ou
yarn
```

<br/>

## 🏃🏽 Como rodar o projeto

### Rodando o projeto localmente

```bash
npm run dev
# ou
yarn dev
```

### Rodando o projeto com Docker

```bash
npm run dev:docker
# ou
yarn dev:docker
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

<br/>

## 🧪 Testes

A aplicação possui testes automatizados utilizando o Cypress.

Para rodar os testes, execute o comando:

```bash
npm run cy:run
# ou
yarn cy:run
```

Também é possível rodar os testes utilizando o Cypress abrindo a interface gráfica:

```bash
npm run cy:open
# ou
yarn cy:open
```

<br/>

## 🚀 Produção

Para rodar o projeto em produção será utilizado o Docker com o build do projeto e o nginx para servir o conteúdo estático. Para isso, execute o comando:

```bash
npm run start:docker
# ou
yarn start:docker
```

A aplicação estará disponível em [http://localhost:80](http://localhost:80)

<br/>

## 💻 Deploy

A aplicação está disponível em [https://spaceflightnews.tk/](https://spaceflightnews.tk/)

<br/>

## 📬 Contato

<div>
  <a href="https://www.linkedin.com/in/lgsfarias" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href = "mailto:lgsfarias.dev@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>
