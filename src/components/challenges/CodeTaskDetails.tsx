import type { CodeChallenge } from '@/interfaces';

type Props = {
  activeChallenge: CodeChallenge;
  totalChallenges: number;
};

export const CodeTaskDetails = ({ activeChallenge, totalChallenges }: Props) => {
  return (
    <div className="flex-1/3 flex flex-col px-6 py-8 bg-gsn-funcoder-panel-bg text-gsn-funcoder-text-primary border-b md:border-r border-gsn-funcoder-panel-border w-full md:w-[400px] shadow-md rounded-lg">
      <div className="flex flex-col mb-4">
        <div className="flex justify-end mb-2">
          <span className="text-sm text-gsn-funcoder-text-muted">
            {activeChallenge.id} / {totalChallenges}
          </span>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl text-center font-bold text-gsn-funcoder-primary dark:text-white">
            Code Challenges 🧑‍💻
          </h1>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
        <h2 className="text-2xl font-semibold text-gsn-funcoder-primary mb-2">{activeChallenge?.title}</h2>
        <p className="text-justify font-light text-gsn-funcoder-text-muted">{activeChallenge.description}</p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-gsn-funcoder-primary">Test Cases</h3>
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
