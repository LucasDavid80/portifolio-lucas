# Portfólio - Lucas David

[![CI Pipeline](https://github.com/LucasDavid80/portifolio-lucas/actions/workflows/ci.yml/badge.svg)](https://github.com/LucasDavid80/portifolio-lucas/actions/workflows/ci.yml)
[![Vercel Deploy](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)](https://portifolio-lucas-pi.vercel.app)

Portfólio profissional e catálogo interativo de projetos de **Lucas David**, estudante de Engenharia de Software no Inatel. Desenvolvido com foco em alta performance, usabilidade moderna, testes automatizados e integração contínua (CI/CD).

🌐 **Acesse online:** [portifolio-lucas-pi.vercel.app](https://portifolio-lucas-pi.vercel.app)

---

## 🏛️ Arquitetura do Projeto

O projeto é estruturado em formato monorepo modular:

- **`frontend/`**: Aplicação web moderna construída em **Next.js 16 (App Router)**, **React 19** e estilizada com **Tailwind CSS v4**. Inclui página inicial de destaques e a galeria completa de projetos (`/projetos`) com filtros interativos.
- **`backend/`**: API REST desenvolvida em **NestJS**, com **Prisma ORM** e banco de dados relacional (PostgreSQL).
- **`core/`**: Biblioteca compartilhada de tipos, entidades e regras de domínio reutilizáveis entre frontend e backend.

---

## 🧪 Testes Automatizados

O projeto possui cobertura de testes automatizados unitários, de componentes e de integração (E2E):

- **Frontend:** Executados com **Vitest**, **React Testing Library** e **jsdom** para validar renderização de componentes e interatividade de filtros.
- **Backend:** Executados com **Jest** e **@nestjs/testing** para validar controllers, serviços e fluxos de integração HTTP.

### Comandos de Teste:

```bash
# Executa todas as suítes de teste (Backend + Frontend)
npm test

# Executa apenas os testes do backend
npm run test:backend

# Executa apenas os testes do frontend
npm run test:frontend
```

---

## 🚀 Pipeline de CI/CD (GitHub Actions)

A cada `push` ou `pull_request` direcionado para a branch `main`, o pipeline automatizado ([.github/workflows/ci.yml](.github/workflows/ci.yml)) executa:

1. **Backend Job:**
   - Instalação limpa de dependências (`npm ci`)
   - Geração dos clientes Prisma (`npx prisma generate`)
   - Execução dos testes unitários e de integração (`npm test` e `npm run test:e2e`)
   - Compilação estática do NestJS (`npm run build`)
2. **Frontend Job:**
   - Instalação limpa de dependências (`npm ci`)
   - Execução dos testes de componentes e páginas (`npm test`)
   - Build de produção do Next.js com geração estática (`npm run build`)
3. **Continuous Deployment (CD):**
   - Deploy contínuo automático através da integração com a plataforma **Vercel**.

---

## 💻 Como Executar Localmente

### Pré-requisitos:
- Node.js >= 20.x (Recomendado 22.x)
- NPM >= 10.x

### Passos:

1. Clone o repositório:
```bash
git clone https://github.com/LucasDavid80/portifolio-lucas.git
cd portifolio-lucas
```

2. Instale as dependências:
```bash
npm --prefix backend install
npm --prefix frontend install
```

3. Inicie os servidores em modo de desenvolvimento:
```bash
npm run dev
```

Acesse no navegador:
- **Frontend:** `http://localhost:3000`
- **Galeria de Projetos:** `http://localhost:3000/projetos`
- **Backend API:** `http://localhost:3001` (ou porta configurada)
