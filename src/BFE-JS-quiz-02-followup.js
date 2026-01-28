// This is a JavaScript Quiz
// 2. Promise executor with race from BFE.dev

// How to "Race" a promise against a timeout?
const fetchWithTimeout = (promise, ms) => {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout!")), ms);
  });
  return Promise.race([promise, timeout]);
};

// TRY IT:
const slowTask = new Promise((res) => setTimeout(() => res("Done"), 5000));

fetchWithTimeout(slowTask, 1000).then(console.log).catch(console.error); // Will log "Error: Timeout!" after 1s

// Answer
// Error: Timeout!
// at Timeout._onTimeout (D:\KananTechnicalProjects\FundamentalsPractice\BFECodeSnippet\BFE-JS-quiz-02-followup.js:7:29)
// at listOnTimeout (node:internal/timers:588:17)
// at process.processTimers (node:internal/timers:523:7)

// Explanation:
/**
 * This example demonstrates how to "race" a promise against a timeout using Promise.race.
 * The function fetchWithTimeout takes a promise and a timeout duration in milliseconds.
 * It creates a timeout promise that rejects after the specified duration.
 * Promise.race is then used to race  the original promise against the timeout promise.
 * If the original promise resolves before the timeout, its result is returned.
 * If the timeout occurs first, the timeout promise rejects with an error.
 */
