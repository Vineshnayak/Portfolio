---

# Jatothu Vinesh – Portfolio

A  web portfolio designed to showcase work in **AI/ML engineering, Python development, and data-driven applications**. The site focuses on clear structure, responsive design, and smooth user interactions.

## Architecture & Tech Stack

The project uses a component-based architecture with server-side rendering and optimized UI interactions.

* **Frontend Framework:** Next.js (App Router) with React
* **Language:** TypeScript (`.tsx` components with type safety)
* **Styling:** Tailwind CSS with custom utility extensions
* **Animations:** Framer Motion for scroll-based and interaction animations
* **Icons:** Lucide React

---

## Core Sections

### 1. Hero (`/components/Hero.tsx`)

Entry section highlighting primary focus areas.

* Smooth scroll navigation
* Animated background elements representing data flow
* Profile image with animated gradient border

---

### 2. About (`/components/About.tsx`)

Provides a concise overview of background and focus areas such as:

* Python-first development approach
* Problem solving and algorithmic thinking
* Hackathon participation

Built using a **CSS Grid layout** with intersection observers for entry animations.

---

### 3. Skills (`/components/Skills.tsx`)

Organizes technical skills into domain-based categories:

* Programming Languages
* AI / Machine Learning
* Full Stack Development
* Databases & Tools
* Systems / Cloud

Each category is displayed using card-based UI elements with subtle hover interactions.

---

### 4. Projects (`/components/Projects.tsx`)

Highlights selected projects demonstrating practical implementation.

Examples include:

* **Sentinel Face Secure** – Facial authentication using lightweight CNN models (MobileNetV2) for edge devices
* **Fake Logo Detection** – Object detection using YOLO for identifying counterfeit logos
* **Rainfall Prediction** – Machine learning models trained on weather datasets
* **Flight Delay Prediction** – Data pipeline and predictive models using XGBoost with large-scale datasets

Projects include associated **technology stacks and implementation details**.

---

### 5. Certifications (`/components/Certifications.tsx`)

Displays verified certifications and learning credentials including:

* Salesforce Agentforce
* Google Cloud Generative AI
* Cisco certifications

Also references competitive programming platforms such as CodeChef and LeetCode.

---

### 6. Experience / Timeline (`/components/Experience.tsx`)

Shows the academic journey in **B.Tech – Artificial Intelligence & Machine Learning**, structured as a chronological timeline.

---

### 7. Contact (`/components/Contact.tsx`)

Provides direct links to professional profiles and communication channels:

* GitHub
* LinkedIn
* YouTube
* Email

Built with a responsive layout and optimized SVG icons.

---

## 🛠 Development

Run the project locally:

```bash
npm install
npm run dev
```

Development server runs at:

```
http://localhost:3000
```

Create a production build:

```bash
npm run build
npm run start
```

---

## ⚙ Performance Considerations

* **Image optimization:** Implemented using `next/image`
* **Animations:** GPU-friendly transforms and opacity changes via Framer Motion
* **Hydration control:** Client components are isolated using `"use client"` to reduce unnecessary client-side hydration

---

## 📄 License

This project structure is intended for personal portfolio use.

**Created by Jatothu Vinesh – Python Developer & AI/ML Enthusiast.**

---
