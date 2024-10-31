/**
 *  Modulos nativos Node Js
 */
const {createHash} = await import("node:crypto");
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.URL_BASE_DATOS);