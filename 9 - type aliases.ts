type NumberOrString = Number | string;

function somar(num1: NumberOrString , num2: number) {
    if (typeof num1 === 'number')
        return num1 + num2;
    else
        return `${num1}${num2}`
}