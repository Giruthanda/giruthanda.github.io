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
