# ReactDummy
## Toda Pasta na raiz do repositório é um novo projeto de teste

### IDE's recomendadas

* Atom
* git bash

### First Run

* Abrir terminal no diretorio raiz do projeto que deseja executar:
  -e.g: (./firstapp/)
* Executar os comandos:
```sh
$ npm install
```

### Teste First Run

* Abrir terminal no diretorio raiz do projeto que deseja executar:
  -e.g: (./firstapp/)
* Executar os comandos:
```sh
$ npm webpack
$ node server.js
```
* No navegador acessar a porta padrão do projeto: http://localhost:3000/

#### OBS

Caso queira rodar o webpack e mante-lo atualizando automaticamente executar o comando:
```sh
$ npm webpack -w
```
Em outra aba do terminal:
```sh
$ node server.js
```
- O parametro "w" mantem o webpack atualizando em tempo real.
- Nesse caso é necessario abrir outra aba no terminal para iniciar o server pois com o parametro "w" o terminal ficará "preso" até que pare a execução.
- Dessa forma basta fazer as alterações no codigo fonte e atualizar o navegador para visualiza-las.
