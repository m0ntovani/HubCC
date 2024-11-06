<template>
  <div class="tituloB">
    <h1>CONVERSOR</h1>
  </div>
  <div>
    <main>
      <section>
        <span class="cur">R$</span>
        <input
          id="brl"
          type="text"
          v-model="brlValue"
          @input="convert('brl-to-usd')"
          @blur="formatCurrency('brl')"
        />
      </section>
      <section>
        <span class="cur">US$</span>
        <input
          id="usd"
          type="text"
          v-model="usdValue"
          @input="convert('usd-to-brl')"
          @blur="formatCurrency('usd')"
        />
      </section>
    </main>
    <button @click="avisar">Clique aqui para receber novas atualizações!</button>
    <footer>Feito por Thiffany Montovani</footer>
  </div>
</template>

<script>
export default {
  data() { //função
    return {
      dolar: 0, // valor da api
      usdValue: '1.00',
      brlValue: ''
    };
  },
  mounted() { //ciclo de vida do componente
    this.fetchCotacao(); // chama para obter a cotação
    this.convert('usd-to-brl'); // calcula a conversão
  },
  methods: {
    avisar() {
      alert("Notificações ativadas!");
    },
    formatCurrency(type) { //formata o valor
      if (type === 'usd') {
        this.usdValue = this.formatNumber (this.usdValue, 'en-US'); // as duas casa decimais formatnumber
      } else if (type === 'brl') {
        this.brlValue = this.formatNumber(this.brlValue, 'pt-BR');
      }
    },
    formatNumber(value, locale) {
      let fixedValue = this.fixValue(value); //troca , por .
      let options = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      };
      return new Intl.NumberFormat(locale, options).format(fixedValue);
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
        this.brlValue = this.formatNumber(result.toFixed(2), 'pt-BR');
      } else if (type === "brl-to-usd") {
        let fixedValue = this.fixValue(this.brlValue);
        let result = fixedValue / this.dolar;
        this.usdValue = this.formatNumber(result.toFixed(2), 'en-US');
      }
    },
    async fetchCotacao() {
      const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'; // API para obter a cotação USD-BRL vi no gg
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        this.dolar = parseFloat(data.USDBRL.bid); // Atualiza sempre o valor
      } catch (error) {
        console.error('Erro ao buscar a cotação:', error);
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

h1 {
    display: flex;
    border-radius: 2rem;
    margin: 2rem auto;
    padding: 0.5rem;
    display: flex;
    justify-content: center;   
    align-items: center;           
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 25px;                 
    text-align: center;         
    background: #4CAF50;        
    color: white;                  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
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
