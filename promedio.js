let lista = [100, 300, 500, 700]

function calcularMediaAritmetica (lista)
{
    const sumaLista = lista.reduce((acum, numero) => acum+numero);
    return sumaLista/lista.length;
}