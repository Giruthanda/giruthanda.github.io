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
