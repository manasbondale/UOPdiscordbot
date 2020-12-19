import Leetcode from 'leetcode-api-ts';
import Problem from 'leetcode-api-ts';
import Submission from 'leetcode-api-ts';

(async (): Promise<void> => {

    // Login 
    const leetcode: Leetcode = await Leetcode.build(
        "your username",
        "yout password",
        EndPoint.US     // or EndPoint.CN
    );

    // Get a special problem
    const problem: Problem = new Problem("two-sum");

    // Fetch more properties of this problem
    await problem.detail();

    // Show problem content, test case, code snippet etc
    const content: string = problem.content;
    const testcase: string = problem.simpleTestCase;
    const codeSnippets: Array<any> = problem.codeSnippets;

    // submit your answer
    problem.submit("your code language", "your code here");

    // Get All problems' base infomation
    const problems: Array<Problem> = await leetcode.getAllProblems();

    // Filter problems by status, difficulty, etc
    const acceptedProblems: Array<Problem> = problems.filter((p: Problem) => {
        return p.status === ProblemStatus.Accept;
    });

    acceptedProblems.forEach(async (problem: Problem) => {

        // Get all submissions
        const submissions: Array<Submission> = await problem.getSubmissions();

        // Filter submission which lang = cpp
        const cppSubmissions: Array<Submission> = submissions.filter((s: Submission) => {
            return s.lang === "cpp";
        });

        submissions.forEach((submission: Submission) => {

            // Get submission's status
            const code: string = await submission.detail();

            // Then you can handle them casually
        });
    });
})();