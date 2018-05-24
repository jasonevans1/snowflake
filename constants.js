// @flow
import * as d3 from 'd3'

export type TrackId = 'MAGENTO' | 'ECOMMERCE' | 'FOUNDATIONS' | 'SECURITY' |
  'QUALITY_CRAFT' | 'COMMUNICATION' | 'IDEAS' | 'DRIVE_MENTORSHIP' | 'CULTURE' | 'LEADERSHIP'

export type Milestone = 0 | 1 | 2 | 3 | 4

export type MilestoneMap = {
  'MAGENTO': Milestone,
  'ECOMMERCE': Milestone,
  'FOUNDATIONS': Milestone,
  'SECURITY': Milestone,
  'QUALITY_CRAFT': Milestone,
  'COMMUNICATION': Milestone,
  'IDEAS': Milestone,
  'DRIVE_MENTORSHIP': Milestone,
  'DRIVE_MENTORSHIP': Milestone,
    'CULTURE': Milestone,
    'LEADERSHIP': Milestone
}
export const milestones = [0, 1, 2, 3, 4, ]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 7
    case 4: return 15
    default: return 0
  }
}

export const pointsToLevels = {
    '0': '1.1',
    '14': '1.2',
    '20': '1.3',
    '26': '2.1',
    '33': '2.2',
    '40': '2.3',
    '48': '3.1',
    '56': '3.2',
    '65': '3.3',
    '74': '4.1',
    '83': '4.2',
    '93': '4.3',
}

export const maxLevel = 93

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
    'MAGENTO': Track,
    'ECOMMERCE': Track,
    'FOUNDATIONS': Track,
    'SECURITY': Track,
    'QUALITY_CRAFT': Track,
    'COMMUNICATION': Track,
    'IDEAS': Track,
    'DRIVE_MENTORSHIP': Track,
    'CULTURE': Track,
    'LEADERSHIP': Track
|}

export const tracks: Tracks = {
  "MAGENTO": {
    "displayName": "Magento",
    "category": "Magento",
    "description": "Develops expertise in the Magento 1.x and 2.x platform.",
    "milestones": [{
      "summary": "I can follow Magento 1.x and 2.x develoment best practices. I can make basic changes to existing Magento modules.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can develop advanced Magento 1.x modules and I am learning how to develop Magento 2.x modules.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can develop advanced modules on both Magento 1.x and Magento 2.x. I can build complex solutions on Magento.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can set the direction and practices for the Magento engineering team. I can teach Magento development to other engineers.",
      "signals": [
      ],
      "examples": [
      ],
    }
    ],
  },

  "ECOMMERCE": {
    "displayName": "Ecommerce",
    "category": "Magento",
    "description": "Develops expertise in building ecommerce systems. Including catalog, order and inventory management. ",
    "milestones": [{
      "summary": "I can learn the basics of an ecommerce system and ask questions about managing an ecommerce site.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can describe how catalog, order and inventory management systems work and troubleshoot issues with these systems.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can solve complex ecommerce problems. I can show advanced knowledge of B2C and B2B catalog, order and inventory mangement.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can design ecommerce solutions and lead the implementation fo new cutting edge features. I am continually learning about ecommerce.",
      "signals": [
      ],
      "examples": [
      ],
    },
    ],
  },

  "FOUNDATIONS": {
    "displayName": "Foundations",
    "category": "Magento",
    "description": "Develops expertise in server technolgies, such as Linux, Apache, MySQL and PHP. Deployments, pipeline and database.",
    "milestones": [{
      "summary": "I can work within estabished structures to solve basic system issues.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can develop new features on an existing server architecture or make minor improvements to existing server architecture.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can design standalone systems of moderate complexity or design major new features on existing systems.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can create net new internal tools, reusable code, and code accelerators and can contribute to those efforts through planning, definition, development and knowledge of what's already available within the market.",
      "signals": [
      ],
      "examples": [
      ],
    },
    ],
  },

  "SECURITY": {
    "displayName": "Security",
    "category": "Magento",
    "description": "Develops expertise in secure coding practices, including PCI compliance.",
    "milestones": [{
      "summary": "I can follow OWASP secure coding practices with help from the team.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can deveop features following OWASP secure coding practices. I am learning about PCI compliance.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can review code for security vulnerabilities and describe the PCI requirements for an ecommerce site.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can teach OWASP secure coding practices to other engineers. I can recommend new practices and security scanning tools to use.",
      "signals": [
      ],
      "examples": [
      ],
    },
    ],
  },

  "QUALITY_CRAFT": {
    "displayName": "Quality & Craft",
    "category": "Engineering",
    "description": "Takes a professional approach to developing deficiency-free software that meets the needs of the user.",
    "milestones": [{
      "summary": "I can leave the code I work on in as good of shape as I found it",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can leave the code I work on in better shape than I found it and am consistently looking for ways to increase my own code quality",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can leave code in substantially better shape than I found it through refactoring and maintainable development of new work and am consistently increasing the code quality of my team",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "I can consistently act as a code quality multiplier through code reviews, mentoring, and trainings",
      "signals": [
      ],
      "examples": [
      ],
    },
    ],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "Engineering",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively.",
    "milestones": [{
      "summary": "I can articulate and persuade as needed through the ability to effectively explain technical concepts to non-technical peers",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can anticipate dependencies and needs of project team members and proactively work with others to resolve issues",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can successfully communicate direction and recommendations and be looked to as a subject matter expert by external clients, partners, and stakeholders.",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can create plans, roadmaps, and documentation for team processes, workflow and skillset improvements and successfully motivate team members to accomplish tasks and goals",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    },
    ],
  },

  "IDEAS": {
    "displayName": "Ideas",
    "category": "Engineering",
    "description": "Contributes new and quality ideas, as well as ways to effectively implement them.",
    "milestones": [{
      "summary": "I can proactively ask questions and have a curiosity about better ways to accomplish tasks",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can think independently and can consistently suggest or recommend new, useful ideas and effect positive change within projects and my team",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can actively consider and help to develop the ideas of others and can effect change that has a major positive impact within projects or my team",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can successfully identify issues and opportunities within the team and work with others to develop ideas that effect positive change in the organization",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    },
    ],
  },

  "DRIVE_MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "Engineering",
    "description": "Acts as a key influencer to promote knowledge sharing, skill develoment and employee engagement.",
    "milestones": [{
      "summary": "I can show a strong desire to learn diverse technologies, techniques and topics out of curiosity and can seek out help and feedback when needed",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can embrace challenges and persist in the face of setbacks while seeing effort as the path to improvement",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can apply my strong desire and ability to learn new technologies by applying my own learnings to improve team's skills, code, tools, and processes",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can identify the aptitude and interests of UI team members to help them grow and improve in a direction beneficial for them, the UI team, and DEG",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    },
    ],
  },

  "CULTURE": {
      "displayName": "Culture",
      "category": "Engineering",
      "description": "Shares company core beliefs and makes unique and meaningful contributions to the team, department and workplace.",
      "milestones": [{
          "summary": "I can learn DEG's core values and build relationships within the team",
          "signals": [
              "Signals"
          ],
          "examples": [
              "Examples",
          ],
      }, {
          "summary": "I can embody our values and have strong relationships within the team",
          "signals": [
              "Signals"
          ],
          "examples": [
              "Examples",
          ],
      }, {
          "summary": "I can inspire others by setting the example and have influence within the team",
          "signals": [
              "Signals"
          ],
          "examples": [
              "Examples",
          ],
      }, {
          "summary": "I can mentor others on how to embody our values and have influence and relationships outside of team",
          "signals": [
              "Signals"
          ],
          "examples": [
              "Examples",
          ],
      },
      ],
  },

  "LEADERSHIP": {
      "displayName": "Leadership",
      "category": "Engineering",
      "description": "Clearly thinks through and communicates ideas, demonstrates sound judgement and a high level of personal integrity and commitment.",
      "milestones": [{
          "summary": "I can build professional relationships with manager, peers, and stakeholders and provide technical leadership on small projects",
          "signals": [
              "Signals"
          ],
          "examples": [
              "Examples",
          ],
      }, {
          "summary": "I can establish respect as a trusted Engineer within project teams and provide technical leadership on medium size projects",
          "signals": [
              "Signals"
          ],
          "examples": [
              "Examples",
          ],
      }, {
          "summary": "I can establish trust and respect as a technical leader on the team, help mentor Associate and Mid-level Engineers, and provide technical leadership on large projects",
          "signals": [
              "Signals"
          ],
          "examples": [
              "Examples",
          ],
      }, {
          "summary": "I can provide leadership and technical expertise to the Engineering team and DEG overall",
          "signals": [
              "Signals"
          ],
          "examples": [
              "Examples",
          ],
      },
      ],
  },

}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Associate Magento Engineer', minPoints: 0, maxPoints: 20},
  {label: 'Magento Engineer', minPoints: 21, maxPoints: 42},
  {label: 'Senior Magento Engineer', minPoints: 43},
  {label: 'Magento Team Lead', minPoints: 60}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
