# Premium Kanban Dashboard

A state-of-the-art, modular Kanban board application built with **React**, **Tailwind CSS**, and **@dnd-kit**. This project showcases high-end UI design, robust state management with custom hooks, and advanced drag-and-drop interactivity.

![Dashboard Preview](https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=2000)

## ✨ Features

### 📋 Advanced Kanban Board

- **Smooth Drag & Drop**: Effortlessly move tasks between columns with a responsive drag overlay.
- **Project-Specific Data**: Each project in the sidebar has its own independent board and task list.
- **Real-time Search**: Instant case-insensitive search across task titles and descriptions.
- **Dynamic Filtering**: Toggle priority-based filters (High, Low) to narrow down your view.
- **Task Management**: Add, edit, and delete tasks through a premium modal interface.
- **Priority Indicators**: Visual priority levels (High, Medium, Low) for better organization.
- **Tagging System**: Categorize tasks with vibrant, color-coded tags.

### 🧭 Dynamic Sidebar Navigation

- **Hierarchical Structure**: Multi-level navigation with projects, filters, and settings.
- **Context-Aware Dashboard**: The top bar automatically reflects your active project selection.
- **Icon Sidebar**: Quick access to main application modules with beautiful 3D-inspired icons.

### ⚙️ Integrated Settings

- **Profile & Billing**: Access advanced settings modals directly from the navigation.
- **Team Management**: Add new team members dynamically with the functional members card.

### 📱 Responsive & Accessible
- **Full Touch Support**: Optimized touch sensors with long-press detection (250ms) for seamless mobile dragging without interfering with page scrolling.
- **Keyboard Navigation**: Entire application is navigable via keyboard. Use `Tab` to move between projects and tasks, and `Enter`/`Space` to edit or select.
- **Accessibility (A11y)**: Implemented ARIA roles, expanded states, and high-visibility focus rings for a truly inclusive experience.

### ✨ Premium Aesthetics
- **Smooth Staggered Animations**: Board content now slides in with a smooth staggered effect whenever you switch projects, creating a lively and premium feel.
- **Tailwind-Powered**: All animations are built using utility-first Tailwind classes for maximum performance and zero extra bundle weight.

### ⚙️ Integrated Settings
- **Profile & Billing**: Access advanced settings modals directly from the navigation.
- **Team Management**: Add new team members dynamically with the functional members card.

### 🛠 Tech Stack
- **React 19**: Utilizing the latest React features and hooks.
- **Tailwind CSS 4**: Configuration-less styling with high-performance CSS variables.
- **@dnd-kit**: A lightweight, modular, and accessible drag-and-drop toolkit.
- **Lucide React**: Crisp, consistent iconography throughout the app.

## 🏗 Architecture

The project follows a **Modular Custom Hook Architecture**:

- **`useBoard`**: Encapsulates all Kanban logic, managing independent board states for multiple projects and task-level member assignments.
- **`useSidebar`**: Manages navigation state, project selection, filtering logic, and dynamic title resolution.
- **`useTeam`**: Handles the team member roster and dynamic member additions.
- **`useLayout`**: Handles global UI states like mobile menu visibility.

This separation of concerns ensures that components remain "dumb" and focused only on rendering, while the logic is centralized and easy to test.

## Getting Started

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run Development Server**:

   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🎨 Design System

The application uses a "Premium" design aesthetic:

- **Glassmorphism**: Subtle backdrop blurs and transparent layers.
- **Vibrant Gradients**: Carefully curated color palettes for a modern feel.
- **Micro-animations**: Smooth transitions for tab switching and modal openings.
- **Typography**: Clean, readable font hierarchy using Inter and Roboto.

---
