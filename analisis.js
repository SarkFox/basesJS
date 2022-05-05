const salariosCol = colombia.map( persona => persona.salary);

const salariosColSorted  =salariosCol.sort((salaryA, salaryB)=> salaryA-salaryB);

function esPar(numero)
{
    return (numero%2===0);

}

function medianaSalariosCol(lista)
{
    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length))
    {
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;

    }
    else
    {
        const personaMitad = lista[mitad]
        return personaMitad
    }
}

function calcularMediaAritmetica (lista)
{
    const sumaLista = lista.reduce((acum, numero) => acum+numero);
    return sumaLista/lista.length;
}

const spliceStart = ((salariosColSorted.length*90)/100);
const spliceCount = salariosColSorted.length-spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaGeneral = medianaSalariosCol(salariosColSorted);
const medianaTop10 = medianaSalariosCol(salariosColTop10);

console.log(medianaSalariosCol(salariosColSorted));