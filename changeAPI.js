const btn = document.getElementById("convertBtn");
const API_KEY = "2bbace324c06543c9090f6d2";

btn.addEventListener("click",async function() {
    const amount= document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/NGN`);
    const data = await response.json();
    const rates = data.conversion_rates[currency];
    const results= amount*rates;
    document.getElementById("result").textContent=`${amount} NGN = ${results.toFixed(2)} ${currency}`;

}
)