function backtrack(solveCondition, exploreChoices, processSolution) {
    // Function arguments:
    //  solveCondition: Function that checks if a solution is valid.
    //  exploreChoices: Function that generates available choices at each step.
    //  processSolution: Function to process a valid solution (optional).
  
    function recurse(currentSolution) {
      // Base case: Check if current solution is valid
      if (solveCondition(currentSolution)) {
        if (processSolution) processSolution(currentSolution);
        return; // Found a solution, terminate
      }
  
      // Explore available choices for the next step
      for (const choice of exploreChoices(currentSolution)) {
        // Add the choice to the current solution
        currentSolution.push(choice);
  
        // Recursively explore possibilities with the new solution
        recurse(currentSolution);
  
        // Backtrack: Remove the choice if it didn't lead to a solution
        currentSolution.pop();
      }
    }
  
    // Start the recursion with an empty solution
    recurse([]);
  }
  