var cars = {
    busName: "Grego's Rent-A-Car",
    econCount: 500,
    midCount: 200,
    carPricePerDay: ['$80', '$100'],
};

//this shows the business name in the h1 tag when the webpage loads
window.onload = function() {
    document.getElementById("bizName").innerHTML = cars.busName
};

//this shows # of economy cars avail in the (p tag #econCarsAvail) if economy is selected in the dropdown
//it will also show the price of the econcar #econPrice

function showEconAmount() {
    document.getElementsByTagName("option")[0];
    document.getElementById("econCarsAvail").innerHTML = cars.econCount;
}





