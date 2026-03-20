# CAF Saúde Ambiental - Landing Page

Bem-vindo ao repositório local do site oficial da **CAF Saúde Ambiental**, uma empresa especializada na dedetização e controle definitivo de pragas (baratas, ratos, escorpiões, cupins), operando com protocolos assegurados pela Anvisa.

## 🚀 Stack de Tecnologias

Este projeto foi construído sobre uma base altamente engenhosa e focada de forma obsessiva no "LCP" (Largest Contentful Paint do Google) combinando boas práticas visuais do mercado:

- **Frontend:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **CSS / Estilo:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes Base:** [Shadcn UI](https://ui.shadcn.com/) (integrado estruturalmente com [Radix UI](https://www.radix-ui.com/))
- **Validação de Inputs:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animações e Efeitos:** [Framer Motion](https://www.framer.com/motion/)
- **Ícones em SVG:** [Lucide React](https://lucide.dev/)

## ✨ Arquitetura e Estrutura Principal

* **Formulários à Prova de Gargalos:** Sistema de leads inteligente. O formulário avalia instantaneamente inputs via Hooks de React isolando renderizações desnecessárias. Finalizado com um redirect nativo pré-pronto que salta para o link da API do Whatsapp web.
* **Clean Code & DRY (Don't Repeat Yourself):** Constantes unificadas. Informações triviais (CNPJ, Endereço e Horários) importam de uma "Fonte da Verdade" modular em `src/lib/constants.ts`. Animações iterativas de scroll e ancoragens flexíveis encontram-se limpas em um arquivo à parte de bibliotecas utilitárias `src/lib/animations.ts`. 
* **Rastreamento Avançado de Marketing:** Arquivo próprio em `src/lib/tracking.ts` envelopa chamadas simultâneas de Disparo de Conversão integradas ao Google Tag Manager (`gtag`) e Pixel da Meta/Facebook (`fbq`).
* **Blindado em SEO:** O pacote `index.html` já conta com tags canônicas, Metatags OpenGraph perfeitamente configuradas e até mesmo um dicionário `JSON-LD` identificados pelo spider de busca "Local Business" com o endereço sede da marca.

## 🛠️ Como Executar na Sua Máquina

1. Ter instalado na máquina o **Node.js** e ter baixado ou clonado este diretório.
2. Abra seu terminal nesta pasta e instale localmente todas as dependências usadas:
   ```bash
   npm install
   ```
3. Instancie o robô e abra a versão "Draft" localmente (Hot Reload ativo):
   ```bash
   npm run dev
   ```
4. Navegue pelo endereço mostrado pela IDE (Ex: `http://localhost:8080`).

## 📦 Exportando (Build para Hospedagem)

Use este comando quando todo o Layout for considerado "Oficial".

```bash
npm run build
```

Uma pasta minimalista e minificada em código de máquina web chamada `dist` nascerá no seu projeto, ela terá tudo compiladíssimo em HTML e JS puros. Basta arrastar a pasta `dist` inteira pro painel da Hostgator, Vercel ou cPanel / Locaweb da vida.

## ☁️ Hospedagem Otimizada na Vercel

O projeto foi preparado detalhadamente para entrega na nuvem da **Vercel** através da integração do repositório. Para isso, os seguintes arquivos arquiteturais já estão na raiz do projeto:
- **`vercel.json`**: Força o servidor a carregar as rotas (`SPA Rewrites`) corretamente para não causar "Error 404", e injeta os _Security Headers_ (Cabeçalhos de Segurança Bancária do navegador) que bloqueiam tentativas de clonagem do site (`X-Frame-Options: DENY`) e impulsionam conexão encriptada (HSTS).
- **`.npmrc`**: Regula nativamente a severidade da compilação moderna Node na Vercel, ativando `legacy-peer-deps=true` e impedindo que o deploy *"quebre a build"* por rigor de versão nas bibliotecas utilitárias de UI.

---
Feito com ❤️ por **Carlos**. Reflexo de um setup ágil com performance web de alto padrão para ambientes corporativos reais.
