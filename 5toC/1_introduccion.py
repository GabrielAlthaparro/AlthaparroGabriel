'''
Esto de aca es un comentario multilinea, la computadora no lo ejecuta.

Tipos de datos (tipos de valores que entiende la computadora):
  número entero:
    1
    -10
    0

  número decimal:
    3.14,
    -10.0
  
  string:
    "Hola! Soy un texto"
    "Yo soy otro texto"

  boolean (solo existen 2 valores): 
    true
    false



Instrucciones en pseudocódigo:

Pedir un valor al usuario y asignarlo a una variable:
leer(<variable>)

Mostrar un valor (string) por pantalla
mostrar(<valor>)

Asignar valor a una variable (reemplaza al valor anterior, si existía)
<variable> <= <valor>


Estructura de decisión (si-entonces):
si <condicion> entonces
  <bloque de instrucciones a ejecutar si la condición es true (verdadera)>
sino
  <bloque de instrucciones a ejecutar si la condición es false (falsa)>
finsi

las condiciones (preguntas) que tenemos son:

valor1 == valor2  valor1 es IGUAL a valor2?

valor1 != valor2  valor1 es DISTINTO a valor2?

valor1 < valor2   valor1 es MENOR que valor2?

valor1 <= valor2  valor1 es MENOR o IGUAL que valor2?

valor1 > valor2   valor1 es MAYOR que valor2?

valor1 >= valor2  valor1 es MAYOR o IGUAL que valor2?

Todas ellas SIEMPRE retornaran un valor booleano, es decir, true o false (verdadero o falso)



En los algoritmos en pseudocódigo que hagamos, tendremos una sección de Variables, donde hacemos la declaración de estas, es decir, donde las "creamos". La sintaxis para declarar una variable es:
<nombre para la variable>: <tipo de dato>
Luego, nuestro programa empieza en la seccion Comenzar, y termina en Fin

Variables
  <nombre para la variable>: <tipo de dato>
  <nombre para la variable>: <tipo de dato>
  ...
Comenzar
  <instrucciones de nuestro algoritmo>
Fin

'''

# Esto es un comentaria de linea. Se hace con el caracter #. Si queremos que un comentario abarque varias líneas hay que usar ''' ''', como arriba.

# En python, las variables no se declaran, sino que implicitamente son declaradas al asignarles un valor. Es decir, si hacemos
num = 5
# estaremos creando la variable num, y asignandole el valor de tipo número entero 5


# La instruccion de leer (para pedir un valor al usuario y guardarlo en una variable) es:
miVariable = input("Texto que se muestra al usuario para que ingrese algo")
# Esto asignará a miVariable el valor que ingresemos por teclado. El tipo de dato que es leído SIEMPRE será un string

# La instruccion de mostrar (para mostrar algo por pantalla) es:
print(miVariable) # en este caso, estamos mostrando lo que ingresamos anteriormente :)

# estructura de decisión (si-entonces):
if 10 == 5: # el número 10 es IGUAL al número 5?
  # bloque de instrucciones a ejecutar si la condición es true (verdadera)
  print("verdadero")
else:
  #bloque de instrucciones a ejecutar si la condición es false (falsa)
  print("falso")

# Noten que el espacio que tienen al inicio los bloques de código del if. A esto lo llamamos "indentación", y, en python, es la forma de indicar un grupo de instrucciones dentro de alguna estructura (ya sea de repetición o decisión). Si no hacemos esta indentación el lenguaje nos dirá que tenemos un error en nuestro programa

# Pueden probar el código en https://www.online-python.com/