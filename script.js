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

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name == "") {
            alert("Please enter your name.");
            return;
        }

        if (email == "") {
            alert("Please enter your email.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message == "") {
            alert("Please enter your message.");
            return;
        }

        if (message.length < 10) {
            alert("Message must be at least 10 characters.");
            return;
        }

        alert("Your message has been sent successfully!");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

    };

}
