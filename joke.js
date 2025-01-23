document.getElementById('getJokeBtn').addEventListener('click', getJoke);

// Function to fetch a random joke from the API
async function getJoke() {
  const jokeElement = document.getElementById('joke');
  jokeElement.innerHTML = 'Loading...'; // Display loading message while fetching

  try {
    // Fetch a joke from the Official Joke API
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    
    if (!response.ok) {
      throw new Error('Failed to fetch joke');
    }
    
    const jokeData = await response.json();

    // Display the joke (setup + punchline)
    jokeElement.innerHTML = `${jokeData.setup} <br><strong>${jokeData.punchline}</strong>`;
  } catch (error) {
    // In case of an error, display a fallback message
    jokeElement.innerHTML = 'Oops! Something went wrong. Please try again.';
  }
}
