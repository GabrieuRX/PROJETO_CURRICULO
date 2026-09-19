Vue.createApp({
  data() {
    return {
      perfil: {
        iniciais: 'MM',
        nome: 'Marty McFly',
        cargo: 'Consultor de Cronologia e Especialista em Performance Musical',
        resumo: `Jovem dinâmico, pontual (quando o capacitor de fluxo permite) e com vasta experiência em resolução de paradoxos temporais. Guitarrista talentoso com domínio de técnicas avançadas de shredding antes mesmo de serem inventadas. Experiente em lidar com figuras históricas, direção defensiva de veículos modificados e skate urbano. Nota: Não me chame de frangote.`
      },

      experiencias: [
        {
          titulo: '1985 – Presente | The Pinheads',
          subtitulo: 'Guitarrista Principal',
          texto: `Composição e performance de Rock 'n' Roll. Responsável pela audição da "Batalha das Bandas" (mesmo sendo considerado "barulhento demais" por alguns juízes).`
        },
        {
          titulo: '1955 – Baile Encanto sob o Mar',
          subtitulo: 'Músico Substituto (Guitarra)',
          texto: 'Substituição emergencial do guitarrista Marvin Berry. Responsável pela introdução cultural do gênero Heavy Metal trinta anos antes do previsto.'
        },
        {
          titulo: '1885 – Consultoria de Segurança Hill Valley (Velho Oeste)',
          subtitulo: 'Assistente de Ferreiro',
          texto: 'Auxílio técnico em engenharia ferroviária improvisada e mediação de conflitos com a gangue de Buford "Cachorro Louco" Tannen.'
        },
        {
          titulo: '1985 – Indústrias Biffco',
          subtitulo: 'Sobrevivente Urbano',
          texto: 'Gestão de crises em ambientes distópicos e recuperação de artefatos esportivos (almanaques) para restauração da ordem cronológica.'
        }
      ],

      educacao: [
        {
          titulo: '1986 | Hill Valley High School',
          subtitulo: 'Ensino Médio Completo',
          texto: 'Foco em Artes e Música'
        },
        {
          titulo: '1955 | Cultural Hill Valley',
          subtitulo: 'Intercâmbio',
          texto: 'Estudos intensivos sobre dinâmicas sociais da década de 50 e etiqueta de lanchonetes.'
        },
        {
          titulo: '1985 | Engenharia Aplicada',
          subtitulo: 'Workshop',
          texto: 'Treinamento prático em sistemas de 1.21 Gigawatts e mecânica de DeLorean (sob mentoria do Dr. Emmett Brown).'
        },
        {
          titulo: '2015 | Mobilidade Urbana Futurista',
          subtitulo: 'Treinamento',
          texto: 'Curso intensivo de pilotagem de Hoverboard em superfícies sólidas (atenção: pranchas não funcionam na água sem potência extra).'
        }
      ],

      contato: [
        { rotulo: 'ENDEREÇO', valor: 'Lyon Estates, Hill Valley, CA.' },
        { rotulo: 'E-MAIL',   valor: 'contato@delorean.com' },
        { rotulo: 'TELEFONE', valor: '+55 (88) 8402 8922' }
      ]
    };
  }
}).mount('#app');