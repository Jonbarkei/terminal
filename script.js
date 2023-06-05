

document.addEventListener("DOMContentLoaded", function() {
  const output = document.getElementById("output");
  const commandInput = document.getElementById("command");

  commandInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      const command = commandInput.value;
      commandInput.value = "";
      executeCommand(command);
    }
  });
 output.innerHTML += "HEllO, I AM JON'S HELPER.\n";
  function executeCommand(command) {
    // Your logic for executing commands goes here
    // For this example, let's just echo the entered command
    output.innerHTML += "> " + command + "\n";
    function executeCommand(command) {
  output.innerHTML += "> " + command + "\n";
  
  // Check for specific commands
  if (command.startsWith("hi")) {
      output.innerHTML += "HELLO.\n";
    }
  } else {
    output.innerHTML += "Command not recognized.\n";
  }
}

  }
});

