'use client';

import { useState } from 'react';
import { Nullable } from '@/interfaces';
import { Editor } from '@monaco-editor/react';
import { codeChallenges } from '@/utils';
import { ChevronRight, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { useTheme } from 'next-themes';

type Primitive = string | number | boolean;
type InputValue = Primitive | Array<Primitive>;

type TestResults = {
  input?: Array<InputValue>;
  expected?: Primitive | Array<Primitive> | Array<string | number>;
  actual?: Nullable<string>;
  passed: boolean;
  error: Nullable<string>;
};

export const FunCoderPage = () => {
  const { theme } = useTheme();
  const [activeChallengeId, setActiveChallengeId] = useState<number>(1);
  const [userCode, setUserCode] = useState<string>(codeChallenges[0].defaultCode);
  const [testResults, setTestResults] = useState<Array<TestResults>>([]);
  const [isAllTestsPassed, setIsAllTestsPassed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeChallenge = codeChallenges.find((c) => c.id === activeChallengeId);

  if (!activeChallenge) {
    return (
      <div className="flex items-center justify-center h-full bg-gsn-funcoder-main-bg text-gsn-funcoder-text-primary">
        <h1 className="text-3xl font-bold">All challenges completed! 🎉</h1>
      </div>
    );
  }

  const handleRunTests = () => {
    try {
      const userFunction = new Function(`return ${userCode}`)();
      const newResults: Array<TestResults> = [];
      let allPassed = true;

      activeChallenge.testCases.forEach((testCase) => {
        let passed = false;
        let actual = null;
        let error = null;
        const input = testCase.input;
        const expected = testCase.expected;

        try {
          actual = userFunction(...input);
          passed = JSON.stringify(actual) === JSON.stringify(expected);
        } catch (err) {
          error = (err as Error)?.message ?? 'Error running the tests';
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

      setTestResults(newResults);
      setIsAllTestsPassed(allPassed);

      if (allPassed) {
        setIsModalOpen(true);
      }
    } catch (err) {
      console.error(err);
      setIsAllTestsPassed(false);
      setTestResults([
        {
          error: `Error in function declaration: ${(err as Error)?.message ?? err}`,
          passed: false,
        },
      ]);
    }
  };

  const handleNextChallenge = () => {
    const nextChallenge = codeChallenges.find((c) => c.id === activeChallengeId + 1);
    if (nextChallenge) {
      setActiveChallengeId(nextChallenge.id);
      setUserCode(nextChallenge.defaultCode);
      setTestResults([]);
      setIsAllTestsPassed(false);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="flex h-full w-full bg-gsn-funcoder-main-bg text-gsn-funcoder-text-primary overflow-hidden">
      <div className="flex-1/3 flex flex-col px-6 py-8 bg-gsn-funcoder-panel-bg text-gsn-funcoder-text-primary border-r border-gsn-funcoder-panel-border w-[400px]">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gsn-funcoder-text-primary">Code Challenges 🧑‍💻</h1>
          <span className="text-sm text-gsn-funcoder-text-muted">
            {activeChallenge.id} / {codeChallenges.length}
          </span>
        </div>
        <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
          <h2 className="text-2xl font-semibold text-gsn-funcoder-text-primary mb-2">{activeChallenge?.title}</h2>
          <p className="text-justify font-light text-gsn-funcoder-text-muted">{activeChallenge.description}</p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 text-gsn-funcoder-text-primary">Test Cases</h3>
            <ul className="list-disc pl-5 text-sm text-gsn-funcoder-text-muted space-y-1">
              {activeChallenge.testCases.map((test, index) => (
                <li key={index}>
                  Input: <code>{JSON.stringify(test.input)}</code>, Expected:{' '}
                  <code>{JSON.stringify(test.expected)}</code>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <PanelGroup direction="vertical" className="flex-grow h-full">
        <Panel defaultSize={75} minSize={20}>
          <div className="h-full w-full overflow-hidden shadow-lg border-b-2 border-gsn-funcoder-panel-border">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
              value={userCode}
              onChange={(value) => setUserCode(value || '')}
              options={{ minimap: { enabled: false } }}
            />
          </div>
        </Panel>

        <PanelResizeHandle className="h-2 w-full flex items-center justify-center bg-gsn-funcoder-panel-bg hover:bg-gsn-funcoder-panel-border cursor-ns-resize">
          <div className="h-1 w-10 rounded-full bg-gsn-funcoder-resize-handle-bg hover:bg-gsn-funcoder-text-primary" />
        </PanelResizeHandle>

        <Panel>
          <div className="p-4 bg-gsn-funcoder-panel-bg border-t border-gsn-funcoder-panel-border h-full overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gsn-funcoder-text-primary">Output & Test Results</h3>
              <div className="flex gap-4">
                <Button
                  onClick={handleRunTests}
                  className="bg-gsn-funcoder-primary hover:bg-gsn-funcoder-primary-hover text-gsn-funcoder-primary-foreground font-bold">
                  Run Tests
                </Button>
                <Button
                  onClick={handleNextChallenge}
                  disabled={!isAllTestsPassed}
                  className={cn(
                    isAllTestsPassed
                      ? 'bg-gsn-funcoder-success hover:bg-gsn-funcoder-success-hover text-gsn-funcoder-primary-foreground'
                      : 'bg-gsn-funcoder-panel-border text-gsn-funcoder-text-muted cursor-not-allowed',
                  )}>
                  Next Challenge
                  <ChevronRight size={20} className="ml-2" />
                </Button>
              </div>
            </div>
            <div className="space-y-2 overflow-y-auto">
              {testResults.length > 0 &&
                testResults.map((result, index) => (
                  <div
                    key={index}
                    className={cn(
                      'p-3 rounded-md flex items-center gap-4',
                      result.passed ? 'bg-gsn-funcoder-status-success' : 'bg-gsn-funcoder-status-danger',
                    )}>
                    {result.passed ? (
                      <Check size={20} className="text-gsn-funcoder-success" />
                    ) : (
                      <X size={20} className="text-gsn-funcoder-danger" />
                    )}
                    <div className="flex flex-col text-sm">
                      <p className="text-gsn-funcoder-text-primary">
                        <strong>Test Case {index + 1}:</strong>
                      </p>
                      <p className="text-gsn-funcoder-text-muted">
                        Input: <code>{JSON.stringify(result.input)}</code>
                      </p>
                      <p className="text-gsn-funcoder-text-muted">
                        Expected: <code>{JSON.stringify(result.expected)}</code>
                      </p>
                      <p className="text-gsn-funcoder-text-muted">
                        Actual: <code>{JSON.stringify(result.actual)}</code>
                      </p>
                      {!result.passed && result.error && (
                        <p className="text-gsn-funcoder-danger-hover mt-1">Error: {result.error}</p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Panel>
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
