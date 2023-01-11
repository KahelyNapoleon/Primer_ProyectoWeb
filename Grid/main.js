

 const botones = document.getElementsByClassName('botones');

 function boton(){
    botones.style.color ="black";
    botones.style.backgroundColor = "white";
 }

 


 /*-----------------GRID-----------------*/


 /* Que es el diseño Grid? 
 
 Es un sistema de cuadriculas, con filas y columnas. Facilita el diseño sin usar flotadores y posiciones.


 ¿Como se compone un diseño de cuadricula?

 Bueno, se forma con un elemento principal, y con uno o mas elementos secundarios.


 ¿Como convertir un elemento de cuadricula en grid ?

 Un elemento html se convierte en un contenedor de cuadricula cuando la propiedad display se establece en 
 grid o inline-grid.
 De esta forma los elementos secundarios dentro del contenedor de cuadricula se convierten automaticamente en
 elementos de cuadricula.

 COLUMNAS GRID
 Lineas verticales de los elementos de grid se denominan ==> columns

 FILAS GRID
 Las lineas horizontales de los elementos de la cuadricula se denominan ==> rows

 GRID GAPS
 Los Espacios entre las columnas y filas se llaman GAPS (CON ESTAS SE AJUSTAN LOS ESPACIOS)
 ==> Columns Gap
 ==> Rows Gap
 ==> gap

 Ajuste De Espacios.
 Se pueden ajustar los espacios con estas propiedades:
-column-gap ==> Establece espacio entre columna: column-gap: 50px;
-row-gap ===> Establece espacio entre filas: column-row: 50px;
-gap ===> Es una abreviatura de las dos anteriores: gap: 50px 50px; y puede estblecer el espacio tanto 
          para columna como para las filas

 

 Lineas de GRID:
 Lineas de columna => Column Lines
 Lineas de filas => Row Column 

 


 */
 
 class celular {

   constructor(estado = 'nuevo', modelo= '2022'){
       this.estado = estado;
       this.modelo= modelo;
   }
 }

 let objetoCel = new celular;

 let unaClaseAnonima = class{
   constructor(unValor = 54,otroValor = 23){
        this.unValor = unValor;
        this.otroValor = otroValor;
   }
 }
 let anonymus = new unaClaseAnonima

//Campos Instancia Privados

class instanciaPrivada {
   #propPrivada

   constructor(){
      this.#propPrivada = 'algun'
      
   }
}

const instancia = new instanciaPrivada() // No figura la propiedad


//Metodos estativos privados y publicos.//Solo se puede acceder
//a los metodos staticos privados dentro de la declaracion
// la  misma clase
class unaClaseConMetodos{
   static #metodoPrivado(){
      return 5+8;
   }

   static metodoPublico(){
      return unaClaseAnonima.#metodoPrivado();
   }

   static metodoPublico2(){
      return this.#metodoPrivado();
   }

}

class claseMetodoPrivados{
   #metodoPrivado1(){
      return 'algo'
   }

   mensaje() {
      return this.#metodoPrivado1()
   }
}

const instancia1 = new claseMetodoPrivados();
// instancia1.mensaje()  => "algo"


//METODOS DE INSTANCIA PRIVADA COMO FUNCIONES GENERADORAS 
// GETTER Y SETTERS 

class accesoPrivado {
   #mensaje

   get #metPriv(){
      return this.#mensaje
   }

   set #metPriv(mensaje){
      this.#mensaje = mensaje
   }


constructor(){
   this.#metPriv = 'Un mensaje cualquiera';
   console.log(this.#metPriv)
}

}

let verQueSucede = new accesoPrivado(); // => Object { #metPriv: undefined, #mensaje: "Un mensaje cualquiera" }