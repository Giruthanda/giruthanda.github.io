

//SIMPLE INTEREST
function interest()
{
  var principal, rate, time, interestTotalRes, interestRes;
  principal = Number(document.interestcal.principal.value);
  rate = Number(document.interestcal.rate.value);
  rate/=100.0;
  time = Number(document.interestcal.time.value);

  interestRes = (principal * rate) * time;
  interestTotalRes = principal + interestRes;
  interestTotalRes.toLocaleString();
  document.interestcal.interestRes.value = formatMoney(interestRes);
  document.interestcal.interestTotalRes.value = formatMoney(interestTotalRes);
}

function formatMoney(number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'PHP' });
}

//COMPOUND INTEREST
function compinterest()
{
  var principal, rate, time, interestTotalRes, interestRes;
  principal = Number(document.compoundinterestcal.principal.value);
  rate = Number(document.compoundinterestcal.rate.value);
  rate/=100.0;
  time = Number(document.compoundinterestcal.time.value);
  compound = Number(document.compoundinterestcal.compound.value);

  interestRes = (principal * rate) * time;
  interestTotalRes = principal * Math.pow(1+rate/compound, compound*time);
  interestTotalRes.toLocaleString();
  document.compoundinterestcal.interestRes.value = formatMoney(interestRes);
  document.compoundinterestcal.interestTotalRes.value = formatMoney(interestTotalRes);
}

//UPC
function upcc(){
  var upcCode = Number(document.upc.upccode.value);

  var upcCode = Number(document.upc.upccode.value);
  var lastNum = upcCode%10;
  upcCode = Math.trunc(upcCode/10);

  var even = Math.trunc(upcCode/10);
  var odd = upcCode;
  var a;

  var sum=0;

  for(var i=0; even > 0; i++)
  {
    a = even%10;
    sum+=a;
    even=Math.trunc(even/100);
  }

  for(var s=0; odd > 0; s++)
  {
    a = (odd%10) * 3;
    sum+=a;
    odd=Math.trunc(odd/100);
  }

  var res = 10 - (sum%10);

  if(res==lastNum)
  document.upc.upccheck.value = "VALID";
  else
  document.upc.upccheck.value = "INVALID";
}

//CREDIT CARD
function creditc(){

var credit = Number(document.creditcard.credit.value);
var even = Math.trunc(credit/10);
var odd = credit;
var a, b, c;
var sum = 0, res;

for(var i = 0; even > 0; i++)
{
  //even numbers
  a = (even % 10) * 2;
  if(a>9)
  {
      b = Math.trunc((a/10)%100);
      a = Math.trunc(a%10);
      sum+=b;
  }
  sum+=a;
  b=0;
  even= Math.trunc(even/100);

}

for(var s=0; odd>0; s++)
{
  //odd numbers
  c = odd % 10;
  sum+=c;
  odd = Math.trunc(odd/100);
}
res=sum;
 if (res==0){
  document.creditcard.creditcheck.value= "INVALID";
}
else if(res%10 == 0){
  document.creditcard.creditcheck.value= "VALID";
}
else if(res%10 !=0){
  document.creditcard.creditcheck.value= "INVALID";
}


}





//UPC
function upcc(){

  var upcCode = Number(document.upc.upccode.value);

  var upcCode = Number(document.upc.upccode.value);
  var lastNum = upcCode%10;
  upcCode = Math.trunc(upcCode/10);

  var even = Math.trunc(upcCode/10);
  var odd = upcCode;
  var a;

  var sum=0;

  for(var i=0; even > 0; i++)
  {
    a = even%10;
    sum+=a;
    even=Math.trunc(even/100);
  }

  for(var s=0; odd > 0; s++)
  {
    a = (odd%10) * 3;
    sum+=a;
    odd=Math.trunc(odd/100);
  }

  var res = 10 - (sum%10);

  if(res==lastNum)
  document.upc.upccheck.value = "VALID";
  else
  document.upc.upccheck.value = "INVALID";
}


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
