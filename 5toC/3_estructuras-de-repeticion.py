'''
Las estructuras de repetición nos sirven para volver a ejecutar un conjunto de instrucciones. Pero, como le decimos a la computadora que termine de repetir? Ahí es donde tenemos las condiciones (las preguntas, que se respondían con verdadero o falso).

1) while (mientras)
La estructura while repite un bloque de instrucciones mientras la condición que le indicamos sea verdadera. Al preguntar, si la condición es falsa, el bucle terminará. En caso que sea verdadera, se vuelven a ejecutar TODAS las instrucciones dentro de la estructura, y luego vuelve a preguntar por el valor de la condición.

mientras CONDICION hacer
  --------
  -------- // instruccion que se repiten mientras que la condición es verdadera
  --------
finmientras

Tienen también el ejemplo visto en clase en 4_ donde usamos el while para validar que el usuario ingrese un número positivo :)


2) for (para)
La estructura for sirve para cuando tenemos que repetir un conjunto de instrucciones una CANTIDAD FIJA DE VECES. La variable que usamos solo puede ser numérica. En la primer iteración (cada vez que entra a ejecutar las instrucciones) a la VARIABLE se le asigna el VALOR_INICIO, y cada vez que llega al final del bloque, se incrementa el valor de VARIABLE en 1. Esto se repite hasta que a la VARIABLE se le asigna el VALOR_FINAL, y en ese momento terminará el ciclo.

para VARIABLE <= VALOR_INICIO hasta VALOR_FINAL hacer
  ---------
  --------- // instucciones que se repiten hasta que la variable llegue al VALOR_FINAL (este no esta incluido, es decir, si uso como VALOR_FINAL el 10, entonces la última iteración será cuando VARIABLE sea 9)
  ---------
finpara


Debajo tienen un ejemplo en python de un programa que hace lo mismo, usando las dos estructuras:

ACLARACIÓN: cuando queremos mostrar texto por pantalla, podemos "mezclar" tipos de datos diferentes (string y números normalmente) separándolos con coma(,). Al final, se terminarán concatenando en un solo string (texto) que mostramos usando print().
'''


# ejemplo del while
cont = 1
while cont <= 10:
  print("hola", cont, "a todos!!!")
  cont = cont + 1


# ejemplo del for
for cont in range(1, 11):
  print("chau", cont, "a todos!")