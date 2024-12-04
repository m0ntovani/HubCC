<template>
  <div class="tituloB">
    <h1>CONVERSOR</h1>
  </div>
  <div>
    <main>
      <section>
        <span class="cur">US$</span>
        <input
          id="usd"
          type="text"
          v-model="usdValue"
          @input="onInput('usd')"
        />
      </section>
      <section>
        <span class="cur">R$</span>
        <input
          id="brl"
          type="text"
          v-model="brlValue"
          @input="onInput('brl')"
        />
      </section>
    </main>

    <!-- Botão de notificação, exibido com v-show -->
    <button v-show="showNotificationButton" @click="avisar">
      Clique aqui para receber novas atualizações!
    </button>

    <!-- Mensagem de erro exibida com v-if -->
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>

    <footer>Feito por Thiffany Montovani</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dolar: 0, // Valor da cotação
      usdValue: '', // Valor em USD
      brlValue: '', // Valor em BRL
      showNotificationButton: true, 
      errorMessage: '', 
    };
  },
  mounted() {
    this.fetchCotacao(); // Busca a cotação ao montar o componente
  },
  methods: {
    avisar() {
      alert("Notificações ativadas!");
    },
    onInput(currency) {
      // Chama a função de conversão dependendo da moeda
      if (currency === 'usd') {
        this.convert('usd-to-brl');
      } else if (currency === 'brl') {
        this.convert('brl-to-usd');
      }
    },
    convert(type) {
      if (type === "usd-to-brl") {
        const fixedValue = this.fixValue(this.usdValue);
        const result = fixedValue * this.dolar;
        this.brlValue = this.formatNumber(result.toFixed(2), 'pt-BR');
      } else if (type === "brl-to-usd") {
        const fixedValue = this.fixValue(this.brlValue);
        const result = fixedValue / this.dolar;
        this.usdValue = this.formatNumber(result.toFixed(2), 'en-US');
      }
    },
    formatNumber(value, locale) {
      const fixedValue = this.fixValue(value);
      const options = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      };
      return new Intl.NumberFormat(locale, options).format(fixedValue);
    },
    fixValue(value) {
      const fixedValue = value.replace(",", ".");
      const floatValue = parseFloat(fixedValue);
      return isNaN(floatValue) ? 0 : floatValue;
    },
    async fetchCotacao() {
      const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        this.dolar = parseFloat(data.USDBRL.bid);
      } catch (error) {
        this.errorMessage = 'Erro ao buscar a cotação. Tente novamente mais tarde.';
        console.error('Erro ao buscar a cotação:', error);
      }
    },
  },
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
