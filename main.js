import { personaje } from "./personaje.js";
import { mago } from "./mago.js";
import { guerrero } from "./guerrero.js";

let personajeDefault = new personaje ();
let personaGuerrero1 = new guerrero ("Sebastian");
let personaMago1 = new mago ("Merlin");
console.log(personajeDefault);
console.log(personaGuerrero1);
console.log(personaMago1);



