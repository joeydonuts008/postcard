const states = {
    al: { name: "Alabama", image: "img/al@2x.jpg" },
    ak: { name: "Alaska", image: "img/al@2x.jpg" },
    az: { name: "Arizona", image: "img/az@2x.jpg" },
    ar: { name: "Arkansas", image: "img/ar@2x.jpg" },
    ca: { name: "California", image: "img/ca@2x.jpg" },
	 co: { name: "Colorado", image: "img/co@2x.jpg" },
	 ct: { name: "Connecticut", image: "img/ct@2x.jpg" },
	 de: { name: "Delaware", image: "img/de@2x.jpg" },
	 dc: { name: "District of Columbia", image: "img/dc@2x.jpg" },
	 fl: { name: "Florida", image: "img/fl@2x.jpg" },
	 ga: { name: "Georgia", image: "img/ga@2x.jpg" },
	 hi: { name: "Hawaii", image: "img/hi@2x.jpg" },
	 id: { name: "Idaho", image: "img/id@2x.jpg" },
	 il: { name: "Illinois", image: "img/il@2x.jpg" },
	 in: { name: "Indiana", image: "img/in@2x.jpg" },
	 ia: { name: "Iowa", image: "img/ia@2x.jpg" },
	 ks: { name: "Kansas", image: "img/ks@2x.jpg" },
	 ky: { name: "Kentucky", image: "img/ky@2x.jpg" },
	 la: { name: "Louisiana", image: "img/la@2x.jpg" },
	 me: { name: "Maine", image: "img/ma@2x.jpg" },
	 md: { name: "Maryland", image: "img/md@2x.jpg" },
	 ma: { name: "Massachusetts", image: "img/ma@2x.jpg" },
	 mi: { name: "Michigan", image: "img/mi@2x.jpg" },
	 mn: { name: "Minnesota", image: "img/mn@2x.jpg" },
	 ms: { name: "Mississippi", image: "img/ms@2x.jpg" },
	 mo: { name: "Missouri", image: "img/ms@2x.jpg" },
	 mt: { name: "Montana", image: "img/mo@2x.jpg" },
	 ne: { name: "Nebraska", image: "img/nd@2x.jpg" },
	 nv: { name: "Nevada", image: "img/nv@2x.jpg" },
	 nh: { name: "New Hampshire", image: "img/nh@2x.jpg" },
	 nj: { name: "New Jersey", image: "img/nj@2x.jpg" },
	 nm: { name: "New Mexico", image: "img/nm@2x.jpg" },
	 ny: { name: "New York", image: "img/ny@2x.jpg" },
	 nc: { name: "North Carolina", image: "img/nc@2x.jpg" },
	 nd: { name: "North Dakota", image: "img/nd@2x.jpg" },
	 oh: { name: "Ohio", image: "img/oh@2x.jpg"},
	 ok: { name: "Oklahoma", image: "img/ok@2x.jpg" },
	 or: { name: "Oregon", image: "img/or@2x.jpg" },
	 pa: { name: "Pennsylvania", image: "img/pa@2x.jpg" },
	 ri: { name: "Rhode Island", image: "img/ri@2x.jpg" },
	 sc: { name: "South Carolina", image: "img/sc@2x.jpg" },
	 sd: { name: "South Dakota", image: "img/sd@2x.jpg" },
	 tn: { name: "Tennessee", image: "img/tn@2x.jpg" },
	 tx: { name: "Texas", image: "img/tx@2x.jpg" },
	 ut: { name: "Utah", image: "img/ut@2x.jpg" },
	 vt: { name: "Vermont", image: "img/vt@2x.jpg" },
	 va: { name: "Virginia", image: "img/va@2x.jpg" },
	 wa: { name: "Washington", image: "img/wa@2x.jpg" },
	 wv: { name: "West Virginia", image: "img/wv@2x.jpg" },
	 wi: { name: "Wisconsin", image: "img/wi@2x.jpg" },
	 wy: { name: "Wyoming", image: "img/wy@2x.jpg" }
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