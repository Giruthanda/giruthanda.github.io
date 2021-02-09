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
