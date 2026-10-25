const userProfile = {
    name: "Student",
    birthYear: 2006,
    isDeveloper: false,
    hobbies: ["Reading", "Music"]
};

const nameInput = document.getElementById("nameInput");
const yearInput = document.getElementById("yearInput");
const hobbyInput = document.getElementById("hobbyInput");
const hobbyList = document.getElementById("hobbyList");
const profileInfo = document.getElementById("profileInfo");
const currentYear = new Date().getFullYear();

nameInput.value = userProfile.name;
yearInput.value = userProfile.birthYear;
yearInput.max = currentYear;

function showProfile() {
    const age = currentYear - userProfile.birthYear;
    profileInfo.textContent = userProfile.name + " | Age: " + age +
        " | Hobbies: " + userProfile.hobbies.length;
    console.log(userProfile);
}

function addListItem(hobby) {
    const item = document.createElement("li");
    item.textContent = hobby;
    hobbyList.appendChild(item);
}

for (let hobby of userProfile.hobbies) {
    addListItem(hobby);
}

showProfile();

document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name === "") {
        alert("Enter your name");
        return;
    }

    userProfile.name = name;
    userProfile.birthYear = Number(yearInput.value);

    showProfile();
    profileInfo.style.color = "green";
});

document.getElementById("addButton").addEventListener("click", function() {
    const hobby = hobbyInput.value.trim();

    if (hobby === "") {
        alert("Enter a hobby");
        return;
    }

    userProfile.hobbies.push(hobby);
    addListItem(hobby);
    hobbyInput.value = "";
    showProfile();
});

document.getElementById("removeButton").addEventListener("click", function() {
    if (hobbyList.lastElementChild) {
        hobbyList.lastElementChild.remove();
        userProfile.hobbies.pop();
        showProfile();
    }
});