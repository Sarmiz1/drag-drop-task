# Modular Kanban Dashboard

A high-performance, accessible, and modular Kanban board application built with React 19, Tailwind CSS 4, and @dnd-kit. This project demonstrates advanced state management patterns, smooth drag-and-drop interactions, and a professional design system tailored for enterprise-level productivity.

## Core Features

### Advanced Kanban Board
- Drag and Drop: Fluid task movement between columns powered by @dnd-kit primitives.
- Interactive Task Cards: Context-aware cards with functional metadata for comments and attachments.
- Project-Specific Data: Each project in the sidebar maintains its own independent board and task list.
- Real-time Search: Optimized case-insensitive search across task titles and descriptions.
- Dynamic Filtering: Priority-based filtering system (High, Medium, Low) for task triaging.

### Navigation and Layout
- Hierarchical Sidebar: Multi-level navigation including project selection, system filters, and account configuration.
- Responsive Interface: Adaptive layout optimized for mobile, tablet, and desktop viewports.
- Integrated Settings: Dedicated modals for profile management and billing configuration accessible via navigation.

### Technical Performance Optimizations
- Referential Integrity: Core data structures are memoized using useMemo to prevent unnecessary component re-renders.
- Efficient Data Access: Derived states for filtering and task lookup are computed only when dependencies change, ensuring a 60FPS UI experience during active interactions.
- Functional State Updates: Board manipulations use functional state updates to avoid stale closure issues during complex drag-and-drop operations.
- Optimized Render Cycle: Task cards and columns utilize memoized sensors and event handlers to minimize reconciliation overhead.

### Accessibility and User Experience
- Touch Optimization: Custom touch sensors with long-press detection (250ms) ensure full mobile compatibility without breaking native scroll behavior.
- Keyboard Support: Full keyboard navigation (Tab, Enter, Space) for all interactive elements, including board columns and task cards.
- Animation Engine: Native Tailwind CSS animations manage modal transitions (slide and fade) and staggered board entrance effects.

## Technology Stack
- React 19: Leveraging modern React features and the latest hook patterns.
- Tailwind CSS 4: Next-generation styling with high-performance CSS variables.
- @dnd-kit: Modular and accessible drag-and-drop toolkit.
- Lucide React: Consistent and clean iconography.

## Getting Started

1. Install dependencies:
   npm install

2. Run the development server:
   npm run dev

3. Build for production:
   npm run build

## Architecture
The project follows a Modular Custom Hook Architecture to separate business logic from UI presentation:

- useBoard: Encapsulates all Kanban logic, including project switching, task CRUD operations, and drag-and-drop state.
- useSidebar: Manages navigation state, project selection, and dynamic dashboard titles.
- useTeam: Handles team member data and dynamic assignments.
- useLayout: Controls global UI states such as mobile menu visibility and responsive breakpoints.

This architecture ensures that components remain focused on rendering while the application logic is centralized, maintainable, and performant.
