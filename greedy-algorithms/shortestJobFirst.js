// Shortest Job First
// A software engineer is tasked with using the shortest job first (SJF) policy to calculate the average waiting time for each process. The shortest job first also known as shortest job next (SJN) scheduling policy selects the waiting process with the least execution time to run next.

// Shortest Job First (policy) --> scheduling policy that selects the waiting process with the smallest execution time to execute next.

// You are given an array of integers bt of size n representing the burst times (execution times) of n processes.

// Your task is to calculate the average waiting time for all processes when scheduled using the SJF policy. The waiting time of a process is the total time a process has to wait before its execution starts, which is the sum of burst times of all previously executed processes.

// Return the floor of the average waiting time, i.e., the largest whole number less than or equal to the actual average.


// Example 1
// Input : bt = [4, 1, 3, 7, 2]
// Output : 4
// Explanation : The total waiting time is 20.
// So the average waiting time will be 20/5 => 4.

// Example 2
// Input : bt = [1, 2, 3, 4]
// Output : 2
// Explanation : The total waiting time is 10.
// So the average waiting time will be 10/4 => 2.

const shortestJobFirst = (jobs) => {
    jobs.sort((a, b) => a - b);
    let waitTime = 0, timeTaken = 0;
    for(let i = 0; i < jobs.length; i++) {
        waitTime += timeTaken;
        timeTaken += jobs[i];
    }
    return Math.floor(waitTime / jobs.length);
}

console.log({ shortestJobFirst: shortestJobFirst([4, 1, 3, 7, 2]) }) // TC: O(n + nlogn) SC: O(1)
console.log({ shortestJobFirst: shortestJobFirst([1, 2, 3, 4]) })
