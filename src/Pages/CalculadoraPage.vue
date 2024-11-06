<script>
export default {
  name: "CalculadoraPage",
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