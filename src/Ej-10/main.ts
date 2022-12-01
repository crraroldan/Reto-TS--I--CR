// 10
// Realiza una aplicación que nos pida un número de ventas a introducir, después
// nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
// Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
// que no.

public class VentasApp {
 
    public static void main(String[] args) {
 
        String texto=JOptionPane.showInputDialog("Introduce el número de ventas");
 
        int numVentas=Integer.parseInt(texto);
 
      
        int sumaVentas=0;
        for (int i=0;i<numVentas;i++){
            
            texto=JOptionPane.showInputDialog("Introduce el precio de la venta"+(i+1));
            int venta=Integer.parseInt(texto);
 
            sumaVentas=sumaVentas+venta;
        }
 
        System.out.println(sumaVentas);
    }
}