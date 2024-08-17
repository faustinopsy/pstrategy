# Exemplo de Renderização com o Padrão Strategy

Este repositório contém uma implementação do padrão de projeto Strategy em JavaScript, aplicada a um exemplo de renderização dinâmica de conteúdo com base na linguagem do navegador. (Outras branches deste projeto contêm exemplos diferentes).

## O que é o Padrão Strategy?

O padrão Strategy é um padrão comportamental que permite que uma família de algoritmos seja definida e encapsulada em classes separadas, tornando-os intercambiáveis. Este padrão permite que o algoritmo varie independentemente dos clientes que o utilizam, tornando o código mais flexível e fácil de manter.

### **Vantagens do Padrão Strategy:**

- **Flexibilidade:** Permite a alteração dos algoritmos em tempo de execução sem alterar o código cliente.
- **Manutenção:** Facilita a manutenção do código ao separar a lógica do algoritmo em classes distintas.
- **Reutilização:** Os algoritmos encapsulados podem ser reutilizados em diferentes contextos.

## Implementação no Projeto

Neste exemplo, o padrão Strategy é utilizado para renderizar conteúdo em diferentes idiomas com base na linguagem do navegador ou na escolha do usuário:

- **PortuguêsStrategy:** Renderiza o conteúdo em português.
- **InglêsStrategy:** Renderiza o conteúdo em inglês.
- **EspanholStrategy:** Renderiza o conteúdo em espanhol.

### **Arquitetura do Projeto**

- **index.html:** Página HTML que exibe o conteúdo e os botões para troca de idioma.
- **app.js:** Script principal que detecta a linguagem do navegador, aplica a estratégia de idioma correspondente e permite a troca de idioma.
- **LinguagemStrategy.js:** Define a interface da estratégia de renderização de idioma.
- **PortuguesStrategy.js, InglesStrategy.js, EspanholStrategy.js:** Implementam estratégias específicas para cada idioma.
- **LinguagemContexto.js:** Contexto que utiliza a estratégia para aplicar a renderização do conteúdo.
- **detectarIdioma.js:** Função para detectar a linguagem do navegador.
- **carregalIdioma.js:** Módulo para carregar os arquivos JSON contendo as traduções.
- **gerenciaLinguagem.js:** Módulo para gerenciar a configuração do idioma e persistência no `localStorage`.

### **Estrutura dos Arquivos**

```plaintext
.
├── index.html
├── js/
│   ├── administralidioma/
│   │   ├── carregalIdioma.js
│   │   ├── detectarIdioma.js
│   │   └── gerenciaLinguagem.js
│   ├── lang/
│   │   ├── en.json
│   │   ├── es.json
│   │   └── pt.json
│   ├── strategylidioma/
│   │   ├── EspanholStrategy.js
│   │   ├── InglesStrategy.js
│   │   ├── LinguagemContexto.js
│   │   ├── LinguagemStrategy.js
│   │   └── PortuguesStrategy.js
│   ├── app.js
│   └── conteudo.js
```

## Como Funciona
- Detecção de Idioma: O arquivo detectarIdioma.js detecta a linguagem do navegador e retorna o código de idioma apropriado (pt, en, es).
- Escolha da Estratégia: Com base no idioma detectado ou no idioma salvo no localStorage, o app.js escolhe a estratégia de renderização apropriada.
- Carregamento de Conteúdo: O módulo carregaIdioma.js carrega o arquivo JSON correspondente ao idioma selecionado e aplica o conteúdo na página.
- Persistência de Idioma: O idioma selecionado pelo usuário é salvo no localStorage para que seja lembrado na próxima visita.

## Importância e Usabilidade
O padrão Strategy é extremamente útil em cenários onde diferentes algoritmos ou comportamentos precisam ser aplicados em diferentes situações. Neste exemplo, utilizamos o Strategy para adaptar a interface do usuário ao idioma preferido, melhorando a usabilidade e a experiência do usuário.

Além disso, o Strategy pode ser aplicado em diversas outras áreas, como validação de formulários, cálculo de preços dinâmicos e autenticação de usuários, demonstrando sua versatilidade e importância em desenvolvimento de software moderno.