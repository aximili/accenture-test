# Accenture Interview Test

This is Hardi's very simple React project that shows a one-page product listing, put together in a rush, only for a demo purpose.

## Demo

See the end result that I have deployed at http://accenture-test.litul.net/

![Screenshot](http://accenture-test.litul.net/screenshot.jpg#1)

## A React solution

This project was initialised with [Create React App](https://github.com/facebook/create-react-app).

I used TypeScript and I chose Material UI as the UI framework.

Jest was used for testing as it is the default for React. I only added `react-test-renderer` to test DOM output as well.

### Running the project

Here is how you build and run the project:

1. Download and install [Node.js](https://nodejs.org/en/)
2. Download the source code into a folder
3. Open terminal (eg. `cmd`) on that folder
4. Run `npm install`
5. Run `npm start`

### Building the project

Run `npm run build` to create a production build. It will create a `build` folder that you can deploy onto your web hosting.

## Project structure

The entry point is `src/index.tsx` which renders `App`.

`App` would probably have the header/footer of the website, and a router to display certain pages depending on the route/URL. In this case it only has `ProductsPage`.

The solution is structured as below.

### Public files - `public`

Files in this folder would simply be copied to the web server when deploying.

When product images are supplied, it would be put in the `images` folder. I included 2 sample images and a fallback "No image found" image for demo purpose.

### App API clients - `src/api`

Although a JSON file was provided, in real life the product data would most likely come from an API.
This folder would contain those API clients.

### UI components - `src/components`

This is the main folder. It has our UI/React components.

- `common`: Common/reusable UI components
- `pages`: A page as the user sees it, although this would be an SPA
- `scenes`: The widgets that will make up a page

Associated CSS and test files have the same filename as the component.

I also added `index.ts` files on some folders to make imports cleaner.

### TypeScript models - `src/models`

We define our types here.

### Utilities/Functions - `src/utils`

We would have shared functions here.


## Possible improvements?

This is only a demo project quickly done in a hurry. The wireframe doesn't even seem like a complete page (no header/footer).

There may be a lot of things that you expect to see in a real project, such as:

- React router: A complete website would have many pages. React router helps with more complex navigational requirements in the project.
- Storybook: Helps in creating/designing/testing UI components in isolation. It could also be useful for visual regression testing.
- Redux: Helps managing global application state. We might need to store the list of products/categories, some store settings, or logged-in user details/configuration in a global state.
- Form component (eg. Formik)

You may not need all of them, it will depend on the project. Or on the UX side:

- Filter could be a lot more complex
- Thumbnail might contain multiple product images
- Printer friendly styles

This readme file itself could also be improved. And the list goes on...
