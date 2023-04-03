const service = document.getElementById("nav_service")
const enquiry = document.getElementById("nav_enquiry")
const logo = document.getElementById("nav_logo")
const reviews = document.getElementById("nav_reviews")
const contact = document.getElementById("nav_contact")

// scrolls to different sections of the page depening on what button is clicked
service.addEventListener("click", function (e) {
    window.scrollTo({
        top: 560,
        left: 0,
        behavior: 'smooth'
    })
})

enquiry.addEventListener("click", function (e) {
    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: 'smooth'
    })
})

logo.addEventListener("click", function (e) {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

reviews.addEventListener("click", function (e) {
    window.scrollTo({
        top: 1400,
        left: 0,
        behavior: 'smooth'
    })
})

contact.addEventListener("click", function (e) {
    window.scrollTo({
        top: 1600,
        left: 0,
        behavior: 'smooth'
    })
})

const form = document.getElementById("form_qoute");
const result = document.getElementById("result");

// sends formdata to webform which then send me a email 
form.addEventListener("submit", function (e) {
    const formData = new FormData(form);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    var json = JSON.stringify(object);
    result.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch((error) => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 5000);
        });
});

const form2 = document.getElementById("form_inquiry");
const result2 = document.getElementById("result2");

form2.addEventListener("submit", function (e) {
    const formData = new FormData(form2);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    var json = JSON.stringify(object);
    result2.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result2.innerHTML = json.message;
            } else {
                console.log(response);
                result2.innerHTML = json.message;
            }
        })
        .catch((error) => {
            console.log(error);
            result2.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form2.reset();
            setTimeout(() => {
                result2.style.display = "none";
            }, 5000);
        });
});
