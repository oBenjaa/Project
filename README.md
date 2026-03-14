# Express + TypeScript — Servidor de Páginas Estáticas

Projeto de servidor web simples utilizando **Express** e **TypeScript** para servir páginas HTML estáticas. Ideal para quem está começando com Node.js e quer entender como funciona um servidor web na prática.

## Tecnologias utilizadas

| Tecnologia | Função |
|---|---|
| Node.js | Ambiente de execução |
| Express | Framework para criação do servidor |
| TypeScript | Tipagem e segurança no desenvolvimento |
| ts-node | Execução direta de arquivos `.ts` |
| Nodemon | Reinício automático durante o desenvolvimento |

## Estrutura do projeto
```
project/
├── src/
│   ├── public/
│   │   └── index.html
│   └── index.ts
├── package.json
└── tsconfig.json
```

## Como executar

Clone o repositório e instale as dependências:
```bash
git clone https://github.com/oBenjaa/Project.git
cd seu-repositorio
npm install
```

Inicie o servidor em modo desenvolvimento:
```bash
npm run dev
```

Acesse no navegador: **http://localhost:3000**

## Build para produção
```bash
npm run build
npm start
```

Developed with ❤️ by [Benja](https://github.com/oBenjaa)
