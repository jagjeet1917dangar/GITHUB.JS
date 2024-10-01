// 42. Given two lists of events. Each event is represented by a start time and an end time. You need to determine if the two events conflict, which means if the events overlap in time.
// Input Format:
// Each event is represented by a list [start, end], where start is the start time (inclusive) and end is the end time (exclusive).
// The events are represented as two arrays: event1 and event2.
// Output:
// Return true if there is a conflict between the two events; otherwise, return false.
// Example 1: Input: event1 = [1, 5], event2 = [5, 10] Output: false,  Exampe 2:  Input: event1 = [1, 5], event2 = [2, 3] Output: true.


// ANSWER...


function eventsConflict(event1, event2) {

    if (event1[0] < event2[1] && event2[0] < event1[1]) {
        return true;
    } else {
        return false; 
}
}

console.log(eventsConflict([1, 5], [4, 8]));
console.log(eventsConflict([1, 5], [5, 8]));