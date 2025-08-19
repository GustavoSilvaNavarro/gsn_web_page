'use client';

import { Panel } from 'react-resizable-panels';
import { Button } from '@/components/ui/button';
import { ChevronRight, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { TestResults } from '@/interfaces';

type Props = {
  testResults: Array<TestResults>;
  isAllTestsPassed: boolean;
  handleNextChallenge: () => void;
  handleRunTests: () => void;
};

export const BottomResultsPanel = ({ testResults, isAllTestsPassed, handleRunTests, handleNextChallenge }: Props) => {
  return (
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
  );
};
