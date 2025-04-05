
# CineConnect 🎬

CineConnect is a React-based movie search application built with multiple third-party NPM packages and APIs to provide an interactive movie discovery experience. Users can search for movies, view detailed information about each movie, and explore related features like vote breakdown charts, news, and reviews.



## Features

- **Movie Search**: Users can search for movies using keywords, with results displayed in an easy-to-read card format.
- **Detailed Movie Information**: Includes runtime, release date, vote average, and a breakdown of votes using the `VotePieChart` component.
- **Custom Duration Formatter**: Converts movie runtime (in minutes) into a readable format (e.g., "2 hours 30 minutes").
- **Smooth Scrolling**: Smooth scrolling between sections of the page is powered by `react-lenis`.
- **Notification System**: Displays notifications using `react-toastify` when movies are found or if no results are returned.
- **Loading Spinner**: Uses `react-loader-spinner` to display a spinner while fetching data.
- **Responsive UI**: The layout is designed to work seamlessly across different devices.
- **Error Handling**: Displays relevant messages in case of errors using try-catch blocks.

## Tech Stack

- **Frontend**: React, Vite, JavaScript (ES6)
- **APIs**: TMDB API, News API
- **State Management**: React's useState, useEffect
- **UI/UX**: React Icons, React Lazy Load, Shadcn UI
- **Other Libraries**: Axios, UUID, Lodash, Date-fns, React Toastify, React Loader Spinner

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/cineconnect.git
   cd cineconnect
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**: Create a `.env` file in the root directory and add your TMDB API key:
   ```
   VITE_MOVIE_API_KEY=your_api_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.



## Usage

1. **Search for Movies**: Type a movie name in the search bar, and the app will display matching results.
2. **View Movie Details**: Click on any movie card to see more information, including runtime and vote breakdown.
3. **Notifications**: Notifications will pop up at the top of the page based on actions like successful movie searches or errors.


-



## APIs Used

### TMDB API
TMDB (The Movie Database) API is used to fetch movie details, including titles, posters, runtime, and other metadata.
- **Endpoints**:
  - `/search/movie`: Used to search for movies by title.
  - `/movie/{movie_id}`: Used to fetch detailed information about a specific movie.

### News API
News API is used to fetch related movie news and articles.


### Github API
It is used at the footer of the app to display the developer github profile.

### Fake JSON API
Fake JSON API or Dummy JSON is a fake dummy data API that allows developers to create their own fake data.





## NPM Packages

### react-toastify
Used to display toast notifications for various app events such as successful movie searches, errors, or info messages.

### react-loader-spinner
Displays a loading spinner when the app is fetching movie data.

### axios
Used for making HTTP requests to the TMDB API.

### uuid
Generates unique keys for each movie card in the list, helping React to efficiently manage updates to the DOM.



### react-lenis
Enables smooth scrolling within the app, making navigation between sections more fluid.



### react-lazyload
A performance optimization tool that delays the loading of images until they are needed (i.e., when they are about to be visible on the screen).

### date-fns
Used for formatting movie release dates into a user-friendly format like "MMM d, yyyy".

### react-icons
Provides icons used throughout the app for things like search, rating, and movie details.


## movie-duration-formatter(A custom Package)
In this project, a custom package named movie-duration-formatter was developed and integrated into the app. This package is used to format movie durations (in minutes) into a more human-readable format, such as "1 hour 30 minutes" or "2 hours 15 minutes."

## Dotenv
In this project, dotenv is utilized to load environment variables from a .env file into the application, ensuring that sensitive information like API keys remains secure.

## Chart.js

In this project, the Chart.js library is integrated to display a pie chart visualizing the vote distribution of the movies returned by the search.



## Contribution

Feel free to fork this repository and contribute! If you have any suggestions or improvements, open an issue or a pull request.


