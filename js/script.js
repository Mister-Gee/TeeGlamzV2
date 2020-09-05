function check() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value

    if (name === "" || email === "") {
        alert("Input your name and email ")
    } else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            alert("Congratulations " + name + " You have being successfully added to our email list")
            return (true)

        } else {
            alert("you have entered an invalid email address ")
            return (false)
        }
    }

}

function toggleBtn() {
    document.getElementById("nav-area").classList.toggle("active")
    document.getElementsByClassName("close-btn")[0].classList.toggle("on")
    document.getElementsByClassName("toggle-btn")[0].classList.toggle("off")
}