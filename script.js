const passwordOutput = document.getElementById('passwordOutput');
const copyButton = document.getElementById('copyButton');
const lengthSlider = document.getElementById('passwordLength');
const lengthDisplay = document.getElementById('lengthDisplay');
const useUppercase = document.getElementById('useUppercase');
const useLowercase = document.getElementById('useLowercase');
const useNumbers = document.getElementById('useNumbers');
const useSymbols = document.getElementById('useSymbols');
const generateButton = document.getElementById('generateButton');

lengthSlider.addEventListener('input', function () {
  lengthDisplay.textContent = lengthSlider.value;
});

function generatePassword() {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  let characters = '';
  let password = '';

  if (useUppercase.checked) characters += uppercaseLetters;
  if (useLowercase.checked) characters += lowercaseLetters;
  if (useNumbers.checked) characters += numbers;
  if (useSymbols.checked) characters += symbols;

  if (characters === '') {
    passwordOutput.value = 'Please select at least one option!';
    return;
  }

  for (let i = 0; i < lengthSlider.value; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordOutput.value = password;
}

copyButton.addEventListener('click', function () {
  if (passwordOutput.value === '') {
    alert('No password to copy!');
    return;
  }
  passwordOutput.select();
  document.execCommand('copy');
  alert('Password copied!');
});

generateButton.addEventListener('click', generatePassword);
