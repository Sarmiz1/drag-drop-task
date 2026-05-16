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
    id: 0,
    header: 'Projects',
    tabContent: [
      {
        id: 1,
        title: "Main Projects",
        contents: [
          { id: 101, title: "Drag & Drop Task", active: true },
          { id: 102, title: "E-Commerce App", active: false },
        ],
      },
      {
        id: 2,
        title: "Archive",
        contents: [],
      }
    ]
  },
  {
    id: 1,
    header: 'Filters',
    tabContent: [
      {
        id: 10,
        title: "Priority",
        contents: [
          { id: 1001, title: "High Priority", active: false },
          { id: 1002, title: "Low Priority", active: false },
        ],
      }
    ]
  },
  {
    id: 2,
    header: 'Schedule',
    tabContent: [
      {
        id: 20,
        title: "Daily",
        contents: [{ id: 2001, title: "Today's Tasks", active: true }],
      }
    ]
  },
  {
    id: 3,
    header: 'Config',
    tabContent: [
      {
        id: 30,
        title: "Account",
        contents: [
          { id: 3001, title: "Profile", active: false },
          { id: 3002, title: "Billing", active: false },
        ],
      }
    ]
  },
  {
    id: 4,
    header: 'Events',
    tabContent: [
      {
        id: 40,
        title: "Upcoming",
        contents: [],
      }
    ]
  }
];

export const iconSidebarIcons = [
  "LayoutGrid",
  "SlidersHorizontal",
  "Timer",
  "Settings",
  "Calendar",
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
        comments: [
          { id: 1, user: "Felix A.", text: "This looks great! Should we add more padding?", time: "2h ago", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix" },
        ],
        attachments: [
          { id: 1, name: "Landing_Page_Wireframe.pdf", size: "2.4 MB", type: "PDF", date: "Oct 12, 2023" },
        ],
        assignees: [teamMembers[0], teamMembers[1]],
      },
      {
        id: "task-2",
        title: "Create user flows",
        description: "Map out the authentication and checkout workflows.",
        tag: "Research",
        priority: "Medium",
        comments: [],
        attachments: [
          { id: 2, name: "Style_Guide_v2.fig", size: "12.8 MB", type: "FIGMA", date: "Oct 14, 2023" },
        ],
        assignees: [teamMembers[2]],
      },
      {
        id: "task-3",
        title: "Update design system",
        description: "Add new component variants to the Figma library.",
        tag: "UI Design",
        priority: "Low",
        comments: [],
        attachments: [],
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
        comments: [],
        attachments: [],
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
        comments: [],
        attachments: [],
        assignees: [teamMembers[0]],
      },
      {
        id: "task-6",
        title: "Configure Tailwind CSS",
        description: "Install and setup Tailwind with base theme tokens.",
        tag: "Development",
        priority: "Low",
        comments: [],
        attachments: [],
        assignees: [teamMembers[2]],
      },
    ],
  },
];
