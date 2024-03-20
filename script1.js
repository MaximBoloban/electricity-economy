function calculateCost() {
    var consumption = parseInt(document.getElementById("consumption").value);
    var hours = parseInt(document.getElementById("hours").value);
    var tariffType = document.getElementById("tariffType").value;
    var dayTariff = parseFloat(document.getElementById("dayTariff").value);
    var nightTariff = parseFloat(document.getElementById("nightTariff").value);
    var totalCost;
  
    if (tariffType === 'day') {
      totalCost = consumption * hours * dayTariff;
    } else {
      totalCost = consumption * hours * nightTariff;
    }
  
    document.getElementById("result").innerHTML = "Итоговая стоимость: " + totalCost + " руб";
  }
