function alliance() {
    console.log("Before return");
    return "For the Alliance";
    console.log("After return"); // This will never be executed
    alliance(); // This will never be executed
  }
  