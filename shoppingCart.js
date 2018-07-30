var fruits = [{

    name: "Mango",
    MRP: 50,
    category: "fruits",
},
{
    name: "Banana",
    MRP: 50,
    category: "fruits",
},
{
    name: "Blackberry",
    MRP: 50,
    category: "fruits",
},
{
    name: "Avocado",
    MRP: 50,
    category: "fruits",
},
{
    name: "Apricot",
    MRP: 50,
    category: "fruits",
},
{
    name: "Cherry",
    MRP: 50,
    category: "fruits",
},
{
    name: "Jackfruit",
    MRP: 50,
    category: "fruits",
},
{
    name: "Crabapples",
    MRP: 50,
    category: "fruits",
},
{
    name: "Coconut",
    MRP: 50,
    category: "fruits",
},
{
    name: "Fig",
    MRP: 50,
    category: "fruits",
}
];
var Vegetables = [{
    name: "Peas",
    MRP: 50,
    category: "Vegetables",
},
{
    name: "Broccoli",
    MRP: 50,
    category: "Vegetables",
},
{
    name: "Broccoflower",
    MRP: 50,
    category: "Vegetables",
},
{
    name: "Cauliflower",
    MRP: 50,
    category: "Vegetables",
},
{
    name: "MustardGreens",
    MRP: 50,
    category: "Vegetables",
},
{
    name: "Spinach",
    MRP: 50,
    category: "Vegetables",
},
{
    name: "LemonGrass",
    MRP: 50,
    category: "Vegetables",
},
{
    name: "Rosemary",
    MRP: 50,
    category: "Vegetables",
},
{
    name: "Basil",
    MRP: 50,
    category: "Vegetables",
},
{
    name: "Okra",
    MRP: 50,
    category: "Vegetables",
},

];
var Dairy = [{
    name: "Buttermilk",
    MRP: 50,
    category: "Dairy",
},
{
    name: "Butter",
    MRP: 50,
    category: "Dairy",
},

{
    name: "Chass",
    MRP: 50,
    category: "Dairy",
},

{
    name: "Cheese",
    MRP: 50,
    category: "Dairy",
},

{
    name: "Condensedmilk",
    MRP: 50,
    category: "Dairy",
},

{
    name: "Cream",
    MRP: 50,
    category: "Dairy",
},

{
    name: "Curd",
    MRP: 50,
    category: "Dairy",
},

{
    name: "paneer",
    MRP: 50,
    category: "Dairy",
},

{
    name: "custard",
    MRP: 50,
    category: "Dairy",
},

{
    name: "frozenCustard",
    MRP: 50,
    category: "Dairy",
},
];
var Biscuits = [{
    name: "ParleG",
    MRP: 50,
    category: "Biscuits",
},
{
    name: "Cookies",
    MRP: 50,
    category: "Biscuits",
},
{
    name: "Nimkin",
    MRP: 50,
    category: "Biscuits",
},
{
    name: "kreams",
    MRP: 50,
    category: "Biscuits",
},
{
    name: "festo",
    MRP: 50,
    category: "Biscuits",
},
{
    name: "HappyHappy",
    MRP: 50,
    category: "Biscuits",
},
{
    name: "Hide & Seek",
    MRP: 50,
    category: "Biscuits",
},
{
    name: "Magix",
    MRP: 50,
    category: "Biscuits",
},
{
    name: "CoconutCookies",
    MRP: 50,
    category: "Biscuits",
},
{
    name: "milkshakti",
    MRP: 50,
    category: "Biscuits",
},

];

row = "";
row = row + "<tr><th>Name</th><th>MRP</th><th>Catogory</th><th>Quantity</th><tr>";
myrow = 1;

function search() {
    var input1 = document.getElementById("input").value;
    var myRe = new RegExp(input1, "i");
    fruits.forEach((object) => {
        if (object.name.match(myRe)) {
            displayRows(object, myrow);
            myrow++;
        }
    });
    document.getElementById("Table1").innerHTML = row;
    Vegetables.forEach((object) => {

        if (object.name.match(myRe)) {
            displayRows(object, myrow);
            myrow++;
        }

    });
    Dairy.forEach((object) => {

        if (object.name.match(myRe)) {
            displayRows(object, myrow);
            myrow++;
        }

    });
    Biscuits.forEach((object) => {

        if (object.name.match(myRe)) {
            displayRows(object, myrow);
            myrow++;
        }

    });

}

function displayRows(obj, myrow) {
    row = row + "<tr><td id='name" + myrow + "'>" + obj.name + "</td><td>" +
        obj.MRP + "</td><td>" + obj.category + "</td><td><input type='number'value='0',min='0', max='10' id='dropdown" + myrow + "'/></tr>";

    document.getElementById("Table1").innerHTML = row;
}

function addTable() {
    var table = document.getElementById("Table1");
    var rows = table.getElementsByTagName("tr");
    var quantity = document.getElementById("dropdown1").value;
    var customers = new Array();
    for (var i = 1; i < rows.length - 1; i++) {
        var quantity = document.getElementById("dropdown" + i).value;
        if (quantity > 0) {
            var resultname = document.getElementById("name" + i).innerHTML;
            customers.push[(resultname, quantity)];

            displayTable(resultname, quantity);
            var myData = [resultname, quantity];
            // localStorage.setItem('objectToPass',myData);
            //localStorage.setItem('favoriteflavor','vanilla');
           window. localStorage.setItem('allData', JSON.stringify(myData));

        }
    }
}

table = "";
table = table + "<tr><th>Name</th><th>Quantity</th><tr>";

function displayTable(name, quantity) {
    table += "<tr><td>" + name + "</td><td >" + quantity + " </td></tr>";
    document.getElementById("cartTable").innerHTML = table;
}
function deleteRow() {
    document.getElementById("Table1").innerHTML = "";
}

function openWin() {
    window.open("checkout.html");
}
function multiply() {
    a = Number(document.getElementById('QTY').value);
    b = Number(document.getElementById('PPRICE').value);
    c = a * b;

    document.getElementById('TOTAL').value = c;
}
