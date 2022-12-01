// 6
// Lee un número por teclado que pida el precio de un producto (puede tener
// decimales) y calcule el precio final con IVA. El IVA sera una constante que sera del 21%.

public class CodigoASCIIApp {
 
    public static void main(String[] args) {
 
        String texto=prompt.showInputDialog("Introduce un codigo de la tabla ASCII");
        
        int codigo=Integer.parseInt(texto);
 
        char caracter=(char)codigo;
 
        System.out.println(caracter);
    }
}
