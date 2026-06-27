const btn = document.getElementById("convertBtn");
const API_KEY = "2bbace324c06543c9090f6d2";

btn.addEventListener("click",async function() {
    const amount= document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`);
    const data = await response.json();

    const rates = data.conversion_rates[toCurrency];
    const results= amount*rates;

    document.getElementById("result").textContent=`${amount} ${fromCurrency} = ${results.toFixed(2)} ${toCurrency}`;

}
)