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
    switch(command.toLowerCase()){
      case '/hi':
        writeOutput("Hi back to you");
        break;
      case '/dad':
        writeOutput("dad is awesome dude!");
        break;
        case '/list':
        writeOutput("list of commands, /list, /name, /version, /whoami, /links  More to come!");
        break;
        case '/links':
        writeOutput("https://barkei.lol/   https://jon.barkei.lol/   https://music.barkei.lol/   https://blog.barkei.lol/");
        break;
         case '/name':
        writeOutput("Hi, I am Bogo Command. I am here to help you master.");
        break;
          case '/clear':
         location.reload()
        break;
      default:
        break;
    }
    
  }
  
  function writeOutput(line) {
    output.innerHTML += line + "\n"; 
  }
  
writeOutput ("Welcome to the Jon zone. The best place on earth. (use different commands to run. (Use /list)\n");

writeOutput ("::::::'##:");
writeOutput (":::::: ##:");
writeOutput (":::::: ##:");
writeOutput (":::::: ##:");
writeOutput ("'##::: ##:");
writeOutput (" ##::: ##:");
writeOutput (". ######::");
writeOutput (":......:::\n");

});
