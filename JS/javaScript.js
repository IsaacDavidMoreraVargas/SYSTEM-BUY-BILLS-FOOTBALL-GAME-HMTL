var sombraEterno=1500;
var preferencialEterno=700;
var NySEterno = 1200;
var PalcosEterno= 400;
var PrensaEterno= 75;
var totalEterno=0;
var eleccionEterno=" ";
var acumuladorEterno=0;
var stringEterna=" ";

function eleccion(elecc)
{
   eleccionEterno=elecc;
   
   if("p0"==eleccionEterno)
       {
         document.getElementById("muestraEleccion").value="none";
 
       }else if("p1"==eleccionEterno)
       {

         document.getElementById("muestraEleccion").value=sombraEterno;

       }else if("p2"==eleccionEterno)
       {
         document.getElementById("muestraEleccion").value=preferencialEterno;

       } else if("p3"==eleccionEterno)
       {
           document.getElementById("muestraEleccion").value=NySEterno;
          

       } else if("p4"==eleccionEterno)
       {
          document.getElementById("muestraEleccion").value=PalcosEterno;

        } else if("p5"==eleccionEterno)
          {
             document.getElementById("muestraEleccion").value=PrensaEterno;
          }
}

function calcularTotal()
{
  totalEterno=sombraEterno+preferencialEterno+NySEterno+PalcosEterno+PrensaEterno;
  document.getElementById("muestraTotal").value=totalEterno;
}

var permitir=false;
var permitirCalcular=false;
var comodin=0;

function acumulador(e)
{
  
   key=e.keyCode || e.which; 
   teclado=String.fromCharCode(key).toLowerCase();
   
try{
  
   comodin=parseInt(teclado);
  
  }catch(error)
  {}

   if(key=="8")
   {
     var stringEterna2 = stringEterna.substring(0, stringEterna.length - 1);
     comodin=parseInt(stringEterna2);
     stringEterna=stringEterna2; 
     acumuladorEterno=comodin;
   }else
    {
         if(Number.isInteger(comodin))
         { 
             stringEterna+=teclado;
             comodin=parseInt(stringEterna);
             permitirCalcular=true;
         }else if(!Number.isInteger(comodin))
          {
            alert("No es un numero"); 
            return false; 
          }
    }
   
   
}

function clean()
{
   document.getElementById("cajaTexto").value = "Digite la cantidad que desea comprar de la eleccion elegida";
   stringEterna="";
   acumuladorEterno=0;
   permitirCalcular=false;
}

function calcular()
{
     if("p1"==eleccionEterno && permitirCalcular==true)
       {
          if(comodin<=sombraEterno)
           {
               alert("Entradas compradas con exito, cantidad::"+comodin);
               sombraEterno-=comodin;
               document.getElementById("muestraEleccion").value=sombraEterno;
               clean();
           }else
            {
               alert("No se puede hacer la compra, se excede \n el maximo de entradas disponibles para esta categoria \nMaximo::"+sombraEterno)
            }

       }else if("p2"==eleccionEterno && permitirCalcular==true)
       {
          if(comodin<=preferencialEterno)
           {
               alert("Entradas compradas con exito, cantidad::"+comodin);
               preferencialEterno-=comodin;
               document.getElementById("muestraEleccion").value=preferencialEterno;
               clean();
           }else
            {
               alert("No se puede hacer la compra, se excede \n el maximo de entradas disponibles para esta categoria \nMaximo::"+preferencialEterno)
            }

       }else if("p3"==eleccionEterno && permitirCalcular==true)
       {
           if(comodin<=NySEterno)
           {
               alert("Entradas compradas con exito, cantidad::"+comodin);
               NySEterno-=comodin;
               document.getElementById("muestraEleccion").value=NySEterno;
               clean();
           }else
            {
               alert("No se puede hacer la compra, se excede \n el maximo de entradas disponibles para esta categoria \nMaximo::"+NySEterno)
            }


       }else if("p4"==eleccionEterno && permitirCalcular==true)
       {
          if(comodin<=PalcosEterno)
           {
               alert("Entradas compradas con exito, cantidad::"+comodin);
               PalcosEterno-=comodin;
               document.getElementById("muestraEleccion").value=PalcosEterno;
               clean();
           }else
            {
               alert("No se puede hacer la compra, se excede \n el maximo de entradas disponibles para esta categoria \nMaximo::"+PalcosEterno)
            }
 

       }else if("p5"==eleccionEterno && permitirCalcular==true)
       {

          if(comodin<=PrensaEterno)
           {
               alert("Entradas compradas con exito, cantidad::"+comodin);
               PrensaEterno-=comodin;
               document.getElementById("muestraEleccion").value=PrensaEterno;
               clean();
           }else
            {
               alert("No se puede hacer la compra, se excede \n el maximo de entradas disponibles para esta categoria \nMaximo::"+PrensaEterno);
               clean();
            }

       }else
          {
             alert("Existe algun problema con la cantidad o la eleccion");
          }

   
}

