//Entrada
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
//Passo 1: Criar função capaz de receber uma matriz de objetos contendo o nome do atleta e as cinco notas atribuídas e utilizar o laço for para percorrer todos os itens da matriz de objetos.
//Passo 2: Utilizar o método .sort() para ordenar as matrizes.
class PontuacaoDosAtletas{
  constructor(atletas){
    this.atletas=atletas;
  }
       ordenarNotas(){
         this.atletas.forEach(function(atleta) {
          atleta.notas = atleta.notas.sort(function(a,b) {
             return a - b; 
          }) 
       })
                 }
//Passo 3: Utilizar if/else para comparar os valores e eliminar o menor e maior ou o método .slice(x, y) para ajudar na seleção dos valores. 
notasAComputar(){
   this.notas = [];
       for (let i = 0; i < this.atletas.length; i++) {
             this.notas.push(this.atletas[i].notas.slice(1,4)); 
       }
}
//Passo 4:Calcular a média com o método .forEach() para realizar a soma dos valores da média e o .length para saber o tamanho da sua matriz na hora do cálculo da média
  somaDasNotas(){
    this.soma = [];
       for (let i = 0; i < this.notas.length; i++) {
          let soma = 0;
          this.notas[i].forEach(function(nota) {
             soma = soma + nota;
          })
          this.soma.push(soma);  
       }
  }
  mediaDasNotas(){
    this.media = [];
       for (let i = 0; i < this.notas.length; i++) {
          this.media.push(this.soma[i] / this.notas[i].length);
         }
           }
  exibirResultados() {
    this.atletas.forEach((atleta, index) => {
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas: ${atleta.notas.join(', ')}`);
      console.log(`Média: ${this.media[index].toFixed(2)}`);
    });
  }
}
//Chamada dos métodos
let pontuacao = new PontuacaoDosAtletas(atletas)
pontuacao.ordenarNotas();
pontuacao.notasAComputar();
pontuacao.somaDasNotas();
pontuacao.mediaDasNotas();

//Passo 5:Utilizar o console.log() para mostrar o resultado para o usuário.
pontuacao.exibirResultados();
