# Dubsado Front End Evaluation

<img width="1679" alt="Screenshot 2023-07-07 at 8 46 34 AM" src="https://github.com/Dubsado/frontend-evaluation/assets/66326100/36c30765-2fe6-42d5-ab08-f88788719be1">

Let's build a stripped down instagram clone! 

## Getting Started

To start, fork this repo and pull down to your local development environment. Install all dependencies:
```
$ yarn
```

Once everything is installed, make sure everything is working by running: 
```
$ yarn start
```
This will start the development server. You can view the application in the browser at [http://localhost:3000](http://localhost:3000). You should see a white page that says "Hello Dubsado!" at the top.

## Building The App

We have provided a starting point that is an empty react typescript app with a mock `posts` api. You can fetch posts using the `fetch` api, making a `GET` request to `/api/posts`. We are using the `msw` library to mock the api and `@faker-js` to provide all the data you'll need for an endless to build out your feed. If you're interested you can poke around the `/src/mocks` folder to see how the api is setup. The data being returned is typed as `IPost[]` and the `IPost` interface can be imported and used from the `src/types.ts` file.

This repo provides everything you'll need to accomplish building out your instagram feed. For making requests please use the `fetch` api. We are keeping things simple on the css side. If you'd like you can just add all the css in the `App.css` file. If you want to orginize it differently or use the css modules pattern that's fine too.

## Expectations

This evaluation is to get a general idea of your coding abilities and styles using React. Don't worry about getting everything looking perfect. This should take you about 45 - 60 minutes. Infinite scroll is probably out of scope for the application, but if you find yourself finished way ahead of the suggested time period and want to give it a go I'd love to see where you get!

Don't worry about creating posts, dispalying stories or any other parts of the instagram app. You can use the screenshot above as a reasonable end point.

## Submission

When you've finished, send a link to your forked repo back to your contact at dubsado. 

## Code Of Conduct

This is an open book evaluation. We don't expect you to have everything memorized, use the internet! Please, be honest with your submissions. If you feel like your're doing someting questionable you probably are, so don't :)

