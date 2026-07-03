let orderBtn = document.getElementById("orderBtn");

if (orderBtn) {

    orderBtn.onclick = function() {

        alert("Thank you for choosing Ratatouille!");

    };

}




let orderButtons = document.querySelectorAll(".card button");

for (let i = 0; i < orderButtons.length; i++) {

    orderButtons[i].onclick = function() {

        alert("Your order has been added!");

    };

}



let sendBtn = document.getElementById("sendBtn");

if (sendBtn) {

    sendBtn.onclick = function() {

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name == "" || email == "" || message == "") {

            alert("Please fill in all fields.");

        } else {

            alert("Your message has been sent successfully!");

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

        }

    };

}