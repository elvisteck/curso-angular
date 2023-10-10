
//funcion estandar
function addNumbers(a: number,b:number) {
    return a + b;
};

//funcion con parametros opcionales y parametros con valor por defecto
function multiply (firstNumber:number, secondNomber?:number, base:number = 2):number{
    return firstNumber * base;
}

//funcion lambda
const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

interface Character {
    name: string;
    hp: number;
    showHp:() => void;
}

const healCharacter = (character:Character, amount:number) => {
    
    character.hp += amount;

}

const personaje:Character = {
    name: 'Elvis',
    hp:50,
    showHp() {
        console.log(`Puntos de Vida ${ this.hp }`);
    },
}


healCharacter (personaje, 20);
healCharacter (personaje, 10); 

personaje.showHp();

// const result:number = addNumbers (1,2);
// const result2:String = addNumbersArrow (1,2);
// const multiplyResult:number = multiply(6);

// console.log({ result,result2,multiplyResult });



export {};