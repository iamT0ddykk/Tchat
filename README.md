# TChat

TChat é uma aplicação de chat simples desenvolvida com React, TypeScript e Vite. O projeto apresenta uma interface amigável para o usuário entrar com um apelido, escolher a cor do nome e enviar mensagens em uma conversa local.

## Funcionalidades

- Tela de login com nome de usuário
- Seletor de cor para destacar o nome do usuário
- Área de mensagens com histórico local
- Envio de mensagens com botão e campo de texto
- Layout responsivo com Tailwind CSS

## Tecnologias usadas

- React
- TypeScript
- Vite
- Tailwind CSS

## Requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- Node.js 18 ou superior
- npm

## Instalação

```bash
npm install
```

## Executando o projeto

```bash
npm run dev
```

Depois disso, abra o endereço exibido no terminal no navegador.

## Build de produção

```bash
npm run build
```

O build será gerado na pasta `dist`.

## Estrutura principal

```text
src/
├── App.tsx
├── components/
│   └── Chat/
│       └── index.tsx
├── styles/
└── main.tsx
```

## Observação

Este é um projeto de chat de interface, com armazenamento de mensagens em estado local do frontend. Ele é ideal para aprender React, formulários e gerenciamento de estado em aplicações web.
