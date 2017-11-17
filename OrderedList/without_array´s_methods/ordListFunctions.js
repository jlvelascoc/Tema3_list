"use strict";
/**
 * Variable "constante" que contiene la longitud máxima de elementos permitidos en la lista.
 * @type {number}
 */
var MAX_LENGTH = 5;

/**
 * Función que crea la lista e inicializa todos los elementos a NaN.
 * @returns {Array}
 */
function create() {
  var i, array = [];

  for (i = 0; i < MAX_LENGTH; i++) {
    array[i] = Number.NaN;
  }

  return array;
}

/**
 * Función que nos dice si la lista está vacia.
 * @param list
 * @returns {boolean}
 */
function isEmpty(list) {
  return (isNaN(list[0])) ? true : false; //Si el primer elemento es un NaN devuelve true, en caso contrario false
}

/**
 * Función que nos dice si la lista está llena.
 * @param list
 * @returns {boolean}
 */
function isFull(list) {
  return (!isNaN(list[MAX_LENGTH - 1])) ? true : false; //Si el último elemento no es un NaN devuelve true, en caso contrario false
}

/**
 * Función que nos dice la cantidad de elementos que contiene la lista actualmente.
 * @param list
 * @returns {number}
 */
function size(list) {
  var elems = 0;
  //Recorre la lista mientras que no encuentre un NaN y la variable que utilizamos como  contador no supere la longitud máxima
  while (!isNaN(list[elems]) && elems < MAX_LENGTH) {
    elems++;
  }
  return elems;
}

/**
 * Función que añade un elemento al final de la lista.
 * Devuelve el numero de elementos actuales.
 * @param list
 * @param elem
 * @returns {number}
 */
function add(list, elem) {
  var index;
//Comprobamos que el elemento a añadir es un numero y que la lista no está llena
  if (isNaN(elem)) throw "The element is not a number";
  if (isFull(list)) throw "The list is full";

  index = size(list);
  list[index] = elem;

  quickSort(0, index);
  return ++index;

  /**
   * Funcion que sirve para ordenar el array
   * @param left Principio de la lista
   * @param right Final de la lista
   */
  function quickSort(left, right) {
    var pivot, temp, l = left, r = right;

    pivot = list[Math.trunc((l + r) / 2)];

    do {
      //Recorro la lista mientras que los elementos sean menores que el elemento pivote
      while (list[l] < pivot) {l++;}
      //Recorro la lista mientras que los elementos sean mayores que el elemento pivote
      while (list[r] > pivot) {r--;}

      if (l <= r) {   //Compruebo que los indices l y r no se han cruzado
        temp = list[r];
        list[r] = list[l];
        list[l] = temp;
        l++;
        r--;
      }
    } while (l <= r);

    if (left < r) {
      quickSort(left, r);
    }

    if (l < right) {
      quickSort(l, right);
    }
  }
}

/**
 * Función que obtiene el valor del elemento que se encuentre en la posición indicada
 * @param list
 * @param index
 * @returns {*}
 */
function get(list, index) {
  //Comprobamos que el indice es un numero y que no es mayor a la capacidad total
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
  var str = "";
  //Comprobamos que la lista no está vacía
  if (isEmpty(list)) throw "The list is empty";
  //La segunda condición es para cortar el bucle cuando llegue a los elementos que están vacios
  for (var i = 0; i < MAX_LENGTH && !isNaN(list[i]); i++) {
    str += list[i] + ",";
  }

  return str;
}

/**
 * Función que obtiene la primera posicion en la que se encuentra un determinado elemento empezando por el principio.
 * Si el elemento no se encuentra devuelve -1
 * @param list
 * @param elem
 * @returns {number}
 */
function indexOf(list, elem) {
  var found = false;
  //Comprobamos que el elemento es un numero
  if (isNaN(elem)) throw "The element is not a number";

  for (var i = 0; list[i] <= elem && !found; i++) { //Si encuentra el elemento, el bucle se corta
    found = (elem === list[i]) ? true : false;
  }

  return (found) ? (i - 1) : -1;
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
  if (isEmpty(list)) throw "The list is empty"; //Comprobamos que la lista no está vacia

  for (var i = 0; i < MAX_LENGTH && !isNaN(list[i]); i++) { //Corta el bucle cuando llega a los elementos NaN
    list[i] = Number.NaN;
  }
}

/**
 * Función que obtiene el primer elemento de la lista
 * @param list
 * @returns {*}
 */
function firstElement(list) {
  if (isEmpty(list)) throw "The list is empty";  //Comprobamos que la lista no está vacia

  return list[0];
}

/**
 * Función que obtiene el último elemento de la lista
 * @param list
 * @returns {*}
 */
function lastElement(list) {
  if (isEmpty(list)) throw "The list is empty";  //Comprobamos que la lista no está vacia

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

  while (index < MAX_LENGTH) {    //Recorremos la lista desplazando los valores a su nueva posicion
    list[index] = list[index + 1];
    index++;
  }

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
  var index, erased;
//Comprobamos que el elemento es un numero
  if (isNaN(elem)) throw "The element is not a number";

  index = indexOf(list, elem);
//Comprobamos que el elemento se encuentra en la lista
  if (index !== -1) {
    while (index < MAX_LENGTH) {
      list[index] = list[index + 1];
      index++;
    }
    return true;
  }
  else {
    return false;
  }
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
  console.log("Add elements: 5, 1, 20, 14, 7");
  console.log(add(testList, 5));
  console.log(add(testList, 1));
  console.log(add(testList, 20));
  console.log(add(testList, 14));
  console.log(add(testList, 7));
  console.log("Is full?: " + isFull(testList));

  //muestro la lista
  console.log("List: " + toString(testList));

  //metodo get
  console.log("Get position 3: " + get(testList, 3));

  //metodo indexOf y lastIndexOf
  console.log("IndexOf (5): " + indexOf(testList, 5));

  //metodo first y lastElement
  console.log("FirstElement: " + firstElement(testList));
  console.log("LastElement: " + lastElement(testList));

  //metodos remove
  console.log("Remove (index 4): " + remove(testList, 4));
  console.log(toString(testList));
  console.log("Remove (element 5): " + removeElement(testList, 5));
  console.log(toString(testList));
})();
