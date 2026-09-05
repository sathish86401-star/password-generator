const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseInput = document.getElementById("uppercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const message = document.getElementById("message");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}";

lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
});

generateButton.addEventListener("click", generatePassword);

copyButton.addEventListener("click", () => {
  if (passwordInput.value === "") {
    message.textContent = "Generate a password first.";
    return;
  }

  navigator.clipboard.writeText(passwordInput.value);
  message.textContent = "Password copied!";
});

function generatePassword() {
  let characters = lowercaseLetters;

  if (uppercaseInput.checked) characters += uppercaseLetters;
  if (numbersInput.checked) characters += numbers;
  if (symbolsInput.checked) characters += symbols;

  let password = "";

  for (let i = 0; i < lengthInput.value; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordInput.value = password;
  message.textContent = "New password generated!";
}

generatePassword();