'''
Consigna: Escribir un algoritmo que pida al usuario su edad, y le informe por pantalla si es menor o mayor de edad

En la seccion Variables es donde hacemos la declaración de estas, es decir, es donde se "crean". La sintaxis es <nombre>: <tipo de dato>. Luego, nuestro programa empezará a ejecutarse en la seccion Comenzar, y terminará en Fin:


Variables
  edad: número entero
Comenzar
  mostrar("Ingrese su edad por favor")
  leer(edad)

  si edad >= 18 entonces
    mostrar("Sos mayor de edad")
  sino
    mostrar("Sos menor de edad")
  fin
Fin


Este programa en el lenguaje de programación python se escribe así (copienlo y pruebenlo en https://www.online-python.com/):
'''


edad = input("Ingrese su edad por favor") # aca tenemos un problema, y es que lo que ingresa el usuario es de tipo de dato string (texto). Para poder hacer la comparación en el si-entonces necesitamos convertir el valor a tipo de dato número entero. Esto se hace usando int()
# En el caso de nuestro programa esto sería así:

edad = int(edad) # reasignamos en la variable edad el string convertido a número. En python a una misma variable se le pueden asignar tipos de datos diferentes, aunque no es recomendable. Prueben ejecutar el programa borrando esta linea y vean el error que sale

if edad >= 18:
  print("Sos mayor de edad")
else:
  print("Sos menor de edad")