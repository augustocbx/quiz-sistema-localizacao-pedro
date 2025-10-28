# Quiz: Navegando pelas Estrelas

Um quiz educativo e interativo sobre navegação por astros e sistemas modernos de localização, voltado para crianças até a 7ª série.

## Características

- 🌟 **40 perguntas** sobre orientação pelos astros e GPS (20 selecionadas aleatoriamente por sessão)
- 🎨 **Animações temáticas** de comemoração e consolo
- 🎯 **Sistema de pontuação** com critério de desempate por tempo
- 🏆 **Rankings**: temporário (últimos 5 jogadores) e permanente (top 10)
- 💾 **Persistência de dados** via localStorage
- 📱 **Design responsivo** para tablets e smartphones
- 🎭 **Nomes aleatórios** com ícones temáticos

## Estrutura do Projeto

```
quiz-orientacao/
├── index.html                 # Página principal
├── css/
│   ├── styles.css            # Estilos principais
│   └── backgrounds.css       # Fundos temáticos das perguntas
├── js/
│   ├── script.js             # Lógica principal do quiz
│   ├── questions.js          # Banco de 40 perguntas
│   ├── animations.js         # Animações SVG
│   └── names.js              # Sistema de nomes aleatórios
├── images/                   # Pasta para imagens (opcional)
└── README.md                 # Este arquivo
```

## Como Usar

### Teste Local

1. Abra o terminal na pasta do projeto
2. Execute um servidor HTTP simples:
   ```bash
   python3 -m http.server 8000
   ```
3. Abra o navegador e acesse: `http://localhost:8000`

### Instalar em Tablet (iPad/iOS)

#### Método 1: Usar Safari (Recomendado)

1. **Hospedar o arquivo**:
   - Coloque os arquivos em um servidor web (GitHub Pages, Netlify, Vercel, etc.)
   - Ou use um aplicativo como "Documents by Readdle" para hospedar localmente

2. **Adicionar à Tela Inicial**:
   - Abra o Safari no iPad
   - Navegue até o endereço do quiz
   - Toque no ícone de **Compartilhar** (quadrado com seta)
   - Selecione **"Adicionar à Tela de Início"**
   - Escolha um nome e toque em **"Adicionar"**
   - O ícone aparecerá na tela inicial como um app nativo

3. **Modo Tela Cheia**:
   - Ao abrir pelo ícone da tela inicial, o quiz abrirá em tela cheia automaticamente
   - As meta tags já estão configuradas para isso

#### Método 2: Usar GitHub Pages (Gratuito e Fácil)

1. **Criar repositório no GitHub**:
   - Acesse github.com e faça login
   - Crie um novo repositório público
   - Faça upload dos arquivos do quiz

2. **Ativar GitHub Pages**:
   - Vá em Settings > Pages
   - Em "Source", selecione "main branch"
   - Clique em "Save"
   - Após alguns minutos, seu quiz estará disponível em:
     `https://seu-usuario.github.io/nome-do-repositorio`

3. **Adicionar ao iPad**:
   - Acesse a URL do GitHub Pages no Safari do iPad
   - Siga os passos do Método 1 para adicionar à tela inicial

#### Método 3: Usar Aplicativo Local

1. **Instalar "Documents by Readdle"** (App Store - Gratuito)

2. **Transferir arquivos**:
   - Conecte o iPad ao computador via cabo ou use AirDrop
   - Transfira a pasta `quiz-orientacao` para o app Documents

3. **Iniciar servidor web local**:
   - Abra Documents
   - Localize a pasta do quiz
   - Toque nos 3 pontinhos > "Share"
   - Ative "Wi-Fi Transfer"
   - Anote o endereço IP mostrado

4. **Acessar no navegador**:
   - Abra Safari e digite o endereço IP mostrado
   - Adicione à tela inicial seguindo o Método 1

### Instalar em Tablet Android

1. **Hospedar o arquivo** (mesmo do iOS)

2. **Adicionar à Tela Inicial**:
   - Abra o Chrome no tablet
   - Navegue até o endereço do quiz
   - Toque no menu (3 pontinhos) > "Adicionar à tela inicial"
   - Escolha um nome e toque em "Adicionar"

3. **Modo Tela Cheia**:
   - Abrirá automaticamente em modo standalone

## Características Técnicas

### Sistema de Perguntas
- 20 perguntas aleatórias de um banco de 40
- Respostas embaralhadas para cada pergunta
- Não mostra a resposta correta após erro

### Animações

**Comemoração (ao acertar)**:
- 3 animações comuns (estrela, bússola, constelação)
- 1 animação rara (aparece ao acertar 19/20)
- 1 animação lendária (aparece ao acertar 20/20)

**Consolo (ao errar)**:
- 5 animações com frequências decrescentes:
  - Estrela pensativa: 50%
  - Noite nublada: 30%
  - Bússola perdida: 15%
  - Meteoro: 3%
  - Buraco negro: 2%

### Sistema de Rankings

**Ranking Temporário**:
- Mostra os 3 melhores dos últimos 5 jogadores
- Reinicia automaticamente a cada 5 participantes
- Armazenado em localStorage

**Ranking Geral**:
- Top 10 de todos os tempos
- Persistente no localStorage
- Critério de desempate: tempo em décimos de segundo

### Persistência de Dados

Todos os dados são salvos no localStorage do navegador:
- `generalRanking`: Ranking geral (top 10)
- `tempRanking`: Ranking temporário (top 3 dos últimos 5)
- `tempRankingCount`: Contador de jogadores para reset

**Nota**: Os dados persistem mesmo após fechar o navegador, mas são específicos do dispositivo/navegador.

## Funcionalidades

- ✅ 40 perguntas sobre orientação e navegação
- ✅ Seleção aleatória de 20 perguntas por sessão
- ✅ 4 respostas por pergunta, apenas 1 correta
- ✅ Ordem aleatória das respostas
- ✅ Animações temáticas com rotação
- ✅ Fundos temáticos para cada pergunta
- ✅ Contador de acertos em tempo real
- ✅ Botão para desistir a qualquer momento
- ✅ Sistema de nomes aleatórios com ícones
- ✅ Cronômetro com décimos de segundo
- ✅ Rankings temporário e permanente
- ✅ Interface bonita e amigável
- ✅ Responsivo para tablets e celulares
- ✅ Modo tela cheia em tablets

## Requisitos

- Navegador moderno com suporte a:
  - JavaScript ES6+
  - CSS3 (gradients, animations, flexbox, grid)
  - localStorage API
  - SVG

## Suporte

Testado e otimizado para:
- ✅ iPad (Safari)
- ✅ Tablets Android (Chrome)
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Smartphones (responsivo)

## Dicas de Uso

1. **Para melhor experiência em tablet**:
   - Use orientação horizontal (landscape)
   - Adicione à tela inicial para modo tela cheia
   - Mantenha o brilho adequado para ver as animações

2. **Para resetar dados**:
   - Abra o Console do Navegador (F12)
   - Execute: `localStorage.clear()`
   - Recarregue a página

3. **Para hospedar online gratuitamente**:
   - GitHub Pages (recomendado)
   - Netlify
   - Vercel
   - Firebase Hosting

## Possíveis Melhorias Futuras

- Adicionar sons e música de fundo
- Implementar níveis de dificuldade
- Adicionar mais perguntas ao banco
- Criar categorias temáticas
- Adicionar modo multiplayer
- Implementar sistema de conquistas
- Adicionar suporte a PWA (Progressive Web App)
- Sincronizar rankings entre dispositivos

## Licença

Este projeto foi criado para fins educacionais.

---

Desenvolvido com 🌟 para ensinar sobre navegação e orientação de forma divertida!
