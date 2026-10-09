# COMP3123 Lab Test 1

**Student:** Travis Eweka
**Student ID:** 101583426
**Course:** COMP3123 - Full Stack Development I

## Files

| File | Question |
|------|----------|
| `question1.js` | Question 1: ES6 Features - `lowerCaseWords` returns a promise that filters out non-strings and lower-cases the remaining words |
| `callbacks.js` | Given starter file for Question 2 |
| `question2.js` | Question 2: Promises - `resolvedPromise` and `rejectedPromise` (500 ms timeouts) |
| `add.js` | Question 3: File Module - creates the `Logs` directory and 10 log files |
| `remove.js` | Question 3: File Module - deletes the log files and removes the `Logs` directory |

## How to run

Requires Node.js. Run every command from this folder.

```bash
node question1.js   # [ 'pizza', 'wings' ]
node question2.js   # { message: 'delayed success!' }  { error: 'delayed exception!' }
node add.js         # log0.txt ... log9.txt
node remove.js      # delete files...log0.txt ... delete files...log9.txt
```
