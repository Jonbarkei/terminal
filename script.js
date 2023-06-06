function executeCommand(command) {
  output.innerHTML += "> " + command + "\n";
  
  // Check for specific commands
  if (command.startsWith("weather")) {
    const location = command.split(" ")[1];
    if (location) {
      getWeather(location);
    } else {
      output.innerHTML += "Please provide a location.\n";
    }
  } else {
    output.innerHTML += "Command not recognized.\n";
  }
}

function getWeather(location) {
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0].description;
      const temp = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius
      output.innerHTML += `Weather in ${location}: ${weather}, Temperature: ${temp}°C\n`;
    })
    .catch(error => {
      output.innerHTML += `Error fetching weather data: ${error}\n`;
    });
}
