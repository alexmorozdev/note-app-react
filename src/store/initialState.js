const initialState = {
  notes: [
    {
      icon: '<i class="fas fa-shopping-cart"></i>',
      name: "Shopping list",
      created: "1622781856881",
      category: "Task",
      content: "Tomatoes, bread, sugar",
      dates: "",
      status: "active",
    },
    {
      name: "The theory of evolution",
      created: "1624781856889",
      category: "Random thought",
      content: "The evolution is a process",
      dates: "",
      status: "active",
    },
    {
      name: "New Feature",
      created: "1631451856882",
      category: "Idea",
      content: "Introduce new improvements",
      dates: "",
      status: "active",
    },
    {
      name: "Books",
      created: "1640564856434",
      category: "Task",
      content: "The lean startup",
      dates: "",
      status: "active",
    },
    {
      name: "About time",
      created: "1640781345270",
      category: "Random thought",
      content: "There is always not enough time",
      dates: "",
      status: "active",
    },
    {
      name: "SEO",
      created: "1640781456854",
      category: "Idea",
      content: "Delete unused scripts",
      dates: "",
      status: "active",
    },
    {
      name: "Vacation",
      created: "1640781852345",
      category: "Task",
      content: "Book tickets to Italy",
      dates: "",
      status: "active",
    },
  ],
  editNote: {
    name: "",
    created: "",
    category: "",
    content: "",
  },
};

export default initialState;
