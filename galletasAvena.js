function galletaAvena(cantidad, extraSabor) {
    const mensaje = "Receta de galletas de avena\n";

    const ingredientes = Ingredientes:\n- ${cantidad} gramos de avena\n- ${extraSabor} de sabor adicional (opcional)\n- Otros ingredientes que desees agregar (nueces, pasas, chocolate, etc.)\n;

    const instrucciones = "Instrucciones:\n1. Mezcla todos los ingredientes en un recipiente.\n2. Deja reposar la mezcla en el refrigerador durante 8 horas para que adquiera una consistencia húmeda.\n3. Precalienta el horno a 180°C.\n4. Forma pequeñas bolitas con la masa y colócalas en una bandeja para hornear.\n5. Hornea las galletas durante 12-15 minutos o hasta consistencia deseada.";

    return mensaje + ingredientes + instrucciones;
  }

  console.log(galletaAvena(200));

// RDA (Recommended Dietary Allowance o Ingesta Dietética Recomendada)
// Los datos RDA están basados en una dieta de 2.000 calorías diarias, y podrían variar en función de tu necesidad de calorías.
  class Avena {
    constructor() {
      this.gramos = 100;
      this.calorias = 389;
      this.grasasTotales = 6.9;
      this.grasasSaturadas = 1.22;
      this.sodio = 2;
      this.carbohidratos = 66.27;
      this.fibra = 10.6;
      this.proteinas = 16.89;
      this.calcio = 54;
      this.hierro = 4.72;
      this.magnesio = 177;
      this.potasio = 429;
      this.yodo = 5.9;
    }

    calcularCantidades(cantidad) {
      const coeff = cantidad / this.gramos;

      return {
        calorias: this.calorias * coeff,
        grasasTotales: this.grasasTotales * coeff,
        grasasSaturadas: this.grasasSaturadas * coeff,
        sodio: this.sodio * coeff,
        carbohidratos: this.carbohidratos * coeff,
        fibra: this.fibra * coeff,
        proteinas: this.proteinas * coeff,
        calcio: this.calcio * coeff,
        hierro: this.hierro * coeff,
        magnesio: this.magnesio * coeff,
        potasio: this.potasio * coeff,
        yodo: this.yodo * coeff
      };
    }
  }


  const avena = new Avena();
  const cantidadDeseada = 250;
  const cantidadesCalculadas = avena.calcularCantidades(cantidadDeseada);
  console.log(cantidadesCalculadas);
