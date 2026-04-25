# Prompt pronto — novo chat na pasta `ascm/`

**Passo 1:** no Cursor, abra a pasta `ascm` como raiz do projeto (ou workspace com esta pasta).

**Passo 2:** inicie um novo chat e **cole o bloco abaixo** (pode preencher o último parágrafo com o objetivo da sessão).

---

## Texto a colar no chat

```text
Estás a trabalhar no repositório ASCM (site estático da A.S. Couto & Monteiro Contadores Associados).

Obrigatório antes de escreveres código:
1. Lê `docs/PLANO-MVP.md` na íntegra — é a spec única (negócio, páginas, copy, NAP, LGPD, SEO, checklist).
2. Lê `AGENTS.md` e `.cursor/rules/ascm-site-core.mdc` + `ascm-frontend.mdc`.
3. Lê `docs/SPRINTS.md` e `docs/DECISOES-RODADAS.md`.

Regras duras do MVP (não contradizer o PLANO-MVP):
- Stack: Vite multipágina (MPA), HTML/CSS/JS vanilla; partials HTML importados em JS com `?raw` e injetados em `#site-header` / `#site-footer` (padrão alinhado ao projeto de referência Transcende).
- Sete ficheiros HTML no build: `index.html`, `quem-somos.html`, `areas.html`, `profissionais.html`, `clientes.html`, `contato.html`, `privacidade.html`.
- `base` do Vite em produção: raiz `/` (Vercel/Netlify).
- Idioma: pt-BR. Sem integração real de envio de formulário no MVP (validação + feedback UX; submit simulado ou mensagem clara).
- Formulário: nome, e-mail, assunto, mensagem + checkbox LGPD obrigatório com link para `privacidade.html`.
- Incluir CTA WhatsApp (número placeholder configurável num único sítio) além de tel/fax/e-mail do NAP.
- Omitir item “Insights/Publicações” da navegação principal (decisão fechada).
- Disclaimer institucional só no rodapé; JSON-LD: AccountingService / ProfessionalService + LocalBusiness (São Paulo), não LegalService como foco principal.
- Visual: corporativo azul (escuro, branco, acento dourado ou cinza); imagens stock B2B com créditos.
- Não inventar números CRC/OAB além dos que constam no PLANO-MVP; confirmar com o cliente antes do go-live.

Objetivo desta sessão (preenche):
→ **Sprint 4 (go-live):** ver `docs/SPRINTS.md` (4.1–4.9) — validações cliente, ativos finais, deploy. **Sprint 3** = modernização visual (já descrita no roadmap).
```

---

## Dicas

- Para **só** alinhar copy ou plano, diz “atualiza `docs/PLANO-MVP.md` com …” em vez de pedir código.
- O site legado em produção é [https://ascm.com.br/](https://ascm.com.br/) — usar como referência de conteúdo; o PLANO-MVP já contém extrações das subpáginas.
