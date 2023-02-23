// Get the dropdown menu element
const dropdownMenu = document.getElementById("dropdown-menu");

// Define an array of options
const options = [
  { value: "", text: "Select an option" },
  { value: "option1", text: "Option 1" },
  { value: "option2", text: "Option 2" },
  { value: "option3", text: "Option 3" }
];

// Loop through the options array and create option elements
options.forEach(option => {
  const optionElement = document.createElement("option");
  optionElement.value = option.value;
  optionElement.text = option.text;
  dropdownMenu.appendChild(optionElement);
});

// Define an event listener for the dropdown menu
dropdownMenu.addEventListener("change", event => {
  const selectedValue = event.target.value;
  if (selectedValue === "option1") {
    // Do something for option 1
  } else if (selectedValue === "option2") {
    // Do something for option 2
  } else if (selectedValue === "option3") {
    // Do something for option 3
  }
});

