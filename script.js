// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('votingForm');
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value, 10);

    // Validation for empty inputs
    if (!name || isNaN(age)) {
      alert('Please enter valid details.');
      return;
    }

    // Create a promise
    const votingPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age > 18) {
          resolve(name);
        } else {
          reject(name);
        }
      }, 4000); // 4-second delay
    });

    // Handle promise resolution or rejection
    votingPromise
      .then((resolvedName) => {
        alert(`Welcome, ${resolvedName}. You can vote.`);
      })
      .catch((rejectedName) => {
        alert(`Oh sorry ${rejectedName}. You aren't old enough.`);
      });
  });
});
