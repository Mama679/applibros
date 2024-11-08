import {readFileSync} from "node:fs";
import { readFile } from "node:fs";
import { Deserializer } from "node:v8";

//Lectura de archivo json
const estudiantes = readFileSync("./archivo/estudiantes.json","utf8");

console.log(estudiantes);
//Deserializer
const estudianteJs = JSON.parse(estudiantes);
console.log(estudianteJs);
//Serializar

