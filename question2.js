// Question 2: Promises
// Promise versions of delayedSuccess and delayedException from callbacks.js

const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = { message: 'delayed success!' };
      resolve(success);
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error('delayed exception!');
      } catch (e) {
        reject({ error: e.message });
      }
    }, 500);
  });
};

// Call both promises separately and handle the resolve and reject results
resolvedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

rejectedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
