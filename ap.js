let products = []
async function getdata() {
    products = await fetch("https://global-warming.org/api/temperature-api");
    products = await products.json();
    var div = document.getElementById("two")
    console.log(products)
    for (i = 0; i < products.result.length - 1; i++) {
        var tsl = document.createElement("div1")
        var time = document.createElement("div2")
        var station = document.createElement("div3")
        var land = document.createElement("div4")
        time.setAttribute("id", "time1")
        station.setAttribute("id", "station1")
        land.setAttribute("id", "land1")
        tsl.setAttribute("id", "tsl1")
        var t1 = document.createTextNode("TIME : " + products.result[i].time)
        var s1 = document.createTextNode("STATION : " + products.result[i].station)
        var l1 = document.createTextNode("LAND : " + products.result[i].land)
        time.appendChild(t1)
        station.appendChild(s1)
        land.appendChild(l1)
        tsl.appendChild(time)
        tsl.appendChild(station)
        tsl.appendChild(land)
        div.appendChild(tsl)
    }
}
getdata()