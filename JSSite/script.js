function modifyContent(newContent) {
    var element = document.getElementById("contentArea");
    if (element) {
        if(newContent == "image") {
            element.innerHTML = "<img src='pictures/mettugutta.jpeg' width=300 height=250/>"
            return;
        }
        element.innerHTML = newContent;
    }
}

function doValidation() {
    var inputField = document.getElementById("inputField");
    var expectedValue = "example";
    var errorMessage = document.getElementById("errorMessage");

    if (inputField.value === expectedValue) {
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
    }
}

var acc = document.getElementsByClassName("button-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var textContent = this.nextElementSibling;
        if (textContent.style.maxHeight) {
            textContent.style.maxHeight = null;
        } else {
            textContent.style.maxHeight = textContent.scrollHeight + "px";
        }
    });
}