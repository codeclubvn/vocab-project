# Ứng dụng Học từ vựng Tiếng Anh

Chào mừng đến với dự án ứng dụng Học từ vựng Tiếng Anh! Dự án này nhằm giúp người dùng học từ vựng tiếng Anh một cách hiệu quả và thú vị.

### Tính năng chính

- Cung cấp 10,000 từ tiếng Anh thông dụng, kèm theo nghĩa tiếng Việt, loại từ, câu ví dụ, hình ảnh minh họa, và cách phát âm.
- Cho phép người dùng tạo tài khoản cá nhân và tạo bộ sưu tập từ vựng riêng.
- Học từ vựng qua flash card và trò chơi.
- Tra từ vựng bằng cách bôi đen từ trình duyệt Chrome và thêm vào bộ sưu tập với một cú click.
- Lưu từ vựng vào các nền tảng học từ vựng khác như Quizlet và Anki.
- Nhắc nhở người dùng ôn lại từ vựng để cải thiện khả năng ghi nhớ.
- Gửi thông báo nhắc nhở học tập và câu đố từ vựng cho người dùng.
- Gom nhóm từ vựng theo chủ đề và lộ trình học.
- Thống kê tiến độ học tập của người dùng.
- Cho phép người dùng chia sẻ từ vựng và lấy từ vựng của người khác.
- Bảng xếp hạng người học tích cực hàng tuần và hàng tháng.
- Chia sẻ thông tin trên các mạng xã hội như Facebook và Zalo.

### Công nghệ sử dụng

- Framework: Next.js 13 + TypeScript
- Styles: Tailwind CSS + Shadn UI
- Server state: React Query
- Global state: Zustand
- Quản lí form: React Hook Form + Yup

(Vì source này mình build dựa trên boilerplate: https://github.com/ixartz/Next-js-Boilerplate, phần bên dưới là các takenotes của thằng này nhé)

### Features

Developer experience first:

- ⚡ [Next.js](https://nextjs.org) with App Router and Page Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 E2E Testing with Cypress
- 👷 Run tests on pull request with GitHub Actions
- 🎉 Storybook for UI development
- 🎁 Automatic changelog generation with Semantic Release
- 🔍 Visual testing with Percy (Optional)
- 💡 Absolute Imports using `@` prefix
- 🔒 Authentication with [Clerk](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate): Sign up, Sign in, Sign out, Forgot password, Reset password, and more.
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 🗺️ Sitemap.xml and robots.txt with next-sitemap
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Nothing is hidden from you, so you have the freedom to make the necessary adjustments to fit your needs and preferences.
- Easy to customize
- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js 16+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/ixartz/Next-js-Boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Set up authentication

Create a Clerk account at [Clerk.com](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate) and create a new application in Clerk Dashboard. Then, copy `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` into `.env.development.local` file:

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

Now, you can a fully working authentication system with Next.js: Sign up, Sign in, Sign out, Forgot password, Reset password, Update profile, Update password, Update email, Delete account, and more.

### Project structure

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── layouts                     # Layouts components
│   ├── app                         # Next JS Pages (app router)
│   ├── pages                       # Next JS Pages (page router)
│   ├── pages.test                  # Next JS Pages tests (this avoids tests to be treated as a Next.js pages)
│   ├── styles                      # Styles folder
│   ├── templates                   # Default template
│   └── utils                       # Utility functions
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/Main.tsx`: default theme
- `next-sitemap.config.js`: sitemap configuration

You have access to the whole code source if you need further customization. The provided code is only example for you to start your project. The sky is the limit 🚀.

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also remove unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```shell
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Next-js-Boilerplate)

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fixartz%2FNext-js-Boilerplate)

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug. Totally open to any suggestions and improvements.

### License

Licensed under the MIT License, Copyright © 2023

See [LICENSE](LICENSE) for more information.

## Sponsors

<table>
  <tr height="187px">
    <td align="center">
      <a href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://github.com/ixartz/Next-js-Boilerplate/assets/1328388/a3cd2a25-377b-4c0d-a3d3-bce121df2c94">
          <source media="(prefers-color-scheme: light)" srcset="https://github.com/ixartz/Next-js-Boilerplate/assets/1328388/3459074d-c3e2-46c5-8be4-b836cb7989ea">
          <img alt="Clerk – Authentication & User Management for Next.js" src="https://github.com/ixartz/Next-js-Boilerplate/assets/1328388/3459074d-c3e2-46c5-8be4-b836cb7989ea" width="260">
        </picture>
      </a>
    </td>
    <td>
      <a href="https://turso.tech/?utm_source=nextjsstarterbp">
        <img src="public/assets/images/turso.png?raw=true" alt="SQLite Developer Experience" width="260">
      </a>
    </td>
    <td>
      <a href="https://upstash.com/?utm_source=nextjs-boilerplate">
        <img src="https://raw.githubusercontent.com/upstash/sponsorship/master/redis.png" alt="Upstash" width="260">
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td>
      <a href="https://nextlessjs.com">
        <img src="https://creativedesignsguru.com/assets/images/themes/nextlessjs-github-banner.png" alt="React SaaS Boilerplate Next.js" />
      </a>
    </td>
  </tr>
</table>

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)
