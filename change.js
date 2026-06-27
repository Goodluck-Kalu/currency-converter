const btn = document.getElementById("convertBtn");

const rates = {
    USD: 0.00065,
    GBP: 0.00051,
    EUR: 0.00060
};

btn.addEventListener("click",function() {
    const amount= document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;
    const results= amount*rates[currency];
    document.getElementById("result").textContent=`${amount} NGN = ${results.toFixed(2)} ${currency}`;

}
)