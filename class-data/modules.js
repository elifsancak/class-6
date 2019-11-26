// organization name can be dynamically configured for forkability

const modules = [
  {
    name: 'HTML, CSS & GitHub',
    status: 'complete',
    repos: [
      {
        name: 'HTML-CSS-GitHub',
        paths: [
          'homework/week-1-project',
          'homework/week-2-project',
          'homework/week-3-project',
          'homework/module-exercises',
        ],
        live: true,
      }
    ]
  },
  {
    name: 'javascript 1',
    status: 'complete',
    repos: [
      {
        name: 'javascript-1',
        paths: [
          'week-1-project',
          'week-2-project',
          'week-3-project',
          'module-exercises',
        ],
        live: true,
      }
    ]
  },
  {
    name: 'javascript 2',
    status: 'complete',
    repos: [
      {
        name: 'javascript-2',
        paths: [
          'week-1-project',
          'week-2-project',
          'week-3-project',
        ],
        live: true,
      }
    ]
  },
  {
    name: 'javascript 3',
    status: 'in progress',
    repos: [
      {
        name: 'javascript-3',
        paths: [
          'dom-manipulation',
          'dom-components',
          'event-loop',
          'fetching-data',
          'closure',
          'classes'
        ],
        live: true,
      },
      {
        name: 'practical-javascript',
        live: true,
      },
      {
        name: 'github-api-crash-course',
        live: true,
      }
    ]
  },
  {
    name: 'Node JS',
    status: 'in progress',
    repos: [
      {
        name: 'node.js',
        live: false,
        type: 'Exercises',
      },
      {
        name: 'javascript-exercises',
        live: false,
        type: 'Exercises',
        paths: [
          'helloWorld/report.txt',
          'repeatString/report.txt',
          'reverseString/report.txt',
          'tempConversion/report.txt',
          'getTheTitles/report.txt',
          'findTheOldest/report.txt',
          'calculator/report.txt',
        ]
      },
    ]
  },
]
