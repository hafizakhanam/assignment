function calculateBMI() {
    var weight = document.getElementById("weightInput").value;
    var height = document.getElementById("heightInput").value;
  
    if (weight === "" || height === "") {
      alert("Please enter your weight and height.");
      return;
    }
  
    var bmi = weight / (height * height);
  
    var result = document.getElementById("result");
    result.innerHTML = "Your BMI is : <span>" + bmi.toFixed(1) + "</span>";
}