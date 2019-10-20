var mes = "Abril";

// Switch usando variables de tipo String
switch(mes) {
    case "Enero":
        console.log("Usar tema de Enero");
        break;
    case "Febrero":
        console.log("Usar tema de Febrero");
        break;
    case "Marzo":
        console.log("Usar tema de Marzo");
        break;
    default:
        console.log("Usar tema por Default");
}

var diaSemana = 4;
// Switch usando variables de tipo Number
switch(diaSemana) {
    case 1:
        console.log("Hoy es Domingo");
        break;
    case 2:
        console.log("Hoy es Lunes");
        break;
    case 3:
        console.log("Hoy es Martes");
        break;
    case 4:
        console.log("Hoy es Miercoles");
        break;
    case 5:
        console.log("Hoy es Jueves");
        break;
    case 6:
        console.log("Hoy es Viernes");
        break;
    case 7:
        console.log("Hoy es Sabado");
        break;
    default:
        console.log("No es un dia de la semana");
}

// Switch usando casos anidados
switch(mes) {
    case "Enero":
        case "Febrero":
            console.log("Usar tema de 1");
            break;
    case "Marzo":
        case "Abril":
            console.log("Usar tema de 2");
            break;
    case "Mayo":
            case "Junio":
                console.log("Usar tema de 3");
                break;
    default:
        console.log("Usar tema por Default");
}