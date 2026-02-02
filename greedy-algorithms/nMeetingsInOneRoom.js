// N meetings in one room
// Given one meeting room and N meetings represented by two arrays, start and end, where start[i] represents the start time of the ith meeting and end[i] represents the end time of the ith meeting, determine the maximum number of meetings that can be accommodated in the meeting room if only one meeting can be held at a time.

// Example 1
// Input : Start = [1, 3, 0, 5, 8, 5] , End = [2, 4, 6, 7, 9, 9]
// Output : 4
// Explanation : The meetings that can be accommodated in meeting room are (1,2) , (3,4) , (5,7) , (8,9).

// Example 2
// Input : Start = [10, 12, 20] , End = [20, 25, 30]
// Output : 1
// Explanation : Given the start and end time, only one meeting can be held in meeting room.

const nMeetingInOneRoom = (start, end) => {
    const meetings = [], n = start.length, m = end.length;
    for(let i = 0; i < start.length; i++) {
        meetings.push([ start[i], end[i], i ]);
    }
    meetings.sort((a, b) => a[1] - b[1] );

    let count = 1;
    let lastEndTime = meetings[0][1];

    for(let i = 1; i < meetings.length; i++) {
        if( lastEndTime < meetings[i][0] ) {
            count++;
            lastEndTime = meetings[i][1];
        }
    }
    return count
}


console.log({ nMeetingInOneRoom: nMeetingInOneRoom( [1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9] ) })
console.log({ nMeetingInOneRoom: nMeetingInOneRoom( [10, 12, 20], [20, 25, 30] ) })
