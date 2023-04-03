// This code hides and displays different forms to somewhat simulate a Single page application

// declaring form variables
const form_page_1 = document.getElementById("form_page_1")
const form_page_2 = document.getElementById("form_page_2")
const form_page_3 = document.getElementById("form_page_3")

// Hiding the second and third form
form_page_2.style.display = "none"
form_page_3.style.display = "none"

// Displays first form and hides the second
const back_booking = document.getElementById("back_booking")
back_booking.addEventListener("click", (e) => {
    e.preventDefault();
    form_page_1.style.display = "block"
    form_page_2.style.display = "none"
})

// Displays second form and hides the first
const next_booking = document.getElementById("next_booking")
next_booking.addEventListener("click", (e) => {
    e.preventDefault();
    form_page_1.style.display = "none"
    form_page_2.style.display = "block"
})

// Displays second form and hides the third
const back_booking_freq = document.getElementById("back_booking_freq")
back_booking_freq.addEventListener("click", (e) => {
    e.preventDefault();
    form_page_2.style.display = "block"
    form_page_3.style.display = "none"

})

// Displays third form and hides the second
const con_info = document.getElementById("confirmation_info")
const next_booking_freq = document.getElementById("next_booking_freq")
next_booking_freq.addEventListener("click", (e) => {
    e.preventDefault();
    form_page_2.style.display = "none"
    form_page_3.style.display = "block"

    //gets the form data from all forms
    let formdata = {
        first_name: first_name.value,
        last_name: last_name.value,
        phone: phone.value,
        address: address.value,
        address2: address2.value,
        city: city.value,
        postcode: postcode.value,
        email: email.value,
        cleaning_type: cleaning_type.value,
        service_type: service_type.value,
        commercial_desc: commercial_service.value,
        product_type: product_type.value,
        booking_time: booking_time.value,
        beds: beds.value,
        baths: baths.value
    }

     //makes a foruth page for confirmation
    con_info.innerHTML = `<div class="row booking center confirmation">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <h6>First name</h6>
                                <p>${formdata.first_name}</p>
                            </div>
                            <div class="col">
                                <h6>last name:</h6>
                                <p>${formdata.last_name}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h6>phone</h6>
                                <p>${formdata.phone}</p>
                            </div>
                            <div class="col">
                                <h6>email</h6>
                                <p>${formdata.email}</p>
                            </div>
                        </div>

                        <div>
                            <h6>address</h6>
                            <p>${formdata.address}</p>
                            <h6>address2</h6>
                            <p>${formdata.address2}</p>
                            <h6>city</h6>
                            <p>${formdata.city}</p>
                            <h6>postcode</h6>
                            <p>${formdata.postcode}</p>
                        </div>

                        <div class="row">
                            <div class="col">
                                <h6>cleaning_type</h6>
                                <p>${formdata.cleaning_type}</p>
                            </div>
                            <div class="col">
                                <h6>service_type</h6>
                                <p>${formdata.service_type}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <h6>product_type</h6>
                                <p>${formdata.product_type}</p>
                            </div>
                            <div class="col">
                                <h6>booking_time</h6>
                                <p>${formdata.booking_time}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <h6>beds</h6>
                                <p>${formdata.beds}</p>
                            </div>
                            <div class="col">
                                <h6>baths</h6>
                                <p>${formdata.baths}</p>
                            </div>
                        </div>



                        <div class="row justify-content-between">
                            <div class="col">
                                <div class="space">
                                    <button id="back_booking_freq" class="alt_buttons text">back</button>
                                </div>
                            </div>

                            <div class="col">
                                <div class="space right">
                                    <button class="alt_buttons text">Done</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
})

console.log(formdata)




// const booking_button = document.getElementById("booking_button")
// booking_button.addEventListener("click", (e) => {


// })
