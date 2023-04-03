const services = document.getElementById("service_type")
const commercial = document.getElementById("commercial_service")

var text = document.createElement("textarea")
text.cols = 30
text.rows = 4
text.className = "enquiry_text2"
text.placeholder = "What kind of business is it?"
commercial.appendChild(text)
commercial.style.display = "none";

services.addEventListener("change", function (e) {
    commercial.style.display = "none";
    if (services.value == "commercial") {
        commercial.style.display = "block";
    }

})