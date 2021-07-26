const formSection = document.querySelector(`.section_form`);
const costPrice = document.getElementById(`costPrice`);
const quantity = document.getElementById(`quantity`);
const sellingPrice = document.getElementById(`sellingPrice`);
const form = document.getElementById(`form`);
const body = document.querySelector(`body`);
const profitOutput = document.querySelector(`.profit_output`);
const lossOutput = document.querySelector(`.loss_output`);
const maxLoss = document.querySelector(`.max_loss_output`);



form.addEventListener(`submit`, (e) => {
     e.preventDefault();
     lossOrProfit(costPrice, quantity, sellingPrice);
})

function lossOrProfit(cost, qty, selling) {
     let costValue = Number(cost.value);
     let qtyValue = Number(qty.value);
     let sellingValue = Number(selling.value);

     // Loss more than 50%
     if (sellingValue <= (costValue / 2)) {

          const maxloss = (costValue - sellingValue).toFixed(2);
          const maxlossPercentage = (((maxloss) / costValue) * 100).toFixed(2);

          body.style.backgroundColor = "red";
          formSection.style.display = "none";
          lossOutput.style.display = "block";
          lossOutput.innerHTML =
               ` <h2> Loss: ${maxloss * qtyValue} </h2>
               <h2> Loss Percentage: ${maxlossPercentage} %</h2>`;

     }

     // Loss
     if (costValue > sellingValue) {
          const loss = (costValue - sellingValue).toFixed(2);
          const lossPercentage = ((loss / costValue) * 100).toFixed(2);

          formSection.style.display = "none";
          lossOutput.style.display = "block";
          lossOutput.innerHTML =
               `<h1>Loss <img src="https://img.icons8.com/ios-filled/50/fa314a/bearish.png" /></h1> <h2> Loss: ${loss * qtyValue} </h2>
          <h2> Loss Percentage: ${lossPercentage} %</h2>`;
     }

     // Profit
     else if (costValue < sellingValue) {
          const profit = (sellingValue - costValue).toFixed(2);
          const profitPercentage = ((profit / costValue) * 100).toFixed(2);
          formSection.style.display = "none";
          profitOutput.style.display = "block";
          profitOutput.innerHTML =
               ` <h1>Profit <img src="https://img.icons8.com/ios-filled/50/26e07f/bullish.png" /></h1> <h2> Profit: ${profit * qtyValue} </h2>
            <h2> Profit Percentage: ${profitPercentage} %</h2>`;
     };
}

