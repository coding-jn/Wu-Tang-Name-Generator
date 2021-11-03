# Wu-Tang Name Generator 🔀

Answer 5 questions to generate a Wu-Tang name curated for you.

**Live Demo:** <a href="https://wu-tang-name-jenna-nguyen.netlify.app/">Demo</a><i> for display purposes only, still needs API key for functionality</i>

<p float="left">
  <img width="47%" alt="Wu-Tang Quiz" src="https://user-images.githubusercontent.com/88993361/139957953-00122a22-a0e7-45e5-ae6d-f3b191e6dcc3.png">
  <img width="47%' alt="Wu-Tang Name" src="https://user-images.githubusercontent.com/88993361/139958007-43de294f-421b-4822-97f5-0d1b30d1653a.png">
</p>
  
## How It's Made
Using an API that I had created (which stores the questions, multiple choice answers, and the matching names for each answer), the client first sends a request to the server to fetch the question and display it in the DOM. Each multiple choice answer has either a first or last name stored along with it, so once a user chooses an answer the matching name is stored in an array (example: if they choose to "Go Out" the name "Dash" is stored in an array). In the end, once all 5 questions are completed the computer uses the Math.random() function to randomly choose a first name (based on questions 1-2) and a last name (based on questions 3-5) among the names that were stored in the array.

## What I Learned
The application goal itself was already very broad but since this was the first time creating my own API, I initially had a lot of confusion about how I would approach this problem. But, nonetheless, I had lot of fun experimenting with how I would store information within the API and how I would write my logic. One of the key takeaways for me was learning how to incorporate radio inputs like how to structure them, require them, and especially how to constantly change their values depending on the question. This simple but large change definitely brought my whole application together and overall I'm very proud of the outcome.
