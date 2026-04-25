# Sprints — ASCM site estático

Pasta do projeto: **`ascm/`**. Spec completa: [`PLANO-MVP.md`](PLANO-MVP.md).

## Sprint 0 — Documentação e governança — **concluído**

- [x] `README.md`, `AGENTS.md`, `.gitignore`, `docs/PLANO-MVP.md`, `docs/DECISOES-RODADAS.md`, `docs/PROMPT-NOVO-CHAT.md`, este ficheiro.
- [x] Regras Cursor em `.cursor/rules/` (`ascm-site-core.mdc`, `ascm-frontend.mdc`).

**Critério de aceite:** um novo chat consegue arrancar só com `docs/PROMPT-NOVO-CHAT.md` + leitura do plano.

## Sprint 1 — Base técnica + shell das 7 páginas — **concluído**

| # | Tarefa |
|---|--------|
| [x] 1.1 | `package.json` + Vite 5; scripts `dev` / `build` / `preview` |
| [x] 1.2 | `vite.config.js`: `rollupOptions.input` com as **7** HTML; `base: /` em produção |
| [x] 1.3 | `js/main.js`: import `?raw` de `partials/nav.html` e `partials/footer.html`; montagem em `#site-header` / `#site-footer`; `data-page` ou pathname para link ativo |
| [x] 1.4 | `partials/nav.html` + `partials/footer.html`: labels Home, Quem Somos, Áreas de Atuação, Profissionais, Clientes, Contato; links para `.html`; rodapé com NAP, disclaimer, redes (LinkedIn + Instagram + placeholders) |
| [x] 1.5 | Sete HTML mínimos com `<main>` placeholder e meta base |
| [x] 1.6 | `css/styles.css`: variáveis **corporativo azul**, tipografia, nav responsiva |

**Critério de aceite:** `npm run build` gera `dist/` com as 7 páginas; navegação entre páginas funciona em `preview`.

## Sprint 2 — Conteúdo, contato, SEO, go-live — **concluído**

| # | Tarefa |
|---|--------|
| [x] 2.1 | Preencher copy conforme `PLANO-MVP.md` (home, quem-somos completo, áreas com 7 títulos, profissionais, clientes com logos) |
| [x] 2.2 | `contato.html`: formulário validado; checkbox LGPD; **sem** POST real; CTA WhatsApp |
| [x] 2.3 | Mapa Google (embed) + CEP e e-mail `contato@ascm.com.br` |
| [x] 2.4 | `privacidade.html` placeholder com menção a cookies do mapa |
| [x] 2.5 | Por página: `title`, `meta description`, Open Graph |
| [x] 2.6 | JSON-LD: `AccountingService`, `ProfessionalService`, `LocalBusiness`, `Organization` (validar com cliente) |
| [x] 2.7 | Favicon/OG placeholder; `esbuild.drop` console em prod (opcional) |

**Critério de aceite:** checklist final em `PLANO-MVP.md` cumprido; revisão cliente em CRC/OAB e marcas em `clientes.html`.

---

## Sprint 3 — Modernização visual (UI/UX) — **concluído**

Objetivo: **refinar a aparência** mantendo a paleta corporativa azul + dourado/cinza do `PLANO-MVP.md` — tipografia contemporânea, hierarquia clara, componentes (hero, cartões, nav, formulário) com aspecto mais atual, **sem** dark mode nem alterar copy/SEO.

| # | Tarefa |
|---|--------|
| [x] 3.1 | Tipografia web (famílias + escalas) e tokens CSS (cores, raios, sombras, transições). |
| [x] 3.2 | Cabeçalho e navegação: marca com subtítulo, estados de foco/hover, menu mobile mais claro. |
| [x] 3.3 | Home e blocos reutilizáveis: hero, imagem, cartões, botões, grelhas (áreas, perfis, clientes). |
| [x] 3.4 | Formulário, mapa, callouts e rodapé alinhados ao novo sistema visual. |
| [x] 3.5 | `prefers-reduced-motion` e contraste preservados. |

**Critério de aceite:** páginas coerentes visualmente em `dev`/`preview`; sem regressão nas regras `.cursor/rules/`; build continua a passar.

---

## Sprint 4 — Go-live, ativos finais e hardening (pós-MVP técnico)

Objetivo: fechar **pendências do cliente e da operação** e **qualidade de produção** / integrações opcionais.

| # | Tarefa |
|---|--------|
| 4.1 | **Validação cliente:** CRC/OAB e biografias em `profissionais.html`; alinhar `<title>` / `og:site_name` / rodapé (“Peritos” vs “Contadores”, ver `PLANO-MVP.md`). |
| 4.2 | **Marcas:** substituir SVGs placeholder em `public/clientes/` por logotipos otimizados autorizados; rever `alt` e nota legal. |
| 4.3 | **Contacto:** número WhatsApp real em `js/site-config.js`; URLs reais LinkedIn/Instagram no rodapé (remover “placeholder”). |
| 4.4 | **Marca digital:** favicon e imagem OG finais; `CANONICAL_ORIGIN` e URLs absolutas se o domínio não for `ascm.com.br`. |
| 4.5 | **Privacidade:** texto definitivo após DPO/advogado; data de revisão; ajustar menções ao formulário se existir envio real (4.7). |
| 4.6 | **Rodapé:** decisão sobre **crédito Agência LCP**; `Person` em JSON-LD só se o cliente aprovar. |
| 4.7 | **Formulário (opcional):** integrar envio (serverless / e-mail) com LGPD; **ou** manter simulado + CTAs. |
| 4.8 | **Deploy e robustez:** Vercel/Netlify, `404.html` se fizer sentido, Lighthouse/a11y. |
| 4.9 | **Analytics (opcional):** após decisão e atualização de `privacidade.html`. |

**Critério de aceite:** checklist em `PLANO-MVP.md` fechado no que depende do cliente; produção com NAP e política alinhados ao tratamento real de dados.
