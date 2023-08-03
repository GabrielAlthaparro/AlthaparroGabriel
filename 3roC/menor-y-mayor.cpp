#include <iostream>

using namespace std;

int main()
{
    int num1, num2, num3;
    cout<<"Ingrese 3 números enteros:"<<endl;
    cin >> num1;
    cin >> num2;
    cin >> num3;
    
    int mayor = 0;
    int menor = 999999999;
    
    if (num1 > num2){
        if (num1 > num3){
            mayor = num1;
            if (num2 < num3){
                menor = num2;
            }else{
                menor = num3;
            }
        }else{
            mayor = num3;
            menor = num2;
        }
    }else{
        if (num2 > num3){
            mayor = num2;
            if (num1 < num3){
                menor = num1;
            }else{
                menor = num3;
            }
        }else{
            mayor = num3;
            menor = num1;
        }
    }
    
    cout <<"Mayor: "<<mayor<<endl;
    cout <<"Menor: "<<menor<<endl;

    return 0;
}
