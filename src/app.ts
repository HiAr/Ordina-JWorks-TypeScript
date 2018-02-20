function updateWelcomeText(name:string) {
    document.getElementById("welcome-text").innerHTML = "Hello " + name;
}

updateWelcomeText("Dries");