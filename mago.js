import { mago } from "./personaje";
export class mago extends personaje {
    #pechera = false;
    constructor (nom) {
        super ();
        this.setNombre = nom;
        this.setVida = 10;
        this.armadura();
    }
    armadura (){
        if(this.#pechera) this.setDefensa = 100;
    }
}