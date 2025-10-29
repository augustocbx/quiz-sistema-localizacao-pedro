// Banco de 60 perguntas sobre orientação e navegação
const QUESTION_BANK = [
    {
        question: "Qual é a estrela que sempre indica o Norte no céu noturno?",
        answers: ["Estrela Polar", "Sirius", "Vega", "Betelgeuse"],
        correctIndex: 0,
        backgroundClass: "bg-stars-night"
    },
    {
        question: "O que significa GPS?",
        answers: ["Sistema de Posicionamento Global", "Guia de Pontos no Solo", "Grande Plano de Satélites", "Geografia por Satélite"],
        correctIndex: 0,
        backgroundClass: "bg-gps-satellite"
    },
    {
        question: "Qual instrumento os navegadores antigos usavam para medir a altura das estrelas?",
        answers: ["Astrolábio", "Telescópio", "Binóculo", "Microscópio"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation"
    },
    {
        question: "Em qual constelação está a Estrela Polar?",
        answers: ["Ursa Menor", "Ursa Maior", "Cruzeiro do Sul", "Órion"],
        correctIndex: 0,
        backgroundClass: "bg-constellation"
    },
    {
        question: "Quantos satélites são necessários para o GPS determinar sua posição?",
        answers: ["No mínimo 4", "Apenas 1", "Exatamente 2", "No mínimo 10"],
        correctIndex: 0,
        backgroundClass: "bg-gps-satellite"
    },
    {
        question: "Qual constelação é mais usada para orientação no Hemisfério Sul?",
        answers: ["Cruzeiro do Sul", "Ursa Maior", "Órion", "Escorpião"],
        correctIndex: 0,
        backgroundClass: "bg-southern-cross"
    },
    {
        question: "O que é uma bússola?",
        answers: ["Instrumento que aponta para o Norte magnético", "Mapa do céu", "Tipo de telescópio", "Relógio antigo"],
        correctIndex: 0,
        backgroundClass: "bg-compass"
    },
    {
        question: "Qual astro os navegadores usavam durante o dia para se orientar?",
        answers: ["O Sol", "A Lua", "Vênus", "Marte"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "Qual aplicativo moderno usa GPS para navegação?",
        answers: ["Google Maps", "WhatsApp", "Instagram", "Netflix"],
        correctIndex: 0,
        backgroundClass: "bg-smartphone-gps"
    },
    {
        question: "O que as pessoas observavam nas estrelas para navegar?",
        answers: ["Constelações e posições", "Cores das estrelas", "Tamanho das estrelas", "Quantidade de brilho"],
        correctIndex: 0,
        backgroundClass: "bg-stars-night"
    },
    {
        question: "Qual é o nome do polo celeste que fica no hemisfério norte?",
        answers: ["Polo Norte Celeste", "Equador Celeste", "Meridiano Celeste", "Zênite Norte"],
        correctIndex: 0,
        backgroundClass: "bg-celestial-pole"
    },
    {
        question: "Em que ano o GPS foi disponibilizado para uso civil?",
        answers: ["1995", "2000", "1980", "2010"],
        correctIndex: 0,
        backgroundClass: "bg-gps-history"
    },
    {
        question: "Qual era o principal problema de navegação antes do GPS?",
        answers: ["Determinar a longitude exata", "Ver as estrelas", "Ler mapas", "Usar bússola"],
        correctIndex: 0,
        backgroundClass: "bg-map-coordinates"
    },
    {
        question: "O que é um sextante?",
        answers: ["Instrumento para medir ângulos entre astros", "Tipo de bússola", "Mapa estelar", "Telescópio naval"],
        correctIndex: 0,
        backgroundClass: "bg-sextant"
    },
    {
        question: "Qual estrela é a mais brilhante do céu noturno?",
        answers: ["Sirius", "Estrela Polar", "Sol", "Lua"],
        correctIndex: 0,
        backgroundClass: "bg-stars-night"
    },
    {
        question: "Como os navegadores determinavam as horas antes dos relógios precisos?",
        answers: ["Pela posição do Sol e das estrelas", "Contando os dias", "Usando velas", "Medindo a temperatura"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "Qual país desenvolveu o sistema GPS?",
        answers: ["Estados Unidos", "Brasil", "China", "Rússia"],
        correctIndex: 0,
        backgroundClass: "bg-gps-satellite"
    },
    {
        question: "O que significa latitude?",
        answers: ["Distância em relação ao Equador", "Distância em relação ao Polo Norte", "Altura do mar", "Profundidade do oceano"],
        correctIndex: 0,
        backgroundClass: "bg-map-coordinates"
    },
    {
        question: "Qual é a constelação conhecida como 'As Três Marias'?",
        answers: ["Órion", "Ursa Maior", "Cruzeiro do Sul", "Escorpião"],
        correctIndex: 0,
        backgroundClass: "bg-orion"
    },
    {
        question: "Os satélites GPS orbitam a Terra a que altura aproximadamente?",
        answers: ["20.000 km", "100 km", "1.000 km", "50.000 km"],
        correctIndex: 0,
        backgroundClass: "bg-gps-satellite"
    },
    {
        question: "Qual fenômeno natural pode atrapalhar sinais de GPS?",
        answers: ["Tempestades solares", "Chuva forte", "Vento", "Neblina"],
        correctIndex: 0,
        backgroundClass: "bg-solar-storm"
    },
    {
        question: "Como se chama a linha imaginária que divide a Terra em Norte e Sul?",
        answers: ["Equador", "Meridiano", "Trópico", "Paralelo"],
        correctIndex: 0,
        backgroundClass: "bg-earth-equator"
    },
    {
        question: "Qual civilização antiga era famosa por navegar usando as estrelas?",
        answers: ["Fenícios", "Incas", "Maias", "Astecas"],
        correctIndex: 0,
        backgroundClass: "bg-stars-night"
    },
    {
        question: "O que é longitude?",
        answers: ["Distância em relação ao Meridiano de Greenwich", "Distância em relação ao Equador", "Altura da montanha", "Profundidade do mar"],
        correctIndex: 0,
        backgroundClass: "bg-map-coordinates"
    },
    {
        question: "Qual aplicação usa GPS para rastrear exercícios físicos?",
        answers: ["Aplicativos de corrida e caminhada", "Redes sociais", "Jogos de tabuleiro", "Editores de texto"],
        correctIndex: 0,
        backgroundClass: "bg-smartphone-gps"
    },
    {
        question: "O que os marinheiros antigos chamavam de 'Rosa dos Ventos'?",
        answers: ["Diagrama que mostra as direções", "Tipo de estrela", "Constelação", "Instrumento de navegação"],
        correctIndex: 0,
        backgroundClass: "bg-compass-rose"
    },
    {
        question: "Qual é a velocidade aproximada de um sinal de GPS?",
        answers: ["Velocidade da luz", "Velocidade do som", "1000 km/h", "100 km/h"],
        correctIndex: 0,
        backgroundClass: "bg-gps-satellite"
    },
    {
        question: "Como os povos originários brasileiros se orientavam nas florestas?",
        answers: ["Observando o Sol, árvores e rios", "Usando bússolas", "Com GPS", "Com mapas de papel"],
        correctIndex: 0,
        backgroundClass: "bg-forest-navigation"
    },
    {
        question: "Qual fase da Lua ajudava os navegadores a ter mais luz à noite?",
        answers: ["Lua Cheia", "Lua Nova", "Quarto Crescente", "Quarto Minguante"],
        correctIndex: 0,
        backgroundClass: "bg-full-moon"
    },
    {
        question: "Onde fica o Meridiano de Greenwich?",
        answers: ["Inglaterra", "Brasil", "Estados Unidos", "França"],
        correctIndex: 0,
        backgroundClass: "bg-greenwich"
    },
    {
        question: "Qual estrela está mais próxima da Terra?",
        answers: ["O Sol", "Sírius", "Estrela Polar", "Vega"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "O que é necessário para usar o GPS no celular?",
        answers: ["Sinal de satélite", "Internet sempre ligada", "Bateria de carro", "Cabo especial"],
        correctIndex: 0,
        backgroundClass: "bg-smartphone-gps"
    },
    {
        question: "Como se chama o movimento aparente das estrelas no céu?",
        answers: ["Movimento diurno", "Órbita estelar", "Rotação estelar", "Translação celeste"],
        correctIndex: 0,
        backgroundClass: "bg-stars-night"
    },
    {
        question: "Qual instrumento moderno substituiu o sextante nos navios?",
        answers: ["GPS e sistemas eletrônicos", "Bússola digital", "Telescópio", "Radar"],
        correctIndex: 0,
        backgroundClass: "bg-modern-navigation"
    },
    {
        question: "O que causa as marés que os navegadores precisam conhecer?",
        answers: ["Atração gravitacional da Lua", "Vento forte", "Temperatura da água", "Rotação da Terra"],
        correctIndex: 0,
        backgroundClass: "bg-moon-tides"
    },
    {
        question: "Quantas constelações oficiais existem no céu?",
        answers: ["88", "12", "50", "100"],
        correctIndex: 0,
        backgroundClass: "bg-constellation"
    },
    {
        question: "Qual o nome do sistema russo similar ao GPS?",
        answers: ["GLONASS", "GALILEO", "BEIDOU", "NAVSTAR"],
        correctIndex: 0,
        backgroundClass: "bg-satellite-systems"
    },
    {
        question: "Como os navegadores mediam a velocidade do navio antigamente?",
        answers: ["Com a barquinha de arrasto", "Contando ondas", "Observando as estrelas", "Usando relógio"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation"
    },
    {
        question: "Por que as estrelas parecem se mover no céu?",
        answers: ["Pela rotação da Terra", "Elas realmente se movem rápido", "Por causa do vento", "Por ilusão de ótica"],
        correctIndex: 0,
        backgroundClass: "bg-stars-night"
    },
    {
        question: "Qual tecnologia moderna ajuda aviões a pousar com segurança?",
        answers: ["GPS e sistemas de navegação", "Bússola magnética", "Observação de estrelas", "Mapas de papel"],
        correctIndex: 0,
        backgroundClass: "bg-airplane-gps"
    },
    {
        question: "Se você colocar uma vara no chão pela manhã, em que direção a sombra dela aponta?",
        answers: ["Para o Oeste", "Para o Leste", "Para o Norte", "Para o Sul"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "Quando você vê o Sol se pôr no final do dia, você está olhando para qual direção?",
        answers: ["Oeste", "Leste", "Norte", "Sul"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "Os navegadores antigos usavam um instrumento chamado 'ampulheta' durante as viagens. Para que servia?",
        answers: ["Para medir o tempo durante a viagem", "Para ver as estrelas", "Para medir a temperatura", "Para guardar água"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation"
    },
    {
        question: "Qual destes instrumentos antigos era usado para desenhar mapas dos lugares descobertos?",
        answers: ["Compasso (de desenho)", "Microscópio", "Termômetro", "Calculadora"],
        correctIndex: 0,
        backgroundClass: "bg-map-coordinates"
    },
    {
        question: "Antes da bússola, os navegadores chineses se orientavam usando um objeto que flutuava na água. O que era?",
        answers: ["Uma colher magnética de pedra-ímã", "Uma folha seca", "Um peixe de madeira", "Uma estrela de metal"],
        correctIndex: 0,
        backgroundClass: "bg-compass"
    },
    {
        question: "Por que os exploradores antigos preferiam viajar observando o céu em noites sem nuvens?",
        answers: ["Para ver as estrelas e se orientar", "Para não pegar chuva", "Para economizar comida", "Para dormir melhor"],
        correctIndex: 0,
        backgroundClass: "bg-stars-night"
    },
    {
        question: "Quantos satélites GPS estão orbitando a Terra neste momento?",
        answers: ["Mais de 30 satélites", "Apenas 4 satélites", "Apenas 1 satélite", "Nenhum, o GPS usa torres"],
        correctIndex: 0,
        backgroundClass: "bg-gps-satellite"
    },
    {
        question: "Como funcionam os relógios de sol que existem em praças e jardins?",
        answers: ["A sombra de uma haste indica as horas conforme o Sol se move", "Eles têm pilhas escondidas", "Medem a temperatura", "Contam os pássaros que passam"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "Em florestas úmidas, os musgos crescem mais no lado da árvore que recebe menos Sol. No Brasil, esse lado é:",
        answers: ["Sul", "Norte", "Leste", "Oeste"],
        correctIndex: 0,
        backgroundClass: "bg-forest-navigation"
    },
    {
        question: "Por que a Estrela Polar é tão importante para navegação no hemisfério norte?",
        answers: ["Ela fica praticamente parada no céu, sempre indicando o Norte", "Ela é a estrela mais brilhante", "Ela muda de cor", "Ela só aparece no verão"],
        correctIndex: 0,
        backgroundClass: "bg-stars-night"
    },
    {
        question: "O que o seu celular recebe do espaço para saber onde você está?",
        answers: ["Sinais de satélites GPS", "Luz das estrelas", "Ondas de rádio FM", "Mensagens de outros celulares"],
        correctIndex: 0,
        backgroundClass: "bg-smartphone-gps"
    },
    {
        question: "Os aviões modernos usam GPS para voar. O que aconteceria se o GPS parasse de funcionar?",
        answers: ["Eles usariam outros sistemas de navegação como rádio e radar", "Todos os aviões cairiam", "Os aviões não poderiam mais voar", "Nada, aviões não usam GPS"],
        correctIndex: 0,
        backgroundClass: "bg-airplane-gps"
    },
    {
        question: "Quando você abre o Google Maps no celular, o que o pontinho azul mostra?",
        answers: ["Sua localização atual", "Sua casa", "O lugar mais próximo", "Onde tem Wi-Fi"],
        correctIndex: 0,
        backgroundClass: "bg-smartphone-gps"
    },
    {
        question: "A bússola do celular funciona porque dentro dele existe um sensor que detecta o quê?",
        answers: ["O campo magnético da Terra", "A luz do Sol", "O vento", "A chuva"],
        correctIndex: 0,
        backgroundClass: "bg-compass"
    },
    {
        question: "Por que é difícil usar o GPS dentro de shoppings e túneis?",
        answers: ["Os sinais dos satélites não passam bem pelas paredes e teto", "O GPS desliga sozinho", "É proibido usar GPS nesses lugares", "Os satélites estão muito longe"],
        correctIndex: 0,
        backgroundClass: "bg-modern-navigation"
    },
    {
        question: "No modo avião, o que ainda funciona no seu celular?",
        answers: ["A bússola", "As ligações telefônicas", "O WhatsApp", "O YouTube"],
        correctIndex: 0,
        backgroundClass: "bg-airplane-gps"
    },
    {
        question: "Quando você compartilha sua localização com alguém pelo WhatsApp, você está enviando o quê?",
        answers: ["Suas coordenadas (latitude e longitude)", "Uma foto sua", "Seu endereço de casa", "Seu número de telefone"],
        correctIndex: 0,
        backgroundClass: "bg-map-coordinates"
    },
    {
        question: "O GPS dos carros mostra o caminho na tela. Como ele sabe quando você vira uma esquina?",
        answers: ["Ele detecta que sua posição mudou de direção", "Ele adivinha", "O motorista pressiona um botão", "Ele escuta o barulho do carro"],
        correctIndex: 0,
        backgroundClass: "bg-modern-navigation"
    },
    {
        question: "Jogos como Pokémon GO usam GPS para fazer o quê?",
        answers: ["Mostrar onde você está no mapa e colocar personagens em lugares reais", "Aumentar a velocidade do jogo", "Deixar o celular mais rápido", "Economizar bateria"],
        correctIndex: 0,
        backgroundClass: "bg-smartphone-gps"
    },
    {
        question: "Qual é a vantagem de usar vários sistemas de satélites (GPS, GLONASS, Galileo) ao mesmo tempo no celular?",
        answers: ["A localização fica mais precisa e confiável", "O celular fica mais rápido", "Gasta menos bateria", "A tela fica maior"],
        correctIndex: 0,
        backgroundClass: "bg-satellite-systems"
    }
];
