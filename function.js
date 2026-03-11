// function koszontes(){
// const nev = prompt('Add meg a neved: ');
// //alert('Szia, ' + nev + "!");
// document.getElementById('hello').innerHTML = 'Szervusz: ' || '';
// document.getElementById('name').innerHTML = nev  || 'Nincs név megadva!';
// }




// function addNumbers () {
// const a  = Number(prompt('Add meg az "a" értéket'));
// const b  = Number(prompt('Add meg a "b" értéket'));
// const result = a + b;
// return result;
// }
// const kiiras = addNumbers();
// alert(kiiras); 





// let szo = 'biztosvalasztas';
// let hossz = 10;

// const hosszabb = function(szo, hossz) {
//     console.log('Hosszabb szó-e a/az: ' + szo + ' mint ' + hossz + 'karakter?');
//     console.log(szo.length);
//     console.log(hossz);
//     return szohossza = szo.length > hossz ;

// }

// console.log(hosszabb(szo, hossz))



let szamok = [22, 43, 1, 2, 5, 44, 76, 25, 0, 7, 9, 15, 40, 55, 73, 67, 13];


const osszeg = function (tamas) {
    console.log(tamas);
    let abel = 0;
    for(magyarpeter of tamas){
        console.log(magyarpeter);
        if(magyarpeter > 10) {
            abel += magyarpeter;
        }
    }
    return abel;
}

console.log('Ez az eredmény: ' + osszeg(szamok));