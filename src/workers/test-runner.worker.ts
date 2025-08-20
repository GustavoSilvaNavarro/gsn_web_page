// This file runs in a separate thread, isolated from the main application.
// It has no access to the main window, document, or other sensitive APIs.

interface WorkerData {
  userCode: string;
  testCases: Array<{ input: unknown[]; expected: unknown }>;
}

interface WorkerResult {
  newResults: Array<unknown>;
  allPassed: boolean;
}

self.onmessage = function (event: MessageEvent<WorkerData>) {
  const { userCode, testCases } = event.data;

  const newResults: Array<unknown> = [];
  let allPassed = true;

  try {
    // A robust way to get the parameters and body.
    const paramStartIndex = userCode.indexOf('(');
    const paramEndIndex = userCode.indexOf(')');
    const bodyStartIndex = userCode.indexOf('{');
    const bodyEndIndex = userCode.lastIndexOf('}');

    if (paramStartIndex === -1 || paramEndIndex === -1 || bodyStartIndex === -1 || bodyEndIndex === -1) {
      throw new Error('Could not parse the function. Please ensure it is a valid function declaration.');
    }

    const paramsString = userCode.substring(paramStartIndex + 1, paramEndIndex);
    const functionBody = userCode.substring(bodyStartIndex + 1, bodyEndIndex);

    // This creates an array of parameter names like ['a', 'b'].
    const userParameters = paramsString
      .split(',')
      .map((p) => p.trim())
      .filter(Boolean);

    // Dynamically create the function. It now takes the user's exact parameters.
    const userFunction = new Function(...userParameters, functionBody) as (...args: unknown[]) => unknown;

    testCases.forEach((testCase) => {
      let passed = false;
      let actual: unknown = null;
      let error: string | null = null;
      const input = testCase.input;
      const expected = testCase.expected;

      try {
        // The spread operator correctly passes the input array to the function.
        actual = userFunction(...input);
        passed = JSON.stringify(actual) === JSON.stringify(expected);
      } catch (err) {
        error = (err as Error)?.message || 'Error running the test';
        passed = false;
      }

      if (!passed) {
        allPassed = false;
      }

      newResults.push({
        input: input,
        expected: expected,
        actual: actual,
        passed: passed,
        error: error,
      });
    });
  } catch (err) {
    allPassed = false;
    newResults.push({
      error: `Syntax or declaration error: ${(err as Error)?.message || err}`,
      passed: false,
    });
  }

  self.postMessage({ newResults, allPassed } as WorkerResult);
};
