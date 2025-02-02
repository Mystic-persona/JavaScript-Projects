const amountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.converted-amount');
const fromCurrencyElement = document.querySelector('.from-currency');
const toCurrencyElement = document.querySelector('.to-currency');
const resultElement = document.querySelector('.result');


const countries =  [
    {code:"USD",name:"United States Dollar"},
    {code:"INR",name:"Indian Rupee"},
];

countries.forEach(country => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
     
    option1.value = option2.value = country.code;
    option1.textContent = option2.textContent = `${country.code} (${country.name})`;

    fromCurrencyElement.appendChild(option1);
    toCurrencyElement.appendChild(option2);

    fromCurrencyElement.value = "USD";
    toCurrencyElement.value = "INR";
})


const getExchangeRate = async () =>{
    const amount = parseFloat(amountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();

    const conversionRate = data.rates[toCurrency];
    const convertedAmount = (amount * conversionRate);

    convertedAmountElement.value =convertedAmount;
    resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency};`
}

amountElement.addEventListener('input', getExchangeRate);
fromCurrencyElement.addEventListener('change', getExchangeRate);
toCurrencyElement.addEventListener('change', getExchangeRate);
window.addEventListener('load', getExchangeRate);