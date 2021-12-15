window.onload = () => {
    p1 = document.getElementById("emailval");
    p2 = document.getElementById("passval");
    email = document.getElementById("exampleInputEmail1");
    password = document.getElementById("exampleInputPassword1");
    btn = document.getElementById("btn");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        let containsNum = false;
        console.log(email.value)
        if (email.value.includes("@")) {
            p1.className = "green";
            p1.innerText = "Everything seems fine"
        } else {
            p1.className = "red";
            p1.innerText = "You need to use valid email"
        }

        for (let i = 0; i < password.value.length; i++) {
            if (password.value.charAt(i) >= '0' && password.value.charAt(i) <= '9') {
                containsNum = true
            }
        }

        if (password.value.length >= 1 && password.value.length <= 8 && containsNum && password.value.toLowerCase() !== password.value) {
            p2.className = "green";
            p2.innerText = "Everything seems fine"
        } else {
            p2.className = "red";
            p2.innerText = "You need 1-8 characters, one big letter and one number!"
        }

    })
}