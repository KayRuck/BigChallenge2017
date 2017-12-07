var dataopen=false;
var energyopen=false;
var detailsopen=false;
var barchartopen=false;
var anyopen=false;

function datachart() {
        if(dataopen==false){
            if(anyopen==true)
            {
                document.getElementById("liquid").style.display="none";
                energyopen=false;
                document.getElementById("placeholder").style.display="none";
                detailsopen=false;
                document.getElementById("placeholder2").style.display="none";
                barchartopen=false;
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
                document.getElementById("datachart").style.display="none";
                dataopen=false;
                document.getElementById("placeholder").style.display="none";
                detailsopen=false;
                document.getElementById("placeholder2").style.display="none";
                barchartopen=false;
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

function details(){        
        if(detailsopen==false){
            if(anyopen==true)
            {
                document.getElementById("datachart").style.display="none";
                dataopen=false;
                document.getElementById("liquid").style.display="none";
                energyopen=false;
                document.getElementById("placeholder2").style.display="none";
                barchartopen=false;
            }
            document.getElementById("placeholder").style.display="inline";
            detailsopen=true;
            anyopen=true;
        }
        else
            {
                document.getElementById("placeholder").style.display="none";
                detailsopen=false;
                anyopen=false;
            }        
}

function barchart(){        
        if(barchartopen==false){
            if(anyopen==true)
            {
                document.getElementById("datachart").style.display="none";
                dataopen=false;
                document.getElementById("liquid").style.display="none";
                energyopen=false;
                document.getElementById("placeholder").style.display="none";
                detailsopen=false;
            }
            document.getElementById("placeholder2").style.display="inline";
            barchartopen=true;
            anyopen=true;
        }
        else
            {
                document.getElementById("placeholder2").style.display="none";
                barchartopen=false;
                anyopen=false;
            }        
}