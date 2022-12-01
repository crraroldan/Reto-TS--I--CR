// 13
// Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
// un signo aritmético (String), según este último se realizará la operación
// correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
// Los signos aritméticos disponibles son:
// +: suma los dos operandos.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.


public class CalculadoraPolacaInversaApp {

    public static void main(String[] args) {
    
    
    double operando1;
    double operando2;
    double resultado=0;
    
    
    String texto=prompt.showInputDialog(«Escribe el operando 1»);
    operando1=Integer.parseInt(texto);
    
    String operacion=prompt.showInputDialog(«Escribe el codigo de operacion»);
    
    String texto2=prompt.showInputDialog(«Escribe el operando 2»);
    operando2=Integer.parseInt(texto2);
    
    
    switch (operacion){
    case «+»:
    resultado=operando1+operando2;
    break;
    case «-«:
    resultado=operando1-operando2;
    break;
    case «*»:
    resultado=operando1*operando2;
    break;
    case «/»:
    resultado=operando1/operando2;
    break;
    case «^»:
    resultado=(int)Math.pow(operando1, operando2);
    break;
    case «%»:
    resultado=operando1%operando2;
    break;
    }
    
    prompt.showMessageDialog(null, operando1+» «+operacion+» «+operando2+» = «+resultado);
    
    }
    }