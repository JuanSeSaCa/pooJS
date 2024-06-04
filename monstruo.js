
  class Monstruo extends Criatura {
    constructor(nombre, vida, vidaMaxima, ataque) {
      super(nombre, vida, vidaMaxima, ataque);
      if (this.constructor === Monstruo) {
        throw new Error("No puedes instanciar la clase abstracta Monstruo");
      }
    }
  }
  
  class Orco extends Monstruo {
    constructor() {
      super('Orco', 100, 100, 20);
    }
  }
  
  class Goblin extends Monstruo {
    constructor() {
      super('Goblin', 50, 50, 15);
    }
  }
  
  class Kobold extends Monstruo {
    constructor() {
      super('Kobold', 30, 30, 10);
    }
  }
  