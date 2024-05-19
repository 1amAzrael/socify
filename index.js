//sidebar
const menuItems = document.querySelectorAll(".menu-item");
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});
// all CRUD settings
var stories = document.querySelector(".stories");
stories.style.display = "none";

var posts = document.querySelector(".create-post");
posts.style.display = "none";

var right = document.querySelector(".right");
right.style.display = "none";

var loginBox = document.querySelector(".login-box");
loginBox.style.display = "none";

var profilesss = document.querySelector(".profilesss");
profilesss.style.display = "none";
var sidebar = document.querySelector(".sidebar");
sidebar.style.display = "none";

var profile = document.querySelector(".profile");
profile.style.display = "none";

var bod = document.getElementsByTagName('body')[0];

function login() {
  loginBox.style.display = "flex";
  document.getElementById('main').classList.add('blur-effect');

}

function signIn() {
    document.getElementById('main').classList.remove('blur-effect');
  var username = document.getElementById("username").value;
  var usrs = document.querySelectorAll(".usrs");

  var feed = document.querySelectorAll(".feed");


  usrs.forEach(function(usr) {
    usr.innerText = username;
    loginBox.style.display = "none";
    var logs = document.querySelector(".login");
    logs.style.display = "none";
    profilesss.style.display = "block";
    stories.style.display = "flex";
    posts.style.display = "flex";
    right.style.display = "block";
    sidebar.style.display = "block";
    profile.style.display = "block";
    feed.forEach(function (fe) {
      fe.classList.remove("feed");
      fe.classList.add("feedd")
    });
    
    
  });
}


document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  var fileInput = document.getElementById("fileInput");
  var file = fileInput.files[0]; // Get the uploaded file

  if (file) {
    var reader = new FileReader();

    reader.onload = function (event) {
      var imageUrl = event.target.result; // Get the data URL of the uploaded image

      var profileImages = document.querySelectorAll(".prof"); 
      profileImages.forEach(function (img) {
        img.src = imageUrl; // Change the source of each profile image
      });

      document.querySelector("#form").style.display = "none";

      alert("Profile image updated successfully!");
    };

    reader.readAsDataURL(file); // Read the uploaded file as a data URL
  } else {
    alert("Please select an image file.");
  }
});

var hearts = document.querySelectorAll(".uil-heart");

hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    // Change the HTML content of the clicked heart icon
    this.parentElement.innerHTML =
      '<i class="fa-solid fa-heart" style="color: #ff0000;"></i>';
  });
});

var books = document.querySelectorAll(".uil-bookmark");

books.forEach(function (book) {
  book.addEventListener("click", function () {
    
    this.parentElement.innerHTML = "&#10003;";
  });
});

var accepts = document.querySelectorAll(".bn");

accepts.forEach(function (accept) {
  accept.addEventListener("click", function () {
    
    this.parentElement.innerHTML = "You have confirmed the request.";
  });
});
//yo line bata chai tyo post wala hunxa try to change it and use create element instead of this
var newes = document.querySelector(".newes");
newes.style.display = "none";

function postInput() {
  var userInput = document.getElementById("userInput").value;
  var copyDiv = document.querySelector(".copy");
  newes.style.display = "block";

  if (copyDiv) {
    copyDiv.textContent = userInput;
  } 
}

//to this line

document.querySelectorAll('.profile-pic img ').forEach(images =>{
  images.onclick = () =>{
      document.querySelector('.popup-story').style.display = "block";
      document.querySelector('.popup-story img').src = images.getAttribute('src');
  }
} );
document.querySelector('.popup-story span').onclick = () =>{
  document.querySelector('.popup-story').style.display = "none";
}


// Add this code to handle the settings popup
const settingsButton = document.querySelector("#settings");
const settingsPopup = document.querySelector(".settings-popup");

// Function to toggle display of settings popup
const toggleSettingsPopup = () => {
  if (settingsPopup.style.display === "none") {
    settingsPopup.style.display = "block";
  } 
};

// Event listener for settings button click
settingsButton.addEventListener("click", toggleSettingsPopup);

// Event listener for applying background color
const applyColorButton = document.getElementById("applyColor");
const backgroundColorInput = document.getElementById("backgroundColor");

applyColorButton.addEventListener("click", () => {
  const color = backgroundColorInput.value.trim();
  if (color) {
    document.body.style.backgroundColor = color;
  } else {
    alert("Please enter a valid color value.");
  }
});

// Event listener for applying section color
const applySectionColorButton = document.getElementById("applySectionColor");
const sectionColorInput = document.getElementById("sectionColor");

applySectionColorButton.addEventListener("click", () => {
  const color = sectionColorInput.value.trim();
  if (color) {
    const elements = document.querySelectorAll(".settingcolor");
    elements.forEach(element => {
      element.style.backgroundColor = color;
    });
  } else {
    alert("Please enter a valid color value.");
  }
});

// Event listener for applying name change
const applyNameButton = document.getElementById("applyName");
const changeNameInput = document.getElementById("changeName");

applyNameButton.addEventListener("click", () => {
  const newName = changeNameInput.value.trim();
  if (newName) {
    const users = document.querySelectorAll(".usrs");
    users.forEach(user => {
      user.innerText = newName;
    });
  } else {
    alert("Please enter a valid name.");
  }
});


// Event listener for settings button click
settingsButton.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent click event from propagating to document
  toggleSettingsPopup();
});

// Event listener for close popup when clicking outside
document.addEventListener("click", function(event) {
  if (!event.target.closest('.settings-popup') && !event.target.classList.contains('settings')) {
    settingsPopup.style.display = "none";
  }
});

// Prevent the popup from closing when clicking inside
settingsPopup.addEventListener("click", function(event) {
  event.stopPropagation();
});


