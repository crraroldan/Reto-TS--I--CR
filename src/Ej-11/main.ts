// 11
// Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
// laboral o no. Usa un switch para ello.

public class DiaApp {
 
    public static void main(String[] args) {
 
        String dia=prompt.showInputDialog("Introduce un dia de la semana");
 
        switch(dia){
            case "lunes":
            case "martes":
            case "miercoles":
            case "jueves":
            case "viernes":
                System.out.println("Es un dia laboral");
                break;
            case "sabado":
            case "domingo":
                System.out.println("Es un dia festivo");
            default:
                System.out.println("Introduce un dia de la semana");
        }
    }
}