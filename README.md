# Personal Bookshelf

Personal Bookshelf is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Demo

Check out the live demo of the project [here](https://20481a5450.github.io/personal-bookshelf/#/).

## Features

- **Book Search**: Users can search for books by name and view search results in real-time.
- **Add to Bookshelf**: Users can add books from the search results to their personal bookshelf.
- **Persistent Storage**: The personal bookshelf is stored in localStorage, ensuring data persistence across sessions.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## Tech Stack

- **React**: Frontend library for building the user interface.
- **Open Library API**: Source of book data.
- **localStorage**: Web Storage API for storing the personal bookshelf.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (>= 12.x)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/personal-bookshelf.git
   cd personal-bookshelf
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### Running the Application

1. **Start the development server**:
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```

   The application will open in your default web browser at `http://localhost:3000`.

### Building for Production

To create a production build of the application, run:
```sh
npm run build
```
or
```sh
yarn build
```

### Deploying

The application can be deployed on any static site hosting platform. For example,This is hosted on GitHub Pages. Follow these steps to deploy on GitHub Pages:

1. **Install `gh-pages`**:
   ```sh
   npm install gh-pages --save-dev
   ```
   or
   ```sh
   yarn add gh-pages --dev
   ```

2. **Update `package.json`**:
   Add the following properties:
   ```json
   "homepage": "https://yourusername.github.io/personal-bookshelf",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy the application**:
   ```sh
   npm run deploy
   ```
   or
   ```sh
   yarn deploy
   ```

## Project Structure

- `src/components`: Contains React components.
  - `BookSearch.js`: Component for the book search page.
  - `PersonalBookshelf.js`: Component for the personal bookshelf page.
- `src/App.js`: Main application component with routing.
- `src/index.js`: Entry point of the React application.

## API Usage

The application uses the Open Library API to fetch book search results. The API endpoint used is:
```
https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1
```
- `q`: Name of the book.
- `limit`: Set to 10 results per page.
- `page`: Only display results from page 1.

## Screenshots

Include screenshots of the application here to give users a preview.

--