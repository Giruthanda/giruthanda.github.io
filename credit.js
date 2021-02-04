function creditc(){

var credit = Number(document.creditcard.credit.value);
var even = Math.trunc(credit/10);
var odd = credit;
var a, b, c;
var res=0;

for(var i = 0; even > 0; i++)
{
  //even numbers
  a = (even % 10) * 2;
  if(a>9)
  {
      b = Math.trunc((a/10)%100);
      a = Math.trunc(a%10);
      res+=b;
  }
  res+=a;
  b=0;
  even= Math.trunc(even/100);

}

for(var s=0; odd>0; s++)
{
  //odd numbers
  c = odd % 10;
  res+=c;
  odd = Math.trunc(odd/100);
}

if(res%10 == 0){
  document.creditcard.creditcheck.value= res;
}
else{
  document.creditcard.creditcheck.value= "INVALID";
}


}
