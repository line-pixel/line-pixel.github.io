function initialisation()
{
    var boutonValider = document.getElementById("valider");
    boutonValider.onclick=function(){
        var scorefamiliale=0;
        var scoreaventurier=0;
        var scoreculturel=0;
        
        
        var dependSi = document.getElementById("si")
        var aventurier = document.getElementById("aventurier")
        var photo = document.getElementById("appareilphoto")
        var livreDeVoyage = document.getElementById("livre")
        var boussole = document.getElementById("boussole")
        var site = document.getElementById("site")
        var lanature = document.getElementById("nature")
        var leshabitants = document.getElementById("habitants")
        var laculture = document.getElementById("culture")
        
        if(dependSi.checked==true){
            scorefamiliale=scorefamiliale +1;
        }
        if(aventurier.checked==true){
            scoreaventurier=scoreaventurier +1;
        }
        if(photo.checked==true){
            scorefamiliale=scorefamiliale +1;
        }
        if(livreDeVoyage.checked==true){
            scoreculturel=scoreculturel +1;
        }
        if(boussole.checked==true){
            scoreaventurier=scoreaventurier +1;
        }
        if(site.checked==true){
            scoreculturel=scoreculturel +1;
        }
        if(lanature.checked==true){
            scoreaventurier=scoreaventurier +1;
        }
        if(leshabitants.checked==true){
            scoreculturel=scoreculturel +1;
        }
        
        if(laculture.checked==true){
            scoreculturel=scoreculturel +1;
        }
       
        
        
        
        if(scorefamiliale>=scoreaventurier && scorefamiliale>=scoreculturel){
            alert("Nous vous recommandons les voyages familiaux");
        }
        else if(scoreaventurier>=scorefamiliale && scoreaventurier>=scoreculturel){
            alert("L'aventure n'attend que vous !");
        }
        else if(scoreculturel>=scorefamiliale && scoreculturel>=scoreaventurier){
            alert("Rien de plus enrichissant qu'un voyage culturel");
        }
        
        
        
        
        
        
    }
}