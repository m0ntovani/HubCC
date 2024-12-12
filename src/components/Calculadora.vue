<<<<<<< HEAD
<template>
   <div class="titulo">
    <h1>CALCULADORA</h1>
   </div>
  <div class="inputs"> <!-- dois inputs para as variaveis reativas -->
    <input type="number" v-model="num1" placeholder="Número 1" />
     <input type="number" v-model="num2" placeholder="Número 2" />
 </div>
        <div class="botoes"> <!-- Quatro botoes usando o evento click para calcular -->
          <button @click="calcular('+')">+</button>
         <button @click="calcular('-')">-</button>
          <button @click="calcular('*')">*</button>
         <button @click="calcular('/')">/</button>
        </div>
     <div class="resultado"> Seu resultado: {{ resultado }} </div>
</template>


<script>
export default { name: "Calculadora",
      data() {
            return {
                    num1: 0,
                          num2: 0,
                                resultado: 0
            };
      },
        methods: {
              calcular(operador) {
                      const n1 = parseFloat(this.num1);
                            const n2 = parseFloat(this.num2);

                                  switch (operador) {
                                            case '+':
                                                      this.resultado = n1 + n2;
                                                                break;
                                                                        case '-':
                                                                                  this.resultado = n1 - n2;
                                                                                            break;
                                                                                                    case '*':
                                                                                                              this.resultado = n1 * n2;
                                                                                                                        break;
                                                                                                                                case '/':
                                                                                                                                          this.resultado = n2 !== 0 ? n1 / n2 : 'Erro: Divisão por 0';
                                                                                                                                                    break;
                                                                                                                                                            default:
                                                                                                                                                                      this.resultado = 'Operação inválida';  }
              }    }
};
</script>

=======
<template>
   <div class="titulo">
    <h1>CALCULADORA</h1>
   </div>
  <div class="inputs"> <!-- dois inputs para as variaveis reativas -->
    <input type="number" v-model="num1" placeholder="Número 1" />
     <input type="number" v-model="num2" placeholder="Número 2" />
 </div>
        <div class="botoes"> <!-- Quatro botoes usando o evento click para calcular -->
          <button @click="calcular('+')">+</button>
         <button @click="calcular('-')">-</button>
          <button @click="calcular('*')">*</button>
         <button @click="calcular('/')">/</button>
        </div>
     <div class="resultado"> Seu resultado: {{ resultado }} </div>
</template>

<script>
export default {
  name: "Calculadora",
  data() {
    return {
      num1: 0,
      num2: 0,
      resultado: 0
    };
  },
  methods: {
    calcular(operador) {
      const n1 = parseFloat(this.num1);
      const n2 = parseFloat(this.num2);

      switch (operador) {
        case '+':
          this.resultado = n1 + n2;
          break;
        case '-':
          this.resultado = n1 - n2;
          break;
        case '*':
          this.resultado = n1 * n2;
          break;
        case '/':
          this.resultado = n2 !== 0 ? n1 / n2 : 'Erro: Divisão por 0';
          break;
        default:
          this.resultado = 'Operação inválida';
      }
    }
  }
};
</script>

>>>>>>> ce388d334d77f9b98a87147dea43a26adcef41f9
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%; 
}

.calculadora {
    width: 320px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h2 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 25px;
    text-align: center;
    margin-bottom: 20px;
    color: #f0f0f0;
    background: #4CAF50; 
    padding: 15px; 
    border-radius: 10px; 
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

}
.inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}
input {
    width: 48%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.botoes {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 15px;
}

button {
    width: 48%;
    padding: 15px;
    font-size: 18px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 10px;
}

button:hover {
    background-color: #45a049;
}

.resultado {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    padding: 10px;
    border-radius: 5px;
    background-color: #f0f0f0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>