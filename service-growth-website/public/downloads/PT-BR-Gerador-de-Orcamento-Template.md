# 🧾 Gerador de Orçamento Profissional — Template com IA

### Por ServiceGrowth.ai | Ferramentas de IA para Empresas de Serviço

---

## 📖 O Que É Isso?

Esse é um template de prompt para IA. Você cola no **Claude** (uma ferramenta de IA gratuita), preenche os dados da sua empresa, e ele gera instantaneamente um orçamento premium e interativo — com efeito de vidro (glassmorphism), modo escuro/claro, upload de logo, e exportação para PDF.

**Sem programação. Sem design. Sem assinatura.** Só copiar, colar, preencher e baixar.

---

## 🤖 Passo 1: Acesse o Claude (GRÁTIS)

1. Acesse **claude.ai** no computador ou celular
2. Clique em **"Sign Up"** (Cadastrar) — é grátis, pode usar Google, e-mail ou Apple
3. Depois de logado, você verá uma caixa de chat — é ali que você cola o prompt abaixo

> **O que é o Claude?** É um assistente de IA da Anthropic. Pense nele como o ChatGPT, mas muito bom em gerar código e documentos. O plano gratuito já é suficiente para gerar seu orçamento.

---

## ✂️ Passo 2: Copie o Prompt Abaixo

Copie **TUDO** dentro da caixa abaixo — da primeira até a última linha.

~~~
Você é um desenvolvedor frontend sênior. Construa um único arquivo HTML autossuficiente (NÃO React, NÃO JSX — HTML/CSS/JS puro) que é um gerador de orçamento profissional com efeito glassmorphism. Deve funcionar simplesmente abrindo o arquivo HTML no navegador — sem ferramentas de build, sem npm, sem frameworks.

IMPORTANTE: Todos os textos e labels do orçamento devem estar em PORTUGUÊS BRASILEIRO (PT-BR). Isso inclui: labels como "Valor Total", "Data de Vencimento", "Nº do Orçamento", "Data de Emissão", "Orçamento Para", "Endereço do Projeto", "Desc. dos Serviços", "Qtd.", "Valor (R$)", "Desc.", "Imposto", "Total (R$)", "Método de Pagamento", "Por Extenso", "Subtotal", "Aceito Por", "Assinatura", "Informações de Pagamento", "Nosso Processo", e todos os outros textos visíveis. Use o símbolo R$ para valores e formato brasileiro de números (1.000,00). A função de valor por extenso deve gerar em português (ex: "Dezessete Mil e Oitenta Reais").

<dados_empresa>
Nome da Empresa: [SEU NOME EM MAIÚSCULAS — ex: "ELITE"]
Subtítulo da Empresa: [SEU SUBTÍTULO — ex: "REFORMAS & CONSTRUÇÃO"]
Endereço Linha 1: [SEU ENDEREÇO — ex: "Rua das Flores, 123"]
Endereço Linha 2: [CIDADE, ESTADO, CEP — ex: "São Paulo, SP 01001-000"]
País: [ex: "Brasil"]
Telefone: [SEU TELEFONE — ex: "(11) 99999-0000"]
Email: [SEU EMAIL — ex: "contato@elitereformas.com.br"]
Website: [SEU SITE — ex: "www.elitereformas.com.br"]
</dados_empresa>

<servicos_padrao>
Estes são meus serviços/fases típicas de trabalho, em ordem. Cada um tem um preço padrão:

1. [SERVIÇO — ex: "Visita Técnica & Avaliação"] — Preço: [ex: 0]
2. [SERVIÇO — ex: "Projeto & Seleção de Materiais"] — Preço: [ex: 3000]
3. [SERVIÇO — ex: "Compra de Materiais"] — Preço: [ex: 8500]
4. [SERVIÇO — ex: "Demolição & Preparação"] — Preço: [ex: 5000]
5. [SERVIÇO — ex: "Instalação / Execução"] — Preço: [ex: 25000]
6. [SERVIÇO — ex: "Limpeza & Vistoria Final"] — Preço: [ex: 1500]

(Adicione ou remova linhas conforme necessário.)
</servicos_padrao>

<etapas_processo>
Para a seção "Nosso Processo" abaixo do orçamento, liste cada fase:

1. [TÍTULO — ex: "Avaliação"] — [UMA FRASE — ex: "Visita técnica no local com medições e levantamento das necessidades."]
2. [TÍTULO — ex: "Projeto"] — [UMA FRASE — ex: "Renderizações 3D, seleção de materiais e proposta detalhada."]
3. [TÍTULO — ex: "Materiais"] — [UMA FRASE — ex: "Compra de materiais premium de fornecedores confiáveis."]
4. [TÍTULO — ex: "Preparação"] — [UMA FRASE — ex: "Demolição, nivelamento e preparação do terreno."]
5. [TÍTULO — ex: "Execução"] — [UMA FRASE — ex: "Equipe especializada executa com precisão e qualidade."]
6. [TÍTULO — ex: "Entrega"] — [UMA FRASE — ex: "Vistoria final com o cliente e documentação de garantia."]
</etapas_processo>

<pagamento>
Métodos de pagamento e detalhes:
- [ex: "PIX: contato@elitereformas.com.br"]
- [ex: "Transferência: Banco do Brasil, Ag 1234, CC 56789-0"]
- [ex: "Boleto: Sob consulta"]

Taxa de imposto: [ex: "0" se não cobra imposto separado, ou "10" para 10%]
Moeda: BRL (Reais)
</pagamento>

<cliente_exemplo>
Cliente exemplo padrão mostrado no orçamento:
Nome do Cliente: [ex: "Carlos Silva"]
Endereço Linha 1: [ex: "Av. Paulista, 1000, Apto 42"]
Endereço Linha 2: [ex: "São Paulo, SP 01310-100"]
País: [ex: "Brasil"]
</cliente_exemplo>

<especificacao_design>
Esta é uma especificação RÍGIDA de design. Siga exatamente.

FORMATO DO ARQUIVO:
- Um único arquivo .html autossuficiente
- Sem React, sem JSX, sem npm — HTML + CSS + JavaScript puro
- Carregar Google Font 'Nunito Sans' via tag <link> (pesos: 300,400,500,600,700,800,900)
- Deve funcionar simplesmente abrindo o arquivo no navegador

FONTE:
- 'Nunito Sans' para TUDO — é uma sans-serif moderna, arredondada, com terminais suaves
- Sem fontes serifadas, sem fontes pontiagudas/angulares
- Nome da empresa: 48px, peso 900, letter-spacing -0.5px
- Subtítulo: 11px, peso 600, letter-spacing 5px, maiúsculas
- Labels de seção: 9.5px, peso 700, letter-spacing 1.8px, maiúsculas
- Texto corpo: 12-13px
- Cabeçalho da tabela: 9px, peso 800, letter-spacing 1.8px, maiúsculas

CORES — APENAS PRETO E CREME, controladas via CSS custom properties no :root (escuro) e classe .cream (claro):
- MODO ESCURO (padrão):
  --bg: #0A0A0A; --glass: rgba(18,18,18,0.55); --glass-border: rgba(255,255,255,0.06); --glass-hi: rgba(255,255,255,0.03); --tx: #E8E5DF; --tx2: #8A8780; --stripe: rgba(255,255,255,0.015); --foot: rgba(12,12,12,0.6); --inp: rgba(255,255,255,0.04); --accent: #E8E5DF; --orb1: rgba(120,100,60,0.12); --orb2: rgba(80,70,50,0.08); --orb3: rgba(60,55,45,0.1); --grid: rgba(255,255,255,0.02); --tool: rgba(16,16,16,0.7); --tbl-rule: rgba(232,229,223,0.25)
- MODO CREME (classe .cream no body):
  --bg: #E4E0D7; --glass: rgba(245,243,237,0.5); --glass-border: rgba(0,0,0,0.06); --glass-hi: rgba(255,255,255,0.5); --tx: #1A1916; --tx2: #7A776F; --stripe: rgba(0,0,0,0.018); --foot: rgba(230,227,220,0.6); --inp: rgba(0,0,0,0.03); --accent: #C13B2A; --orb1: rgba(193,59,42,0.07); --orb2: rgba(180,160,120,0.1); --orb3: rgba(160,140,100,0.08); --grid: rgba(0,0,0,0.03); --tool: rgba(245,243,237,0.65); --tbl-rule: rgba(26,25,22,0.2)

EFEITOS DE FUNDO (atrás do card do orçamento):
1. GRADE — Linhas de 80px usando cor --grid, fixo, viewport inteiro
2. TRÊS ORBES FLUTUANTES — Círculos com gradiente radial (500-600px), cores --orb, blur(80-100px), animações CSS lentas de drift (18s, 22s, 15s infinite)
3. TEXTURA GRANULADA — Overlay SVG feTurbulence, fixo, opacidade baixa
4. LINHAS DIAGONAIS — Linhas SVG sutis cruzando o viewport

CARD DO ORÇAMENTO — GLASSMORPHISM:
- background: var(--glass); backdrop-filter: blur(40px) saturate(1.5); border: 1px solid var(--glass-border); border-radius: 16px
- box-shadow: 0 24px 80px rgba(0,0,0,0.4), inset 0 1px 0 var(--glass-hi) para escuro; mais leve para creme
- Max-width 820px centralizado
- SHIMMER: gradiente que varre o topo (120px), animação 8s infinite
- DESTAQUE DE BORDA: linha gradient de 1px no topo
- Animação fade-up na entrada

BARRA DE FERRAMENTAS: Barra de vidro fosco acima do orçamento com: label "Gerador de Orçamento", botão "Enviar Logo", toggle "Editar", toggle de tema (sol/lua), botão "Imprimir / PDF". Todos os botões com estilo glass.

LAYOUT dentro do card, nesta ordem exata:
1. CABEÇALHO: Logo (escondido até upload, 56x56 com moldura glass) + nome da empresa (48px 900wt) + subtítulo. Label "ORÇAMENTO" no lado direito.
2. DADOS DA EMPRESA: Endereço esquerda, contato direita, texto pequeno.
3. FAIXA META: 4 colunas — Valor Total, Data de Vencimento, Nº do Orçamento, Data de Emissão. Labels minúsculas em maiúsculas.
4. LINHA DO CLIENTE: "Orçamento Para" esquerda, "Endereço do Projeto" direita.
5. TABELA DE SERVIÇOS: #, Descrição, Qtd, Valor (R$), Desconto, Imposto, Total (R$). Borda 2px no cabeçalho, 1px nas linhas, listras alternadas. Modo edição: inputs + botões deletar/adicionar.
6. PAGAMENTO + TOTAIS: Método de pagamento + valor por extenso esquerda. Subtotal/Imposto/Total direita com borda 2px no total.
7. ASSINATURAS: "Aceito Por" esquerda, "Assinatura" direita com linhas.
8. RODAPÉ: Vidro fosco. Info de pagamento esquerda. Nome + logo pequeno direita.

ABAIXO DO ORÇAMENTO: "Nosso Processo" com grid 3 colunas de cards glass — número do passo (28px leve), título (bold), descrição (muted).

FUNCIONALIDADES: Toggle escuro/creme via classe .cream + CSS vars. Upload de logo no cabeçalho+rodapé. Modo edição com contenteditable + inputs na tabela. Auto-recalcular totais em R$. Valor por extenso em português. Imprimir/PDF via window.print() com CSS limpo para impressão.

RESPONSIVO: Abaixo de 700px empilhar layout, meta em 2 colunas, process cards em 1 coluna.
</especificacao_design>
~~~

---

## ✂️ PARE DE COPIAR AQUI ✂️

---

## 📋 Passo 3: Cole no Claude

1. Abra o **claude.ai**
2. Clique na caixa de chat
3. **Cole tudo** que você copiou
4. **Substitua cada campo `[ENTRE COLCHETES]`** com as informações reais da sua empresa
5. Aperte **Enter**
6. Espere uns 30-60 segundos — o Claude vai gerar seu orçamento completo

---

## 📥 Passo 4: Baixe e Use

1. O Claude vai mostrar um **arquivo HTML** — clique no **botão de download** para salvar
2. **Abra o arquivo** em qualquer navegador (Chrome, Safari, Edge)
3. Clique em **"Enviar Logo"** para adicionar o logo da sua empresa
4. Clique em **"Editar"** para mudar nome do cliente, datas, serviços, preços
5. Use o botão **☀/☽** para alternar entre tema escuro e claro
6. Clique em **"Imprimir / PDF"** para salvar um PDF limpo — envie para seu cliente

---

## 💡 Exemplo Preenchido (Empresa de Reforma)

~~~
Nome da Empresa: ELITE
Subtítulo: REFORMAS & CONSTRUÇÃO
Endereço Linha 1: Rua das Flores, 123
Endereço Linha 2: São Paulo, SP 01001-000
País: Brasil
Telefone: (11) 99999-0000
Email: contato@elitereformas.com.br
Website: www.elitereformas.com.br

Serviços:
1. Visita Técnica Gratuita — Preço: 0
2. Projeto & Orçamento Detalhado — Preço: 0
3. Compra de Materiais — Preço: 8500
4. Demolição & Preparação — Preço: 5000
5. Execução da Obra — Preço: 25000
6. Limpeza & Entrega Final — Preço: 1500

Etapas do Processo:
1. Avaliação — Visita técnica no local com medições e análise das necessidades.
2. Projeto — Renderizações 3D, seleção de materiais e proposta detalhada.
3. Materiais — Compra de materiais premium de fornecedores confiáveis.
4. Preparação — Demolição, nivelamento e preparação do espaço.
5. Execução — Equipe especializada executa com precisão e qualidade.
6. Entrega — Vistoria final com o cliente e documentação de garantia.

Pagamento:
- PIX: contato@elitereformas.com.br
- Transferência: Banco do Brasil, Ag 1234, CC 56789-0
Taxa de imposto: 0

Cliente Exemplo:
Carlos Silva, Av. Paulista, 1000, Apto 42, São Paulo, SP 01310-100, Brasil
~~~

---

## 🏗️ Funciona para Qualquer Empresa de Serviço

| Área | Exemplo de Serviços |
|------|---------------------|
| **Pedreiro / Pavimentação** | Avaliação, Projeto, Compra de Material, Instalação, Acabamento, Entrega |
| **Pintura** | Consulta de Cores, Preparação, Primer, Pintura, Retoques, Vistoria |
| **Elétrica** | Inspeção, Projeto, Licenças, Instalação, Testes, Certificação |
| **Encanamento** | Diagnóstico, Orçamento, Peças, Reparo/Instalação, Teste, Garantia |
| **Limpeza** | Avaliação, Proposta, Limpeza Pesada, Manutenção, Qualidade, Acompanhamento |
| **Paisagismo** | Análise do Terreno, Projeto, Plantas, Instalação, Irrigação, Manutenção |
| **Ar-Condicionado** | Inspeção, Cálculo de Carga, Seleção, Instalação, Teste, Plano de Manutenção |
| **Marcenaria** | Medição, Projeto, Material, Fabricação, Instalação, Acabamento |
| **Serralheria** | Medição, Projeto, Material, Fabricação, Instalação, Pintura |
| **Piscina** | Inspeção, Teste de Água, Tratamento, Equipamentos, Limpeza, Relatório |

---

## 🔄 Quer Fazer Mudanças Depois?

Basta digitar na mesma conversa do Claude:

- *"Aumenta o nome da empresa"*
- *"Muda a taxa de imposto para 10%"*
- *"Adiciona um 7º serviço chamado 'Plano de Manutenção Anual' por R$500"*
- *"Remove a seção de processo"*
- *"Muda a cor do accent para azul #2563EB"*
- *"Adiciona uma seção de termos e condições antes das assinaturas"*

---

## 📱 Mensagem para Instagram DM (copie e cole para seus seguidores)

> Opa! 👋 Aqui está o template que te gera um orçamento profissional com IA em menos de 1 minuto.
>
> 📄 **Como usar:**
> 1. Acesse claude.ai (é grátis)
> 2. Crie uma conta
> 3. Copie o prompt do arquivo que te mandei
> 4. Troque os campos [ENTRE COLCHETES] com os dados da sua empresa
> 5. Cole no chat do Claude e aperte Enter
> 6. Baixe o arquivo HTML que ele gerar
> 7. Abra no navegador, coloque seu logo, edite os dados do cliente, e salve como PDF
>
> Pronto! Orçamento profissional em 30 segundos. 🚀
>
> Qualquer dúvida me chama aqui!

---

**Feito com 🤖 por ServiceGrowth.ai** — Crescimento com IA para empresas de serviço.

📱 DM @matthews.ai no Instagram | 🌐 servicegrowth.ai
