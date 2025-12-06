const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Course Modules',
      items: [
        {
          type: 'doc',
          id: 'module01',
          label: 'Module 1: ROS 2',
        },
        {
          type: 'doc',
          id: 'module02', 
          label: 'Module 2: Gazebo',
        },
        {
          type: 'doc',
          id: 'module03',
          label: 'Module 3: NVIDIA Isaac',
        },
        {
          type: 'doc',
          id: 'module04',
          label: 'Module 4: VLA',
        },
      ],
    },
    {
      type: 'doc',
      id: 'hardware',
      label: 'Hardware Requirements',
    },
  ],
};

module.exports = sidebars;