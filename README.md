# SouJunior

Landing page da comunidade SouJunior, criada para apresentar o impacto da comunidade e direcionar apoiadores para o Apoia.se.

## Tecnologias

- **React:** biblioteca usada para criar a interface em componentes.
- **Vite:** ferramenta responsável pelo servidor de desenvolvimento e pelo build de produção.
- **Tailwind CSS:** biblioteca de classes utilitárias usada para estilizar a página.
- **Oxlint:** ferramenta usada para encontrar problemas comuns no código.
- **Vercel:** plataforma configurada para publicar o build gerado pelo Vite.

## Estrutura do projeto

```text
.
├── public/              # Arquivos públicos copiados diretamente para o build
├── src/
│   ├── App.jsx          # Componente principal e conteúdo da página
│   ├── index.css        # Tailwind, cores do projeto e estilos globais
│   └── main.jsx         # Ponto de entrada que renderiza o React
├── index.html           # Documento HTML inicial do Vite
├── package.json         # Scripts e dependências do projeto
├── vite.config.js       # Plugins e configuração do Vite
├── vercel.json          # Configuração do build e das rotas na Vercel
└── .gitignore           # Arquivos que não devem ser enviados ao Git
```

## Como instalar

É necessário ter Node.js instalado. Dentro da pasta do projeto, execute:

```bash
npm install
```

Esse comando instala as dependências descritas no `package.json` e cria/atualiza o `package-lock.json`.

## Desenvolvimento

```bash
npm run dev
```

O Vite iniciará um servidor local, normalmente em `http://localhost:5173`. O endereço exato aparecerá no terminal.

## Produção

```bash
npm run build
npm run preview
```

O comando `npm run build` verifica e compila a aplicação para a pasta `dist`. O comando `npm run preview` serve esse build localmente para uma conferência antes do deploy.

## Verificação do código

```bash
npm run lint
```

O Oxlint analisa os arquivos do projeto e informa problemas de regras ou padrões de código.

## Deploy na Vercel

O arquivo `vercel.json` informa à Vercel:

- que o projeto usa Vite;
- que o build deve ser executado com `npm run build`;
- que os arquivos publicados estão na pasta `dist`;
- que as rotas devem retornar `index.html`, mantendo o funcionamento de uma aplicação frontend.

Ao importar o repositório na Vercel, os valores acima normalmente são detectados automaticamente. Depois do deploy, cada novo push na branch conectada pode gerar uma nova publicação.

## Observação sobre os comentários

Os arquivos de código possuem comentários em português explicando a responsabilidade de cada parte para facilitar a entrada de novos desenvolvedores. Arquivos JSON, como `package.json` e `vercel.json`, não recebem comentários porque a sintaxe JSON não permite comentários válidos; a função deles está documentada nesta seção e na estrutura acima.
