const emptyWeightInput = document.getElementById("emptyWeight");
const frontSeatWeightInput = document.getElementById("frontSeatWeight");
const fuelWeightInput = document.getElementById("fuelWeight");
const cargoWeightInput = document.getElementById("cargoWeight");
const grossWeightDisplay = document.getElementById("grossWeight");
const title = document.getElementById("title");
const correctEmptyWeight = 973.40;
const correctFrontSeatWeight = 130;
const correctFuelWeight = 55;
const correctCargoWeight = 680.79;

function calculateGrossWeight() {
  const emptyWeight = Number(emptyWeightInput.value) || 0;
  const frontSeatWeight = Number(frontSeatWeightInput.value) || 0;
  const fuelWeight = Number(fuelWeightInput.value) || 0;
  const cargoWeight = Number(cargoWeightInput.value) || 0;

  const grossWeight =
    ((emptyWeight +
    frontSeatWeight +
    fuelWeight +
    cargoWeight) / 1.45) * 2.1;

  if(emptyWeight === correctEmptyWeight)
  {
    emptyWeightInput.classList.add("correct");
  } else {
    emptyWeightInput.classList.remove("correct");
  }

  if (frontSeatWeight === correctFrontSeatWeight) 
  {
    frontSeatWeightInput.classList.add("correct");
  } else {
    frontSeatWeightInput.classList.remove("correct");
  }

if (fuelWeight === correctFuelWeight) 
{
    fuelWeightInput.classList.add("correct");
} else {
    fuelWeightInput.classList.remove("correct");
}

if (cargoWeight === correctCargoWeight) 
{
    cargoWeightInput.classList.add("correct");
} else {
    cargoWeightInput.classList.remove("correct");
}

  if(grossWeight.toFixed(2) === "2663.65") {
    grossWeightDisplay.classList.add("final-answer");
    title.classList.add("final-answer");
    emptyWeightInput.disabled = true;
    frontSeatWeightInput.disabled = true;
    fuelWeightInput.disabled = true;
    cargoWeightInput.disabled = true;
  }

  grossWeightDisplay.textContent = Math.round(grossWeight).toLocaleString();
}

emptyWeightInput.addEventListener("input", calculateGrossWeight);
frontSeatWeightInput.addEventListener("input", calculateGrossWeight);
fuelWeightInput.addEventListener("input", calculateGrossWeight);
cargoWeightInput.addEventListener("input", calculateGrossWeight);