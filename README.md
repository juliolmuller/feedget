<h1 title="Move.It" align="center">
  <img src="https://user-images.githubusercontent.com/44725817/212798957-efac4cb1-c290-451b-bf8e-1c633b44f4b5.png" width="24px" alt="Logo icon for Feedget" />
  FEEDGET - The Widget to Get Feedback
</h1>

<p align="center">
  <a href="#trophy-lessons-learned">Lessons Learned</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies--resources">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-setting-up-the-environment">Environment Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-features-implementations">Features</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?labelColor=000000&color=8257e6&label=created%20at&message=may%202022" alt="Creation Date" />

  <img src="https://img.shields.io/github/last-commit/juliolmuller/feedget?label=updated%20at&labelColor=000000&color=8257e6" alt="Update Date" />

  <img src="https://img.shields.io/static/v1?labelColor=000000&color=8257e6&label=PRs&message=welcome" alt="Pull Requests Welcome" />

  <img src="https://img.shields.io/github/license/juliolmuller/feedget?labelColor=000000&color=8257e6" alt="Project License" />
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/44725817/212799323-b9c7c6d4-c60a-436f-8d64-ebeea38ca821.gif" alt="Application Overview" width="400">
</p>

Application developed during eighth edition of [Next Level Week](https://nextlevelweek.com/), delivered by [RocketSeat](https://rocketseat.com.br/). The objective here was to build a full JS stack widget to collect bug reports and feedbacks, so it can be embedded in any web or mobile application. Although the _React Native_ version was skipped, I was able to build (and have fun) the version for browsers and the backend for it. Amazing technologies learned!

[Check out the application running!](https://jlm-feedget.vercel.app/)

## :trophy: Lessons Learned

- Building a **React** application using **Tailwind CSS**;
- Taking screenshots directly from the browser;
- Creating accessible and keyboard-controllable interfaces (little hel from **Headless UI**);
- Adding and setting **Prisma** as ORM tool in a **Node** environment;
- Dealing with emails in development environment (with **MailTrap**);
- Organizing backend project following **SOLID** principles;
- Setting **unit testing** on the server-side;
- Deploying the applications at **Vercel** and **Railway**

## :rocket: Technologies & Resources

**Frontend:**
- [Bun](https://bun.sh/) as package manager and development runtime
- [Vite.js](https://vitejs.dev/)
- [React.js](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Headless UI](https://headlessui.dev/)
- [HTML-to-Canvas converter](https://yorickshan.github.io/html2canvas-pro/)

**Backend:**
- [Bun](https://bun.sh/) as package manager, test runner and runtime
- [Express.js](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Insomnia](https://insomnia.rest/)
- [MailTrap service](https://mailtrap.io/)
- SOLID principles
- SQLIte database

**Development:**
- [Visual Studio Code](https://code.visualstudio.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/)

## :hammer: Setting up the Environment

To set up the projects in your environment, make sure to have **Bun 1.3+** installed in your machine and the `bun` shortcuts available through the command line.

Besides, you will need to create a `.env` file in both folders `/server` and `/web`. These file hold some configuration and secrets to make the application runnable. You can use the `.env.example` file as template to know which variables should be configured.

With all these set, run the following commands to install dependencies and configure your database:

```bash
# Backend project
$ cd server/
$ bun install       # install project dependencies
$ bun run prepare   # update Prisma's interfaces with DB schema
$ bun run migrate   # ensure your DB schemas is up-to-date
$ bun run dev       # start the server in development mode

# Frontend project
$ cd web/
$ bun install       # install project dependencies
$ bun run dev       # start the server in development mode
```

## :zap: Features Implementations

The main idea of the project was developed during the NLW (Next Level Week) event and the result is the one available in [release v1](https://github.com/juliolmuller/feedget/releases/tag/v1.0.0). Afterwards, any incoming commits are intended to be incremental updates to improve the application, as proposed at the end of the event.

Besides, base project layout & design is available at **[Figma](https://www.figma.com/file/AsyJFfGRy4RbYPfBVYvE5q/Feedback-Widget)**.

- Frontend web:
  - [x] Create project using **Vite** and **TypeScrip**;
  - [x] And and configure **Tailwind CSS**;
  - [x] Create button to open dialog;
  - [x] Use **Headless UI** to create dialog (accessibility-ready);
  - [x] Create components based on **Figma** layout;
  - [x] Implement workflow functionalities;
  - [x] Refine accessibility and navigation via keyboard;
  - [ ] Implement light theme for the project;
  - [ ] Convert project to a **node package** and publish it in `npm`;
  - [ ] Create panel to display submitted feedbacks;
- Frontend mobile:
  - [ ] Create **React Native** project using **Expo**;
  - [ ] Implement navigation and swipe animations to open and close widget;
  - [ ] Create components based on **Figma** layout;
  - [ ] Implement workflow functionalities;
- Server:
  - [x] Create node project with **Express** and **TypeScript**;
  - [x] Add and configure **Prisma** as application ORM;
  - [x] Configure mail library to notify new incoming feedbacks/records;
  - [x] Implement business logic and services in a single file;
  - [x] Refactor project following SOLID principles;
  - [x] Add and configure **Jest**;
  - [x] Create unit tests for application core and ensure coverage of 100%;
  - [ ] Replace **MailTrap** by a custom SMTP provider;
  - [ ] Enhance look of email sent by the application;
  - [ ] Create an endpoint to recover all created feedbacks;
- Integration and deploy:
  - [x] Integrate front and backend via HTTP requests;
  - [x] Prepare environments for deploy (`.env` file and `package.json` scripts);
  - [x] Configure **Vercel** to deploy frontend project;
  - [x] Configure **Railway** to deploy database and backend project;
  - [x] Create reference docs for GitHub repository;

---

Also checkout the project developed in [NLW #2](https://github.com/juliolmuller/proffy), [NLW #3](https://github.com/juliolmuller/happy), [NLW #4](https://github.com/juliolmuller/move.it), [NLW #5](https://github.com/juliolmuller/podcastr) and [NLW #6](https://github.com/juliolmuller/letmeask).
