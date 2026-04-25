# Plano MVP — ASCM site institucional (contabilidade / perícia / ATC)

**Empresa:** A.S. Couto & Monteiro Contadores Associados (**ASCM**).  
**Segmento:** perícias contábeis judiciais e extrajudiciais, assistência técnica contábil, ATC, perito do juízo, contingenciamento trabalhista, M&A, atuação com empresas e escritórios de advocacia.  
**Não é** um site de “escritório de advocacia” como produto principal — o foco é **contabilidade / perícia**; advocacia aparece no ecossistema (clientes e um profissional OAB).

---

## Fonte canónica e marca

- **URL do site atual:** [https://ascm.com.br/](https://ascm.com.br/)
- **`<title>` legado (home):** `A.S. Couto & Monteiro Peritos & Associados - Perícias Contábeis - SP` — no corpo usa-se **“Contadores Associados”**. **Pendente com cliente:** uma linha única para `<title>`, `og:site_name` e rodapé (alinhar “Peritos” vs “Contadores”).

---

## Navegação alvo (MVP)

Home · Quem Somos · Áreas de Atuação · Profissionais · Clientes · Contato · **Política de privacidade** (rodapé + checkbox no formulário).

**Fora do MVP na nav:** “Insights / Publicações”.

---

## Home (`index.html`) — mensagens-chave (site atual)

1. Boas-vindas + **A.S. COUTO & MONTEIRO CONTADORES ASSOCIADOS** + CTA Contato + “**30 anos** de atuação na área de **perícias contábeis** de natureza **judicial e extrajudicial**.”
2. “**30 anos** de experiência” + “Conheça mais” + “Profissionais altamente qualificados”.
3. “**Cálculos periciais contábeis**” + CTA Contato + “Agilidade, eficiência e rapidez”.

---

## Quem somos (`quem-somos.html`) — copy oficial

Fonte: [https://ascm.com.br/quem-somos/](https://ascm.com.br/quem-somos/). Migrar **integralmente** (só ajustar HTML/acentos com aprovação do cliente):

1. O escritório **A.S. Couto & Monteiro Contadores Associados** atua há mais de **30 anos** na área de perícias contábeis de natureza judicial e extrajudicial, em especial no atendimento de empresas e escritórios de advocacia, abrangendo todos os aspectos que dizem respeito à perícia contábil na esfera judicial ou extra-judicial.
2. Com o intuito de dar ao cliente um atendimento personalizado e abrangente, contamos com **três sócios** com larga experiência na área e uma equipe de profissionais altamente treinados nas diversas áreas de atuação englobadas pela Perícia.
3. É motivo de orgulho para nós a **agilidade, eficiência e rapidez** com que conseguimos atender nossos clientes, adequando o trabalho de equipe, ou individualmente, conforme o caso, visando à resolução dos problemas que nos são colocados.
4. Visando atingir nossos objetivos e atender amplamente as expectativas dos nossos clientes, contamos com um **sistema integrado de informática** que nos permite agilizar os trabalhos solicitados, possibilitando contato ágil, rápido e seguro através de e-mail ou acesso em nuvem (cloud computing). Todos os nossos trabalhos são processados e impressos em sistema computadorizado, sendo os processos analisados e confeccionados individualmente sem qualquer utilização de programas específicos que restringem a adequação personalizada que cada caso exige.
5. Nossa carteira de clientes nos possibilita atuar em áreas distintas, pois atendemos empresas que atuam em diversos ramos de atividades como: **bancário, segurança patrimonial, transporte de valores, industrial** e diversos **escritórios de advocacia**.
6. Também, por meio dos escritórios de advocacia temos a oportunidade de ampliar nosso campo de atuação, tendo em vista que atendemos **indiretamente** (pois os clientes não são ligados diretamente ao nosso escritório) empresas que atuam nos ramos de: **tabaco e cigarros, montadoras de veículos, indústria química e farmacêutica, eletrônica, serviços, mercado de capitais** dentre outros.
7. Além das atuações como **Assistente Técnico Contábil** e **Perito do Juízo**, nosso escritório se especializou, atendendo uma necessidade dos nossos clientes, em **contingenciamento de passivos trabalhistas** com a finalidade de subsidiar as empresas na administração e provisão dos passivos envolvidos. Tais levantamentos também se estendem aos clientes interessados na **compra, venda e fusão** de empresas. Temos atuado, por meio dos escritórios de advocacia que atendemos, em praticamente todas as **recentes privatizações relevantes** que ocorreram.

---

## Áreas de atuação (`areas.html`)

No WordPress atual não foi encontrada rota dedicada (`/areas-de-atuacao/` → 404); as **7 áreas** aparecem na **home**. No novo site: página dedicada com os **mesmos títulos**:

1. Cálculos para Acordo  
2. Subsídios para Embargar à Execução ou Agravar Petição  
3. Contratos Bancários  
4. Cálculos de Provisionamento de Passivos  
5. Recolhimentos Previdenciários e Fiscais  
6. Manifestação de Cálculos de Liquidação  
7. Assistência Técnica Contábil  

Texto longo institucional permanece em **`quem-somos.html`**.

---

## Profissionais (`profissionais.html`)

Fonte: [https://ascm.com.br/profissionais/](https://ascm.com.br/profissionais/)

| Nome | Texto resumido (validar com cliente) |
|------|--------------------------------------|
| **Adalmário Satheler do Couto Júnior** | Contador CRC/SP **1SP167071/0-2**; perícia desde **1986**; perito indicado pelo juízo em varas de SP e Litoral. |
| **Lazinho Monteiro Junior** | Contador CRC/SP **1SP196541/0-7**; perícia desde **1991**. |
| **Ricardo Soares** | Advogado OAB/SP **224.322**; advocacia e perícia contábil. |

**JSON-LD `Person`:** só após confirmação explícita do cliente.

---

## Clientes (`clientes.html`)

Fonte: [https://ascm.com.br/clientes/](https://ascm.com.br/clientes/)

- Título: **“Alguns dos Nossos Clientes”**.
- Marcas com logo no legado (hospedar cópias otimizadas ou pedir ficheiros ao cliente): Machado Meyer, Abril, Brandi Advogados, Protege, Pinheiro Neto, Trench Rossi, Economus, Fogo de Chão, Araújo Policastro, FIS, Marcusso, Banco do Brasil.

---

## Contato (`contato.html`)

Fonte: [https://ascm.com.br/contato/](https://ascm.com.br/contato/)

- **Morada:** Rua Turiassú, 390 – 14º andar – conj. 141 e 145 · **CEP:** 05005-000 · Perdizes – São Paulo – SP  
- **Tel:** (11) 3875-6050 · **Fax:** (11) 3875-6048 · **E-mail:** contato@ascm.com.br  
- **Formulário (MVP):** nome (obrigatório), e-mail (obrigatório), assunto, mensagem + **checkbox LGPD** → `privacidade.html`. Sem envio real (POST) no MVP.  
- **WhatsApp:** CTA presente; **número** configurável num único sítio (placeholder até o cliente fornecer).  
- **Mapa:** embed Google Maps; mencionar cookies/privacidade em `privacidade.html`.

---

## Rodapé / créditos

Legado: “©2016 … Desenvolvido por Agência LCP”. Novo site: **ano dinâmico**; decisão sobre manter ou alterar crédito da agência.

---

## Visual e imagens

- **Paleta:** corporativo azul (escuro + branco + dourado ou cinza).  
- **Stock:** perícia / dados / B2B / escritório — créditos obrigatórios; evitar hero exclusivamente “tribunal”.  
- **Dark mode:** fora do MVP.

---

## Compliance e SEO

- **Disclaimer:** só **rodapé** global — informação geral; não é consultoria jurídica nem parecer contábil vinculante via formulário web.  
- **LGPD:** checkbox obrigatório no contacto + página `privacidade.html` (placeholder com nota “revisão DPO/advogado”).  
- **JSON-LD:** `AccountingService`, `ProfessionalService`, `LocalBusiness` (NAP São Paulo), `Organization` — **não** usar `LegalService` como tipo principal.  
- **Meta + Open Graph:** por página.

---

## Mapa de ficheiros (implementação)

| Ficheiro | Nav |
|----------|-----|
| `index.html` | Home |
| `quem-somos.html` | Quem Somos |
| `areas.html` | Áreas de Atuação |
| `profissionais.html` | Profissionais |
| `clientes.html` | Clientes |
| `contato.html` | Contato |
| `privacidade.html` | (link rodapé + form) |

Mais: `vite.config.js` com `rollupOptions.input` para as 7 páginas; `js/main.js`; `css/styles.css`; `partials/nav.html`; `partials/footer.html`; `public/` para logos.

---

## Referência técnica (monorepo Cursor)

- **Transcende** (`../transcende/`): Vite MPA, `import nav from '../partials/nav.html?raw'`.  
- **LGF** (`../lgf/`): JSON-LD contábil, toasts, padrões institucionais.

Se o projeto for **só** a pasta `ascm/` noutro disco, use apenas esta documentação e o padrão descrito (sem depender de pastas irmãs).

---

## Checklist de aceite MVP

- [ ] 7 páginas no `dist/`; `base: /` para Vercel/Netlify.  
- [ ] Visual corporativo azul + stock B2B com créditos.  
- [ ] `quem-somos.html` com os 7 parágrafos oficiais.  
- [ ] `areas.html` com os 7 títulos.  
- [ ] `profissionais.html` com os 3 perfis (CRC/OAB confirmados).  
- [ ] `clientes.html` com grelha de logos + `alt` acessíveis.  
- [ ] `contato.html`: formulário + LGPD + WhatsApp + NAP + mapa; submit simulado.  
- [ ] Disclaimer só rodapé; `privacidade.html` placeholder.  
- [ ] JSON-LD contábil + LocalBusiness (SP).  
- [ ] Favicon/OG placeholder; sem analytics no go-live inicial.  
- [ ] Crédito agência LCP: decisão explícita.

---

## Riscos

- Copy regulatória e menções a setores sensíveis: **validação pelo cliente**.  
- Logos em `clientes.html`: direitos de marca e ficheiros otimizados.  
- CRC/OAB: confirmar atualização antes do go-live.  
- Mapa: cookies / privacidade documentados.
