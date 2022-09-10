//en progreso

let combinada = [['R','T'],['T','R'] ,['P','T']];
let resultado= '';
let var1 = 'RT';
let var2 = 'RP';
let var3 = 'TR';
let var4 = 'TP';
let var5 = 'PR';
let var6 = 'PT';
let var7 = 'RR';
let var8 = 'TT';
let var9 = 'PP';
let cont1 = 0;
let cont2 = 0;
console.log(combinada)


 for(let i = 0 ; i < combinada.length ; i++){
     console.log( combinada[i]);
     let fila = combinada[i];
     for(let j = 0 ; j<fila.length; j++){
        let game1='';
        game1 = game1.concat(fila[j])  +  game1.concat(fila[j+1]);
        if (game1 === var1){
            cont1++;
            console.log(game1);
            
        }
        else if(game1 === var2){
            cont2++;

        }
        else if(game1 === var3){
            cont2++;
            console.log(game1)
            console.log(var3)
        }

     }
       
    }

 




