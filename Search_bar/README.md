## Installation

1. Clone the repository to your local machine.
   https://github.com/Akshay3991/revoltronx_searchbar

2. Open the project in your preferred code editor.

### INstructions on how to setup and run the search function->
installation in parent directory--
**Install Vite:** If you haven't installed Vite yet, you can do so by running the following command in your project directory:
>>   npm install vite --save-dev

**Check Global Installation:** If you want to use Vite globally, you can install it globally with:
>>    npm install -g vite

**Verify Installation:** After installation, verify that Vite is installed correctly by running:
>>    vite --version
1.  To run the search function
    > > Open new Terminal
    > > change directory to the Search_bar by running following command in the terminal
    > > cd Search_bar

> Run the following command in the terminal opened in Search_bar
> npm run dev


2.  To run the server for the Google scholar api response
    > > Open new terminal
    > > change directory to the server by running following command in the terminal
    > > cd server

> Run the following command in the terminal opened in server folder
> node server.js

> > Server running at http://127.0.0.1:3000/

3. Run the project in a web browser to see it in action on the localhost

> > ➜ Local: http://localhost:5173/
> > ➜ Network: use --host to expose
> > ➜ press h + enter to show help

# Search Bar Project

This project aims to create a simple search bar that allows users to search for specific items within a dataset. The search bar is designed to be user-friendly and efficient, providing instant results as the user types.

## Features

- Instant search results as the user types
- Supports multiple datasets for searching
- User-friendly interface for easy navigation

## Technologies Used

- HTML for structuring the user interface
- Tailwind CSS for styling and layout
- JavaScript Libraries for dynamic functionality and data manipulation

###Project Documentation: **Implementing Advanced Filtering and Ranking in a Scholarly Article Search Application**

**Approach:**
In this project, we aimed to enhance a search application by implementing advanced filtering and ranking functionalities based on relevance, views (citations), and other criteria. The core idea was to utilize the Google Scholar API to retrieve search results and then apply custom logic to filter and rank the results according to specified criteria.

**Technologies Used:**
**Backend Framework:**  Node.js, Express.js to build the server for search function.
**APIs:**
**Youtube Data API:** For fetching YouTube video information.
**Google Custom Search API:** For searching articles and blogs.
**Google Scholar API:** Used to fetch Academic papers search results.
**Programming Language:** Implemented custom filtering and ranking logic using javascript.
**JSON Parsing:** Parsed the API responses to extract relevant data.
**Web Interface:** Created a simple web interface using ReactJs to interact with the application.

**Challenges Faced:**

**Limited API Features:** The Google Scholar API does not offer direct filtering by views or likes, requiring us to devise creative solutions.
**Data Parsing Complexity:** Extracting and interpreting citation data from the API response for ranking purposes can be challenging due to varying data structures.
**Ranking Algorithm Design:** Designing an effective ranking algorithm that considers multiple factors like relevance, viewcount,likes and potentially other criteria.
**Integration Complexity:** Integrating the custom filtering and ranking logic seamlessly into the existing application architecture without compromising performance or user experience.

**Handling Ranking and Integration of Content Sources:**

**Ranking Algorithm:** Implemented a custom ranking algorithm that assigns weights to different criteria (e.g., relevance, views ,likes) and calculates a composite score to rank search results accordingly.
**Integration of Content Sources:** Ensured seamless integration by structuring the application to fetch, filter search results from the Google Scholar API and potentially other sources, integrating them cohesively for a unified user experience.
**Visual Representation:** Developed visualizations to display the ranked search results, providing users with an intuitive understanding of how articles are ranked based on the specified criteria.
**User Interface Enhancements:** Integrated the advanced filtering and ranking features into the user interface, allowing users to interact with and customize the search results based on their preferences.
