// Animate background on page load
window.onload = function() {
    const card = document.getElementById("card");

    setTimeout(() => {
        card.style.backgroundColor = "yellow";
    }, 3000);
    
    setTimeout(() => {
        card.style.backgroundColor = "#9067B5";
    }, 7000);
};