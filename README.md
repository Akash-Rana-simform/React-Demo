# React Basics Demo

A small React app for teaching Module 04 to beginners. It has four topics: hooks, effects, routing and folder structure. Each topic has one page with live examples. The code for each example is in its own short file.

## Run it

You need Node.js (version 18 or newer).

```
npm install
npm run dev
```

Open the address that the terminal prints. It is usually http://localhost:5173

## Which page matches which slide

| Slide | Page in the app | Files to open |
|---|---|---|
| 4 · Hooks example | /hooks | src/components/Counter.jsx, TextBox.jsx |
| 6 · Effects example | /effects | src/components/RunOnChange.jsx, ClockDemo.jsx, LoadingFact.jsx |
| 8 · Routing example | /routing, /user/ana, /oops | src/App.jsx, src/pages/UserPage.jsx, NotFound.jsx |
| 10 · Structure example | /structure | the src folder itself |

## Things to try in class

- **Hooks:** Press Add 1. Then open Counter.jsx and change `setCount(count + 1)` to `count = count + 1`. The screen stops updating. Ask why.
- **Effects:** On the Effects page, press "Hide the clock" and read the log. Then delete the `return () => { ... }` part in ClockDemo.jsx and try again. The timer is never stopped.
- **Loading:** Tick "Make it fail" and press the button to see the error screen.
- **Routing:** Click Ana and Ben. Then type `/user/maria` in the address bar. Then type any wrong address.
- **Query part:** On the Routing page, press the fruit buttons and watch `?fruit=` in the address bar.

## Folders

```
src/
  main.jsx        starts the app
  App.jsx         the menu and the routes
  pages/          whole screens
  components/     small pieces used by pages
  hooks/          our own hook: useLog
  styles.css      the look
```

This is the "start simple" layout from the slides. When the app grows, group the files by feature instead.
