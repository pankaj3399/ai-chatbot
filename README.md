<a href="https://chat.vercel.ai/">
  <img alt="Next.js 14 and App Router-ready AI chatbot." src="app/(chat)/opengraph-image.png">
  <h1 align="center">Valor AI Chatbot</h1>
</a>


<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a>
</p>
<br/>

## Features

- [Next.js](https://nextjs.org) App Router
  - Advanced routing for seamless navigation and performance
  - React Server Components (RSCs) and Server Actions for server-side rendering and increased performance
- [AI SDK](https://sdk.vercel.ai/docs)
  - Unified API for generating text, structured objects, and tool calls with LLMs
  - Hooks for building dynamic chat and generative user interfaces
  - Supports OpenAI (default), Anthropic, Cohere, and other model providers
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - Component primitives from [Radix UI](https://radix-ui.com) for accessibility and flexibility
- Data Persistence
  - [Vercel Postgres powered by Neon](https://vercel.com/storage/postgres) for saving chat history and user data
  - [Vercel Blob](https://vercel.com/storage/blob) for efficient file storage



## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js AI Chatbot. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

### Environment Variables Setup

Below are the required environment variables and their setup instructions:

- **OPENAI_API_KEY**: Get your OpenAI API Key here: [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys).

- **GROQ_API_KEY**: Obtain your GROQ API Key from your respective platform.

- **AUTH_SECRET**: Generate a random secret using [this tool](https://generate-secret.vercel.app/32) or run `openssl rand -base64 32` in your terminal.

- **BLOB_READ_WRITE_TOKEN**: Instructions to create a Vercel Blob Store can be found [here](https://vercel.com/docs/storage/vercel-blob).

- **POSTGRES_URL**: Set up your database following the [Vercel Postgres Quickstart guide](https://vercel.com/docs/storage/vercel-postgres/quickstart).

- **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY** and **CLERK_SECRET_KEY**: Retrieve these keys from your Clerk dashboard.

- **SIGNING_SECRET**: Obtain the signing secret for secure token signing.

- **NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL** and **NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL**: Set these URLs to redirect users after sign-in or sign-up, e.g., `/home`.

> **Important**: Ensure that these variables are added to your `.env` file and not exposed publicly. Do not commit the `.env` file to version control.

### Steps to Run Locally

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).
