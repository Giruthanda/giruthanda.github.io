function calcBudget(){

  var price = [];

  price[0] = Number(document.tracker.price1.value);

  price[1] = Number(document.tracker.price2.value);
  price[2] = Number(document.tracker.price3.value);
  price[3] = Number(document.tracker.price4.value);
  price[4] = Number(document.tracker.price5.value);
  price[5] = Number(document.tracker.price6.value);
  price[6] = Number(document.tracker.price7.value);
  price[7] = Number(document.tracker.price8.value);
  price[8] = Number(document.tracker.price9.value);
  price[9] = Number(document.tracker.price10.value);
  price[10] = Number(document.tracker.price11.value);
  price[11] = Number(document.tracker.price12.value);
  var budget = Number(document.tracker.budget.value);

  var sum = price.reduce(function(a, b){
        return a + b;
    }, 0);

document.tracker.sum.value = formatMoney(sum);

if((budget - sum) > 0)
{
document.tracker.excess.value =  formatMoney(budget - sum);
document.tracker.excess2.value =  null;
}
else
{
  document.tracker.excess2.value =  formatMoney(Math.abs(budget - sum));
  document.tracker.excess.value =  null;
}



}

function formatMoney(number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'PHP' });
}
