const form = document.getElementById("form")

const nameEl = document.getElementById("name")
const emailEl = document.getElementById("email")
const subjectEl = document.getElementById("subject")
const messageEl = document.getElementById("message")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    let mail = {
        name: nameEl.value,
        email: emailEl.value,
        subject: subjectEl.value,
        message: messageEl.value
    }

    // Send mail
    const res = await fetch("https://portfolio-qbuq.onrender.com/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mail),

    }).then(response => {
        return response.json()
    })

    // Alert the user of a success
    if (res.response) alert("Message sent successfully")
})