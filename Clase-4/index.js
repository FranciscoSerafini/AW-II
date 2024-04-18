import {readFile} from 'fs/promises'
import { obtener_genero } from './utilis.js'

const file = await readFile('./data.json', 'utf-8')

console.log(file)

const data = JSON.parse(file)

console.log(data)

console.log("Peliculas de terror", obtener_genero(data, "Terror"))