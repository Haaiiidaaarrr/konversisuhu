const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const reamurInput = document.getElementById("reamur");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);
    switch (e.target.name) {
      case "celcius":
        fahrenheitInput.value = value * 1.8 + 32;
        kelvinInput.value = value + 273;
        reamurInput.value = value * 0.8;
        break;
      case "fahrenheit":
        celciusInput.value = (value - 32) / 1.8;
        kelvinInput.value = (value - 32) / 1.8 + 273;
        reamurInput.value = ((value - 32) / 1.8) * 0.8;
        break;
      case "kelvin":
        celciusInput.value = value - 273;
        fahrenheitInput.value = (value - 273) * 1.8 + 32;
        reamurInput.value = (value - 273) * 0.8;
        break;
      case "reamur":
        celciusInput.value = value * 1.25;
        fahrenheitInput.value = value * 2.25 + 32;
        kelvinInput.value = value * 1.25 + 273;
        break;
    }
  });
}
