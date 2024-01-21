# Video Player with React and Redux

This project is an application that uses React and Redux to manage a video player.

### Preview
<table>
  <tr>
    <td align="center">Mobile</td>
    <td align="center">Desktop</td>
  </tr>
  <tr>
    <td><img src="./previews/mobile-version.png" width="300" /></td>
    <td><img src="./previews/desktop-version.png" /></td>
  </tr>
</table>

## Project Structure

```text
src/
├── api
├── clients
│   ├── axios
│   ├── graphql-requests
├── configuration
├── features                # Logic and UI of a especific feature
│   └── videoPlayer         # Video player feature
│       └── components      # Specific components of the feature

├── hooks                   # Global React custom hooks
├── modules                 # Business logic and state management
│   └── youtube             # Logic of how we use Youtube resources in this project
├── pages
├── services
├── shared
│   └── components
├── store
├── styles
├── tests
├── theme
```


## Installation

```
npm install
```

## Development

To run the development workflow:

```
npm run dev
```


## Deployment

Make sure you are on the main branch, and that it is updated with the latest base code. This command uses the gh-pages package:

```
npm run deploy
```

## Credits

This project was created following the base code of an example from the Rocketseat platform.
