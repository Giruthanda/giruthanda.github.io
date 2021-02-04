

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
