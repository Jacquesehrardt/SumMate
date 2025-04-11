# 🧠 SumMate – Summarize your PDFs with the power of AI

**SumMate** is a full-stack AI-powered SaaS platform that transforms long PDF documents into clear, concise, and visually engaging summaries. Built for productivity and ease of use, it helps users quickly extract key insights from complex files.

[![Project Preview](https://summate.vercel.app)

## ⚙️ Core Technologies

- 🧱 **Next.js 15** – App Router with Server Components and SSR
- ⚛️ **React** – For building dynamic and interactive UI
- 🔐 **Clerk** – Secure authentication with Passkeys, GitHub, and Google
- 🤖 **OpenAI GPT-4** – For intelligent and context-aware summarization
- 📚 **LangChain** – For document parsing, chunking, and PDF handling
- 🧩 **Shadcn UI** – Accessible and customizable UI components
- 🗄️ **NeonDB (PostgreSQL)** – Serverless database to store user data and summaries
- 📤 **UploadThing** – Secure PDF upload and file handling (up to 32MB)
- 💳 **Stripe** – For subscription payments and billing
- 🛠️ **TypeScript** – Type safety and enhanced DX
- 🎨 **TailwindCSS** – Utility-first responsive styling

## 🚀 Features

- 📄 Structured summaries with bullet points and insights
- 📊 Interactive summary viewer with progress tracking
- 🔐 Authenticated access to routes and API endpoints
- 💼 User dashboard for managing uploaded documents
- 📦 Flexible pricing plans (Basic and Pro)
- 🧾 Stripe webhook support and billing integration
- 📱 Fully responsive for mobile and desktop
- ⚡ Real-time status updates and revalidation
- 🔔 Toast notifications for upload/processing/errors
- 📈 SEO-friendly summary generation
- 🧹 Performance-optimized production build

## 🛠️ Getting Started

1. Fork this repo
2. Copy `.env.example` to `.env.local` and fill in your credentials:
   - OpenAI API Key
   - Clerk configuration
   - UploadThing setup
   - Stripe keys
   - NeonDB connection string

## How to Fork and Clone

1. Click the "Fork" button in the top right corner of this repository to create your own 2. Clone your forked repository to your local machine
3. Install dependencies with `npm install`
4. Set up your environment variables
5. Run the development server with `npm run dev`

## Acknowledgements
- [Clerk] (https://go.clerk.com/5q0WrFA) for authentication
- [OpenAI] (https://openai.com) for GPT-4 API
- [Langchain] (https://js.langchain.com) for document processing
- [ShadcN UI] (https://ui.shadcn.com/) for components

## Licence
[MIT] (https://choosealicense.com/licenses/mit/)