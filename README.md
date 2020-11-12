# Indice

- [Sobre](#-sobre)
- [Como baixar o projeto](#-como-baixar-o-projeto)
- [Passo a passo para desenvolver api](#-passo-a-passo-para-desenvolver-api)

## Sobre

Implementando um aplicativo para armazenar dados de produtos e categorias

---

---

## Como baixar o projeto 

```bash

    # Clonar o repositório
    $ git clone https://github.com/Delismachado/olist

    # Entrar no diretório desejado
    $ cd ...    
    
    # Instalar as dependências
    $ npm init -y

    # Iniciar o projeto
    $ npm run dev

    # Para configurar biblioteca de testes
    $ yarn jest --init

    # Para rodar testes (Em desenvolvimento)
    $ yarn test ou npm test
```

---
- Para este projeto você vai precisar:
  > * Node.js
  > * npm ou yarn
  > * Docker
  > * mongodb
  > * Nodemon (inicia o servidor a cada alteração)
  > * Git (para versionamento)

- E para testar as rotas e banco de dados:
  > * Insomnia
  > * Studio3t

  - E para testes:
  > * jest

- Ambiente de trabalho utilizado:
  > * SO - linux (debian)
  > * Editor para programar: Visual Studio Code
  > * Bibliotecas auxiliares: express: para rotas,
  require-dir: para buscar todos os arquivos de um diretório


# Especificação
1. Você deve implementar um aplicativo para armazenar dados de produtos e categorias.

- [x] Receba um CSV com as categorias e importe para o banco de dados

- [x] Importar dados de um arquivo CSV para o banco de dados, dados do arquivo:
> nome
> * Móveis
> * Decoração
> * Celular 
> * Informática
> * Brinquedos


- [x] Cada registro de categoria no banco de dados deve ter os seguintes campos:

* id (autogerado)
* nome

2. CRUD (criar, ler, atualizar e excluir)

Você precisa implementar estas ações:
- [x] Criar um produto
- [x] Ler os dados do produto
- [x] Atualizar os dados do produto
- [x] Excluir os dados do produto

Cada registro de produto possui os campos:
- [x] id (autogerado)
- [x] nome
- [x] descrição
- [x] valor
- [x] categorias (relacionamento many to many)

Para recuperar um produto, podemos filtrar por 4 campos (ou uma composição desses quatro):
- [x] nome
- [x] descrição
- [x] valor
- [x] categorias
- [x] Deve ser possível navegar pelos dados de todos os produtos sem nenhum filtro.

Para criar um produto, será necessário informar os dados abaixo:
- [x] "nome": // Nome do produto;
- [x] “descrição”: // Descrição do produto
- [x] “valor”:// Valor do produto
- [x] “categorias”:// Lista de ids de categorias

Recomendações:

- [x] Utilizar padrões de projeto
- [] Boas práticas de desenvolvimento de software (em construção)
- [x] Utilizar paradigma de orientação a objetos
- [x] Utilizar GitHub
- [] Camada visual pode ser console, desktop ou web (Desenvolvendo)
- [x] Variáveis, código e strings devem estar todos em inglês.


  
- Recomendações
  * Escreva testes! Por favor, faça testes ... nós apreciamos testes <3 ... testes tornam o mundo melhor;
  * Use boas práticas de programação;
  * Use as melhores práticas do git, com mensagens claras;
  * Esteja ciente ao modelar o banco de dados;

# Divirta-se!

