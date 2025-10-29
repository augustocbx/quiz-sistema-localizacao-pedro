// Banco de perguntas sobre orientação e navegação
const QUESTION_BANK = [
    {
        question: "O que significa GPS?",
        answers: ["Sistema de Posicionamento Global", "Guia de Pontos no Solo", "Grande Plano de Satélites", "Geografia por Satélite"],
        correctIndex: 0,
        backgroundClass: "bg-gps-satellite"
    },
    {
        question: "Qual direção você está olhando quando vê o Sol nascer pela manhã?",
        answers: ["Leste", "Oeste", "Norte", "Sul"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "Quantos satélites são necessários para o GPS determinar sua posição?",
        answers: ["No mínimo 4", "Apenas 1", "Exatamente 2", "No mínimo 10"],
        correctIndex: 0,
        backgroundClass: "bg-gps-satellite",
        difficulty: "hard"
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
        question: "Em que ano o GPS foi disponibilizado para uso civil?",
        answers: ["2000", "1995", "1980", "2010"],
        correctIndex: 0,
        backgroundClass: "bg-gps-history",
        difficulty: "veryHard"
    },
    {
        question: "Para que lado a bússola sempre aponta?",
        answers: ["Norte", "Sul", "Leste", "Oeste"],
        correctIndex: 0,
        backgroundClass: "bg-compass"
    },
    {
        question: "O que os navegadores antigos usavam para saber as horas durante a viagem?",
        answers: ["Ampulheta (relógio de areia)", "Celular", "Relógio digital", "Calculadora"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation"
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
        question: "Onde ficam os satélites que fazem o GPS funcionar?",
        answers: ["No espaço, muito acima das nuvens", "No fundo do mar", "Dentro da Terra", "Em prédios muito altos"],
        correctIndex: 0,
        backgroundClass: "bg-gps-satellite"
    },
    {
        question: "Qual fenômeno natural pode atrapalhar sinais de GPS?",
        answers: ["Tempestades solares", "Chuva forte", "Vento", "Neblina"],
        correctIndex: 0,
        backgroundClass: "bg-solar-storm",
        difficulty: "hard"
    },
    {
        question: "Como se chama a linha imaginária que divide a Terra em Norte e Sul?",
        answers: ["Equador", "Meridiano", "Trópico", "Paralelo"],
        correctIndex: 0,
        backgroundClass: "bg-earth-equator",
        difficulty: "hard"
    },
    {
        question: "Qual civilização antiga era famosa por navegar usando as estrelas?",
        answers: ["Fenícios", "Incas", "Maias", "Astecas"],
        correctIndex: 0,
        backgroundClass: "bg-stars-night",
        difficulty: "hard"
    },
    {
        question: "O que é longitude?",
        answers: ["Distância em relação ao Meridiano de Greenwich", "Distância em relação ao Equador", "Altura da montanha", "Profundidade do mar"],
        correctIndex: 0,
        backgroundClass: "bg-map-coordinates",
        difficulty: "hard"
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
        backgroundClass: "bg-compass-rose",
        difficulty: "hard"
    },
    {
        question: "Qual é a velocidade aproximada de um sinal de GPS?",
        answers: ["Velocidade da luz", "Velocidade do som", "1000 km/h", "100 km/h"],
        correctIndex: 0,
        backgroundClass: "bg-gps-satellite",
        difficulty: "veryHard"
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
        backgroundClass: "bg-greenwich",
        difficulty: "hard"
    },
    {
        question: "Qual estrela está mais próxima da Terra?",
        answers: ["O Sol", "Sírius", "Estrela Polar", "Vega"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation",
        difficulty: "hard"
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
        backgroundClass: "bg-stars-night",
        difficulty: "veryHard"
    },
    {
        question: "O que causa as marés que os navegadores precisam conhecer?",
        answers: ["Atração gravitacional da Lua", "Vento forte", "Temperatura da água", "Rotação da Terra"],
        correctIndex: 0,
        backgroundClass: "bg-moon-tides",
        difficulty: "veryHard"
    },
    {
        question: "Qual o nome do sistema russo similar ao GPS?",
        answers: ["GLONASS", "GALILEO", "BEIDOU", "NAVSTAR"],
        correctIndex: 0,
        backgroundClass: "bg-satellite-systems",
        difficulty: "veryHard"
    },
    {
        question: "Como os navegadores mediam a velocidade do navio antigamente?",
        answers: ["Com a barquinha de arrasto", "Contando ondas", "Observando as estrelas", "Usando relógio"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation",
        difficulty: "veryHard"
    },
    {
        question: "Por que as estrelas parecem se mover no céu?",
        answers: ["Pela rotação da Terra", "Elas realmente se movem rápido", "Por causa do vento", "Por ilusão de ótica"],
        correctIndex: 0,
        backgroundClass: "bg-stars-night",
        difficulty: "hard"
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
        question: "Qual destes instrumentos antigos era usado para desenhar mapas dos lugares descobertos?",
        answers: ["Compasso (de desenho)", "Microscópio", "Termômetro", "Calculadora"],
        correctIndex: 0,
        backgroundClass: "bg-map-coordinates"
    },
    {
        question: "Antes da bússola, os navegadores chineses se orientavam usando um objeto que flutuava na água. O que era?",
        answers: ["Uma colher magnética de pedra-ímã", "Uma folha seca", "Um peixe de madeira", "Uma estrela de metal"],
        correctIndex: 0,
        backgroundClass: "bg-compass",
        difficulty: "hard"
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
        backgroundClass: "bg-gps-satellite",
        difficulty: "hard"
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
        backgroundClass: "bg-smartphone-gps"
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
        backgroundClass: "bg-smartphone-gps",
        difficulty: "hard"
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
        question: "Qual região desenvolveu o sistema de navegação por satélite Galileo?",
        answers: ["União Europeia", "Estados Unidos", "Japão", "Austrália"],
        correctIndex: 0,
        backgroundClass: "bg-satellite-systems",
        difficulty: "veryHard"
    },
    {
        question: "Qual o nome do sistema de navegação por satélite da China?",
        answers: ["BeiDou", "SkyMap", "ChinaGPS", "DragonSat"],
        correctIndex: 0,
        backgroundClass: "bg-satellite-systems",
        difficulty: "veryHard"
    },
    {
        question: "O que é um gnômon?",
        answers: ["Uma haste vertical usada para observar sombras e marcar o tempo", "Um tipo de bússola", "Uma constelação", "Um satélite antigo"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation",
        difficulty: "hard"
    },
    {
        question: "Por que a sombra de uma árvore muda de posição durante o dia?",
        answers: ["Porque o Sol se move no céu ao longo do dia", "Porque a árvore gira", "Porque o vento empurra a sombra", "Porque a Terra muda de cor"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "Como os povos antigos usavam o céu para criar calendários?",
        answers: ["Observando as fases da Lua e a posição do Sol", "Contando as estrelas", "Medindo a chuva", "Usando bússolas"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation",
        difficulty: "hard"
    },
    {
        question: "Para que serviam os calendários criados pelos povos antigos?",
        answers: ["Para saber quando plantar, colher e fazer festas", "Para decorar paredes", "Para brincar", "Para fazer contas"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation"
    },
    {
        question: "Como você pode encontrar o Sul usando o Cruzeiro do Sul?",
        answers: ["Prolongando o braço maior da cruz 4,5 vezes", "Olhando para a estrela mais brilhante", "Contando todas as estrelas", "Esperando o nascer do Sol"],
        correctIndex: 0,
        backgroundClass: "bg-southern-cross",
        difficulty: "hard"
    },
    {
        question: "Qual é a diferença entre o Polo Norte magnético e o Polo Norte geográfico?",
        answers: ["O magnético fica em um lugar diferente e se move com o tempo", "São o mesmo lugar", "O geográfico não existe", "O magnético fica no espaço"],
        correctIndex: 0,
        backgroundClass: "bg-compass",
        difficulty: "hard"
    },
    {
        question: "O que faz a agulha da bússola sempre apontar para o Norte?",
        answers: ["O magnetismo da Terra", "O vento", "A gravidade", "A luz do Sol"],
        correctIndex: 0,
        backgroundClass: "bg-compass",
        difficulty: "hard"
    },
    {
        question: "Como funcionava o astrolábio usado pelos navegadores antigos?",
        answers: ["Media a altura das estrelas para determinar a latitude", "Mostrava o caminho no mapa", "Ligava para outros navios", "Iluminava o caminho"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation",
        difficulty: "veryHard"
    },
    {
        question: "Quais são os quatro pontos cardeais principais?",
        answers: ["Norte, Sul, Leste e Oeste", "Frente, trás, direita e esquerda", "Cima, baixo, lado e meio", "Terra, mar, céu e espaço"],
        correctIndex: 0,
        backgroundClass: "bg-compass-rose"
    },
    {
        question: "Em que momento do dia a sombra de um gnômon é mais curta?",
        answers: ["Ao meio-dia, quando o Sol está mais alto", "De manhã cedo", "À tarde", "À noite"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation",
        difficulty: "hard"
    },
    {
        question: "O que acontece com a posição onde o Sol nasce ao longo do ano?",
        answers: ["Ela muda um pouco, não é sempre no mesmo ponto do horizonte", "É sempre exatamente no mesmo lugar", "O Sol para de nascer no inverno", "O Sol nasce em lugares aleatórios"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation",
        difficulty: "hard"
    },
    {
        question: "Como os navegadores antigos sabiam em que mês estavam durante longas viagens?",
        answers: ["Observando as constelações visíveis no céu", "Contando os dias em um papel", "Perguntando para outras pessoas", "Não sabiam"],
        correctIndex: 0,
        backgroundClass: "bg-stars-night",
        difficulty: "hard"
    },
    {
        question: "Qual instrumento moderno substitui a bússola, o astrolábio e os mapas de papel?",
        answers: ["Smartphone com GPS", "Televisão", "Micro-ondas", "Geladeira"],
        correctIndex: 0,
        backgroundClass: "bg-smartphone-gps"
    },
    {
        question: "Por que o GPS não funciona bem dentro de cavernas ou túneis profundos?",
        answers: ["As ondas dos satélites não conseguem atravessar muita rocha e terra", "Os satélites ficam com medo de lugares fechados", "O GPS desliga automaticamente", "É proibido usar GPS nesses lugares"],
        correctIndex: 0,
        backgroundClass: "bg-modern-navigation",
        difficulty: "hard"
    },
    {
        question: "Qual a diferença principal entre um gnômon e um relógio de Sol completo?",
        answers: ["O relógio de Sol tem marcações das horas, o gnômon é apenas a haste", "São exatamente a mesma coisa", "O gnômon funciona à noite", "O relógio de Sol não usa sombras"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation",
        difficulty: "veryHard"
    },
    {
        question: "Como os navegadores antigos sabiam que estavam próximos da terra?",
        answers: ["Observando pássaros, mudanças nas ondas e algas marinhas", "Usando GPS", "Ligando para casa", "Esperando ver prédios"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation",
        difficulty: "hard"
    },
    {
        question: "Além de indicar direções, para que mais as estrelas eram úteis aos navegadores?",
        answers: ["Para saber o mês do ano e as horas da noite", "Para prever o clima", "Para fazer comida", "Para iluminar o caminho"],
        correctIndex: 0,
        backgroundClass: "bg-stars-night",
        difficulty: "hard"
    },
    {
        question: "Por que um relógio de Sol não funciona à noite?",
        answers: ["Porque não há Sol para fazer sombra", "Porque a Lua atrapalha", "Porque o vento apaga", "Porque congela"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "Qual instrumento antigo media a altura das estrelas em relação ao horizonte?",
        answers: ["Astrolábio", "Bússola", "Termômetro", "Telescópio"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation",
        difficulty: "veryHard"
    },
    {
        question: "Se você está perdido e não tem bússola, qual a melhor forma de encontrar o Norte à noite no Brasil?",
        answers: ["Usando o Cruzeiro do Sul para achar o Sul, depois virar para o lado oposto", "Andando em círculos", "Gritando por ajuda", "Seguindo formigas"],
        correctIndex: 0,
        backgroundClass: "bg-southern-cross",
        difficulty: "hard"
    },
    {
        question: "Como os navegadores combinavam a bússola com o astrolábio?",
        answers: ["A bússola dava a direção, o astrolábio dava a latitude", "Usavam só um de cada vez", "Não podiam usar juntos", "O astrolábio substituía a bússola"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation",
        difficulty: "veryHard"
    },
    {
        question: "Por que é importante conhecer as marés para navegar?",
        answers: ["Para saber quando é seguro entrar ou sair de portos rasos", "Para pescar melhor", "Para economizar combustível", "Para limpar o navio"],
        correctIndex: 0,
        backgroundClass: "bg-moon-tides",
        difficulty: "hard"
    },
    {
        question: "Qual é a limitação de usar apenas o Sol para se orientar?",
        answers: ["Não funciona à noite e em dias nublados", "O Sol muda de cor", "O Sol se move muito rápido", "O Sol queima os olhos"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "O que acontece com a sombra do gnômon quando o Sol está exatamente ao meio-dia solar?",
        answers: ["A sombra aponta exatamente para o Norte ou Sul", "A sombra desaparece completamente", "A sombra fica colorida", "A sombra gira rapidamente"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation",
        difficulty: "veryHard"
    },
    {
        question: "Como os navegadores antigos mediam distâncias no mar?",
        answers: ["Usando a velocidade do navio e o tempo de viagem", "Contando ondas", "Medindo com régua", "Perguntando para peixes"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation",
        difficulty: "hard"
    },
    {
        question: "Por que a bússola pode não funcionar corretamente perto de ímãs ou objetos de ferro?",
        answers: ["Porque esses objetos criam campos magnéticos que atrapalham a agulha", "Porque o ferro quebra a bússola", "Porque ímãs a fazem parar de girar", "Porque esquentam demais"],
        correctIndex: 0,
        backgroundClass: "bg-compass",
        difficulty: "hard"
    },
    {
        question: "Qual vantagem o GPS tem sobre todos os métodos antigos de navegação?",
        answers: ["Funciona em qualquer clima, dia ou noite, com precisão de metros", "É mais bonito", "É mais barato", "Não precisa de energia"],
        correctIndex: 0,
        backgroundClass: "bg-gps-satellite"
    },
    {
        question: "Se você vê o Cruzeiro do Sul no céu, em qual hemisfério da Terra você está?",
        answers: ["Hemisfério Sul", "Hemisfério Norte", "No Equador", "No Polo Norte"],
        correctIndex: 0,
        backgroundClass: "bg-southern-cross",
        difficulty: "hard"
    },
    {
        question: "Como os calendários lunares ajudavam os agricultores antigos?",
        answers: ["Indicavam as melhores épocas para plantar e colher", "Mostravam quando ia chover", "Diziam o preço dos alimentos", "Contavam as sementes"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation",
        difficulty: "hard"
    },
    {
        question: "O que é o movimento aparente do Sol?",
        answers: ["É a impressão que temos de que o Sol se move no céu, causada pela rotação da Terra", "É quando o Sol realmente se move", "É quando o Sol muda de tamanho", "É quando o Sol fica colorido"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation",
        difficulty: "hard"
    },
    {
        question: "Por que os exploradores antigos preferiam viajar durante a Lua Cheia?",
        answers: ["Porque tinha mais luz à noite para navegar", "Porque a Lua Cheia traz sorte", "Porque os ventos eram melhores", "Porque podiam dormir melhor"],
        correctIndex: 0,
        backgroundClass: "bg-full-moon"
    },
    {
        question: "Qual instrumento você usaria se estivesse numa floresta sem bússola ou GPS?",
        answers: ["Observaria o musgo nas árvores e a posição do Sol", "Ligaria para alguém", "Esperaria um helicóptero", "Seguiria qualquer animal"],
        correctIndex: 0,
        backgroundClass: "bg-forest-navigation",
        difficulty: "hard"
    },
    {
        question: "Como você pode usar um relógio analógico (de ponteiros) e o Sol para encontrar o Norte?",
        answers: ["Apontando o ponteiro das horas para o Sol e fazendo um cálculo", "Jogando o relógio para cima", "Olhando os números do relógio", "Não é possível usar relógio para isso"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation",
        difficulty: "veryHard"
    },
    {
        question: "Qual era a principal dificuldade dos navegadores antes da invenção da bússola?",
        answers: ["Era difícil se orientar quando não conseguiam ver o céu", "Os navios eram muito lentos", "Não tinha comida", "O mar era muito fundo"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation",
        difficulty: "hard"
    },
    {
        question: "Como os povos indígenas brasileiros se orientavam pelos rios?",
        answers: ["Observando a direção da correnteza e marcos naturais", "Usando bússolas", "Com mapas de papel", "Com celulares"],
        correctIndex: 0,
        backgroundClass: "bg-forest-navigation",
        difficulty: "hard"
    },
    {
        question: "Qual rocha natural tem propriedades magnéticas e atrai ferro?",
        answers: ["Magnetita", "Granito", "Mármore", "Quartzo"],
        correctIndex: 0,
        backgroundClass: "bg-compass",
        difficulty: "hard"
    },
    {
        question: "Quais metais formam o núcleo da Terra e fazem dela um grande ímã?",
        answers: ["Ferro e níquel", "Ouro e prata", "Cobre e bronze", "Alumínio e chumbo"],
        correctIndex: 0,
        backgroundClass: "bg-compass",
        difficulty: "veryHard"
    },
    {
        question: "Como os chineses antigos criaram as primeiras bússolas simples?",
        answers: ["Colocando magnetita em cortiça flutuando em água ou azeite", "Usando GPS antigo", "Com pedras preciosas", "Com espelhos mágicos"],
        correctIndex: 0,
        backgroundClass: "bg-compass",
        difficulty: "veryHard"
    },
    {
        question: "De que cor é pintada a extremidade da agulha da bússola que aponta para o Norte?",
        answers: ["Vermelha", "Azul", "Verde", "Amarela"],
        correctIndex: 0,
        backgroundClass: "bg-compass"
    },
    {
        question: "Quando você faz a atividade do gnômon de manhã e à tarde, o que acontece com a sombra?",
        answers: ["Ela muda de posição porque a Terra gira", "Ela fica do mesmo tamanho", "Ela desaparece", "Ela muda de cor"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation",
        difficulty: "hard"
    },
    {
        question: "Se você traçar uma linha ligando as extremidades das sombras da manhã e da tarde no gnômon, que direção essa linha indica?",
        answers: ["Leste-Oeste", "Norte-Sul", "Nordeste-Sudoeste", "Não indica nenhuma direção"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation",
        difficulty: "veryHard"
    },
    {
        question: "Por que pendurando um pedaço de magnetita em um fio ela sempre se orienta na mesma direção?",
        answers: ["Porque ela é atraída pelo campo magnético da Terra", "Porque o vento a empurra", "Porque ela é pesada", "Porque tem medo do escuro"],
        correctIndex: 0,
        backgroundClass: "bg-compass"
    },
    {
        question: "Qual civilização já conhecia a magnetita há mais de 2 mil anos?",
        answers: ["Os gregos", "Os brasileiros", "Os americanos", "Os australianos"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation",
        difficulty: "hard"
    },
    {
        question: "Como a bússola combina dois tipos de magnetismo?",
        answers: ["O magnetismo da agulha com o magnetismo da Terra", "O magnetismo do Sol com o da Lua", "O magnetismo do ar com o da água", "O magnetismo das estrelas com o do céu"],
        correctIndex: 0,
        backgroundClass: "bg-compass",
        difficulty: "hard"
    },
    {
        question: "Por que é importante alinhar a letra N da bússola com a ponta vermelha da agulha?",
        answers: ["Para que a bússola mostre corretamente todas as direções", "Para economizar bateria", "Para a bússola não quebrar", "Para ela ficar mais bonita"],
        correctIndex: 0,
        backgroundClass: "bg-compass"
    },
    {
        question: "Como os navegadores antigos usavam a bússola para orientar viagens de navio?",
        answers: ["Verificando a direção Norte e seguindo a rota desejada", "Jogando a bússola ao mar", "Apenas para decoração", "Para medir a profundidade"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation"
    },
    {
        question: "Se a sombra do gnômon aponta para o Oeste de manhã, para onde ela aponta à tarde?",
        answers: ["Para o Leste", "Para o mesmo lugar", "Para cima", "Desaparece"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "Por que os povos antigos observavam o nascer e o pôr do Sol, as fases da Lua e o brilho das estrelas?",
        answers: ["Para se orientar, marcar o tempo e planejar a agricultura", "Apenas por diversão", "Para tirar fotos", "Para fazer competições"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation"
    },
    {
        question: "Como o relógio de Sol (gnômon) funciona ao longo do dia?",
        answers: ["A sombra da haste se move conforme o Sol muda de posição no céu", "A haste gira sozinha", "O Sol para de brilhar", "O relógio faz barulho"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "Qual é a característica especial da magnetita que permitiu criar a bússola?",
        answers: ["Ela atrai objetos de ferro e se orienta para o Norte-Sul", "Ela brilha no escuro", "Ela é muito leve", "Ela muda de cor"],
        correctIndex: 0,
        backgroundClass: "bg-compass",
        difficulty: "hard"
    },
    {
        question: "Como você pode determinar os pontos cardeais observando onde o Sol aparece de manhã?",
        answers: ["O Sol nasce no Leste, então o Norte fica à sua esquerda se você olhar para o Sol", "O Sol nasce sempre no Norte", "O Sol nasce em lugares diferentes cada dia", "Não é possível usar o Sol"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation",
        difficulty: "hard"
    },
    {
        question: "Por que a Terra se comporta como um grande ímã?",
        answers: ["Porque seu núcleo tem metais como ferro e níquel", "Porque tem muitas pedras", "Porque tem água nos oceanos", "Porque gira muito rápido"],
        correctIndex: 0,
        backgroundClass: "bg-compass"
    },
    {
        question: "Quando observamos o movimento do Sol no céu ao longo do dia, o que realmente está acontecendo?",
        answers: ["A Terra está girando em torno de si mesma (rotação)", "O Sol está dançando", "As nuvens empurram o Sol", "O Sol viaja para outros planetas"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "Como os navegadores antigos conseguiam saber a direção Norte-Sul sem bússola?",
        answers: ["Pendurando um pedaço de magnetita em um fio e observando para onde ela aponta", "Adivinhando", "Perguntando para peixes", "Usando celulares"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation",
        difficulty: "hard"
    },
    {
        question: "A que altitude os satélites GPS orbitam ao redor da Terra?",
        answers: ["Aproximadamente 20.200 km", "Aproximadamente 400 km", "Aproximadamente 100 km", "Aproximadamente 50.000 km"],
        correctIndex: 0,
        backgroundClass: "bg-gps-satellite",
        difficulty: "hard"
    },
    {
        question: "Em qual década o sistema GPS começou a ser desenvolvido?",
        answers: ["Década de 1960", "Década de 1990", "Década de 2000", "Década de 1950"],
        correctIndex: 0,
        backgroundClass: "bg-gps-history",
        difficulty: "hard"
    },
    {
        question: "Para que finalidade o GPS foi originalmente criado?",
        answers: ["Para uso militar", "Para jogos de celular", "Para turismo", "Para redes sociais"],
        correctIndex: 0,
        backgroundClass: "bg-gps-history",
        difficulty: "hard"
    },
    {
        question: "Quantos dias dura um ciclo completo das fases da Lua?",
        answers: ["Aproximadamente 28 dias", "Aproximadamente 7 dias", "Aproximadamente 14 dias", "Aproximadamente 30 dias"],
        correctIndex: 0,
        backgroundClass: "bg-moon-phases"
    },
    {
        question: "Quais são os quatro pontos colaterais da rosa dos ventos?",
        answers: ["Nordeste, Sudeste, Sudoeste e Noroeste", "Norte, Sul, Leste e Oeste", "Cima, baixo, esquerda e direita", "Frente, trás, lado e centro"],
        correctIndex: 0,
        backgroundClass: "bg-compass-rose"
    },
    {
        question: "Qual a principal vantagem da bússola em relação à orientação pelas estrelas?",
        answers: ["Funciona em qualquer clima, inclusive com céu nublado", "É mais bonita", "É mais barata", "É mais pesada"],
        correctIndex: 0,
        backgroundClass: "bg-compass"
    },
    {
        question: "Como você pode traçar a linha Leste-Oeste usando um gnômon?",
        answers: ["Marcando a ponta da sombra de manhã e à tarde, depois ligando os pontos", "Olhando para as nuvens", "Usando uma bússola", "Esperando a noite chegar"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation",
        difficulty: "hard"
    },
    {
        question: "Quais civilizações antigas usavam o gnômon para se orientar e medir o tempo?",
        answers: ["Egípcios, babilônios e povos indígenas", "Apenas brasileiros", "Apenas americanos modernos", "Apenas europeus"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation"
    },
    {
        question: "O que causa o 'movimento aparente do Sol' que observamos no céu?",
        answers: ["A rotação da Terra em torno de si mesma", "O Sol realmente andando no céu", "A Lua empurrando o Sol", "O vento movendo o Sol"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation"
    },
    {
        question: "Por que a sombra projetada pelo gnômon indica as direções cardeais?",
        answers: ["Porque ela se move seguindo o movimento aparente do Sol no céu", "Porque a haste é mágica", "Porque o vento empurra a sombra", "Porque tem uma bússola escondida"],
        correctIndex: 0,
        backgroundClass: "bg-sun-navigation",
        difficulty: "hard"
    },
    {
        question: "O que os povos antigos observavam no céu para criar calendários e planejar a agricultura?",
        answers: ["Fases da Lua, posição do Sol e constelações visíveis", "Apenas as nuvens", "Apenas a chuva", "Apenas o vento"],
        correctIndex: 0,
        backgroundClass: "bg-ancient-navigation"
    }
];
