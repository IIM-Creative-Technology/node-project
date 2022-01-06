document.getElementById("login_form").onsubmit = function(event) {
    event.preventDefault()
    // animation
    document.getElementById("login_process_state").classList.remove("hidden")
    document.getElementById("login_process_state").classList.add("animate-pulse")

    document.getElementById("login_default_state").classList.add("hidden")
}