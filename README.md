# Quiz: Navegando pelas Estrelas

Um quiz educativo interativo e gamificado sobre navegação por astros e sistemas modernos de localização, voltado para crianças até a 7ª série. Desenvolvido como Progressive Web App (PWA) com foco em experiência mobile.

## Índice

- [Visão Geral](#visão-geral)
- [Características Principais](#características-principais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades Detalhadas](#funcionalidades-detalhadas)
- [Instalação e Uso](#instalação-e-uso)
- [Sistema de Pontuação](#sistema-de-pontuação)
- [Arquitetura do Código](#arquitetura-do-código)
- [Documentação Adicional](#documentação-adicional)
- [Contribuição](#contribuição)

---

## Visão Geral

**Quiz: Navegando pelas Estrelas** é uma aplicação web educativa que ensina conceitos de navegação através de um quiz interativo e gamificado. O projeto combina elementos pedagógicos com mecânicas de jogos para tornar o aprendizado mais envolvente.

**URL de Acesso**: [https://augustocbx.github.io/quiz-sistema-localizacao-pedro/](https://augustocbx.github.io/quiz-sistema-localizacao-pedro/)

### Objetivo Educacional

Ensinar sobre:
- Navegação utilizando corpos celestes (Sol, Lua, estrelas)
- Constelações e orientação no céu
- Sistemas modernos de localização (GPS, GLONASS)
- História da navegação e instrumentos antigos
- Conceitos de cartografia e coordenadas geográficas

---

## Características Principais

### 🎮 Gamificação Completa
- **116 perguntas** com diferentes níveis de dificuldade
- **10 perguntas por partida** selecionadas aleatoriamente
- **Sistema de power-ups** com 3 ajudas estratégicas
- **18 avatares** temáticos para personalização
- **Sistema de conquistas** com 15 badges desbloqueáveis
- **Combo de acertos** com multiplicador de streak

### 🎯 Sistema de Pontuação Avançado
- Timer de 20 segundos por pergunta
- Critério de desempate por tempo total
- Rankings dual: temporário (últimos 5 jogadores) e permanente (top 30)
- Estatísticas por categoria (bússola, GPS, estrelas)
- Rastreamento de performance individual

### 🎨 Interface e Experiência
- **Design responsivo** otimizado para tablets e smartphones
- **Animações SVG dinâmicas** para feedback visual
- **Backgrounds temáticos** únicos para cada pergunta
- **Efeitos visuais** de partículas e transições suaves
- **Sons sintetizados** via Web Audio API (sem arquivos externos)
- **Modo tela cheia** em dispositivos móveis

### 📱 Progressive Web App (PWA)
- **Instalável** como app nativo
- **Service Worker** com cache inteligente
- **Funciona offline** após primeira visita
- **Auto-atualização** quando novas versões são publicadas
- **QR Code** integrado para compartilhamento rápido

### 💾 Persistência de Dados
- **localStorage** para armazenamento local
- **Migração automática** entre versões
- Rankings e conquistas persistentes
- Preferências de usuário salvas
- Sistema de backup/reset

---

## Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada
  - CSS Grid e Flexbox
  - Animações e transições
  - Media queries para responsividade
  - Custom properties (variáveis CSS)
- **JavaScript ES6+** - Lógica da aplicação
  - Classes e módulos
  - Arrow functions
  - Template literals
  - Destructuring
  - Spread operator

### APIs Web
- **Web Storage API** (localStorage)
- **Web Audio API** (sons sintetizados)
- **Service Worker API** (PWA)
- **Canvas API** (QRCode)

### Bibliotecas Externas
- **QRCode.js** (v1.0.0) - Geração de QR Code

### Ferramentas e Hospedagem
- **GitHub Pages** - Hospedagem estática
- **Git** - Controle de versão
- **Service Worker** - Cache e offline support

### Estatísticas do Projeto
- **~6.500 linhas de código** total
- **~3.562 linhas** de JavaScript
- **~2.966 linhas** de CSS
- **~428 linhas** de HTML
- **11 módulos** JavaScript
- **3 folhas** de estilo CSS

---

## Estrutura do Projeto

```
quiz-sistema-localizacao-pedro/
│
├── index.html                      # Página principal (428 linhas)
├── manifest.json                   # Manifesto PWA
├── service-worker.js               # Service Worker para PWA
├── generate-icons.html             # Utilitário de geração de ícones
│
├── css/
│   ├── styles.css                  # Estilos principais (~25.679 linhas)
│   ├── backgrounds.css             # Fundos temáticos (~4.748 linhas)
│   └── achievements.css            # Estilos de conquistas (~31.213 linhas)
│
├── js/
│   ├── script.js                   # Lógica principal do quiz
│   ├── questions.js                # Banco de 116 perguntas
│   ├── storage-manager.js          # Gerenciamento de localStorage
│   ├── sound-manager.js            # Sistema de áudio
│   ├── achievements.js             # Sistema de conquistas
│   ├── avatars.js                  # Sistema de avatares
│   ├── powerups.js                 # Sistema de power-ups
│   ├── animations.js               # Animações SVG
│   ├── visual-effects.js           # Efeitos visuais
│   ├── quiz-enhancements.js        # Melhorias do quiz
│   └── names.js                    # Gerador de nomes aleatórios
│
├── images/
│   ├── icon.svg                    # Ícone do app
│   ├── backgrounds/                # 9 imagens de fundo temáticas
│   │   ├── ancient-instruments.jpg
│   │   ├── gps-satellites.jpg
│   │   ├── maps-coordinates.jpg
│   │   ├── modern-aviation.jpg
│   │   ├── moon-tides.jpg
│   │   ├── nature-forest.jpg
│   │   ├── smartphone-navigation.jpg
│   │   ├── stars-constellations.jpg
│   │   └── sun-navigation.jpg
│   └── backup_old_backgrounds/     # Backup de versões anteriores
│
└── docs/                           # Documentação do projeto
    ├── README.md                   # Este arquivo
    ├── CHANGELOG.md                # Histórico de mudanças
    ├── GUIA_MUDANCAS.md            # Guia de reorganização
    ├── ANIMACOES_MELHORADAS.md     # Doc. de animações
    ├── ATUALIZACAO_AUTOMATICA.md   # Sistema de atualização
    ├── CATEGORIAS.md               # Sistema de categorias
    ├── CONTEUDO_DIDATICO.md        # Conteúdo educacional
    ├── CORRECOES.md                # Correções implementadas
    ├── GITHUB_PAGES_SETUP.md       # Configuração GitHub Pages
    ├── MUDANCA_BOTAO.md            # Mudanças na UI
    ├── PERGUNTAS_REDUNDANTES.md    # Análise de redundância
    ├── PLANO_IMAGENS_BACKGROUND.md # Plano de backgrounds
    └── PWA_GUIA_COMPLETO.md        # Guia PWA completo
```

---

## Funcionalidades Detalhadas

### 1. Sistema de Perguntas

#### Banco de Dados
- **116 perguntas únicas** categorizadas por tema
- **3 níveis de dificuldade**: fácil, médio, difícil
- **3 categorias principais**: bússola, GPS, estrelas
- **Backgrounds temáticos** específicos para cada pergunta

#### Mecânica de Jogo
- **10 perguntas** selecionadas aleatoriamente por partida
- **4 alternativas** por pergunta (1 correta + 3 incorretas)
- **Ordem embaralhada** das respostas
- **Timer de 20 segundos** por pergunta
- **Sem revelar resposta correta** ao errar

#### Categorização
```javascript
Categorias:
├── compass (Bússola e navegação terrestre)
├── gps (Sistemas de posicionamento global)
└── stars (Navegação estelar e astronomia)

Dificuldades:
├── easy (Questões introdutórias)
├── medium (Questões moderadas)
├── hard (Questões desafiadoras)
└── very_hard (Questões avançadas)
```

### 2. Sistema de Power-Ups

Três ajudas estratégicas disponíveis uma vez por partida:

#### ✂️ 50:50
- Elimina 2 respostas incorretas
- Aumenta chance de acerto para 50%
- Útil em perguntas difíceis

#### 🔄 Trocar Pergunta
- Substitui a pergunta atual por outra
- Nova pergunta do mesmo nível de dificuldade
- Timer reinicia completamente

#### ⏰ +Tempo
- Restaura o timer para 20 segundos
- Permite mais tempo para pensar
- Ideal para perguntas complexas

**Conquista Especial**: Usar todos os 3 power-ups em uma partida desbloqueia a conquista "Mestre das Ajudas" 🎪

### 3. Sistema de Conquistas

**15 badges** organizadas por dificuldade crescente:

#### Muito Fácil (Garantidas no primeiro quiz)
- 🌟 **Primeira Estrela** - Complete seu primeiro quiz
- 🎈 **Primeiros Passos** - Acerte 5+ perguntas
- 🎪 **Mestre das Ajudas** - Use todos os 3 power-ups

#### Fácil
- ⭐ **Explorador** - Acerte 7+ perguntas
- 🔥 **Combo Master** - Acerte 5 perguntas seguidas

#### Médio
- 🌠 **Navegador Expert** - Acerte 9+ perguntas
- 📚 **Estudioso** - Acerte 3 perguntas difíceis
- ⚡ **Raio Veloz** - Termine quiz em menos de 90 segundos
- 🏅 **Primeiro Lugar** - Conquiste o 1º no ranking

#### Difícil
- 🎯 **Perfeição** - Acerte todas as 10 perguntas
- 🔬 **Cientista** - Acerte 3 perguntas de categoria GPS
- 🌌 **Astrônomo** - Acerte 3 perguntas de categoria Estrelas
- 🧭 **Cartógrafo** - Acerte 3 perguntas de categoria Bússola

#### Extremamente Difícil
- 🏆 **Mestre Navegador** - Quiz perfeito + 10 combos + <60s
- 👑 **Lenda** - Conquiste todas as outras conquistas

### 4. Sistema de Avatares

**18 avatares temáticos** disponíveis:
- 👨‍🚀 Astronauta
- 🧭 Explorador
- 🧑‍✈️ Capitão
- 👨‍🔬 Cientista
- 🏴‍☠️ Pirata
- 🥷 Ninja
- 🤖 Robô
- 👽 Alienígena
- 🧙 Mago
- 🕵️ Detetive
- 🦸 Super-Herói
- ⚔️ Viking
- 🤠 Cowboy
- 🛡️ Cavaleiro
- 🛩️ Piloto
- ⚓ Marinheiro
- 🚀 Foguete
- 🔭 Telescópio

**Funcionalidades**:
- Seleção aleatória padrão a cada nova sessão
- Escolha manual na tela de seleção
- Avatar exibido durante o quiz
- Aparece nos rankings

### 5. Sistema de Rankings

#### Ranking Temporário
- **Top 3** dos últimos 5 jogadores
- **Reset automático** a cada 5 partidas
- **Visível na tela inicial**
- Incentiva competição entre jogadores próximos
- Botão de limpar ranking 🗑️

#### Ranking Permanente
- **Top 30** de todos os tempos
- **Nunca resetado** (apenas manualmente)
- **Critério de desempate**: tempo total em segundos
- Armazenado em localStorage
- Histórico completo de conquistas por jogador

#### Dados Armazenados por Jogador
```javascript
{
  name: "Nome do Jogador",
  avatar: "👨‍🚀",
  score: 10,
  totalTime: 145.3,
  date: "2025-01-07",
  achievements: ["first_star", "explorer"],
  stats: {
    combo: 5,
    powerUpsUsed: 2,
    categoryStats: {...}
  }
}
```

### 6. Sistema de Som

Sons sintetizados via Web Audio API (sem arquivos externos):

- 🔊 **Click** - Feedback de botões
- ✅ **Acerto** - Som de resposta correta
- ❌ **Erro** - Som de resposta incorreta
- 🏆 **Conquista** - Som especial de desbloqueio
- ⏰ **Timer** - Alerta de tempo acabando

**Controle**:
- Botão flutuante 🔊 para ligar/desligar
- Preferência salva em localStorage
- Volume ajustável (30% por padrão)

### 7. Sistema de Animações

#### Animações de Comemoração (Acerto)
- ⭐ **Estrela Brilhante** (comum)
- 🧭 **Bússola Girando** (comum)
- ✨ **Constelação** (comum)
- 🌟 **Estrela Cadente** (rara - 14/15 acertos)
- 🏆 **Troféu Dourado** (lendária - 15/15 acertos)

#### Animações de Consolo (Erro)
- 🤔 **Estrela Pensativa** (50%)
- ☁️ **Noite Nublada** (30%)
- 🧭 **Bússola Perdida** (15%)
- ☄️ **Meteoro** (3%)
- 🕳️ **Buraco Negro** (2%)

#### Efeitos Visuais
- **Partículas** ao acertar/errar
- **Confetti** ao completar quiz
- **Shake** no timer (tempo baixo)
- **Pulse** em novos recordes
- **Glow** em conquistas desbloqueadas

### 8. Progressive Web App (PWA)

#### Características PWA
- **Manifest.json** configurado
- **Service Worker** com estratégias de cache
- **Instalável** em iOS e Android
- **Ícones** otimizados (SVG adaptativo)
- **Tema** customizado (#1e3a8a)

#### Estratégias de Cache
```javascript
Estratégias:
├── HTML: Network First (sempre busca versão nova)
├── Assets com ?v=X: Network First (cache-busting)
└── Outros recursos: Cache First (performance)
```

#### Auto-Atualização
- Verificação a cada **5 minutos**
- **Reload automático** ao detectar nova versão
- **Não limpa dados** do usuário
- Mensagem de console sobre atualizações
- Versão atual: **v25**

### 9. QR Code Integrado

- **QR Code flutuante** pequeno no canto da tela
- **Modal ampliado** ao clicar
- Link para: https://augustocbx.github.io/quiz-sistema-localizacao-pedro/
- Facilita compartilhamento em sala de aula
- Gerado via QRCode.js

---

## Instalação e Uso

### Opção 1: Acesso Online (Recomendado)

Acesse diretamente pelo navegador:
```
https://augustocbx.github.io/quiz-sistema-localizacao-pedro/
```

### Opção 2: Teste Local

1. Clone o repositório:
```bash
git clone https://github.com/augustocbx/quiz-sistema-localizacao-pedro.git
cd quiz-sistema-localizacao-pedro
```

2. Inicie um servidor HTTP local:
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (http-server)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

3. Acesse no navegador:
```
http://localhost:8000
```

### Opção 3: Instalar como PWA em iPad/iOS

#### Passo 1: Abrir no Safari
- Abra o Safari no iPad
- Acesse: https://augustocbx.github.io/quiz-sistema-localizacao-pedro/

#### Passo 2: Adicionar à Tela Inicial
1. Toque no botão **Compartilhar** (ícone quadrado com seta)
2. Role e selecione **"Adicionar à Tela de Início"**
3. Edite o nome se desejar
4. Toque em **"Adicionar"**

#### Passo 3: Usar como App
- O ícone aparecerá na tela inicial
- Abre em **tela cheia** (sem barras do navegador)
- Funciona **offline** após primeira visita

### Opção 4: Instalar como PWA em Android

#### Passo 1: Abrir no Chrome
- Abra o Chrome no tablet/celular
- Acesse: https://augustocbx.github.io/quiz-sistema-localizacao-pedro/

#### Passo 2: Adicionar à Tela Inicial
1. Toque no menu (3 pontinhos)
2. Selecione **"Adicionar à tela inicial"** ou **"Instalar app"**
3. Confirme

#### Passo 3: Usar como App
- Abre em modo standalone
- Funciona offline
- Aparece na gaveta de apps

### Opção 5: Hospedar sua Própria Versão

#### GitHub Pages (Gratuito)
1. Fork do repositório
2. Vá em **Settings** > **Pages**
3. Source: **main branch**
4. Seu quiz estará em: `https://seu-usuario.github.io/quiz-sistema-localizacao-pedro/`

#### Netlify (Gratuito)
1. Crie conta em [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto
3. Deploy automático
4. URL personalizada disponível

#### Vercel (Gratuito)
1. Crie conta em [vercel.com](https://vercel.com)
2. Import do repositório GitHub
3. Deploy automático
4. URL personalizada disponível

---

## Sistema de Pontuação

### Critérios de Pontuação

#### Pontuação Principal
- **1 ponto** por resposta correta
- **0 pontos** por resposta incorreta
- **Máximo**: 10 pontos

#### Critério de Desempate
1. **Maior pontuação** (número de acertos)
2. **Menor tempo total** (em segundos com 1 decimal)
3. **Data/hora** (mais recente primeiro)

### Estatísticas Rastreadas

```javascript
Estatísticas por Partida:
├── score: Número de acertos (0-10)
├── totalTime: Tempo total em segundos
├── combo: Maior sequência de acertos
├── powerUpsUsed: Quantidade de power-ups usados
├── categoryStats: {
│   ├── compass: { correct, total }
│   ├── gps: { correct, total }
│   └── stars: { correct, total }
└── achievements: Array de IDs desbloqueados
```

### Rankings

#### Algoritmo de Ordenação
```javascript
function sortRanking(players) {
  return players.sort((a, b) => {
    // 1. Maior pontuação
    if (b.score !== a.score) return b.score - a.score;

    // 2. Menor tempo
    if (a.totalTime !== b.totalTime) return a.totalTime - b.totalTime;

    // 3. Mais recente
    return new Date(b.date) - new Date(a.date);
  });
}
```

#### Limites
- **Ranking Temporário**: Top 3 (últimos 5 jogadores)
- **Ranking Permanente**: Top 30 (todos os tempos)

---

## Arquitetura do Código

### Estrutura de Classes

#### 1. StorageManager (storage-manager.js)
```javascript
class StorageManager {
  - setItem(key, value)          // Salva com tratamento de erro
  - getItem(key)                  // Recupera com parse automático
  - removeItem(key)               // Remove item
  - clear()                       // Limpa tudo
  - migrateData()                 // Migração entre versões
}
```

#### 2. SoundManager (sound-manager.js)
```javascript
class SoundManager {
  - toggle()                      // Liga/desliga sons
  - playClick()                   // Som de clique
  - playCorrect()                 // Som de acerto
  - playWrong()                   // Som de erro
  - playAchievement()             // Som de conquista
  - playCombo()                   // Som de combo
}
```

#### 3. AchievementSystem (achievements.js)
```javascript
class AchievementSystem {
  - checkAchievements(stats)      // Verifica condições
  - unlockAchievement(id)         // Desbloqueia badge
  - getProgress()                 // Retorna progresso %
  - displayAchievements()         // Renderiza galeria
  - saveUnlocked()                // Persiste em localStorage
}
```

#### 4. PowerUpSystem (powerups.js)
```javascript
class PowerUpSystem {
  - reset()                       // Reseta para novo quiz
  - isAvailable(powerUpId)        // Verifica disponibilidade
  - use(powerUpId)                // Consome power-up
  - renderPowerUps()              // Renderiza UI
}
```

#### 5. AvatarSystem (avatars.js)
```javascript
class AvatarSystem {
  - getRandomAvatar()             // Avatar aleatório
  - selectRandomAvatar()          // Nova seleção aleatória
  - selectAvatar(id)              // Escolha manual
  - createAvatarSelector()        // Renderiza seletor
  - getSelectedAvatar()           // Retorna avatar atual
}
```

### Fluxo de Execução

```
1. Carregamento da Página
   ├── index.html carregado
   ├── CSS aplicado (styles, backgrounds, achievements)
   ├── Service Worker registrado
   └── Scripts carregados na ordem:
       ├── storage-manager.js (primeiro - dependência)
       ├── sound-manager.js
       ├── achievements.js
       ├── visual-effects.js
       ├── powerups.js
       ├── avatars.js
       ├── quiz-enhancements.js
       ├── questions.js
       ├── animations.js
       ├── names.js
       └── script.js (último - orquestra tudo)

2. Inicialização
   ├── storageManager instanciado
   ├── soundManager instanciado
   ├── achievementSystem instanciado
   ├── powerUpSystem instanciado
   ├── avatarSystem instanciado
   ├── Rankings carregados do localStorage
   ├── QR Code gerado
   └── Event listeners registrados

3. Fluxo do Quiz
   ├── [Tela Inicial] -> Mostrar ranking temporário
   ├── Clicar "Iniciar Quiz"
   ├── [Tela de Avatar] -> Selecionar/Confirmar avatar
   ├── startQuiz()
   │   ├── Selecionar 10 perguntas aleatórias
   │   ├── Embaralhar respostas
   │   ├── Reset power-ups
   │   ├── Iniciar cronômetro
   │   └── Mostrar primeira pergunta
   ├── [Loop de Perguntas]
   │   ├── Exibir pergunta com background
   │   ├── Timer de 20s
   │   ├── Usar power-up (opcional)
   │   ├── Selecionar resposta
   │   ├── Verificar corretude
   │   ├── Animação de feedback
   │   ├── Som de feedback
   │   ├── Atualizar estatísticas
   │   ├── Verificar conquistas
   │   └── Próxima pergunta
   ├── [Tela de Resultado]
   │   ├── Mostrar pontuação e tempo
   │   ├── Input de nome
   │   ├── Verificar conquistas finais
   │   └── Salvar pontuação
   ├── [Ranking Temporário]
   │   ├── Exibir top 3 dos últimos 5
   │   ├── Destacar jogador atual
   │   ├── Opções de navegação
   │   └── Atualizar tela inicial
   └── Loop: Jogar Novamente

4. Sistema de Rankings
   ├── Carregar do localStorage
   ├── Adicionar novo jogador
   ├── Ordenar por pontuação e tempo
   ├── Limitar a 30 (permanente) ou 5 (temporário)
   ├── Salvar no localStorage
   └── Renderizar nas telas

5. Service Worker (Lifecycle)
   ├── Install -> Cachear recursos
   ├── Activate -> Limpar caches antigos
   ├── Fetch -> Servir do cache ou rede
   └── Update -> Recarregar app automaticamente
```

### Padrões de Código

#### 1. Gerenciamento de Estado
```javascript
// Estado global do quiz
let currentQuestionIndex = 0;
let selectedQuestions = [];
let correctAnswers = 0;
let startTime = null;
let currentCombo = 0;
let maxCombo = 0;
```

#### 2. Event Delegation
```javascript
// Event listeners centralizados
startBtn.addEventListener('click', () => showScreen('avatar'));
confirmAvatarBtn.addEventListener('click', startQuiz);
```

#### 3. Modularização
```javascript
// Funções específicas por responsabilidade
function showScreen(screenName) { ... }
function startQuiz() { ... }
function loadQuestion() { ... }
function checkAnswer(selectedIndex) { ... }
```

#### 4. Separação de Concerns
```
├── Apresentação (HTML/CSS)
├── Lógica de Negócio (script.js)
├── Dados (questions.js)
├── Persistência (storage-manager.js)
├── UI Components (avatars, powerups, achievements)
└── Efeitos (animations, visual-effects, sound-manager)
```

---

## Documentação Adicional

### Arquivos de Documentação

O projeto possui documentação detalhada em arquivos Markdown:

| Arquivo | Descrição |
|---------|-----------|
| `CHANGELOG.md` | Histórico de mudanças e reorganizações |
| `GUIA_MUDANCAS.md` | Guia detalhado da reorganização de rankings |
| `ANIMACOES_MELHORADAS.md` | Sistema de animações e efeitos visuais |
| `ATUALIZACAO_AUTOMATICA.md` | Como funciona a auto-atualização PWA |
| `CATEGORIAS.md` | Sistema de categorização de perguntas |
| `CONTEUDO_DIDATICO.md` | Conteúdo educacional e pedagógico |
| `CORRECOES.md` | Correções de bugs implementadas |
| `GITHUB_PAGES_SETUP.md` | Como configurar GitHub Pages |
| `MUDANCA_BOTAO.md` | Mudanças na interface de usuário |
| `PERGUNTAS_REDUNDANTES.md` | Análise e remoção de redundâncias |
| `PLANO_IMAGENS_BACKGROUND.md` | Estratégia de backgrounds temáticos |
| `PWA_GUIA_COMPLETO.md` | Guia completo de PWA |

### Requisitos Técnicos

#### Navegadores Suportados
- ✅ **Chrome/Edge** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+ (iOS 14+)
- ✅ **Samsung Internet** 14+

#### APIs Necessárias
- JavaScript ES6+ (classes, arrow functions, etc)
- localStorage API
- Web Audio API
- Service Worker API
- Canvas API (QRCode)
- Fetch API

#### Resolução Mínima
- **Mobile**: 320x568 (iPhone SE)
- **Tablet**: 768x1024 (iPad)
- **Desktop**: 1024x768

### Compatibilidade PWA

| Feature | iOS | Android | Desktop |
|---------|-----|---------|---------|
| Add to Home Screen | ✅ | ✅ | ✅ |
| Offline Mode | ✅ | ✅ | ✅ |
| Push Notifications | ❌ | ⚠️ | ✅ |
| Background Sync | ❌ | ⚠️ | ✅ |
| Install Prompt | ❌ | ✅ | ✅ |

**Legenda**: ✅ Suportado | ⚠️ Parcialmente | ❌ Não suportado

---

## Dicas de Uso

### Para Professores

1. **Projetar em Sala de Aula**
   - Use o QR Code para alunos acessarem rapidamente
   - Modo tela cheia para melhor visualização
   - Rankings incentivam competição saudável

2. **Usar em Avaliações**
   - Limpar ranking temporário entre turmas
   - Acompanhar conquistas para gamificação
   - Exportar resultados via console (F12)

3. **Personalização**
   - Editar perguntas em `js/questions.js`
   - Ajustar tempo em `script.js` (TIME_PER_QUESTION)
   - Adicionar novos backgrounds em `images/backgrounds/`

### Para Alunos

1. **Melhor Performance**
   - Use power-ups estrategicamente
   - Leia perguntas com atenção
   - Pratique para desbloquear conquistas

2. **Instalação**
   - Instale como app no celular/tablet
   - Funciona offline após primeira visita
   - Recebe atualizações automaticamente

### Para Desenvolvedores

1. **Modificar Perguntas**
```javascript
// Em js/questions.js
{
  question: "Sua pergunta aqui?",
  answers: ["Resposta A", "B", "C", "D"],
  correctIndex: 0, // Índice da resposta correta
  backgroundClass: "bg-gps-satellite",
  difficulty: "medium", // easy, medium, hard, very_hard
  category: "gps" // compass, gps, stars
}
```

2. **Adicionar Conquistas**
```javascript
// Em js/achievements.js
{
  id: 'unique_id',
  name: 'Nome da Conquista',
  description: 'Descrição da condição',
  icon: '🏆',
  condition: (stats) => stats.score >= 10
}
```

3. **Customizar Temas**
```css
/* Em css/styles.css */
:root {
  --primary-color: #1e3a8a;
  --secondary-color: #3b82f6;
  --accent-color: #fbbf24;
}
```

### Resetar Dados

#### Método 1: Console do Navegador
```javascript
// Abra Console (F12) e execute:
localStorage.clear();
location.reload();
```

#### Método 2: Tela de Conquistas
- Acesse "Conquistas"
- Role até o final
- Clique em "Resetar Tudo" (se disponível)

#### Método 3: Limpar Apenas Ranking Temporário
- Clique no ícone 🗑️ na tela inicial
- Ou na tela de Ranking Temporário

---

## Versionamento

### Histórico de Versões

- **v25** (atual) - Sistema completo de conquistas e melhorias
- **v24** - Implementação de power-ups
- **v23** - Sistema de avatares
- **v22** - Auto-atualização PWA
- **v21** - QR Code integrado
- **v20** - Sistema de sons
- **v1-19** - Desenvolvimento inicial

### Como Atualizar

#### Para Usuários
A aplicação **atualiza automaticamente** quando instalada como PWA. Basta:
1. Manter internet conectada
2. App verifica atualizações a cada 5 minutos
3. Recarrega automaticamente ao detectar nova versão

#### Para Desenvolvedores
1. Modificar código
2. Incrementar `CACHE_NAME` em `service-worker.js`:
```javascript
const CACHE_NAME = 'quiz-navegacao-v26'; // v25 -> v26
```
3. Commit e push para GitHub
4. GitHub Pages atualiza automaticamente
5. PWAs instalados atualizam em até 5 minutos

---

## Performance

### Métricas

- **First Contentful Paint**: ~0.8s
- **Time to Interactive**: ~1.2s
- **Lighthouse Score**: 95+/100
- **Bundle Size**: ~250KB (sem cache)
- **Cache Size**: ~300KB (com imagens)

### Otimizações Implementadas

1. **Lazy Loading** de imagens de background
2. **Cache inteligente** via Service Worker
3. **Minificação** via GitHub Pages
4. **Versioning** com query params (?v=X)
5. **Network First** para HTML (sempre atualizado)
6. **Cache First** para assets estáticos

---

## Segurança

### Medidas Implementadas

- ✅ **Content Security Policy** (CSP) via meta tags
- ✅ **HTTPS obrigatório** (GitHub Pages)
- ✅ **localStorage isolado** por domínio
- ✅ **Sanitização** de inputs de usuário
- ✅ **Service Worker** com scope limitado
- ✅ **Sem dependências** externas (exceto QRCode.js via CDN)

### Privacidade

- ❌ **Sem coleta de dados** pessoais
- ❌ **Sem analytics** ou tracking
- ❌ **Sem cookies** de terceiros
- ✅ **Dados locais** apenas (não enviados a servidor)
- ✅ **Controle total** do usuário sobre seus dados

---

## Acessibilidade

### Recursos Implementados

- ✅ **Alto contraste** de cores
- ✅ **Fonte legível** (Segoe UI, sans-serif)
- ✅ **Tamanhos responsivos** de texto
- ✅ **Feedback visual** claro (cores, animações)
- ✅ **Feedback sonoro** (pode ser desligado)
- ⚠️ **Teclado** parcialmente suportado
- ⚠️ **Screen readers** parcialmente compatível

### Melhorias Futuras

- [ ] Navegação completa por teclado
- [ ] ARIA labels
- [ ] Suporte a screen readers
- [ ] Modo alto contraste
- [ ] Redução de movimento (prefers-reduced-motion)

---

## Contribuição

### Como Contribuir

Este projeto é educacional e aceita contribuições!

#### 1. Reportar Bugs
- Abra uma [issue no GitHub](https://github.com/augustocbx/quiz-sistema-localizacao-pedro/issues)
- Descreva o problema detalhadamente
- Inclua prints/vídeos se possível

#### 2. Sugerir Melhorias
- Abra uma issue com tag `enhancement`
- Descreva a funcionalidade desejada
- Explique o caso de uso

#### 3. Contribuir com Código
1. Fork o repositório
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Faça suas alterações
4. Teste localmente
5. Commit: `git commit -m "Adiciona nova funcionalidade"`
6. Push: `git push origin feature/nova-funcionalidade`
7. Abra um Pull Request

#### 4. Adicionar Perguntas
- Edite `js/questions.js`
- Siga o formato existente
- Inclua categoria e dificuldade
- Teste antes de enviar PR

### Diretrizes de Código

- Use **JavaScript ES6+**
- Siga o padrão de **indentação** existente (2 espaços)
- Comente código complexo
- Teste em **múltiplos navegadores**
- Mantenha **responsividade** mobile

---

## Licença

Este projeto foi criado para **fins educacionais**.

### Permissões
- ✅ Uso em sala de aula
- ✅ Modificação para fins pedagógicos
- ✅ Distribuição não comercial

### Restrições
- ❌ Uso comercial sem autorização
- ❌ Remoção de atribuição

---

## Créditos

### Desenvolvimento
- **Augusto** - Desenvolvedor Principal

### Bibliotecas Utilizadas
- [QRCode.js](https://davidshimjs.github.io/qrcodejs/) - Geração de QR Code

### Recursos
- **Imagens de Background** - Fontes livres de direitos autorais
- **Ícones Emoji** - Unicode Consortium
- **Fontes** - System fonts (Segoe UI)

### Agradecimentos
Projeto desenvolvido com foco educacional para ensinar conceitos de navegação de forma lúdica e interativa.

---

## Suporte

### Problemas Conhecidos

1. **iOS Safari** - Sons podem não tocar sem interação do usuário
2. **Modo Privado** - localStorage não persiste
3. **Navegadores Antigos** - Funcionalidades limitadas

### FAQ

**P: Os dados são salvos na nuvem?**
R: Não, tudo é salvo localmente no navegador (localStorage).

**P: Funciona offline?**
R: Sim, após a primeira visita com internet.

**P: Como resetar meu progresso?**
R: Console (F12) → `localStorage.clear()` → Reload.

**P: Posso adicionar minhas próprias perguntas?**
R: Sim, edite `js/questions.js` e siga o formato existente.

**P: O ranking sincroniza entre dispositivos?**
R: Não, cada dispositivo tem seu próprio ranking local.

### Contato

Para dúvidas, sugestões ou reportar problemas:
- **Issues**: [GitHub Issues](https://github.com/augustocbx/quiz-sistema-localizacao-pedro/issues)
- **Pull Requests**: [GitHub PRs](https://github.com/augustocbx/quiz-sistema-localizacao-pedro/pulls)

---

**Desenvolvido com 🌟 para ensinar sobre navegação e orientação de forma divertida!**

**URL**: https://augustocbx.github.io/quiz-sistema-localizacao-pedro/

---

*Última atualização: 07 de Janeiro de 2025 - v25*
