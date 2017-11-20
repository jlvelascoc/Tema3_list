"use strict";
/**
 * Variable "constante" que contiene la longitud máxima de elementos permitidos en la lista.
 * @type {number}
 */
var MAX_LENGTH = 5;

/**
 * Función que crea la lista.
 * @returns {Array}
 */
function create() {
  var array = [];

  return array;
}

/**
 * Función que nos dice si la lista está vacia.
 * @param list
 * @returns {boolean}
 */
function isEmpty(list) {
  return (list.length === 0) ? true : false; //Si la longitud es igual a cero devuelve true, en caso contrario false
}

/**
 * Función que nos dice si la lista está llena.
 * @param list
 * @returns {boolean}
 */
function isFull(list) {
  return (list.length === MAX_LENGTH ) ? true : false; //Si la longitud de la lista es igual a la constante MAX_LENGTH devuelve true, en caso contrario false
}

/**
 * Función que nos dice la cantidad de elementos que contiene la lista actualmente.
 * @param list
 * @returns {number}
 */
function size(list) {
  return list.length;
}

/**
 * Función que añade un elemento al final de la lista.
 * Devuelve el numero de elementos actuales.
 * @param list
 * @param elem
 * @returns {number}
 */
function add(list, elem) {
  //Comprobamos que el elemento a añadir es un numero y que la lista no está llena
  if (isNaN(elem)) throw "The element is not a number";
  if (isFull(list)) throw "The list is full";

  return list.push(elem);
}

/**
 * Función que añade un elemento en la posición indicada.  Si la posicion indicada es mayor a la que ocupa el último elemento, añade este a continuación.
 * Devuelve el numero de elementos actuales
 * @param list
 * @param elem
 * @param index
 * @returns {number}
 */
function addAt(list, elem, index) {
  //Comprobamos que el elemento a añadir es un numero, que la lista no está llena y que el indice no es mayor a la posicion del ultimo elemento
  if (isNaN(elem)) throw "The element is not a number";
  if (isNaN(index)) throw "The element is not a number";
  if (isFull(list)) throw "The list is full";

  if (index > MAX_LENGTH) {
    list.push(elem);
  }
  else {
    list.splice(index, 0, elem);
  }

  return list.length;
}

/**
 * Función que obtiene el valor del elemento que se encuentre en la posición indicada
 * @param list
 * @param index
 * @returns {*}
 */
function get(list, index) {
  //Comprobamos que el indice es un numero y que no es mayor al numero de elementos actuales
  if (isNaN(index)) throw "The index must be a number";
  if (index >= size(list)) throw "The index is higher than size";

  return list[index];
}

/**
 * Función que devuelve los valores de la lista en una cadena de texto
 * @param list
 * @returns {string}
 */
function toString(list) {
  if (isEmpty(list)) throw "The list is empty";

  return list.toString();
}

/**
 * Función que obtiene la primera posicion en la que se encuentra un determinado elemento empezando por el principio.
 * Si el elemento no se encuentra devuelve -1
 * @param list
 * @param elem
 * @returns {number}
 */
function indexOf(list, elem) {
  if (isNaN(elem)) throw "The element is not a number";

  return list.indexOf(elem);
}

/**
 * Función que obtiene la primera posicion en la que se encuentra un determinado elemento empezando por el final.
 * Si el elemento no se encuentra devuelve -1
 * @param list
 * @param elem
 * @returns {number}
 */
function lastIndexOf(list, elem) {
  if (isNaN(elem)) throw "The element is not a number";

  return list.lastIndexOf(elem);
}

/**
 * Devuelve la capacidad máxima de la lista
 * @param list
 * @returns {number}
 */
function capacity(list) {
  return MAX_LENGTH;
}

/**
 * Función que vacia la lista al completo
 * @param list
 */
function clear(list) {
  if (isEmpty(list)) throw "The list is empty";

  list.splice(0, list.length);
}

/**
 * Función que obtiene el primer elemento de la lista
 * @param list
 * @returns {*}
 */
function firstElement(list) {
  if (isEmpty(list)) throw "The list is empty"; //Comprobamos que la lista no está vacia

  return list[0];
}

/**
 * Función que obtiene el último elemento de la lista
 * @param list
 * @returns {*}
 */
function lastElement(list) {
  if (isEmpty(list)) throw "The list is empty";   //Comprobamos que la lista no está vacia

  return list[size(list) - 1];
}

/**
 * Función que borra el elemento que se encuentra en la posición indicada.
 * Devuelve el elemento que ha borrado
 * @param list
 * @param index
 * @returns {*}
 */
function remove(list, index) {
  var elem;
//Comprobamos que el indice es un numero y que no es mayor que la capacidad
  if (isNaN(index)) throw "The index must be a number";
  if (index > capacity(list)) throw "The index is higher than capacity";

  elem = list[index];
  list.splice(index, 1);

  return elem;
}

/**
 * Función que borra el elemento indicado.
 * Devuelve true o false dependiendo si lo ha borrado o no.
 * @param list
 * @param elem
 * @returns {boolean}
 */
function removeElement(list, elem) {
  var index;
//Comprobamos que el elemento es un numero
  if (isNaN(elem)) throw "The element is not a number";

  index = list.findIndex(function (item) {
    return item === elem;
  });

  if(index !== -1){
    list.splice(index, 1);
    return true;
  }
  else{
    return false;
  }

}

/**
 * Funcion que reemplaza el elemento que se encuentra en la posición indicada por el pasado por parámetro.
 * Devuelve el elemento que ha sido reemplazado
 * @param list
 * @param elem
 * @param index
 * @returns {*}
 */
function set(list, elem, index) {
  var seted;

  //Comprobamos que el elemento y el indice son números
  if (isNaN(elem) && !isNaN(index)) throw "The element and index must be a number";
  //Comprobamos que el indice es menor a la capacidad total
  if (index > capacity(list)) throw "The index is higher than capacity";

  seted = list[index];
  list.splice(index, 1, elem);

  return seted;
}

/**
 * Función para comprobar el funcionamiento de las funciones anteriores
 */
(function () {
  var testList = create();

  console.log("Created list: " + testList);
  console.log("Capacity: " + capacity(testList));
  console.log("Is empty?: " + isEmpty(testList));

  //añado elementos
  console.log("Add elements: 1, 5, 20, 14");
  console.log(add(testList, 1));
  console.log(add(testList, 5));
  console.log(add(testList, 20));
  console.log(add(testList, 14));
  console.log(toString(testList));
  console.log("Add element 7 in position 1");
  console.log(addAt(testList, 7, 1));
  console.log("Is full?: " + isFull(testList));

  //muestro la lista
  console.log("List: " + toString(testList));

  //metodo get
  console.log("Get position 3: " + get(testList, 3));

  //metodo indexOf y lastIndexOf
  console.log("IndexOf (5): " + indexOf(testList, 5));
  console.log("LastIndexOf (5): " + lastIndexOf(testList, 5));

  //metodo first y lastElement
  console.log("FirstElement: " + firstElement(testList));
  console.log("LastElement: " + lastElement(testList));

  //metodos remove
  console.log("Remove (index 1): " + remove(testList, 1));
  console.log(toString(testList));
  console.log("Remove (element 20): " + removeElement(testList, 20));
  console.log(toString(testList));

  //metodo set
  console.log("Set (element 14, index 0): " + set(testList, 14, 0));
  console.log(toString(testList));
})();
