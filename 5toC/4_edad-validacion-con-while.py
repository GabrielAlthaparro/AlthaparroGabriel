'''
Consigna: El mismo ejercicio de 2_edad.py, pero ahora le agregamos una estructura de repetición mientras (while) para validar que el usuario ingrese un número positivo.

Variables
  edad: número entero
Comenzar
  mostrar("Ingrese su edad por favor")
  leer(edad)

  mientras edad < 0 hacer
    mostrar("Por favor, ingrese un número positivo")
    leer(edad)
  finmientras

  si edad >= 18 entonces
    mostrar("Sos mayor de edad")
  sino
    mostrar("Sos menor de edad")
  finsi
Fin


Este programa en el lenguaje de programación python se escribe así (copienlo y pruebenlo en https://www.online-python.com/):
'''
edad = input("Ingrese su edad por favor")
edad = int(edad)

while edad < 0:
  edad = input("Por favor, ingrese un número positivo")
  edad = int(edad)

if edad >= 18:
  print("Sos mayor de edad")
else:
  print("Sos menor de edad")