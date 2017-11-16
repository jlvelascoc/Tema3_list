"use strict";
/**
 * Variable que contiene la lista
 * @type {Array}
 */
var list = create();

function addElement() {
  var elem = document.getElementById("element").value;
  var index = document.getElementById("position").value;

  cleanParagraph();
  cleanInput();

  try {
    //Si el campo indice del formulario está vacio llama a la función add, si no, llama a la función addAt
    if (index === ""){
      document.getElementById("temp").innerHTML = add(list, Number(elem));
      document.getElementById("list").innerHTML = toString(list);
    }
    else{
      document.getElementById("temp").innerHTML = addAt(list, Number(elem), Number(index));
      document.getElementById("list").innerHTML = toString(list);
    }
  }
  catch (err) {
    document.getElementById("error").innerHTML = err;
  }
}

function getElement() {
  var index = document.getElementById("position").value;

  cleanParagraph();
  cleanInput();

  try{
    document.getElementById("temp").innerHTML = get(list, Number(index));
  }
  catch (err){
    document.getElementById("error").innerHTML = err;
  }
}

function getIndex() {
  var elem = document.getElementById("element").value;

  cleanParagraph();
  cleanInput();

  try{
    document.getElementById("temp").innerHTML = indexOf(list, Number(elem));
  }
  catch (err){
    document.getElementById("error").innerHTML = err;
  }
}

function getLastIndex() {
  var elem = document.getElementById("element").value;

  cleanParagraph();
  cleanInput();

  try{
    document.getElementById("temp").innerHTML = lastIndexOf(list, Number(elem));
  }
  catch (err){
    document.getElementById("error").innerHTML = err;
  }
}

function deleteElement() {
  var index = document.getElementById("position").value;
  var elem = document.getElementById("element").value;

  cleanParagraph();
  cleanInput();

  try{
    //Si campo indice del formulario no está vacio y el campo elemento sí, llama a la función remove
    if (index !== "" && elem === ""){
      document.getElementById("temp").innerHTML = remove(list, Number(index));
      document.getElementById("list").innerHTML = toString(list);
    }//Si campo elemento del formulario no está vacio y el campo indice sí, llama a la función removeElement
    else if(elem !== "" && index === ""){
      document.getElementById("temp").innerHTML = removeElement(list, Number(elem));
      document.getElementById("list").innerHTML = toString(list);
    }
  }
  catch (err){
    document.getElementById("error").innerHTML = err;
  }
}

function setElement(){
  var elem = document.getElementById("element").value;
  var index = document.getElementById("position").value;

  cleanInput();
  cleanParagraph();

  try {
    document.getElementById("temp").innerHTML = set(list, Number(elem), Number(index));
    document.getElementById("list").innerHTML = toString(list);
  } catch (err) {

  }
}

/**
 * Funcion que vacia los input del formulario
 */
function cleanInput() {
  document.getElementById("element").value = "";
  document.getElementById("position").value = "";
}

/**
 * Funcion que limpia el parrafo que muestra mensajes temporales y el que muestra los errores.
 */
function cleanParagraph() {
  document.getElementById("temp").innerHTML = "";
  document.getElementById("error").innerHTML = "";
}