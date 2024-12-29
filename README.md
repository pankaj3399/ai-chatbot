Here's a README file for your AI chatbot application:

**AI Chatbot Application**

This project implements an AI-powered chatbot application.

**Prerequisites**

* Node.js and npm (or yarn) installed on your system.
* An OpenAI API key.
* A Groq API key.
* A Postgres database.
* A Clerk account (for user authentication).

**Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/pankaj3399/ai-chatbot
   ```

2. Install dependencies:

   ```bash
   cd ai-chatbot
   pnpm install
   ```

**Environment Variables**

Create a `.env.local` file in the project root and add the following environment variables:

* `OPENAI_API_KEY` (Your OpenAI API key)
* `GROQ_API_KEY` (Your Groq API key)
* `AUTH_SECRET` (A random secret string)
* `POSTGRES_URL` (Your Postgres database URL)
* `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (Get from your Clerk dashboard)
* `CLERK_SECRET_KEY` (Get from your Clerk dashboard)
* `SIGNING_SECRET` (Get from your Clerk webhooks dashboard)

**Obtain `BLOB_READ_WRITE_TOKEN`**

1. **Deployment:** Deploy your application to Vercel.
2. **Storage:** In your Vercel project dashboard, navigate to the "Storage" tab.
   ![398884831-f3c3c819-2e01-411d-b30f-c7a732ff255f](https://github.com/user-attachments/assets/4891e0d4-7586-412e-88ef-7841e5835a8d)
 
3. **Create Blob Storage:** Create a new Blob Storage.
   ![398884831-f3c3c819-2e01-411d-b30f-c7a732ff255f (1)](https://github.com/user-attachments/assets/a8c9cd12-415c-4209-bb62-5a83dc81e31a)

4. **Connect:** Click "Connect". This will automatically add the `BLOB_READ_WRITE_TOKEN` environment variable to your project.
   ![398884831-f3c3c819-2e01-411d-b30f-c7a732ff255f (2)](https://github.com/user-attachments/assets/802eff7b-9f0b-4459-aee1-03878f2aa3ff)

5. **Redeploy:** Redeploy your application.
   a. Go to "Deployments"
   b. Click on Three dots.
   c. Hit Redeploy.
   ![398884831-f3c3c819-2e01-411d-b30f-c7a732ff255f (3)](https://github.com/user-attachments/assets/34bf7374-8c02-4820-abe9-99ce7c331d3f)



**Webhook Setup**

1. **Enable Webhooks:** In your Clerk dashboard, go to "Configure" and enable webhooks.
2. **Add Redirect URL:** Add the URL of your deployed application as the redirect/callback URL. It should look like https://your-app-url/api/webhooks
3. **Set Trigger Event:** Set the webhook trigger event to "user.created".
4. **Add `SIGNING_SECRET`:** Add the `SIGNING_SECRET` to your environment variables.
![397998061-583d3b13-8adc-4041-a8f7-05fbaf6983ab](https://github.com/user-attachments/assets/61fdfdbf-72c8-4a65-9390-babc91639cba)

**Development**

Start the development server:

```bash
pnpm dev
```

**Production**

Build the application for production:

```bash
pnpm build
```
