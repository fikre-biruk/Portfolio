# Architecture

# Overview

This project is a modern interactive portfolio built with Next.js App Router and React Three Fiber.

The application combines traditional React UI with selective 3D experiences. Standard UI should remain lightweight, while 3D is used only where it improves storytelling and user interaction.

Architecture should prioritize:

* Performance
* Maintainability
* Reusability
* Clear separation of concerns
* Scalable project structure

---

# Technology Stack

Frontend

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* Framer Motion

3D

* React Three Fiber
* Drei
* Three.js

Content

* MDX

Deployment

* Vercel

---

# Architectural Layers

Presentation

* App Router
* React Components
* UI
* Styling
* Animations

Application

* State management
* Navigation
* Business logic
* Content loading

Domain

* Hero
* About
* Skills
* Projects
* Experience
* Contact
* Chatbot

Infrastructure

* MDX
* Static assets
* Models
* Utilities
* Configuration

Dependencies should always flow downward:

Presentation
↓

Application
↓

Domain
↓

Infrastructure

Never introduce reverse dependencies.

---

# Project Structure

src/

app/

* Routes and layouts

components/

* Shared UI
* Feature components
* Layout components

three/

* React Three Fiber engine
* Models
* Animations
* Camera
* Lighting
* Environment
* Materials
* Utilities

hooks/

* Custom React hooks

lib/

* Shared utilities

types/

* Shared TypeScript types

content/

* MDX content

styles/

* Global styles

public/

models/
textures/
images/
icons/
audio/

---

# Organization Rules

* Reuse existing folders before creating new ones.
* Keep related files together.
* Separate UI from business logic.
* Keep Three.js logic isolated from React UI where practical.
* Extract reusable utilities instead of duplicating logic.
* Prefer feature-based organization over large generic files.

---

# Shared Systems

Reusable systems include:

* UI components
* Layout components
* Three.js engine
* Animation utilities
* Custom hooks
* Utility functions
* Shared types

Prefer extending these systems before introducing new implementations.

---

# Performance Architecture

Performance is a core architectural requirement.

Prefer:

* Lazy loading
* Dynamic imports
* Shared components
* Reusable assets
* Optimized 3D models
* Compressed textures
* Small JavaScript bundles

Avoid unnecessary rendering work and duplicated scene logic.

---

# Evolution

As the project grows:

* Preserve the existing architecture whenever possible.
* Update this document when the folder structure or architectural boundaries change.
* Remove obsolete information instead of accumulating outdated documentation.
