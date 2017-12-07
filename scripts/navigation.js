var dataopen=false;
var energyopen=false;
var anyopen=false;

function datachart() {
        if(dataopen==false){
            if(anyopen==true)
            {
                return;
            }
            document.getElementById("datachart").style.display="inline";
            dataopen=true;
            anyopen=true;
        }
        else
            {
                document.getElementById("datachart").style.display="none";
                dataopen=false;
                anyopen=false;
            }
}


function energy(){        
        if(energyopen==false){
            if(anyopen==true)
            {
                return;
            }
            document.getElementById("liquid").style.display="inline";
            energyopen=true;
            anyopen=true;
        }
        else
            {
                document.getElementById("liquid").style.display="none";
                energyopen=false;
                anyopen=false;
            }        
}