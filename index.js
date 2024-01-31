document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("noButton").remove();
    document.getElementById("yesButton").remove();
    document.getElementById("header").remove();
    document.querySelector("h3").remove();
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = '<h2>I knew you would say yes, my love. I can\'t wait!</h2>' + contentDiv.innerHTML;
});

document.getElementById("noButton").addEventListener("click", function() {
    this.style.position = 'absolute';
    this.style.top = Math.random() * window.innerHeight + 'px';
    this.style.left = Math.random() * window.innerWidth + 'px';
    document.getElementById("header").textContent = "The no button isn't a button, it is just for show. hihi";
});
