'use client';

import { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { codeChallenges } from '@/utils';
import { Nullable } from '@/interfaces';

export const FunCoderPage = () => {
  const [activeChallengeId, setActiveChallengeId] = useState<number>(1);
  const [userCode, setUserCode] = useState<string>(codeChallenges[0].defaultCode);
  const [resultMessage, setResultMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState<Nullable<boolean>>(null);

  const activeChallenge = codeChallenges.find((c) => c.id === activeChallengeId);

  const handleChallengeChange = (id: number) => {
    setActiveChallengeId(id);
    const newChallenge = codeChallenges.find((c) => c.id === id);

    if (newChallenge) {
      setUserCode(newChallenge.defaultCode);
      setResultMessage('');
      setIsCorrect(null);
    }
  };

  const handleRunCode = () => {
    setResultMessage('');
    setIsCorrect(null);
    let allTestsPassed = true;
    let failedCase = null;
    let userFunction;

    try {
      if (!activeChallenge) return;

      const codeToRun = `
        let result = {};
        ${userCode}
        result.func = typeof ${activeChallenge.functionName} !== 'undefined' ? ${activeChallenge.functionName} : null;
        return result;
      `;
      const fn = new Function(codeToRun);
      userFunction = fn().func;

      // Check if the function exists.
      if (!userFunction || typeof userFunction !== 'function') {
        throw new Error(`The function \`${activeChallenge.functionName}\` was not found or is not a function.`);
      }

      // Run all test cases.
      for (const testCase of activeChallenge.testCases) {
        const result = userFunction(...testCase.input);

        // Deep comparison for arrays and objects.
        const areEqual = JSON.stringify(result) === JSON.stringify(testCase.expected);

        if (!areEqual) {
          allTestsPassed = false;
          failedCase = testCase;
          setResultMessage(
            `Oops! Your function failed for input: [${testCase.input.map((i) => JSON.stringify(i)).join(', ')}]. Expected: ${JSON.stringify(testCase.expected)}, but got: ${JSON.stringify(result)}.`,
          );
          break; // Exit on first failure.
        }
      }

      if (allTestsPassed) {
        setResultMessage('✅ Congratulations! All test cases passed!');
        setIsCorrect(true);
      }
    } catch (err) {
      setResultMessage(`❌ Error: ${(err as Error)?.message ?? 'Failed to execute'}. Please check your code.`);
      setIsCorrect(false);
    }
  };

  if (!activeChallenge) {
    return (
      <div>
        <h1>Something went wrong, please refresh...</h1>
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      <div>
        <h1 className="text-2xl font-bold text-white mb-6">Code Challenges 🚀</h1>
      </div>
      <div>HERE the code</div>
    </div>
  );
};

// export const FunCoderPage = () => {
//   const [activeChallengeId, setActiveChallengeId] = useState<number>(1);
//   const [userCode, setUserCode] = useState<string>(codeChallenges[0].defaultCode);
//   const [resultMessage, setResultMessage] = useState('');
//   const [isCorrect, setIsCorrect] = useState<Nullable<boolean>>(null);

//   const activeChallenge = codeChallenges.find((c) => c.id === activeChallengeId);

//   const handleChallengeChange = (id: number) => {
//     setActiveChallengeId(id);
//     const newChallenge = codeChallenges.find((c) => c.id === id);

//     if (newChallenge) {
//       setUserCode(newChallenge.defaultCode);
//       setResultMessage('');
//       setIsCorrect(null);
//     }
//   };

//   const handleRunCode = () => {
//     setResultMessage('');
//     setIsCorrect(null);
//     let allTestsPassed = true;
//     let failedCase = null;
//     let userFunction;

//     try {
//       if (!activeChallenge) return;

//       const codeToRun = `
//         let result = {};
//         ${userCode}
//         result.func = typeof ${activeChallenge.functionName} !== 'undefined' ? ${activeChallenge.functionName} : null;
//         return result;
//       `;
//       const fn = new Function(codeToRun);
//       userFunction = fn().func;

//       // Check if the function exists.
//       if (!userFunction || typeof userFunction !== 'function') {
//         throw new Error(`The function \`${activeChallenge.functionName}\` was not found or is not a function.`);
//       }

//       // Run all test cases.
//       for (const testCase of activeChallenge.testCases) {
//         const result = userFunction(...testCase.input);

//         // Deep comparison for arrays and objects.
//         const areEqual = JSON.stringify(result) === JSON.stringify(testCase.expected);

//         if (!areEqual) {
//           allTestsPassed = false;
//           failedCase = testCase;
//           setResultMessage(
//             `Oops! Your function failed for input: [${testCase.input.map((i) => JSON.stringify(i)).join(', ')}]. Expected: ${JSON.stringify(testCase.expected)}, but got: ${JSON.stringify(result)}.`,
//           );
//           break; // Exit on first failure.
//         }
//       }

//       if (allTestsPassed) {
//         setResultMessage('✅ Congratulations! All test cases passed!');
//         setIsCorrect(true);
//       }
//     } catch (err) {
//       setResultMessage(`❌ Error: ${(err as Error)?.message ?? 'Failed to execute'}. Please check your code.`);
//       setIsCorrect(false);
//     }
//   };

//   if (!activeChallenge) {
//     return (
//       <div>
//         <h1>Something went wrong, please refresh...</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen text-gray-100 font-sans">
//       {/* Sidebar for Challenge Navigation */}
//       <div className="w-1/4 p-6 pt-20 bg-gray-800 border-r border-gray-700 overflow-y-auto">
//         <h1 className="text-2xl font-bold text-white mb-6">Code Challenges 🚀</h1>
//         <nav className="space-y-2">
//           {codeChallenges.map((challenge) => (
//             <button
//               key={challenge.id}
//               onClick={() => handleChallengeChange(challenge.id)}
//               className={`block w-full text-left p-3 rounded-lg transition-colors duration-200 ${
//                 activeChallengeId === challenge.id
//                   ? 'bg-blue-600 text-white'
//                   : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//               }`}>
//               <span className="font-semibold">
//                 {challenge.id}. {challenge.title}
//               </span>
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content Area */}
//       <div className="w-3/4 pt-20 flex flex-col p-8 space-y-6">
//         {/* Challenge Description */}
//         <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
//           <h2 className="text-2xl font-bold text-white mb-2">{activeChallenge?.title}</h2>
//           <p className="text-gray-400 leading-relaxed">{activeChallenge?.description}</p>
//         </div>

//         {/* Monaco Editor */}
//         <div className="flex-grow rounded-xl overflow-hidden shadow-lg border-2 border-blue-600">
//           <Editor
//             height="100%"
//             defaultLanguage="javascript"
//             theme="vs-dark"
//             value={userCode}
//             onChange={(value) => setUserCode(value)}
//             options={{
//               minimap: { enabled: false },
//               // Other options for a clean IDE look
//             }}
//           />
//         </div>

//         {/* Run Code Button and Result Area */}
//         <div className="flex flex-col space-y-4">
//           <button
//             onClick={handleRunCode}
//             className="w-full px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900">
//             Run Code
//           </button>

//           {resultMessage && (
//             <div
//               className={`p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
//                 isCorrect === true
//                   ? 'bg-green-700 text-green-100 border border-green-500'
//                   : isCorrect === false
//                     ? 'bg-red-700 text-red-100 border border-red-500'
//                     : 'bg-gray-700 text-gray-300 border border-gray-600'
//               }`}>
//               <p className="font-medium">{resultMessage}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
