# Resumo

O projeto em questão foi desenvolvido como parte do objetivo de aprendizagem do Bootcamp da Laboratoria. O tema escolhido foi o Cifra de César, devido à facilidade de entendimento que tive em relação a sua lógica.

## Tema e público alvo

Nos dias atuais, percebe-se o quão indispensável a tecnologia se tornou na rotina do ser humano. A sua integração no nosso cotidiano, tem manifestado um crescimento radical, permitindo ao indivíduo a utilização, por exemplo, de redes sociais para diversas finalidades. Portanto, o projeto em questão visa gerenciar senhas mais confiáveis para redes sociais e garantir mais segurança dos dados pessoais.

## Desenvolvimento
![Prototipo](https://github.com/daianeex/SAP007-cipher/blob/main/src/prototipo.png) 

O protótipo foi estruturado no Figma, com design minimalista e objetiva, com toque de cores modernas que rementem a tecnologia das redes sociais. 

![Paletas de cores](https://github.com/daianeex/SAP007-cipher/blob/main/src/paletasdecores.png) 

# Cifra de César

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações gerais](#4-considerações-gerais)
- [5. Critérios de aceitação mínimos do projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
- [6. Hacker edition](#6-hacker-edition)
- [7. Considerações técnicas](#7-considerações-técnicas)
- [8. Guias, dicas e leituras complementares](#8-guias-dicas-e-leituras-complementares)
- [9. Checklist](#9-checklist)

---

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Neste projeto você criará a primeira aplicação web do _bootcamp_. Nela o usuário
poderá cifrar e decifrar um texto indicando a chave de deslocamento (_offset_).

O tema é livre. Você deve pensar em alguma situação de vida real em que seja
necessário cifrar uma mensagem e pensar em como deve ser a experiência do
usuário (tela, explicações, mensagens, cores, marca?, etc.). Algumas ideias de
exemplo:

- Criar senhas seguras para email.
- Cifrar cartões de crédito.
- Ferramenta de mensagens internas de uma organização
  em uma zona de conflito.
- Mensagens secretas para alguma pessoa.

Neste projeto você aprenderá a construir uma aplicação web (_WebApp_) que irá
interagir com o usuário final através do navegador utilizando HTML, CSS e
JavaScript como ferramentas.

## 3. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### HTML

- [ ] **Uso de HTML semântico**

    <details><summary>Links</summary><p>

  - [HTML semántico](https://curriculum.laboratoria.la/pt/topics/html/02-html5/02-semantic-html)
  - [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
  </p></details>

### CSS

- [ ] **Uso de seletores de CSS**

    <details><summary>Links</summary><p>

  - [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/01-css/01-intro-css)
  - [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
  </p></details>

- [ ] **Empregar o modelo de caixa (box model): borda, margem, preenchimento**

    <details><summary>Links</summary><p>

  - [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/01-css/02-boxmodel-and-display)
  - [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  - [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  - [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
  </p></details>

### Web APIs

- [ ] **Uso de seletores de DOM**

    <details><summary>Links</summary><p>

  - [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/02-dom/03-1-dom-methods-selection)
  - [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  - [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
  </p></details>

- [ ] **Gerenciamento de eventos de DOM**

    <details><summary>Links</summary><p>

  - [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  - [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  - [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  - [El objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
  </p></details>

- [ ] **Manipulação dinâmica de DOM**

    <details><summary>Links</summary><p>

  - [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  - [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  - [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  - [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  - [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  - [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
  </p></details>

### JavaScript

- [ ] **Tipos de dados primitivos**

    <details><summary>Links</summary><p>

  - [Valores Primitivos - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#valores_primitivos)
  </p></details>

- [ ] **Strings (cadenas de caracteres)**

    <details><summary>Links</summary><p>

  - [Strings](https://curriculum.laboratoria.la/pt/topics/javascript/06-strings)
  - [String - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
  </p></details>

- [ ] **Variáveis (declaração, atribuição, escopo)**

    <details><summary>Links</summary><p>

  - [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/01-values-variables-and-types)
  - [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/02-variables)
  </p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário)**

    <details><summary>Links</summary><p>

  - [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/01-conditionals-and-loops)
  - [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
  </p></details>

- [ ] **Uso de laços (for, for..of, while)**

    <details><summary>Links</summary><p>

  - [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/02-loops)
  - [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
  </p></details>

- [ ] **Uso de funções (parâmetros, argumentos, valor de retorno)**

    <details><summary>Links</summary><p>

  - [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/03-functions)
  - [Funções clásicas](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/01-classic)
  - [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/02-arrow)
  - [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
  </p></details>

- [ ] **Testes unitários**

    <details><summary>Links</summary><p>

  - [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
  </p></details>

- [ ] **Uso ES modules**

    <details><summary>Links</summary><p>

  - [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  - [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
  </p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura | Semântica)**

### Git e GitHub

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

    <details><summary>Links</summary><p>

  - [Site oficial do GitHub Pages](https://pages.github.com/)
  </p></details>

### UX (User eXperience)

- [ ] **Desenhar a aplicação pensando e entendendo o usuário**

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

## 4. Considerações gerais

- Este projeto deve ser resolvido individualmente.
- O projeto será entregue subindo o seu código no GitHub (commit/push) e o
  deploy será feito no GitHub Pages. Se não sabe o que é o GitHub, não se
  preocupe, você aprendera durante o projeto.
- Tempo para completar: tempo referência 2 semanas.

## 5. Critérios de aceitação mínimos do projeto

Use o alfabeto simples (somente maiúsculas e sem ç):

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### Definição do produto

No README.md, escreva como você definiu seu usuário e qual foi o processo para
definir o produto final a nível de experiência e interface.

- Quem são os principais usuário do produto?
- Quais são os objetivos do usuário em relação com o produto?
- Como você acredita que o produto está resolvendo os problemas do usuário?

### Interface do usuário (UI)

A interface deve permitir ao usuário:

- Eleger um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
- Inserir uma mensagem (texto) para ser cifrada.
- Ver o resultado da mensagem cifrada.
- Inserir uma mensagem (texto) para ser decifrada.
- Ver o resultado da mensagem decifrada.

### Scripts / Arquivos

- `REAME.md`: deve explicar como "deployar", instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.
- `src/index.html`: aqui será o ponto de entrada da sua aplicação. Este arquivo
  deve conter a marcação HTML e chamar o CSS e JavaScript necessários.
- `src/style.css`: este arquivo deve conter as regras de estilo. Queremos que
  você escreva suas próprias regras. Por isso, NÃO é permitido o uso de frameworks
  de CSS (Bootstrap, materialize etc).
- `src/cipher.js`: aqui você deve implementar o objeto `cipher`, o qual já está
  _exportado_ no _boilerplate_. Este objeto (`cipher`) deve conter dois métodos:
  - `cipher.encode(offset, string)`: `offset` é o número de posições que
    queremos mover para a direita no alfabeto e `string` é a mensagem (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` é o número de posições que
    queremos mover para a esquerda no alfabeto e `string` é a mensagem (texto)
    que queremos decifrar.
- `src/index.js`: aqui, você escreverá todo o código relacionado à interação do DOM
  (selecionar, atualizar e manipular elementos do DOM e eventos). Nesse arquivo,
  você precisará chamar as funções `cipher.encode()` e `cipher.decode()` conforme
  seja necessário para atualizar o resultado na tela (UI).
- `test/cipher.spec.js`: este arquivo contem alguns testes de exemplo e aqui
  você deve implementar os testes para `cipher.encode()` e `cipher.decode()`.

## 6. Hacker Edition

As seções chamadas _Hacker Edition_ são **opcionais**. Se você **terminou** tudo
e ainda sobrou tempo, faça essa parte. Assim você poderá aprofundar e exercitar
mais sobre os objetivos de aprendizagem do projeto.

A descrição geral deste projeto não menciona o que aconteceria com letras
minúsculas ou outros caracteres (como espaço, pontuação, ç, ...). O
_boilerplate_ inclui alguns testes (comentados) que vocês podem usar como ponto
de partida para implementar o suporte para esses casos.

Também não foi mencionado o que aconteceria com _offset_ negativo. Como parte da
hacker edition te convidamos a explorar esse caso sozinha.

## 7. Considerações técnicas

A lógica do projeto deve estar implementada inteiramente em JavaScript. Nesse
projeto **NÃO** está permitido usar bibliotecas ou frameworks, só vanilla
JavaScript.

Os testes unitários devem cobrir no mínimo de 70% dos _statements_, _functions_
e _lines_, e um mínimo de 50% de _branches_. O _boilerplate_ já contem o setup e
configurações necessárias para executar os testes assim como _code coverage_
para ver o nível de cobertura dos testes usando o comando `npm test`.

O _boilerplate_ inclui testes de exemplo, como ponto de partida.

Para começar esse projeto você terá que fazer um _fork_ e _clonar_ este
repositório que contém o _boilerplate_.

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida assim
como toda a configuração de dependências e testes de exemplo:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```

O _boilerplate_ inclui tarefas que executam [eslint](https://eslint.org/) e
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar o `HTML` e
`JavaScript` com respeito a uma guia de estilos. Ambas tarefas são executadas
automaticamente antes de executar os testes quando usamos o comando `npm run test`.

No caso do `JavaScript` estamos usando o `eslint` que está configurado no
arquivo `.eslintrc` que contem o mínimo de informação como versão do
JavaScript/ECMAScript, o ambiente (_browser_ nesse caso) e as [regras
recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).

Nas regras/guias de estilo usaremos das recomendações padrão tanto para o
`eslint` quanto `htmlhint`.

---

## 8. Guias, dicas e leituras complementares

### Primeiros passos

1. Antes de mais nada, se assegure de ter um bom 📝 editor de texto, algo
   como [Code](https://code.visualstudio.com/) ou [Atom](https://atom.io/).
2. Para executar os comandos você precisará de um 🐚 UNIX Shell, que é um
   programa que interpreta linhas de comando (command-line interpreter) e também
   deve ter o git instalado. Se você usa um sistema operacional "UNIX-like",
   como GNU/Linux ou MacOS, você já tem um _shell_ (terminal) instalado (e
   provavelmente o `git` também). Se você usa o Windows, pode utilizar a
   versão completa do [Cmder](https://cmder.net/) que já inclui o Git bash.
   Se tiver o Windows 10 ou superior,
   pode usar o [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. Faça seu próprio 🍴
   [fork](https://help.github.com/articles/fork-a-repo/) do repositório.
4. ⬇️ [Clone](https://help.github.com/articles/cloning-a-repository/)
   o \_fork* para seu computador (cópia local).
5. 📦 Instale as dependências do projeto rodando o comando `npm install`. Mas
   antes disso tenha certeza de ter instalado o [Node.js](https://nodejs.org/)
   (que inclui o [npm](https://docs.npmjs.com/)).
6. Se tudo foi bem, você deve conseguir executar os 🚥 testes
   unitários com o comando `npm test`.
7. Para ver a interface do seu programa no navegador, use o comando `npm start`
   para iniciar o servidor web e entre na url `http://localhost:5000` no seu
   navegador.
8. Let's Code! 🚀

Este [video](https://drive.google.com/file/d/1CM6ZfpGfJMF6A8IcXoK5cFBBq-CY8oBR/view?usp=sharing)
da Paloma também pode te ajudar nos seus primeiros passos ;)

### Recursos extras

A seguir um vídeo do Daniel que te ajudará a entender a fórmula matemática usada
pela Cifra de César e algumas coisas mais que deve saber para resolver o seu
projeto. Escute com atenção e siga seus conselhos ! :)

[![Dicas Cifra de
César](https://img.youtube.com/vi/utiLWBXmNQU/0.jpg)](https://www.youtube.com/watch?v=utiLWBXmNQU)

Desenho da experiência do usuário (User Experience Design):

- Ideação
- Prototipagem
- Teste e iteração

Desenvolvimento Front-end:

- Valores
- Tipos
- Variáveis
- Controle de fluxo
- Testes unitários
- [Aprenda mais sobre
  `charCodeAt()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
- [Aprenda mais sobre
  `String.fromCharCode()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
- [Aprenda mais sobre
  `ASCII`](https://web.fe.up.pt/~ee96100/projecto/Tabela%20ascii.htm)
- [Documentação do NPM](https://docs.npmjs.com/)

Ferramentas:

- [Terminal](https://www.loom.com/share/29a6cf0f3c5245bf995738284b706468)
- [Git config](https://www.loom.com/share/c7d445872b9f4618a24605fdcb26a48d)
- GitHub e GitHub Pages.

Organização do trabalho:

- [Agilidade](https://www.youtube.com/watch?v=vozsjbh4noU)
- [Scrum em menos de 2 minutos](https://www.youtube.com/watch?v=IKZHPjCQ2m8)
- [Scrum em detalhes](https://www.youtube.com/watch?v=mt2hM4yrPn0). Não
  esperamos que você faça tudo isso neste projeto. Iremos aprofundando nesses
  conceitos ao longo do _bootcamp_.

## 9. Checklist

Essa seção é para te ajudar a ter um controle do que você precisa completar.

### Parte Obrigatória

- [ ] `README.md` adicionar informação sobre o processo e decisões do desenho.
- [ ] `README.md` explicar claramente quem são os usuários e as suas relações
      com o produto.
- [ ] `README.md` explicar claramente como o produto soluciona os
      problemas/necessidades dos usuários.
- [ ] Usar VanillaJS.
- [ ] Implementar `cipher.encode`.
- [ ] Implementar `cipher.decode`.
- [ ] Passar o linter com a configuração definida.
- [ ] Passar as provas unitárias.
- [ ] Testes unitários cobrindo 70% dos _statements_, _functions_ e _lines_, e
      no mínimo 50% das _branches_.
- [ ] Interface que permita escolher o `offset` (chave de deslocamento) usava
      para cifrar/decifrar.
- [ ] Interface que permita escrever um texto para ser cifrado.
- [ ] Interface que mostre o resultado da cifra corretamente.
- [ ] Interface que permita escrever um texto para ser decifrado.
- [ ] Interface que mostre o resultado decifrado corretamente.

### Parte Opcional: "Hacker edition"

- [ ] Cifrar/decifrar minúsculas.
- [ ] Cifrar/decifrar _outros_ caractéres (espaços, pontuação, `ç`, `á`, ...).
- [ ] Permitir usar `offset` negativo.
