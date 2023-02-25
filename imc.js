let taille = document.getElementById("taille");
let poids = document.getElementById("poids");
let resultatIMC = document.getElementById("resultatIMC");
let description = document.getElementById("description");
let valide = document.querySelector("form")
let normes = [
        {imc : [0,18.4],description :"Maigreur", color : "midnightblue"},
        {imc : [18.5,25],description :"Normal", color : "green"},
        {imc : [25.1,30],description :"Surpoids" ,  color : "lightcoral"},
        {imc : [30.1,35],description :"Obésité modéré", color : "orange"},
        {imc : [35.1,40],description :"Obésité sévère", color : "crimson"},
        {imc : [40.1,10000],description :"Obésité morbide", color : "purple"}
];




valide.addEventListener("submit",function(e){
        e.preventDefault();
        if(poids.value && taille.value){
                let imc = ((poids.value / (taille.value/100)**2)).toFixed(1);
                resultatIMC.textContent =  imc;
                for (let index = 0; index < normes.length; index++) {
                    
                        if(imc >= normes[index].imc[0] && imc <= normes[index].imc[1]  ){
                               
                                description.textContent = normes[index].description;
                                resultatIMC.style.color = `${normes[index].color}`;
                                description.style.color = "black";
                            
                        }
                        
                }
             
        }else {
                description.textContent = "Merci de remplir tous les champs";
                description.style.color = "red";

        }
        
       
    
})