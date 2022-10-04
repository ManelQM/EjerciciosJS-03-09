
let dia = prompt('Por favor, introduzca un día de la semana');  

dia.toLowerCase();
 
switch (dia) {

    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
console.log ('Este', dia, 'es laboral');
break; 
    case 'sabado':
    case 'domingo':
    console.log ('Este', dia , 'es festivo');
    break;
}

