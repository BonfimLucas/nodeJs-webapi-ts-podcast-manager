# Podcast Manager

## Project Description

**Podcast Manager** is an app similar to Netflix, allowing users to centralize and organize different podcasts separated by categories, making it easier to navigate and access the preferred episodes. This project focuses on video podcasts.

## Domain

Video podcasts.

## Features

- **List podcast episodes in category sections**: The app organizes episodes into categories like health, fitness, mindset, humor, and more.
- **Filter episodes by podcast name**: Users can search for specific podcasts and quickly find the episode they want.

### How It Will Be Implemented

The REST API will return podcast and episode data in JSON format, with the following structure:

```json
[
    {
        "podcastName": "Flow",
        "episodeName": "CBUM - FLOW #319",
        "videoId": "sdajsdjd",
        "thumbnail": "linkaleatorio.com",
        "episodeLink": "linkaleatorio.com",
        "category": ["health", "bodybuilder"]
    },
    {
        "podcastName": "Flow",
        "episodeName": "Random - FLOW #219",
        "videoId": "dlfhjljks",
        "thumbnail": "linkaleatorio.com",
        "episodeLink": "linkaleatorio.com",
        "category": ["running", "sports"]
    }
]
```

### API Endpoints

1. **List podcast episodes**:  
   Route: `GET /list`  
   Returns a list of episodes organized by category.

2. **Filter episodes by podcast name**:  
   Route: `GET /episode`  
   Allows filtering specific episodes from a podcast by its name.

## How It Works

The app processes HTTP requests and provides responses based on the following controllers and routes:

- `getListEpisodes(request, response)`: Responsible for returning the list of episodes.
- `getFilterEpisodes(request, response)`: Handles filtering episodes based on search parameters like the podcast name.

### Code Structure

The code that handles HTTP request routing can be seen below:

```typescript
import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes(request, response);
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(request, response);
    }
}
```

## Running the Project

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies with:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start:dev 
   ```

5. The app will be available at `http://localhost:4444`.

## Technologies Used

This project uses the following technologies:

- **[Node.js](https://nodejs.org/)**: A JavaScript runtime for building scalable network applications.
- **[TypeScript](https://www.typescriptlang.org/)**: A superset of JavaScript that adds static types.
- **[TSX](https://github.com/esbuild/tsx)**: A TypeScript execution environment that compiles and runs TypeScript code.
- **[Tsup](https://github.com/egoist/tsup)**: A zero-config TypeScript bundler.
- **[HTTP module (Node.js)](https://nodejs.org/api/http.html)**: For handling HTTP requests and responses.

### Development Dependencies

- **[@types/node](https://www.npmjs.com/package/@types/node)**: TypeScript type definitions for Node.js.
- **[tsup](https://github.com/egoist/tsup)**: A fast and efficient bundler for TypeScript projects.
- **[tsx](https://github.com/esbuild/tsx)**: A tool for running TypeScript code directly.
- **[typescript](https://www.typescriptlang.org/)**: TypeScript compiler and language support.

### Project Dependencies

- **projeto-app-podcast**: The main project dependency (local).

## Contributing

Contributions are welcome! If you want to contribute to the development of **Podcast Manager**, follow these steps:

1. Fork this repository.
2. Create a branch for your changes.
3. Submit a pull request with a description of the changes made.

