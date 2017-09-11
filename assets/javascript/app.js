
  var stockSymbols = [["AAPL", "Apple", "assets/images/APPLE.jpeg"],
                       ["AXP", "American Express", "assets/images/amex.jpeg"],
                       ["BA", "Boeing", "assets/images/boeing.jpeg"],
                       ["CAT", ":Catepillar", "assets/images/cat.jpeg"],
                       ["CSCO", "Cisco Systems", "assets/images/cisco.jpeg"],
                       ["CVX", "Chevron", "assets/images/chevron.jpeg"],
                       ["KO", "Coca-Cola", "assets/images/coca-cola.jpeg"],
                       ["DD", "DuPont", "assets/images/dupont.jpeg"],
                       ["XOM", "ExxonMobil", "assets/images/exxon.jpeg"],
                       ["GE", "General Electric", "assets/images/GE.jpeg"],
                       ["GS", "Goldman Sachs", "assets/images/sachs.jpeg"],
                       ["HD", "Home Depot", "assets/images/depot.jpeg"],
                       ["IBM", "IBM", "assets/images/ibm.jpeg"],
                       ["INTC", "Intel", "assets/images/intel.png"],
                       ["JNJ", "Johnson and Johnson", "assets/images/jj.jpeg"],
                       ["JPM", "JPMorgan Chase", "assets/images/jp.jpeg"],
                       ["MCD", "McDonald's", "assets/images/donalds.jpeg"],
                       ["MMM", "3M Company", "assets/images/3m.jpeg"],
                       ["MRK", "Merck", "assets/images/merck.jpeg"],
                       ["MSFT", "Microsoft", "assets/images/microsoft.jpeg"],
                       ["NKE", "Nike", "assets/images/nike.jpeg"],
                       ["PFE", "Pfizer", "assets/images/pfizer.jpeg"],
                       ["PG", "Proctor and Gamble", "assets/images/pg.jpeg"],
                       ["TRV", "The Travallers", "assets/images/travellers.jpeg"],
                       ["UNH", "UnitedHealth", "assets/images/uh.jpeg"],
                       ["UTX", "United Technologies", "assets/images/united.jpeg"],
                       ["V", "Visa", "assets/images/visa.jpeg"],
                       ["VZ", "Verizon", "assets/images/verizon.jpeg"],
                       ["WMT", "Walmart", "assets/images/walmart.jpeg"],
                       ["DIS", "Walt Disney", "assets/images/walt.jpeg"]];

function Start(userprofile){
  // window.open("dummy.html");
  // var dummy = "NASDAQ:AAPL:Apple,NYSE:AXP:American Express,NYSE:DD:DuPont,NYSE:WMT:Walmart";
  var data = localStorage.getItem("stocks");
  var arraySymbols = [];
  var array = [];

  var array4 = [];

  var stockButtons = $("#stock-buttons");
  var stockImages = $("#stockImages");
  array = data.split(",");



  console.log(stockSymbols);
  for(var i = 0; i < array.length; i++)
  {
    array4.push(array[i].split(":"));
    console.log(array4[i][0] + " " + array4[i][1] + " " + array4[i][2]);
  }



  var stockString = "Stocks: ";
  for(var i = 0; i < array4.length; i++)
  {
  	stockString += array4[i][1] + ((i === array4.length - 1) ? "" : ", ");
  }

  console.log(stockString);

  stockButtons.empty();

  var div = $("<div>");
  div.attr("class", "col-sm-1");
  stockButtons.append(div);

  for(var i = 0; i < array4.length; i++)
  {
    var div = $("<div>");
    div.attr("class", "col-sm-2 company-card");
    div.attr("data-symbol", array4[i][1]);
    div.attr("data-name", array4[i][2]);

    var button = $("<button>");

    var name = $("<h2>");
    name.text(array4[i][2]);

    var stockImg = $("<img>");
    stockImg.attr("class", "company-logo");
    var z = LookUp(array4[i][1]);
    stockImg.attr("src", stockSymbols[z][2]);

    var ticker = $("<h2>");
    ticker.text(array4[i][1]);

/*
    var removeButton = $("<button>");
    removeButton.attr("id", "removebutton" + i);
    removeButton.attr("class", "remove");
    var removeText = $("<h4>");
    removeText.text("Remove");
    removeButton.append(removeText);
    */

    button.append(name);
    button.append(stockImg);
    button.append(ticker);

    div.append(button);
    // div.append(removeButton);

    stockButtons.append(div);

  }
};

$(document).on("click", ".company-card", openChart);

function openChart(){
  console.log("A stock card was clicked on.");
  localStorage.setItem("symbol",this.getAttribute('data-symbol'));
  localStorage.setItem("Name",this.getAttribute('data-Name'));
  location.href = "view.html";
};

function LookUp(string)
{
  for(var i = 0; i < 30; i++)
  {
  	if(string === stockSymbols[i][0])
  	{
      return i;
  	}
  }
};

Start();