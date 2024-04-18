export const obtener_genero = (array,genero) => {
    genero = genero.toUpperCase()
    const res = array.filter(e =>e.genero.toUpperCase() == genero)
    return res
    
}

export const obtnerPromedio = ( array) => {
    const duracion = array.reduce((acc,curr) => acc + curr.duracion, 0)
    const cantidadPeliculas = array.length
    const res = duracion/cantidadPeliculas
}