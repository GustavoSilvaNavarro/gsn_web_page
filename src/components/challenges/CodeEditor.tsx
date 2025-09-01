'use client';

import { setupMonacoWorkers } from '@/utils/monacoSetup';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect } from 'react';
import { Panel } from 'react-resizable-panels';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

type Props = {
  theme?: string;
  userCode: string;
  setUserCode: Dispatch<SetStateAction<string>>;
};

export const CodeEditor = ({ userCode, setUserCode }: Props) => {
  const { theme } = useTheme();

  useEffect(() => {
    // Call the exported function here
    setupMonacoWorkers();
  }, []);

  return (
    <Panel defaultSize={75} minSize={20}>
      <div className="h-full w-full overflow-hidden shadow-lg border-b-2 border-gsn-funcoder-panel-border">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
          value={userCode}
          onChange={(value) => setUserCode(value || '')}
          options={{
            minimap: { enabled: false },
            fontSize: 15,
            fontLigatures: true,
            folding: true,
            scrollbar: {
              useShadows: false, // Removes the scrollbar shadows for a cleaner look
              vertical: 'auto',
              horizontal: 'auto',
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
              arrowSize: 0,
            },
            lineNumbers: 'on',
            renderValidationDecorations: 'on',
            readOnly: false,
          }}
        />
      </div>
    </Panel>
  );
};
