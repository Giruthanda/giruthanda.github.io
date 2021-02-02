function Interest()
{
  var principal,rate,time,interestTotalRes,interestRes;
  principal = Number(document.interestcal.principal.value);
  rate = Number(document.interestcal.rate.value);
  rate/=100.0;
  time = Number(document.interestcal.time.value);

  interestRes = (principal * rate) * time;
  interestTotalRes = principal + interest;
  document.interestcal.interestRes.value = interestRes;
  document.interestcal.interestTotalRes.value = interestTotalRes;
}
