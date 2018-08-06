//Validar que solo acepte numeros

function soloNumeros(e){
    
    var key=e.keyCode || e.which;
    
    var teclado= String.fromCharCode(key);
    
    var numeros="0123456789";
    
    var especiales="8-37-39-46";
    
    var teclaEspecial=false;
    
    for(var i in especiales){        
        if (key==especiales[i]){            
            teclaEspecial=true;
        }
    }
    
    if(numeros.indexOf(teclado)==-1 && !teclaEspecial){
        
        return false;
        
    }
}


//Para asignar valores al tecledo numeros

function retornar(num){
    
    var anterior=document.fo.valores.value;
    
    document.getElementById("valores").value= anterior+num;
    
}

//Para borrar el ultimo caracter

function eliminar(){
    
    var anterior=document.fo.valores.value;
    
    var nuevoValor=anterior.substring(0,anterior.length-1);
    
    document.getElementById("valores").value=nuevoValor;
    
}

//Para eliminar todo

function eliminarTodo(){
    
    document.fo.valores.value=" ";
}


//Para los signos

function comprobrar(num){
    
    var anterior = document.fo.valores.value;
    
    if(anterior==""){
        document.fo.valores.value="";
    } else {
        var anterior = document.fo.valores.value;
        document.getElementById("valores").value= anterior+num;
        esto=document.fo.valores.value;
        
        record=0;
        igual=1;
        var letraRecord
        var b=0
        var letra=""
        
        for (a=1; a<esto.length; a++){
            
            if(esto.charAt (a)=="+" || esto.charAt(a)=="-" || esto.charAt(a)=="*" || esto.charAt(a)=="/"){
                
                igual=igual+1;
                letra=esto.charAt(a);
                
            } else {
                
                if(igual>record){record=igual; letraRecord=letra}
                
                igual=1
                
            }
            
            b=a
        }
        
        if(igual>record){
            record=igual;
            letraRecord=letra;
        }
        
        if (record>2){
            var anterior = esto;
            var nuevoValor = anterior.substring(0, anterior.length-1);
            document.getElementById("valores").value= nuevoValor;
            record=0; b=0; igual=1; letra=""; letraRecord="";
            
        }
    }
}

//Operaciones matematicas

function calcular(){
    var resultado=eval(document.fo.valores.value);
    
    document.fo.valores.value=resultado;
}