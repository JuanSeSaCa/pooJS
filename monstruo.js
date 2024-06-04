
  class Monstruo extends Criatura {
    constructor(nombre, vida, vidaMaxima, ataque) {
      super(nombre, vida, vidaMaxima, ataque);
      if (this.constructor === Monstruo) {
        throw new Error("No puedes instanciar la clase abstracta Monstruo");
      }
    }
  }
  