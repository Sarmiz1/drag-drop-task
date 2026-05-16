export const teamMembers = [
  {
    id: 0,
    img: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=transparent",
  },
  {
    id: 1,
    img: "https://api.dicebear.com/7.x/notionists/svg?seed=Aneka&backgroundColor=transparent",
  },
  {
    id: 2,
    img: "https://api.dicebear.com/7.x/notionists/svg?seed=Jasper&backgroundColor=transparent",
  },
];

export const sidebarTabs = [
  {
    id: 1,
    title: "Projects",
    contents: [
      { id: 101, title: "Drag & Drop Task", active: true },
      { id: 102, title: "E-Commerce App", active: false },
    ],
  },
  {
    id: 2,
    title: "Trending",
    contents: [],
  },
  {
    id: 3,
    title: "Settings",
    contents: [
      { id: 301, title: "Account", active: false },
      { id: 302, title: "Preferences", active: false },
    ],
  },
  {
    id: 4,
    title: "Completed",
    contents: [],
  },
];

export const initialBoardData = [
  {
    id: "col-1",
    title: "To do",
    tasks: [
      {
        id: "task-1",
        title: "Design new landing page",
        description: "Create wireframes and high-fidelity mockups for the new marketing website...",
        tag: "UI Design",
        priority: "High",
        comments: 3,
        attachments: 1,
        assignees: [teamMembers[0], teamMembers[1]],
      },
      {
        id: "task-2",
        title: "Create user flows",
        description: "Map out the authentication and checkout workflows.",
        tag: "Research",
        priority: "Medium",
        comments: 0,
        attachments: 2,
        assignees: [teamMembers[2]],
      },
      {
        id: "task-3",
        title: "Update design system",
        description: "Add new component variants to the Figma library.",
        tag: "UI Design",
        priority: "Low",
        comments: 5,
        attachments: 0,
        assignees: [teamMembers[0]],
      },
    ],
  },
  {
    id: "col-2",
    title: "In progress",
    tasks: [
      {
        id: "task-4",
        title: "Implement board layout",
        description: "Refactor the Kanban board into reusable React components.",
        tag: "Development",
        priority: "High",
        comments: 2,
        attachments: 1,
        assignees: [teamMembers[1]],
      },
    ],
  },
  {
    id: "col-3",
    title: "Done",
    tasks: [
      {
        id: "task-5",
        title: "Setup React project",
        description: "Initialize Vite and configure base linting.",
        tag: "Development",
        priority: "Low",
        comments: 1,
        attachments: 0,
        assignees: [teamMembers[0]],
      },
      {
        id: "task-6",
        title: "Configure Tailwind CSS",
        description: "Install and setup Tailwind with base theme tokens.",
        tag: "Development",
        priority: "Low",
        comments: 0,
        attachments: 1,
        assignees: [teamMembers[2]],
      },
    ],
  },
];
