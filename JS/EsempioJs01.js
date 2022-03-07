//VARIABILI
//let - var  2 modi per usare variabili
 
//Costanti, convenzione di scrivere in caps per le costanti
const GIORNO="mercoledì"
console.log(GIORNO); 
//visualizza valore nella console del browser

let eta=19
let voto=19.5;
let lode=true;
let frase="Ciao mi chiamo Filippo";

console.log(frase.length);
console.log(frase.toUpperCase());
console.log(frase.replace("Filippo","Juan"));

/*
console.log(eta);
 
eta=eta+1;
console.log(eta);
console.log(typeof eta);

let voto=19.5;
let lode=true;
console.log(voto);
console.log(typeof voto);
console.log(lode);
console.log(typeof lode);

let votoString= String(voto);
let etaString= String(eta);
console.log(votoString);
console.log(typeof votoString);
console.log(etaString);
console.log(typeof etaString);
console.log(votoString + etaString);
console.log(voto+eta);
*/



//Funzioni
function cambiaColore() {
    document.getElementById("titolo1").style.background="red";
};

function saluta() {
    alert("Hello!!!!");
};

/*let testo=document.getElementById("primo");
console.log(testo);
testo.innerHTML="<p> Ciao <p>";*/

let globale=getElementById("primo");

function variaTesto() {
    let testo=document.getElementById("primo");
    testo.innerHTML="<p> Ciao <p>";
};

function ripristina() {
    let testo=document.getElementById("primo");
    testo.innerHTML= "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem blanditiis ipsa earum alias magnam sit distinctio, nisi mollitia possimus? Numquam dolorem laboriosam quae sunt perferendis quisquam nesciunt, at dolorum.</p>";
};

function mousePassaggio() {
    document.getElementById("p2").innerHTML="pass u Maus <br> stat attind";
};

function mouseVia() {
    document.getElementById("p2").innerHTML="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus excepturi possimus rerum distinctio impedit reprehenderit nemo quis doloremque quaerat. Quod hic nihil reprehenderit officia beatae architecto atque, rem cumque quidem.";
};

function apriFinestra() {
    document.open("https://www.uniba.it/","","noopener=True");
}
    /*document.open();
    document.write("<h1>Hello!!</h1> <p>Ciao</p>");
    document.write("<p> secondo paragrafo</p>");
    document.write("<p> terzo paragrafo</p>");
    document.write("<p> ultimo paragrafo</p>");
    document.write("<button onclick= 'back()'>goback</button>")
    document.close();

};

function back() {
    history.back();
} */