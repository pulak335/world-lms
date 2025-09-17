# LMS Frontend

A Learning Management System frontend built with Next.js, Redux Toolkit, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd lms
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp env.example .env.local
```
Edit `.env.local` with your configuration values.

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   └── providers.js       # Redux providers
├── components/            # Reusable components
│   └── ui/               # UI components
├── hooks/                 # Custom React hooks
├── store/                 # Redux store configuration
│   ├── store.js          # Store setup
│   └── slices/           # Redux slices
└── data/                  # Dummy data for development
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: JavaScript (no TypeScript)
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Persistence**: Redux Persist

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration is in `tailwind.config.js`.

## 🔧 State Management

Redux Toolkit is configured with:
- Redux Persist for state persistence
- Auth slice for authentication
- Custom hooks for easy state access

## 📦 Key Dependencies

- `next` - React framework
- `@reduxjs/toolkit` - State management
- `react-redux` - React bindings for Redux
- `redux-persist` - State persistence
- `tailwindcss` - Utility-first CSS framework

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## 📄 License

This project is licensed under the MIT License.
