# Studio Belà — Landing Page de Salão de Beleza (Portfólio)

Landing page fictícia desenvolvida como peça de portfólio, simulando o site de um salão de beleza. Projeto sem vínculo com nenhum negócio real.

## Sobre o projeto

Site institucional de uma página (one-page), com foco em apresentar serviços, galeria de trabalhos, equipe e gerar agendamentos via WhatsApp.

**Objetivo do projeto**: peça de portfólio para prospecção de clientes reais (salões, barbearias, estúdios de beleza) que precisam de presença online profissional.

## Estrutura de arquivos

```
studio-bela/
├── index.html       → estrutura e conteúdo da página
├── css/
│   └── style.css    → todo o estilo visual
└── js/
    └── script.js     → menu mobile (abrir/fechar)
```

## Como visualizar

Não é necessário instalar nada. Basta abrir o arquivo `index.html` diretamente no navegador (duplo clique ou clique direito → Abrir com → navegador de sua preferência).

## Seções da página

| Seção | Conteúdo |
|---|---|
| Header | Logo e menu de navegação (fixo no topo, com efeito de desfoque) |
| Hero | Chamada principal, selo de avaliação e botões de ação |
| Serviços | 4 categorias de serviço com ícone, descrição e preço inicial |
| Galeria | Mosaico de fotos do trabalho e do ambiente do salão |
| Equipe | 3 profissionais fictícias, com foto, cargo e especialidade |
| Avaliações | 3 depoimentos fictícios de clientes |
| Contato | Endereço, horário, telefone, WhatsApp e mapa |
| Footer | Redes sociais e aviso de portfólio |

## Tecnologias usadas

- HTML5 semântico
- CSS3 puro (sem frameworks), com variáveis CSS para o sistema de cores
- JavaScript vanilla (sem bibliotecas), apenas para o menu mobile
- Fontes: Cormorant Garamond (títulos) e Manrope (corpo), via Google Fonts
- Mapa: OpenStreetMap embed (gratuito, sem necessidade de chave de API)
- Imagens: fotos reais de uso livre via Unsplash

## Identidade visual

- **Cores**: rosa, dourado e tons de nude — remetendo a elegância e cuidado pessoal
- **Tipografia**: serifada delicada nos títulos, sans-serif moderna no corpo
- **Layout de galeria**: mosaico assimétrico (fotos grandes e pequenas), diferente do grid padrão
- **Responsivo**: layout se adapta de desktop a celular, com menu hamburguer no mobile

## Diferenças em relação ao projeto Bella Massa

Este projeto foi desenhado com identidade visual e estrutura propositalmente diferentes do projeto de pizzaria, para demonstrar versatilidade de portfólio:

- Paleta de cores totalmente distinta (rosa/dourado vs. vermelho/mostarda)
- Header com efeito de desfoque (glassmorphism leve) em vez de header sólido
- Seção de galeria em mosaico, ausente no outro projeto
- Seção de equipe com fotos circulares e biografia curta
- Selo de avaliação (estrelas + contagem de clientes) já no hero

## Observações importantes

- Todo o conteúdo (nome, endereço, telefone, profissionais, depoimentos) é **fictício**, criado exclusivamente para fins de demonstração.
- As imagens usadas são de banco de imagens livre (Unsplash), sem direitos autorais restritivos.
- Antes de usar este projeto como modelo para um cliente real, substitua:
  - Nome, endereço, telefone e número de WhatsApp
  - Fotos da galeria e da equipe por fotos reais do negócio
  - Coordenadas do mapa pela localização real
  - Depoimentos por avaliações reais de clientes (ou remover a seção até haver avaliações)
  - Preços e serviços pela tabela real do salão

## Autor

Projeto desenvolvido por Icaro Sena como peça de portfólio para prospecção de clientes freelance.
