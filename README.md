# 🍕 PizzaShop Web

> **Sistema de Gerenciamento para Pizzarias** - Uma aplicação web moderna e completa para gerenciar pedidos, acompanhar métricas de negócio e administrar restaurantes de forma eficiente.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Testing](https://img.shields.io/badge/Testing-Vitest%20+%20Playwright-4CAF50?style=flat-square)](https://vitest.dev/)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
- [Testes](#testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Sobre o Projeto

O **PizzaShop Web** é uma aplicação de gerenciamento completa para pizzarias, desenvolvida com as mais modernas tecnologias web. O sistema oferece um dashboard abrangente com métricas de negócio, gerenciamento de pedidos em tempo real e uma interface intuitiva para administradores de restaurantes.

### 🎨 Interface Moderna
- Design responsivo com **Tailwind CSS**
- Componentes reutilizáveis com **ShadCN/UI**
- Tema escuro/claro
- Animações suaves e transições

### ⚡ Performance
- Construído com **Vite** para desenvolvimento rápido
- **React Query** para cache inteligente de dados
- Componentes otimizados com **React 18**

## 🚀 Funcionalidades

### 📊 Dashboard Administrativo
- **Métricas Financeiras**: Receita mensal e diária
- **Estatísticas de Pedidos**: Quantidade de pedidos e cancelamentos
- **Gráficos Interativos**: Visualização de receita e produtos populares
- **Cards de Performance**: Indicadores visuais de desempenho

### 📦 Gerenciamento de Pedidos
- **Listagem Completa**: Visualização de todos os pedidos
- **Filtros Avançados**: Por ID, cliente, status
- **Paginação**: Navegação eficiente entre páginas
- **Status em Tempo Real**: Acompanhamento do ciclo de vida dos pedidos
- **Detalhes Completos**: Informações detalhadas de cada pedido

### 🔐 Autenticação e Perfil
- **Login Seguro**: Autenticação com validação
- **Perfil do Restaurante**: Gerenciamento de dados da empresa
- **Menu de Conta**: Navegação intuitiva

### 🎭 Estados de Pedidos
- **Pendente**: Aguardando aprovação
- **Processando**: Em preparação
- **A Caminho**: Saiu para entrega
- **Entregue**: Finalizado
- **Cancelado**: Pedido cancelado

## 🛠 Tecnologias

### Frontend
- **[React 18.3.1](https://reactjs.org/)** - Biblioteca para interfaces de usuário
- **[TypeScript 5.6.2](https://www.typescriptlang.org/)** - Tipagem estática
- **[Vite 6.0.5](https://vitejs.dev/)** - Build tool moderna
- **[React Router DOM 7.4.0](https://reactrouter.com/)** - Roteamento
- **[TanStack Query 5.64.1](https://tanstack.com/query)** - Gerenciamento de estado servidor
- **[React Hook Form 7.54.2](https://react-hook-form.com/)** - Formulários
- **[Zod 3.24.1](https://zod.dev/)** - Validação de esquemas

### Estilização
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Framework CSS utilitário
- **[ShadCN/UI](https://ui.shadcn.com/)** - Componentes de interface
- **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos acessíveis
- **[Lucide React](https://lucide.dev/)** - Ícones
- **[Recharts](https://recharts.org/)** - Gráficos e visualizações

### Testes
- **[Vitest 3.0.0](https://vitest.dev/)** - Framework de testes unitários
- **[Playwright 1.50.0](https://playwright.dev/)** - Testes end-to-end
- **[Testing Library](https://testing-library.com/)** - Utilitários de teste
- **[MSW](https://mswjs.io/)** - Mock Service Worker

### Desenvolvimento
- **[ESLint](https://eslint.org/)** - Linting de código
- **[Prettier](https://prettier.io/)** - Formatação de código
- **[Auto Import](https://github.com/antfu/unplugin-auto-import)** - Importações automáticas

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **[Node.js](https://nodejs.org/)** (versão 18 ou superior)
- **[npm](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**
- **[Git](https://git-scm.com/)**

## 🚀 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/pizzashop-web.git
   cd pizzashop-web
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente** (se necessário)
   ```bash
   cp .env.example .env.local
   ```

## ▶️ Executando o Projeto

### Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```
Acesse: `http://localhost:5173`

### Build de Produção
```bash
npm run build
# ou
yarn build
```

### Preview da Build
```bash
npm run preview
# ou
yarn preview
```

### Linting
```bash
npm run lint
# ou
yarn lint
```

## 🧪 Testes

### Testes Unitários (Vitest)
```bash
npm test
# ou
yarn test
```

### Testes E2E (Playwright)
```bash
npx playwright test
```

### Testes com UI do Playwright
```bash
npx playwright test --ui
```

### Executar testes em modo watch
```bash
npm run test -- --watch
```

## 📁 Estrutura do Projeto

```
pizzashop-web/
├── 📁 public/                 # Arquivos estáticos
├── 📁 src/
│   ├── 📁 api/               # Chamadas para API e mocks
│   │   ├── 📁 mocks/         # Mock Service Worker handlers
│   │   └── *.ts              # Funções de API
│   ├── 📁 components/        # Componentes reutilizáveis
│   │   ├── 📁 ui/           # Componentes base do ShadCN
│   │   └── *.tsx            # Componentes customizados
│   ├── 📁 lib/              # Utilitários e configurações
│   ├── 📁 pages/            # Páginas da aplicação
│   │   ├── 📁 app/          # Páginas autenticadas
│   │   │   ├── 📁 dashboard/ # Dashboard e métricas
│   │   │   └── 📁 orders/   # Gerenciamento de pedidos
│   │   ├── 📁 auth/         # Páginas de autenticação
│   │   └── 📁 _layouts/     # Layouts das páginas
│   ├── 📁 assets/           # Imagens e recursos
│   ├── app.tsx              # Componente raiz
│   ├── main.tsx             # Ponto de entrada
│   └── router.tsx           # Configuração de rotas
├── 📁 test/                 # Testes E2E
├── 📁 test-results/         # Resultados dos testes
├── 📁 playwright-report/    # Relatórios do Playwright
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

### 🔑 Principais Diretórios

- **`src/api/`**: Contém todas as chamadas para API e mocks para desenvolvimento
- **`src/components/`**: Componentes reutilizáveis e UI base
- **`src/pages/`**: Páginas da aplicação organizadas por contexto
- **`src/lib/`**: Configurações do Axios, React Query e utilitários
- **`test/`**: Testes end-to-end com Playwright

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork o projeto**
2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Commit suas mudanças**
   ```bash
   git commit -m 'feat: adiciona nova funcionalidade'
   ```
4. **Push para a branch**
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. **Abra um Pull Request**

### 📝 Padrões de Commit
Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação
- `refactor:` refatoração
- `test:` testes
- `chore:` tarefas de manutenção

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>Desenvolvido com ❤️ para pizzarias modernas</p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div>
