<template>
    <div>
      <main>
        <section>
          <span class="cur">US$</span>
          <input id="usd" type="text" v-model="usdValue" @input="convert('usd-to-brl')" @blur="formatCurrency('usd')" />
        </section>
        <section>
          <span class="cur">R$</span>
          <input id="brl" type="text" v-model="brlValue" @input="convert('brl-to-usd')" @blur="formatCurrency('brl')" />
        </section>
      </main>
      <button @click="avisar">Clique aqui para receber novas atualizações!</button>
      <footer>
        Feito por Thiffany Montovani
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dolar: 5.70,
        usdValue: '1000.00',
        brlValue: ''
      };
    },
    mounted() {
      this.convert('usd-to-brl'); // Faz a conversão inicial ao montar o componente
    },
    methods: {
      avisar() {
        alert("Notificações ativadas!");
      },
      formatCurrency(type) {
        if (type === 'usd') {
          this.usdValue = this.formatNumber(this.usdValue);
        } else if (type === 'brl') {
          this.brlValue = this.formatNumber(this.brlValue);
        }
      },
      formatNumber(value) {
        let fixedValue = this.fixValue(value);
        let options = {
          useGrouping: false,
          minimumFractionDigits: 2
        };
        return new Intl.NumberFormat("pt-BR", options).format(fixedValue);
      },
      fixValue(value) {
        let fixedValue = value.replace(",", ".");
        let floatValue = parseFloat(fixedValue);
        return isNaN(floatValue) ? 0 : floatValue; // Retorna 0 se NaN
      },
      convert(type) {
        if (type === "usd-to-brl") {
          let fixedValue = this.fixValue(this.usdValue);
          let result = fixedValue * this.dolar;
          this.brlValue = this.formatNumber(result.toFixed(2));
        }
  
        if (type === "brl-to-usd") {
          let fixedValue = this.fixValue(this.brlValue);
          let result = fixedValue / this.dolar;
          this.usdValue = this.formatNumber(result.toFixed(2));
        }
      }
    }
  };
  </script>
  
  <style>

  :root {
    --background: #FFF;
    --primary: #333333;
    --foreground: #e7f4c9;
    --secondary: #4CAF50;
    --secondary-light: #4CAF50;
}

* {
    margin: 0;
    padding: 0;
    list-style: none;
    align-items: center;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.4rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--background);
    color: var(--primary);
}

main {
    margin: 3rem;
}

main section {
    display: flex;
    font-weight: bold;
    background-color: var(--foreground);
    margin: 2rem auto;
    padding: 1rem;
    max-width: 80rem;
}

main section span {
    display: block;
    margin-right: 1rem;
    color: var(--secondary-light);
    font-size: 5rem;
}

main section input {
    flex: 1;
    min-width: 0;
    background: transparent;
    color: var(--secondary);
    font-size: 5rem;
    font-weight: bold;
    border: 0;
    outline: none;
    text-align: right;
}

button {
    display: flex;
    border-radius: 2rem;
    margin: 2rem auto;
    padding: 1rem;
    max-width: 25rem;
    background: #4CAF50;        
    color: white;     
}

footer {
    text-align: center;
    font-size: 1.4rem;
    color: var(--secondary);
}
  </style>
  
