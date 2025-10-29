# Análise de Perguntas Redundantes

## ❌ REDUNDÂNCIAS IDENTIFICADAS (Remover 5 perguntas)

### 1. **GPS em locais fechados** - REDUNDANTE

**Pergunta 1** (Linha 297):
```
"Por que é difícil usar o GPS dentro de shoppings e túneis?"
Resposta: "Os sinais dos satélites não passam bem pelas paredes e teto"
```

**Pergunta 2** (Linha 435):
```
"Por que o GPS não funciona bem dentro de cavernas ou túneis profundos?"
Resposta: "As ondas dos satélites não conseguem atravessar muita rocha e terra"
Difficulty: hard
```

**❌ REMOVER**: Pergunta 1 (linha 297) - Mais genérica e fácil
**✅ MANTER**: Pergunta 2 (linha 435) - Mais específica e marcada como hard

---

### 2. **Terra como ímã** - REDUNDANTE

**Pergunta 1** (Linha ~633):
```
"Como a Terra funciona em relação ao magnetismo?"
Resposta: "Como um grande ímã gigante"
Difficulty: hard
```

**Pergunta 2** (Linha ~745):
```
"Por que a Terra se comporta como um grande ímã?"
Resposta: "Porque seu núcleo tem metais como ferro e níquel"
```

**❌ REMOVER**: Pergunta 1 - Resposta mais superficial
**✅ MANTER**: Pergunta 2 - Explica o motivo (metais no núcleo)

---

### 3. **Ampulheta dos navegadores** - REDUNDANTE

**Pergunta 1** (Linha ~73):
```
"O que os navegadores antigos usavam para saber as horas durante a viagem?"
Resposta: "Ampulheta (relógio de areia)"
```

**Pergunta 2** (Linha ~256):
```
"Os navegadores antigos usavam um instrumento chamado 'ampulheta' durante as viagens. Para que servia?"
Resposta: "Para medir o tempo durante a viagem"
```

**❌ REMOVER**: Pergunta 2 (linha 256) - Já dá a resposta na pergunta ("ampulheta")
**✅ MANTER**: Pergunta 1 - Requer conhecimento sem dar pistas

---

### 4. **Povos antigos observando o céu** - PARCIALMENTE REDUNDANTE

**Pergunta 1** (Linha ~436):
```
"Por que os povos antigos observavam o nascimento e pôr do Sol com atenção?"
Resposta: "Para se orientar e marcar o tempo ao longo do ano"
```

**Pergunta 2** (Linha ~719):
```
"Por que os povos antigos observavam o nascer e o pôr do Sol, as fases da Lua e o brilho das estrelas?"
Resposta: "Para se orientar, marcar o tempo e planejar a agricultura"
```

**❌ REMOVER**: Pergunta 1 - Mais limitada (apenas Sol)
**✅ MANTER**: Pergunta 2 - Mais abrangente (Sol + Lua + estrelas)

---

### 5. **Sombra do gnômon de manhã/tarde** - REDUNDANTE

**Pergunta 1** (Linha ~244):
```
"Se você colocar uma vara no chão pela manhã, em que direção a sombra dela aponta?"
Resposta: "Para o Oeste"
```

**Pergunta 2** (Linha ~713):
```
"Se a sombra do gnômon aponta para o Oeste de manhã, para onde ela aponta à tarde?"
Resposta: "Para o Leste"
```

**❌ REMOVER**: Nenhuma - SÃO COMPLEMENTARES
**✅ MANTER**: Ambas - Uma pergunta sobre manhã, outra testa raciocínio manhã→tarde

**⚠️ DECISÃO**: Manter ambas pois testam conceitos diferentes

---

## ⚠️ TEMAS COM MUITAS PERGUNTAS (OK - Distribuição intencional)

### GPS e Satélites (22 perguntas)
- **Justificativa**: É um dos temas centrais e mais relevantes para crianças modernas
- **Variedade**: Cobrem aspectos diferentes (o que é, como funciona, aplicações, história, sistemas globais)
- **Conclusão**: ✅ Distribuição adequada

### Gnômon/Sombra (13 perguntas)
- **Justificativa**: Atividade prática importante do conteúdo didático
- **Variedade**: Diferentes aspectos (construção, uso, interpretação, direções)
- **Conclusão**: ✅ Distribuição adequada

### Povos Antigos (13 perguntas)
- **Justificativa**: Contexto histórico importante, alinhado com BNCC
- **Variedade**: Diferentes civilizações e métodos
- **Conclusão**: ✅ Distribuição adequada

---

## 📊 RESUMO FINAL

**Total de perguntas atuais**: 120
**Redundâncias encontradas**: 4 pares
**Perguntas a remover**: 4

**Total após limpeza**: 116 perguntas

### Perguntas a REMOVER:
1. ❌ "Por que é difícil usar o GPS dentro de shoppings e túneis?" (linha ~297)
2. ❌ "Como a Terra funciona em relação ao magnetismo?" (linha ~633)
3. ❌ "Os navegadores antigos usavam um instrumento chamado 'ampulheta'..." (linha ~256)
4. ❌ "Por que os povos antigos observavam o nascimento e pôr do Sol..." (linha ~436)

### Resultado:
✅ Banco de questões mais enxuto e sem redundâncias
✅ Mantém 116 perguntas de alta qualidade
✅ Distribuição temática equilibrada
