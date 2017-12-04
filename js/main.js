/**
 * Created by nd on 01.12.2017.
 */
var totalPrice = 50;
var array = [];
var items = [
    {tomato: 30},
    {cheese: 100},
    {mushroom: 50},
    {beacon: 50},
    {fish: 100}];

function initPrice() {
    var result = document.getElementById("result");
    result.innerText = "Цена: " + totalPrice + " руб.";

    var layer = document.getElementById("pastry");
    layer.classList.add("active-item");
}

function findInArray(array, value) {
    if (array.length == 0) return -1;

    if (array.indexOf()) return array.indexOf(value);

    var i;

    for (i = 0; i < array.length; i++) {
        if (i === value) return i;
    }

    return -1;
}

function onDivClick(price) {
    var result = document.getElementById("result");
    var index = findInArray(array, price);

    if (index >= 0) {
        totalPrice -= price;
        array.splice(index, 1);
    } else {
        totalPrice += price;
        array.push(price);
    }

    result.innerText = "Result = " + totalPrice;
    console.clear();
    console.log(array);
}

function getPriceByItemName(itemName) {
    var price;
    var item;

    for (item in items) {
        price = items[item][itemName];

        if (price != undefined) return price;
    }
    return price;
}

function onItemClick(elem) {
    var index = findInArray(array, elem.id);
    var result = document.getElementById("result");
    var price = getPriceByItemName(elem.id);
    var layer = document.getElementById(elem.id + "_layer");

    if (index >= 0) {
        elem.classList.remove("active-item");
        totalPrice -= price == undefined ? 0 : price;
        layer.style.visibility = "hidden";

        array.splice(index, 1);
    } else {
        elem.classList.add("active-item");
        totalPrice += price == undefined ? 0 : price;
        layer.style.visibility = "visible";
        array.push(elem.id)
    }

    result.innerText = "Цена: " + totalPrice + " руб.";
}