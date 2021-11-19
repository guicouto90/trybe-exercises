const currencyList = document.querySelector('#currency-list');
const currencyBase = document.querySelector('#currency-base');

async function fetchCurrency(base) {
  const response = await fetch(`https://api.exchangerate.host/latest?base=${base}`);
  console.log(response);
  const data = await response.json();
  return data;
}

const addCurrency = ([currency, value]) => {
  const newLi = document.createElement('li');
  newLi.innerText = `${currency}: ${value}`;
  currencyList.appendChild(newLi);
}

const clearCurrencyList = () => {
  currencyList.innerHTML = '';
}

const populateCurrencyList = (rates) => {
  Object.entries(rates)
    .forEach(addCurrency)
}

const clickHandle = async (event) => {
  event.preventDefault();
  const inputCurrency = document.querySelector('#currency-input');

  try {
    const baseValue = inputCurrency.value;
    if (baseValue === '') {
      throw new Error('Informe alguma moeda');
    }
    const { base, rates } = await fetchCurrency();
    currencyBase.innerText = `Valores referentes a 1 ${base}`;
    clearCurrencyList();
    populateCurrencyList(rates);
  } catch (error) {
    alert(`Deu ruim! ${error}`);
  }

}

const setupEventHandlers = () => {
  const searchButton = document.querySelector('#search-button');

  searchButton.addEventListener('click', clickHandle);
}

window.onload = () => {
  setupEventHandlers();
}