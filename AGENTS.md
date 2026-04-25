# Instruções para agentes (Cursor / IA)

1. **Leia primeiro** [`docs/PLANO-MVP.md`](docs/PLANO-MVP.md) — contém domínio do negócio, conteúdo extraído do site atual, mapa de páginas, formulário, LGPD, SEO/JSON-LD e checklist de aceite.
2. **Regras do projeto:** [`.cursor/rules/`](.cursor/rules/) — `ascm-site-core.mdc` (sempre) e `ascm-frontend.mdc` (HTML/CSS/JS).
3. **Roadmap:** [`docs/SPRINTS.md`](docs/SPRINTS.md) — não avance sprints sem concluir critérios de aceite da anterior.
4. **Decisões formalizadas:** [`docs/DECISOES-RODADAS.md`](docs/DECISOES-RODADAS.md).

Referência técnica de arquitetura leve (se existir no mesmo workspace): projeto **Transcende** (`../transcende/`) — Vite MPA, `js/main.js` importando `partials/*.html?raw`. Referência de schema contábil: **LGF** (`../lgf/`) — `AccountingService` / `ProfessionalService`, não `LegalService`.
