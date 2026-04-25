# ASCM — A.S. Couto & Monteiro Contadores Associados

Repositório do **novo site institucional** (MVP estático), alinhado ao site atual [https://ascm.com.br/](https://ascm.com.br/). Stack prevista: **Vite + HTML/CSS/JS** multipágina, estilo [Transcende](../transcende) (partials via `?raw`).

## Documentação (ler nesta ordem)

1. [`docs/PROMPT-NOVO-CHAT.md`](docs/PROMPT-NOVO-CHAT.md) — **copiar e colar** num novo chat com esta pasta como raiz.
2. [`docs/PLANO-MVP.md`](docs/PLANO-MVP.md) — spec única: domínio, copy, NAP, decisões, checklist, riscos.
3. [`docs/DECISOES-RODADAS.md`](docs/DECISOES-RODADAS.md) — tabelas das rodadas de spec (5–10) e stack.
4. [`docs/SPRINTS.md`](docs/SPRINTS.md) — ordem de implementação por sprint.
5. [`AGENTS.md`](AGENTS.md) — instruções curtas para agentes (Cursor / IA).

## Regras Cursor

Ficheiros em [`.cursor/rules/`](.cursor/rules/) — carregam contexto automático conforme `alwaysApply` / `globs`.

## Estado do código

**Sprints 1–3** estão implementadas: MPA Vite 5, partials, copy conforme [`docs/PLANO-MVP.md`](docs/PLANO-MVP.md), formulário em `contato.html` (validação + LGPD, envio simulado), mapa, `privacidade.html`, SEO/OG, JSON-LD, assets em `public/`, e **Sprint 3** — UI modernizada (`DM Sans` + `Source Serif 4`, hero, cartões, nav com marca em duas linhas, formulário e rodapé refinados). **Sprint 4** no [`docs/SPRINTS.md`](docs/SPRINTS.md) cobre go-live (CRC/OAB, marcas, WhatsApp, domínio canónico, etc.).

## Monorepo vs repositório só ASCM

Se abrir **só** esta pasta noutro ambiente, pode não existir a pasta irmã `transcende/` — nesse caso use apenas o texto de `docs/PLANO-MVP.md` (secção técnica) e o padrão descrito, sem depender de caminhos relativos ao monorepo.
