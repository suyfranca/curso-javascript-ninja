(function(){
  'use strict';
/*
  1. Envolva todo o conteúdo desse desafio em uma IIFE.
  2. Adicione a diretiva 'use strict';
  3. Crie um arquivo index.html e adicione esse script à ele.
  */

  /*
  Declare uma variável chamada `name` que receba seu primeiro nome.
  Mostre no console todas as letras do seu nome separadas, com a frase:
  - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
  Ex: no caso do nome ser "Fernando", deve mostrar as frases:
  - "F é a 1ª letra do meu nome."
  - "e é a 2ª letra do meu nome."
  E assim por diante, até a última.
  */
  console.log( 'As letras do seu nome:' );
  
  let name = 'Suyanne';

  for ( var i = 0 ; i < name.length ; i++ ){
    let letra = name.charAt(i);
    let posicao =  name.indexOf(letra, i) + 1;
    console.log( `${letra} é a ${posicao}ª letra do meu nome.` );
  }


  /*
  - Declare uma variável chamada `fullName`, que receba seu nome completo,
  escrito no formato de slug (caixa baixa e palavras separadas por um traço).
  Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
  - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
  por um espaço.
  - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
  nome, então fique à vontade para usar as artimanhas que já viu até agora no
  curso para fazer isso funcionar corretamente :)
  - Mostre no console o nome no formato slug, e o resultado final. Use um
  console.log para cada formato.
  */
  console.log( '\nNome convertido à partir de um slug:' );
  
  let fullName = "jose-da-silva";

  console.log('Nome em slug: ', fullName);

  let newFullName = fullName.split('-').map( name => 
    name.charAt(0).toUpperCase() + name.slice(1) ).join(' ');

  console.log( 'Nome em novo formato: ', newFullName);
  

  /*
  - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
  cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
  ser um "e". No final, concatene com a frase: " são meus amigos.".
  O resultado final deve ficar mais ou menos assim:
  - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
  - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
  5 nomes foi somente uma sugestão ;)
  */
  console.log( '\nMeus amigos:' );
  
   let friends = [ 'Isabelle', 'Kaynan', 'Livia', 'Carol', 'Matheus' ]; 
  // let phrase = [];
  // let arr = friends.forEach( function(item, index, arr){
  //   let tamanho = arr.length - 1;
  //   if ( index === tamanho ){
  //     phrase.push(`e ${item} são meus amigos.`);
  //   } else {
  //     phrase.push(`${item},`);
  //   }
  // });
  // console.log( phrase.join(' ') );
  
  let newFriends = friends.reduce(function( acumulado, item, index, arr ){
    let separator = friends.length - 1 === index ? ' e ' : ', ';
    return acumulado + separator + item;
    
    // if ( index < arr.length - 1 ){
    //     return acumulado + item + ", ";
    //   } else {
    //     return acumulado + "e " + item + " são meus amigos."
    //   }
  }).concat(' são meus amigos.');

  console.log( newFriends );


  /*
  Usando o replace(), faça a string "Roberto" virar "Roberta".
  Mostre o resultado no console.
  */
  console.log( '\nEra "Roberto", agora é:' );
  
  let name2 = "Roberto";

  name2 = name2.replace("to", "ta");
  
  console.log(name2);

  /*
  Mostre no console a parte "nando" da string "Fernando". Use o método que
  faz a busca do final para o início da string.
  */
  console.log( '\nParte de uma string:' );
  
  let name3 = 'Fernando';
  
  let nando = name3.substring(8, 3);
  let nando2 = name3.substring(3);

  console.log(nando, nando2)

  /*
  Declare uma variável chamada `myName`, que receba o seu primeiro nome,
  escrito de forma natural.
  Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
  e minúsculas.
  - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
  de qualquer tamanho, escrito de qualquer forma.
  Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
  */
  console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
  
  let myName = 'Suyanne';
  let myNewName = "";

  for (let index = 0, len = myName.length ; index < len ; index++ ){
    index % 2 === 0 
    ? myNewName += myName.charAt(index).toUpperCase()
    : myNewName += myName.charAt(index).toLowerCase() ;
  }

  console.log(myNewName);







})();