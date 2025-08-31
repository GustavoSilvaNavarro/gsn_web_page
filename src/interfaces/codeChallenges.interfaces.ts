import type { Nullable } from './common';

type Primitive = string | number | boolean;

type TestCaseInput = Array<number | string | Array<number> | Array<string>>;
type TestCaseExpected = Primitive | Array<number | string>;

type TestCase = {
  input: TestCaseInput;
  expected: TestCaseExpected;
};

export type CodeChallenge = {
  id: number;
  title: string;
  description: string;
  functionName: string;
  defaultCode: string;
  starterCode: string;
  testCases: Array<TestCase>;
};

type InputValue = Primitive | Array<Primitive>;

export type TestResults = {
  input?: Array<InputValue>;
  expected?: Primitive | Array<Primitive>;
  actual?: Nullable<string>;
  passed: boolean;
  error: Nullable<string>;
};
