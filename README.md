---

# Vinesh nayak – Portfolio

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
* Animated background elements representing data flow with floating Python, AI, and FastAPI code snippets
* Profile image with animated gradient border

---

### 2. About (`/components/About.tsx`)

Provides a comprehensive overview of background and focus areas, highlighting:

* Expertise in building efficient, real-time AI/ML software systems
* Hands-on experience with deep learning, computer vision, NLP, and CI/CD pipelines
* Proficiency in Python, FastAPI, MongoDB, PyTorch, TensorFlow, and OpenCV
* Open-source contributions and active pursuit of advanced systems engineering

Built using a **CSS Grid layout** with intersection observers for entry animations.

---

### 3. Skills (`/components/Skills.tsx`)

Organizes technical skills into 11 detailed, domain-based categories:

* Programming Languages (Python, Java, C++, TypeScript, SQL)
* AI/ML & Deep Learning (PyTorch, TensorFlow, OpenCV, YOLOv8)
* Backend Dev & APIs (FastAPI, Flask, WebSockets)
* DevOps & Version Control (Jenkins, GitHub Actions, Git)
* Frontend Development, Data Science, Databases, Cloud Platforms, UI/UX, and Dev Tools.

Each category is displayed using glass-card UI elements with custom badges, dynamic icons, and hover interactions.

---

### 4. Projects (`/components/Projects.tsx`)

Highlights key projects spanning computer vision, RAG systems, web applications, and CI/CD pipelines.

Featured examples include:

* **Sentinel Face Secure** – Secure facial authentication system with liveness detection and encrypted vector embeddings (FastAPI, PyTorch, React).
* **HygieneVision** – Real-time computer vision system for hygiene compliance using YOLOv8 and FastAPI.
* **CodeSage** – Local codebase intelligence platform with RAG, AST parsing, and FAISS-based semantic querying.
* **SpendSphere** – Collaborative expense tracker featuring WebSockets for real-time synchronization and JWT authentication.
* **PyCalcCI** – Complete CI/CD automated deployment workflow built with Jenkins and pytest.

Projects are rendered using dynamic grid layouts, animated hover states, and clear tech-stack tagging.
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
* Figma
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

**Created by Vinesh nayak – Python Developer & AI/ML Enthusiast.**

---
