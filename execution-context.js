/*
Execution Context has two phases: Creation and Execution.
Creation
1. Create a global object (window in the browser, global in Node.js).
2. Create a this object and set it to the global object.
3. Setup a memory heap for storing variables and function references.
4. Store variables and function declarations in memory and assign them undefined.

During the execution phase, the JavaScript engine runs the code line by line.
It assigns values, references, and executes function calls.
*/
