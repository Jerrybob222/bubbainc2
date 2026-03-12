function toggleNav(){

    const navbar = document.getElementById("navbar");
    const button = document.getElementById("toggleBtn");

    navbar.classList.toggle("hidden");

    if(navbar.classList.contains("hidden")){
        button.textContent = "Show";
    }else{
        button.textContent = "Hide";
    }

}
