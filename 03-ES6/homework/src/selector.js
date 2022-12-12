var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl))resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {//children
    var resultado = traverseDomAndCollectElements(matchFunc,startEl.children[i]);
    resultSet = [...resultSet,...resultado];
    
  }
  return resultSet;//["div", "h1"]
  
};
/* startEl = document.body --> 
​
startEl = div --> resultSet = ["div"]
                                          -->["div"] + ["h1"] = ["div", "h1"]
startEl = h1 --> resultSet = ["h1"]
​
​
*/
​
/* 
body class="otraClass" --> $(".myClass")
|
|
|--> div class="myClass"
      |
      |--> h1 class="myClass"
      |
      |--> h3 
|
|
|--> div
​
*/

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {// selector = ".class", "#id", "tag", "tag.class"
  // tu código aquí
  if(selector[0] === "#") return "id";
  if(selector[0]=== ".") return "class";
   
  for (let i = 0; i < selector.length; i++) {
   if(selector[i]=== ".") return "tag.class";
    
  }
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {// selector = ".class", "#id", "tag", "tag.class"
  var selectorType = selectorTypeMatcher(selector);// el tipo de selector que llega por parametro "class", "id", "tag", "tag.class"
  var matchFunction;// var el = <div id='myid'></div ----> myid === selector
  if (selectorType === "id") { // el.id = myid === selector
   matchFunction = function(el){
    return '#' + el.id === selector
   }
  } else if (selectorType === "class") {// var el = <div class='myClass' class ='otraClass></div el.classList ---->["myClass", "otraClass"]
    matchFunction = function(el){
      for (let i = 0; i < el.classList.length; i++) {
        if("." + el.classList[i] === selector) return true;
        
      }return false;
    }
  } else if (selectorType === "tag.class") {// <"div.myClass".split(".")----> ["div", "myClass"]
    matchFunction = function(el){
      let[tg,clas]= selector.split(".")//tg = "div", clas = "myClass"
      return matchFunctionMaker(tg)(el) && matchFunctionMaker("." + clas)(el);
    }
    
  } else if (selectorType === "tag") {// "div -----> .tagName ----->  "DIV"
    matchFunction = function(el){
      return el.tagName === selector.toUpperCase();
    }
  }
  return matchFunction;
};

var $ = function(selector) {//".class","·id", "tag", "tag.class"
var elements;
var selectorMatchFunc = matchFunctionMaker(selector);// funcion que recibe el elemento HTML y devuele t/f
  elements = traverseDomAndCollectElements(selectorMatchFunc);//resultSet = ["div","h1"]
  return elements;//["div", "h1"]
};

//$ es la funcion principal$()
//selector = ".class","·id", "tag", "tag.name"
