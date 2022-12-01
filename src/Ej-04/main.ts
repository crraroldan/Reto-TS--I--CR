// 4
// Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
// por teclado (recuerda pasar de String a double con parseDouble). Usa la
// constante PI.

public class AreaCirculoApp {
 
    public static void main(String[] args) {
 
        String texto=prompt.showInputDialog("Introduce un radio");
       
        double radio=Double.parseDouble(texto);
 
        
        double area=Math.PI*Math.pow(radio, 2);
 
        System.out.println("El area del circulo es "+area);
    }
}