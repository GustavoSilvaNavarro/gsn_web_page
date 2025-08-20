'use client';

import { useState, useEffect } from 'react';
import type { TestResults } from '@/interfaces';
import { codeChallenges } from '@/utils';
import { ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { CodeTaskDetails } from './CodeTaskDetails';
import { CodeEditor } from './CodeEditor';
import { BottomResultsPanel } from './BottomResultsPanel';

let testWorker: Worker | null = null;

export const FunCoderPage = () => {
  const [activeChallengeId, setActiveChallengeId] = useState<number>(1);
  const [userCode, setUserCode] = useState<string>(codeChallenges[0].starterCode);
  const [testResults, setTestResults] = useState<Array<TestResults>>([]);
  const [isAllTestsPassed, setIsAllTestsPassed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTesting, setIsTesting] = useState(false);

  const activeChallenge = codeChallenges.find((c) => c.id === activeChallengeId);

  useEffect(() => {
    // Create the worker instance only once when the component mounts
    if (!testWorker) {
      testWorker = new Worker(new URL('@/workers/test-runner.worker.ts', import.meta.url));
    }

    // Clean up the worker when the component unmounts to prevent memory leaks
    return () => {
      if (testWorker) {
        testWorker.terminate();
        testWorker = null;
      }
    };
  }, []);

  const handleRunTests = () => {
    if (!testWorker || !activeChallenge) return;

    setIsTesting(true);
    setTestResults([]);

    // Set up the listener for messages from the worker
    testWorker.onmessage = (event) => {
      const { newResults, allPassed } = event.data;
      setTestResults(newResults);
      setIsAllTestsPassed(allPassed);
      setIsTesting(false);

      if (allPassed) {
        setIsModalOpen(true);
      }
    };

    // Post the necessary data to the worker to start the tests
    testWorker.postMessage({
      userCode: userCode,
      testCases: activeChallenge.testCases,
    });
  };

  const handleNextChallenge = () => {
    const nextChallenge = codeChallenges.find((c) => c.id === activeChallengeId + 1);
    if (nextChallenge) {
      setActiveChallengeId(nextChallenge.id);
      setUserCode(nextChallenge.starterCode);
      setTestResults([]);
      setIsAllTestsPassed(false);
      setIsModalOpen(false);
    }
  };

  if (!activeChallenge) {
    return (
      <div className="flex items-center justify-center h-full bg-gsn-funcoder-main-bg text-gsn-funcoder-text-primary">
        <h1 className="text-3xl font-bold">All challenges completed! 🎉</h1>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full bg-gsn-funcoder-main-bg text-gsn-funcoder-text-primary overflow-hidden">
      <CodeTaskDetails activeChallenge={activeChallenge} totalChallenges={codeChallenges.length} />

      <PanelGroup direction="vertical" className="flex-grow h-full">
        <CodeEditor userCode={userCode} setUserCode={setUserCode} />

        <PanelResizeHandle className="h-2 w-full flex items-center justify-center bg-gsn-funcoder-panel-bg hover:bg-gsn-funcoder-panel-border cursor-ns-resize">
          <div className="h-1 w-10 rounded-full bg-gsn-funcoder-resize-handle-bg hover:bg-gsn-funcoder-text-primary" />
        </PanelResizeHandle>

        <BottomResultsPanel
          testResults={testResults}
          isAllTestsPassed={isAllTestsPassed}
          handleRunTests={handleRunTests}
          isTesting={isTesting}
          handleNextChallenge={handleNextChallenge}
        />
      </PanelGroup>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gsn-funcoder-panel-bg text-gsn-funcoder-text-primary">
          <DialogHeader className="text-center">
            <DialogTitle className="text-3xl font-bold text-gsn-funcoder-success">Congratulations! 🎉</DialogTitle>
            <DialogDescription className="text-lg text-gsn-funcoder-text-muted">
              You&apos;ve successfully completed the &quot;{activeChallenge?.title}&quot; challenge.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button
              onClick={handleNextChallenge}
              className="bg-gsn-funcoder-success hover:bg-gsn-funcoder-success-hover text-gsn-funcoder-primary-foreground font-bold">
              Go to Next Challenge
              <ChevronRight size={20} className="ml-2" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
