const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const sideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
         contentTarget.innerHTML += `<div class="person gawker"></div>`
    })
    eventHub.addEventListener("packageTicketPurchased", customEvent => {
        contentTarget.innerHTML += `<div class="person bigSpender"></div>`
    })
}