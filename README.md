# 🚀 Modern Developer Portfolio

A high-performance, interactive developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. It features a cosmic theme with a fully functional light/dark mode, an interactive terminal, and smooth animations.

## ✨ Features

- **🎨 Dynamic Theme System**:
    - **Dark Mode**: Deep space theme with shooting stars and glowing nebulas.
    - **Light Mode**: Clean, minimal aesthetic with inverted star fields.
    - **Seamless Toggle**: Smooth color transitions using CSS variables and Tailwind v4.

- **💻 Interactive Terminal**:
    - A functional CLI built into the site.
    - Supports commands like `help`, `whoami`, `skills`, `contact`.
    - Auto-scrolls on interaction (but respects initial load).

- **🌌 Immersive Background**:
    - Custom canvas-less animation using Framer Motion.
    - Randomized shooting stars (comets) with unique IDs.
    - Parallax stars and grid effects.

- **📱 Fully Responsive**:
    - Optimized for Mobile, Tablet, and Desktop.
    - Adaptive navigation bar.

- **⚡ High Performance**:
    - Built on **Vite** for instant HMR and fast builds.
    - **Framer Motion** for hardware-accelerated animations.
    - **Lucide React** for lightweight icons.

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4 (Class-based Dark Mode)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/AnkitV15/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173/Portfolio/](http://localhost:5173/Portfolio/) to view it in the browser.

## ⚙️ Configuration (Data-Driven)

This portfolio follows a **Data-Driven Architecture**. You can update almost all content without touching the React code.

📂 **Edit file:** `src/config.ts`

- **Personal Info**: Name, Role, Tagline.
- **Content**: About Me, Experience, Projects, Skills, Hackathons.
- **Social Links**: GitHub, LinkedIn, Twitter, Email.

Example `config.ts`:
```typescript
export const siteConfig = {
  name: "Your Name",
  role: "Your Role",
  social: {
    github: "https://github.com/yourusername",
    // ...
  },
  // ...
};
```

## 🌍 Deployment

This project is configured for **GitHub Pages**.

1.  **Push changes to `main`**:
    ```bash
    git push origin main
    ```
2.  The **GitHub Actions** workflow (`.github/workflows/static.yml`) will automatically build and deploy the site.
3.  Live URL: `https://AnkitV15.github.io/Portfolio`

## 📄 License

MIT License. Feel free to use this template for your own portfolio!
