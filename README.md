# PROJETO_CURRICULO

Currículo – Marty McFly

Página de currículo criada a partir do projeto Figma PROJETO CURRÍCULO, feita da forma mais simples possível com HTML5, CSS3, JavaScript e Vue 3.

Como rodar

Não precisa instalar nada. Abra o arquivo index.html no navegador (é necessário internet para carregar o Vue e as fontes).

Estrutura
curriculo/
├── index.html      # estrutura da página (template do Vue)
├── css/style.css   # estilos (cores, fontes, grid e responsividade)
└── js/app.js       # dados do currículo e app Vue
Como funciona

O index.html só descreve o layout. Os textos ficam em js/app.js e o Vue os exibe na página com v-for (experiências, educação e contato).

Como editar
Conteúdo: altere os dados dentro de data() em js/app.js.
Visual: altere as cores e fontes nas variáveis do topo de css/style.css.
Tecnologias

HTML5 · CSS3 (Grid e Flexbox) · JavaScript · Vue 3 (via CDN) · fontes IBM Plex Sans e IBM Plex Mono
