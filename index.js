import "styles.css";

const mainBmi = document.querySelector("#mainBmi");
mainBmi.style.backgroundColor = "var(--main-bg)";
mainBmi.innerHTML = "<h1>BMI Calculator</h1>";
mainBmi.classList.add("container");

const labelMenu = document.getElementsById("weightInput");

const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("result");
const calcbtn = document.getElementById("calcbtn");

function validateInputs() {
  const weight = weightInput.value.trim();
  const height = heightInput.value.trim();
  if (weight === "" || height === "") {
    resultDiv.textContent = "Both fileds must be filled!";
    return false;
  }
  if (isNaN(weight) || isNaN(height)) {
    resultDiv.textContent = "Must be a number only!";
    return false;
  }
  resultDiv.textContent = "";
  return true;
}

weightInput.addEventListener("input", validateInputs);
heightInput.addEventListener("input", validateInputs);

calcbtn.addEventListener("click", () => {
  if (!validateInputs()) return;

  const weight = parseFloat(weightInput.value);
  const heightCm = parseFloat(heightInput.value);

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    resultDiv.textContent = "Enter positive Value!";
    return;
  }

  const heightVal = heightCm / 100;
  const bmi = weight / (heightVal * heightVal);
  const bmiRounded = bmi.toFixed(1);

  let group = "";

  if (bmi < 16) {
    group = "Severe Thinness!";
  }
  if (bmi >= 17) {
    group = "Mild Thinness!";
  } else if (bmi < 18.5) {
    group = "Normal Weight!";
  } else if (bmi < 25) {
    group = "Overweight!";
  } else if (bmi < 30) {
    group = "obese Class 1!";
  } else if (bmi < 35) {
    group = "Obese Class 2";
  } else {
    group = "Obese Class 3";
  }
  resultDiv.textContent = `Your BMI is ${bmiRounded} (${group}).`;
});
