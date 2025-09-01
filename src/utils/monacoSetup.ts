export const setupMonacoWorkers = () => {
  // Check if self is defined to ensure this code only runs in a browser/worker environment.
  if (typeof self !== 'undefined') {
    self.MonacoEnvironment = {
      getWorker(_, label: string) {
        if (label === 'json') {
          return new Worker(new URL('monaco-editor/esm/vs/language/json/json.worker', import.meta.url), {
            type: 'module',
          });
        }
        if (['css', 'scss', 'less'].includes(label)) {
          return new Worker(new URL('monaco-editor/esm/vs/language/css/css.worker', import.meta.url), {
            type: 'module',
          });
        }
        if (['html', 'handlebars', 'razor'].includes(label)) {
          return new Worker(new URL('monaco-editor/esm/vs/language/html/html.worker', import.meta.url), {
            type: 'module',
          });
        }
        if (label === 'typescript' || label === 'javascript') {
          return new Worker(new URL('monaco-editor/esm/vs/language/typescript/ts.worker', import.meta.url), {
            type: 'module',
          });
        }
        return new Worker(new URL('monaco-editor/esm/vs/editor/editor.worker', import.meta.url), { type: 'module' });
      },
    };
  }
};
