'use client';

import { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { codeChallenges } from '@/utils';

export const FunCoderPage = () => {
  const [activeChallengeId, setActiveChallengeId] = useState<number>(1);
  const [userCode, setUserCode] = useState<string>(codeChallenges[0].defaultCode);

  const activeChallenge = codeChallenges.find((c) => c.id === activeChallengeId);

  if (!activeChallenge) {
    return (
      <div>
        <h1>Something went wrong, please refresh...</h1>
      </div>
    );
  }

  return (
    <div className="flex h-full">
      <div className="flex-1/4 flex flex-col px-3 py-6 bg-gray-800 border-r border-gray-700">
        <h1 className="text-3xl text-center font-bold text-white mb-2">👻 New Challenge</h1>
        <h2 className="text-xl text-center font-bold text-white mb-4">{activeChallenge?.title}</h2>
        <p className="text-lg font-bold mb-1">Description:</p>
        <div className="flex-grow overflow-y-auto mb-2">
          <p className="text-justify font-light">{activeChallenge.description}</p>
        </div>
      </div>
      <div className="flex-3/4 flex flex-col">
        <div className="flex-grow overflow-hidden shadow-lg">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={userCode}
            // onChange={(value) => setUserCode(value)}
            options={{
              minimap: { enabled: false },
              // Other options for a clean IDE look
            }}
          />
        </div>
      </div>
    </div>
  );
};
