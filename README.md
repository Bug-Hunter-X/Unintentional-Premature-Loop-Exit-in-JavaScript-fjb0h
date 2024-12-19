# Unintentional Premature Loop Exit
This repository demonstrates a subtle bug in JavaScript involving a loop that exits prematurely due to an `return` statement within a conditional.  This can be a difficult bug to spot because it doesn't throw an error; it simply produces unexpected results.

## Bug Description
The `bug.js` file contains a `while` loop intended to iterate 10 times. However, a conditional statement with a `return` statement causes the loop to terminate at iteration 5. This is likely an error in the logic and could lead to incorrect output or missing operations.

## Solution
The `bugSolution.js` file provides a corrected version of the code, ensuring the loop runs its full course.  This involves removing the unintended `return` statement from within the `if` block.

## How to Run
1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the original buggy behavior.
4. Run `node bugSolution.js` to see the corrected behavior.