const states = {
    ny: { name: "New York Giants", image: "img/2019_NYG_wbg.png" },
    dc: { name: "Dallas Cowboys", image: "img/dal.png" },
    ea: { name: "Eagles", image: "img/i.png" },
    wc: { name: "Washington Commanders", image: "img/WAS_mark1_burg_RGB_thumb.png" },
	};
// Function to update the postcard based on selected state
function updatePostcard(stateCode) {
    const postcard = document.getElementById("postcard");
    const greeting = document.getElementById("greeting");
    const stateHeading = document.getElementById("state-heading");

    if (stateCode === "empty-state") {
        postcard.style.backgroundImage = 'url("../img/empty-state@2x.jpg")';
        greeting.textContent = "To Generate a Postcard";
        stateHeading.textContent = "Choose a state";
    } else {
        const state = states[stateCode];
        postcard.style.backgroundImage = `url("${state.image}")`;
        greeting.textContent = "Greetings from";
        stateHeading.textContent = state.name;
    }
}

// Event listener for the state dropdown
document.getElementById("states").addEventListener("change", (event) => {
    updatePostcard(event.target.value);
});