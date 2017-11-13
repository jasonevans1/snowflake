// @flow
import * as d3 from 'd3'

export type TrackId = 'DEVELOPMENT_SKILLS' | 'CODE_QUALITY' | 'TOOL_PROFICIENCY' | 'DESIGN' |
  'IDEAS' | 'COMMUNICATION' | 'DRIVE' | 'CULTURE' |
  'LEADERSHIP'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type MilestoneMap = {
  'DEVELOPMENT_SKILLS': Milestone,
  'CODE_QUALITY': Milestone,
  'TOOL_PROFICIENCY': Milestone,
  'DESIGN': Milestone,
  'IDEAS': Milestone,
  'COMMUNICATION': Milestone,
  'DRIVE': Milestone,
  'CULTURE': Milestone,
  'LEADERSHIP': Milestone
}
export const milestones = [0, 1, 2, 3, 4, ]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 2
    case 3: return 3
    case 4: return 4
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '0',
  '9': '1',
  '13.5': '1.5',
  '18': '2',
  '22.5': '2.5',
  '27': '3',
  '31.5': '3.5',
  '36': '4'
}

export const maxLevel = 135

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
  'DEVELOPMENT_SKILLS': Track,
  'CODE_QUALITY': Track,
  'TOOL_PROFICIENCY': Track,
  'DESIGN': Track,
  'IDEAS': Track,
  'COMMUNICATION': Track,
  'DRIVE': Track,
  'CULTURE': Track,
  'LEADERSHIP': Track
|}

export const tracks: Tracks = {
  "DEVELOPMENT_SKILLS": {
    "displayName": "Development Skills",
    "category": "A",
    "description": "Description",
    "milestones": [{
      "summary": "I can develop basic solutions that are performant and maintainable using core front-end technologies",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can develop modular, readable solutions that successfully work within platform constraints",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can develop complex solutions that successfully work around platform constraints using innovative techniques and emerging technologies",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can break down difficult problems and turn underspecified solutions into achievable outcomes for team members",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }
    ],
  },

  "CODE_QUALITY": {
    "displayName": "Code Quality",
    "category": "A",
    "description": "Description",
    "milestones": [{
      "summary": "I can leave the code I work on in as good of shape as I found it",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can leave the code I work on in better shape than I found it and am consistently looking for ways to increase my own code quality",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can leave code in substantially better shape than I found it through refactoring and maintainable development of new work and am consistently increasing the code quality of my team",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can consistently act as a code quality multiplier through code reviews, mentoring, and trainings",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    },
    ],
  },

  "TOOL_PROFICIENCY": {
    "displayName": "Tool Proficiency",
    "category": "A",
    "description": "Description",
    "milestones": [{
      "summary": "I can successfully use browser development tools, internal build tools, source control, and testing platforms and successfully adopt team processes and standards with oversight and guidance",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can successfully use browser development tools, internal build tools, source control, and testing platforms and successfully adopt team processes and standards independently",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can contribute to internal tools and team processes through independent research and hands-on development",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can correctly assess the business value of internal tools and processes and can contribute through planning, definition, and team engagement",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    },
    ],
  },

  "DESIGN": {
    "displayName": "Design",
    "category": "A",
    "description": "Description",
    "milestones": [{
      "summary": "I can assess designs for feasibility and implement designs faithfully and to SOQ standards",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can assess designs for possible performance issues and effectively push back to ensure a good user experience",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can work collaboratively with designers, understand their vocabulary, and consistently work to improve overall design of projects",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can actively contribute to design and strategy discussions from a discovery and architectural perspective",
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
    "category": "B",
    "description": "Description",
    "milestones": [{
      "summary": "I can proactively ask questions and have a curiousity about better ways to accomplish tasks",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can think independently and can consistently suggest or recommend new, useful ideas to project & UI teams",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can actively consider and help to develop the ideas of others",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can successfully identify issues and opportunities within the team or organization and work with others to develop ideas to solve them",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    },
    ],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "B",
    "description": "Description",
    "milestones": [{
      "summary": "I can convey concepts to UI and project teams and am proactive at keeping others up to date",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can articulate and persuade as needed through the ability to effectively explain technical concepts to non-technical peers",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can anticipate dependencies and needs of project team members and proactively work with others to resolve issues and architect solutions",
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

  "DRIVE": {
    "displayName": "Drive for Improvement",
    "category": "B",
    "description": "Description",
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
      "summary": "I can identify the apptitude and interests of UI team members to help them grow and improve in a direction beneficial for them, the UI team, and DEG",
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
    "category": "B",
    "description": "Description",
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
    "category": "B",
    "description": "Description",
    "milestones": [{
      "summary": "I can build professional relationships with manager, peers, and stakeholders",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can establish respect as a trusted UI Engineer within project teams",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "I can establish trust and respect as a technical leader on the UI team and help mentor Associate and Mid-level Engineers",
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
  {label: 'Associate UI Engineer', minPoints: 0, maxPoints: 17},
  {label: 'UI Engineer', minPoints: 18, maxPoints: 26},
  {label: 'Senior UI Engineer', minPoints: 27, maxPoints: 35},
  {label: 'UI Team Lead', minPoints: 36}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
