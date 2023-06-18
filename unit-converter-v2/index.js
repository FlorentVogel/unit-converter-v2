/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const convertInput = document.getElementById("convert-input")
const convertBtn = document.getElementById("convert-btn")

function unitConverter() {
    const meter = (convertInput.value * 0.3048).toFixed(3)
    const feet = (convertInput.value * 3.281).toFixed(3)
    const gallon = (convertInput.value * 0.264).toFixed(3)
    const liter = (convertInput.value * 3.78541).toFixed(3)
    const pound = (convertInput.value * 2.204).toFixed(3)
    const kilo = (convertInput.value * 0.453592).toFixed(3)

    length.textContent = `${convertInput.value} meters = ${feet} feet | ${convertInput.value} feet = ${meter} meters`
    volume.textContent = `${convertInput.value} liters = ${gallon} gallons | ${convertInput.value} gallons = ${liter} liters`
    mass.textContent = `${convertInput.value} kilos = ${pound} pounds | ${convertInput.value} pounds = ${kilo} kilos`
}

convertBtn.addEventListener("click", () => {
    unitConverter()
})