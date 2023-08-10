// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import "./components"
// NOTE: the above line imports the code in the entry file index.jsx,
// making it available to esbuild for bundling
// with the /components dir imported into the Rails app's JS entry point, 
// I can now create a React component for my homepage
