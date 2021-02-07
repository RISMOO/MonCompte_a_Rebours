const days= document.getElementById("days");
const hours= document.getElementById("hours");
const minutes= document.getElementById("minutes");
const seconds= document.getElementById("seconds");
const year= document.getElementById("year");
const countdown= document.getElementById("countdown");
const loading= document.getElementById("loading");

// l"année en cours
const currentYear=new Date().getFullYear();
//date de la nouvelle année
const newYearTime= new Date( `January 01 ${currentYear +1} 00:00:00`);

year.innerText=currentYear+1;//annee en cours +1

//mise a jour du compte a rebours avec une fonction
function updateCountdown(){

    const currentTime=new Date();
    const diff=newYearTime - currentTime; //diff en milliseconde
    //on converti en jour
     const d=Math.floor(diff/1000/(60*60*24));//math.floor arrondi a la valeur inferieur/ensuite on converti en seconde et en jour
     //ca nous donne le nombre de jour qu'il nous reste avant 2022

     //on converti en heure
     const h=Math.floor(diff/1000/(60*60))%24;//modulo 24

     //on converti en minutes
     const m=Math.floor(diff/1000/(60))%60;//modulo 60

      //on converti en secondes
      const s=Math.floor(diff/1000)%60;//modulo 60

   

days.innerHTML= d;
hours.innerHTML= h < 10 ? "0" + h : h;//si lheur est inferiere a 10 on afiche lheure
minutes.innerHTML= m < 10 ?"0" + m : m;
secondes.innerHTML= s < 10 ? "0"+ s : s;
}
//setTimeout fonction qui va sexecuter quand le compte a rebours serea atteind

setTimeout( () => {
loading.style.visibility="hidden";
loading.style.opacity="0";
countdown.style.visibility="visible";
countdown.style.opacity="1";


},1000
    


);

//ajout des elements dans le dom
//dynamique
setInterval(updateCountdown, 1000)
//statique
updateCountdown();

/*
a = 5
b = 3
temp = a
a = b
b = temp
*/