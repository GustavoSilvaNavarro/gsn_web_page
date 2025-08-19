import type { CodeChallenge } from '@/interfaces';

type Props = {
  activeChallenge: CodeChallenge;
  totalChallenges: number;
};

export const CodeTaskDetails = ({ activeChallenge, totalChallenges }: Props) => {
  return (
    <div className="flex-1/3 flex flex-col px-6 py-8 bg-gsn-funcoder-panel-bg text-gsn-funcoder-text-primary border-r border-gsn-funcoder-panel-border w-[400px]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gsn-funcoder-text-primary">Code Challenges 🧑‍💻</h1>
        <span className="text-sm text-gsn-funcoder-text-muted">
          {activeChallenge.id} / {totalChallenges}
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
                Input: <code>{JSON.stringify(test.input)}</code>, Expected: <code>{JSON.stringify(test.expected)}</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
