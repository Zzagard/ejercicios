/**
 * indice validar que no sea menor a cero y que el elemento exista
 * en el array
 */
function getbyIdx(arr, idx) {
    if (idx < 0 || idx >= arr.length) {
        return 'Elemento no existe';
    }

    return arr[idx];
}

let resultado = getbyIdx([1, 2], 1);
console.log(resultado);