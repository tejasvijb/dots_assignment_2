
# Dots Assignment 2

## Features

- 🔍 **Unified Search**: Search across files, people, chats, and lists with a single input.
- 🗂️ **Tabbed Results**: Results are organized into tabs (All, Files, People, Chats, Lists) for easy navigation.
- ⚡ **Debounced Search**: Fast, debounced search with instant feedback and loading skeletons.
- 🧩 **Dynamic Tabs**: Show/hide result categories using a settings popover.
- 🎨 **Modern UI**: Responsive, accessible, and visually appealing interface using Tailwind CSS.
- 🟢 **Active Status**: See real-time status for people results.
- 📁 **File Metadata**: View file parent directory and last updated time.
- 💬 **Chat Preview**: See latest message and time for chat results.
- 📋 **List Info**: View list details and last updated time.
- 🧪 **Sample Data**: Uses mock/sample data for demonstration.

## Technologies & Libraries Used

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [@tanstack/react-query](https://tanstack.com/query/latest) (data fetching & caching)
- [Zustand](https://zustand-demo.pmnd.rs/) (state management)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Lucide React](https://lucide.dev/) (icons)
- [date-fns](https://date-fns.org/) (date formatting)
- [Axios](https://axios-http.com/) (API requests)

## Screenshot

### Search UI Example

![Screenshot of the app](public/Screenshot%202025-09-19%20170645.png)

## Demo Video

[Watch Loom Video Walkthrough](https://www.loom.com/share/02b807c6f7b644b4bec1b367f772a93e)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
