const form = document.getElementById("floatForm");
form.addEventListener('submit', myFloat);

function myFloat (event) {
    const checkBoxes = event.target.elements["iceCreamSelect"];
    const radios = event.target.elements["rootBeerSelect"];
    var items = "";

    for (const checkBox of checkBoxes) {
        if (checkBox.checked === true) {
            if (items.length===0) {
                items += checkBox.value;
            } else {
                items += ", " + checkBox.value;
            }
        }
    }

    if (items.length === 0 || radios.value === "") {
        alert("You must select at least one ice cream flavor, and you must select one root beer brand.");
    } else {
        document.getElementById("outerborder").style.display = "block";
        document.getElementById("output").innerText = `Recipe: \r\n\ In a glass mug, add one scoop each of these ice creams - ${items}. Fill up the mug with ${radios.value} root beer. Enjoy!`
    }  
}

