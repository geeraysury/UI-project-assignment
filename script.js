document.addEventListener("DOMContentLoaded", function () {
    const serviceSelect = document.getElementById("service");
    const artistSelect = document.getElementById("artist");
    const artistGroup = document.querySelector(".artist-group");
    const timeGroup = document.querySelector(".time-group");

    const serviceArtists = {
        "hair-cut-styling": ["Ethan Carter", "Sophia Adams"],
        "hair-coloring": ["Olivia Reed", "Ava Mitchell"],
        "hair-extensions": ["Sophia Adams", "Ethan Carter"],
        "special-occasion-styling": ["Ava Mitchell", "Olivia Reed"],
        "hair-treatment": ["Ethan Carter", "Ava Mitchell"],
        "perming-curling": ["Sophia Adams", "Olivia Reed"],
        "natural-makeup": ["Liam Bennett", "Emma Hayes"],
        "glam-makeup": ["Mia Brooks", "Liam Bennett"],
        "bridal-makeup": ["Emma Hayes", "Mia Brooks"],
        "editorial-makeup": ["Liam Bennett", "Emma Hayes"],
        "manicure": ["Amelia Morgan", "Harper Sullivan"],
        "pedicure": ["Emily Parker", "Harper Sullivan"],
        "gel-nails": ["Amelia Morgan", "Emily Parker"],
        "acrylic-nails": ["Harper Sullivan", "Amelia Morgan"],
        "special-occasion-nails": ["Emily Parker", "Amelia Morgan"],
        "classic-spray-tan": ["Isabella Cooper", "Charlotte Rivera"],
        "custom-spray-tan": ["Charlotte Rivera", "Isabella Cooper"],
        "rapid-spray-tan": ["Isabella Cooper", "Charlotte Rivera"]
    };

    serviceSelect.addEventListener("change", function () {
        const selectedService = serviceSelect.value;

        artistSelect.innerHTML = '<option value="" disabled selected>Select an artist</option>';
        const artists = serviceArtists[selectedService] || [];
        artists.forEach(artist => {
            const option = document.createElement("option");
            option.value = artist.toLowerCase().replace(/\s+/g, "-");
            option.textContent = artist;
            artistSelect.appendChild(option);
        });
    });


    artistGroup.style.display = "block";
    timeGroup.style.display = "block";

    const addServiceBtn = document.querySelector(".add-service-btn");
    const serviceGroup = document.querySelector(".service-group");

    addServiceBtn.addEventListener("click", function () {
        const newServiceGroup = serviceGroup.cloneNode(true);

        const newServiceSelect = newServiceGroup.querySelector("select");
        const newArtistSelect = newServiceGroup.querySelector(".artist-group select");
        const newTimeInput = newServiceGroup.querySelector(".time-group input");

        newServiceSelect.value = "";
        newArtistSelect.innerHTML = '<option value="" disabled selected>Select an artist</option>';
        newTimeInput.value = "";

        serviceGroup.parentNode.insertBefore(newServiceGroup, addServiceBtn);

        newServiceSelect.addEventListener("change", function () {
            const selectedService = newServiceSelect.value;

            newArtistSelect.innerHTML = '<option value="" disabled selected>Select an artist</option>';
            const artists = serviceArtists[selectedService] || [];
            artists.forEach(artist => {
                const option = document.createElement("option");
                option.value = artist.toLowerCase().replace(/\s+/g, "-");
                option.textContent = artist;
                newArtistSelect.appendChild(option);
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.querySelector(".booking-form");
    const errorMessage = document.getElementById("error-message");
    const bookNowBtn = document.querySelector(".book-now-btn");

    bookNowBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const serviceGroups = bookingForm.querySelectorAll(".service-group");
        let isValid = false;

        serviceGroups.forEach(group => {
            const service = group.querySelector("#service");
            const artist = group.querySelector("#artist");
            const time = group.querySelector("#time");


            if (service && artist && time && service.value && artist.value && time.value) {
                isValid = true; 
            }
        });

        if (isValid) {
            window.location.href = "booking-confirmation.html";
        } else {
            errorMessage.style.display = "block";
        }
    });

    bookingForm.addEventListener("input", function () {
        errorMessage.style.display = "none";
    });
});

