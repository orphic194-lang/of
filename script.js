const proverbs = [
    {
        dari: "با صبر ترش شیرین می‌شود",
        eng: "With patience, the sour turns sweet."
    },
    {
        dari: "یک دست صدا ندارد",
        eng: "One hand makes no sound."
    },
    {
        dari: "هر که بامش بیش برفش بیشتر",
        eng: "The higher your roof, the more snow it collects."
    }
];

// Proverb of the day
function showDaily() {
    let random = Math.floor(Math.random() * proverbs.length);
    document.getElementById("dailyDari").innerText = proverbs[random].dari;
    document.getElementById("dailyEng").innerText = proverbs[random].eng;
}

showDaily();

// Search
document.getElementById("search").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Add proverb
function addProverb() {
    let name = document.getElementById("name").value;
    let text = document.getElementById("proverbInput").value;

    if (name === "" || text === "") {
        alert("Fill all fields!");
        return;
    }

    let wall = document.getElementById("wall");

    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = "<b>" + name + ":</b> " + text;

    wall.appendChild(div);

    document.getElementById("name").value = "";
    document.getElementById("proverbInput").value = "";
}
