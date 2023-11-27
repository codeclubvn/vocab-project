export const lessonToSeed = [
  {
    name: 'Lesson 1',
    description: 'Description 1',
    star: 5,
    total: 2,
    vocabularies: [
      {
        front_text: 'Front 1',
        back_text: 'Back 1',
        is_star: true,
        tag: ['tag1', 'tag2'],
        is_remind: false,
        memory_level: 'NEW',
      },
      {
        front_text: 'Front 2',
        back_text: 'Back 2',
        is_star: false,
        tag: ['tag3', 'tag4'],
        is_remind: true,
        memory_level: 'FORGOT',
      },
    ],
    is_public: true,
    created_by: '656090c66ce502edc28e6aae', 
  },
  {
    name: 'Lesson 2',
    star: 4,
    total: 8,
    vocabularies: [
      {
        front_text: 'Front 3',
        back_text: 'Back 3',
        is_star: true,
        tag: ['tag5', 'tag6'],
        is_remind: false,
        memory_level: 'REMEMBER',
      },
      {
        front_text: 'Front 4',
        back_text: 'Back 4',
        is_star: false,
        tag: ['tag7', 'tag8'],
        is_remind: true,
        memory_level: 'REMEMBER',
      },
    ],
    is_public: false,
    created_by: '656090c66ce502edc28e6aae', 
  },
];
