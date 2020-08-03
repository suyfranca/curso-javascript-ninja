(function(){
/*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */


  function DOM( param ){
    this.element = document.querySelectorAll( param );
  }

  DOM.prototype.on = function on( action , callback ){
    Array.prototype.forEach.call(this.element, function(e){
      e.addEventListener( action, callback, false );
    });
  }

  DOM.prototype.off = function off( action , callback ){
    Array.prototype.forEach.call( this.element, function(e){
      e.removeEventListener( action, callback, false );
    })
  };

  DOM.prototype.get = function get( action , callback ){
    return this.element;
  };

  // forEach, map, filter, reduce, reduceRight, every e some.

  let $listaCor = new DOM('[data-js="cor"]');
  console.log($listaCor)

  DOM.forEach = function forEach(){
    return Array.prototype.forEach.apply( this.element, arguments );
  };

  DOM.map = function map(){
    return Array.prototype.map.apply( this.element, arguments );
  }

  DOM.filter = function filter(){
    return Array.prototype.filter.apply( this.element, arguments );
  }

  DOM.reduce = function reduce(){
    return Array.prototype.reduce.apply( this.element, arguments );
  }

  DOM.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply( this.element, arguments );
  }

  DOM.every = function every(){
    Array.prototype.every.apply( this.element, arguments );
  }

  DOM.some = function some(){
    Array.prototype.some.apply( this.element, arguments );
  }

  // isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.

  DOM.isArray = function isArray( arr ){
    return Object.prototype.toString.call( arr ) === '[object Array]';
  }

  DOM.isObject = function isObject( obj ){
    return Object.prototype.toString.call( obj ) === '[object Object]';
  }

  DOM.isFunction = function isFunction( func ){
    return Object.prototype.toString.call( func ) === '[object Function]';
  }

  DOM.isNumber = function isNumber( num ){
    return Object.prototype.toString.call( num ) === '[object Number]';
  }

  DOM.isString = function isString( str ){
    return Object.prototype.toString.call( str ) === '[object String]';
  }

  DOM.isBoolean = function isBoolean( boolean ){
    return Object.prototype.toString.call( boolean ) === '[object Boolean]';
  }

  DOM.isNull = function isNull( n ){
    return Object.prototype.toString.call( n ) === '[object Null]' 
      || Object.prototype.toString.call( n ) === '[object Undefined]';
  }

})();