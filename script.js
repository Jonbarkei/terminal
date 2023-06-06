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

  function executeCommand(command) {
    // Your logic for executing commands goes here
    // For this example, let's just echo the entered command
    output.innerHTML += "> " + command + "\n";
  }
});
