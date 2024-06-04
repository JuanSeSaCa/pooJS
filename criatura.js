class Criatura {
    constructor(nombre, vida, vidaMaxima, ataque) {
      if (this.constructor === Criatura) {
        throw new Error("No puedes instanciar la clase abstracta Criatura");
      }
      this.nombre = nombre;
      this.vida = vida;
      this.vidaMaxima = vidaMaxima;
      this.ataque = ataque;
    }
  }
  