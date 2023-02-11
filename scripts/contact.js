const form = document.getElementById("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Get form data from page
    const mail = new FormData(form)

    // Send mail
    const res =  await fetch("/contact", {
        method: "post",
        body: mail,

    }).then(response => {
        return response.json()
    })

    // Alert the user of a success
    if (res.response) alert("Message sent successfully")
})