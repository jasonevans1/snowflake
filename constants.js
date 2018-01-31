// @flow
import * as d3 from 'd3'

export type TrackId = 'MAGENTO' | 'ECOMMERCE' | 'FOUNDATIONS' | 'SECURITY' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'IDEAS' | 'MENTORSHIP' | 'LEADERSHIP' |
    'CULTURE'

export type Milestone = 0 | 1 | 2 | 3 | 4

export type MilestoneMap = {
  'MAGENTO': Milestone,
  'ECOMMERCE': Milestone,
  'FOUNDATIONS': Milestone,
  'SECURITY': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'IDEAS': Milestone,
  'MENTORSHIP': Milestone,
    'LEADERSHIP': Milestone,
    'CULTURE': Milestone
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
    '6': '1.2',
    '12': '1.3',
    '18': '2.1',
    '25': '2.2',
    '32': '2.3',
    '40': '3.1',
    '48': '3.2',
    '57': '3.3',
    '66': '4.1',
    '75': '4.2',
    '85': '4.3',
}

export const maxLevel = 85

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
    'PROJECT_MANAGEMENT': Track,
    'COMMUNICATION': Track,
    'CRAFT': Track,
    'IDEAS': Track,
    'MENTORSHIP': Track,
    'LEADERSHIP': Track,
    'CULTURE': Track
|}

export const tracks: Tracks = {
  "MAGENTO": {
    "displayName": "Magento",
    "category": "A",
    "description": "Develops expertise in the Magento 1.x and 2.x platform.",
    "milestones": [{
      "summary": "Proficient knowledge of Magento 1.x development and basic knowledge of Magento 2.x development. Follows Magento development best practices.",
      "signals": [
        "Make simple changes to an existing Magento 1.x modules",
          "Understands the major differences between M1 and M2 development",
          "Investigate configuration issues on a Magento 1.x site"
      ],
      "examples": [
        "Add a new Magento system configuration.",
          "Add a facebook link to the footer of a site.",
          "Add a new product EAV attribute."
      ],
    }, {
      "summary": "Develops advanced modules on Magento 1.x. Demonstrates front-end and back-end development knowledge of both Magento 1.x and 2.x.",
      "signals": [
        "Make simple changes to an existing Magento 2.x module",
          "Build new Magento 1.x modules from scratch.",
          "Investigate and fix production issues."
      ],
      "examples": [
        "Apply Magento security patches and upgrades.",
          "Create install and upgrade scripts for new database tables.",
          "Install and configure Magento 1 and 2 extensions."
      ],
    }, {
      "summary": "Develops advanced modules on both Magento 1.x and Magento 2.x. Builds complex solutions on the Magento platform.",
      "signals": [
          "Build new Magento 1.x and 2.x modules from scratch.",
          "Build Magento 1.x and 2.x integrations with backend systems.",
          "Create custom Magento 2.x APIs"
      ],
      "examples": [
          "Implement an M2 integration to a ERP system from scratch.",
          "Upgrade Magento to a new major version",
          "Import products and customers into new Magento site."
      ],
    }, {
      "summary": "Develops advanced modules on both Magento 1.x and Magento 2.x. Is an expert on Magento development and sets the direction and practices for Magento development.",
      "signals": [
        "Design a new complex feature in Magento and lead the development.",
          "Build Magento 1.x and 2.x integrations with backend systems.",
          "Learn and teach Magento best practices."
      ],
      "examples": [
          "Lead implementation of complex ERP system integration",
          "Investigate and resolve complex production issues.",
          "Set the technical direction of the Magento engineering team."
      ],
    }
    ],
  },

  "ECOMMERCE": {
    "displayName": "Ecommerce",
    "category": "A",
    "description": "Develops expertise in building ecommerce systems. Including catalog, order and inventory management. ",
    "milestones": [{
      "summary": "Works effectively on an ecommerce system. Gaining knowledge of ecommerce systems.",
      "signals": [
        "Understands at a high level the Magento database schema",
          "Continually learning the basics of ecommerce systems.",
          "Perform basic Magento admin tasks."
      ],
      "examples": [
        "Make simple admin changes in Magento.",
          "Asks questions and finds answers to ecommerce related issues.",
          "Create catalog, promotions and orders in Magento."
      ],
    }, {
      "summary": "Develops and maintains an ecommerce system. Has proficient knowledge of catalog, order and inventory management.",
      "signals": [
        "Explains the Magento database schema to another engineer.",
          "Perform advanced Magento admin tasks.",
          "Explains how the Magento order process works."
      ],
      "examples": [
        "Create invoices, shipments, credit memos.",
          "Configure a new shipping method.",
          "Setup complex shopping cart rules."
      ],
    }, {
      "summary": "Demonstrates an advanced knowledge of ecommerce systems. Advanced knowledge of B2C and B2B catalog and order management.",
      "signals": [
        "Understands how to integrate Magento with an order management system",
          "Provides recommendations for designing solotions to ecommerce implementations",
          "Configure Magento 2 B2B shared catalogs and companies. "
      ],
      "examples": [
        "Build a B2B catalog with custom pricing and payment options",
          "Implements cron job to process shipment files from a backend system.",
          "Build API to integration with a backend sytem to import pricing."
      ],
    }, {
      "summary": "Demonstrates an expert knowledge of ecommerce systems. Advanced knowledge of B2C and B2B catalog and order management.",
      "signals": [
        "Design solutions for a complex Magento site",
          "Apply new technologies to solve complex ecommerce problems.",
          "Continually learning and teaching Magento technologies and features."
      ],
      "examples": [
        "Work with BA and the Magento architect to define Magento solutions.",
          "Lead the implementation of new ecommerce features."
      ],
    },
    ],
  },

  "FOUNDATIONS": {
    "displayName": "Foundations",
    "category": "A",
    "description": "Develops expertise in server technolgies, such as Linux, Apache, MySQL and PHP. Deployments, pipeline and database.",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        "Basic knowledge of Linux commands.",
          "Investigate PHP fatal errors.",
          "Make simple configuration changes to apache or PHP."
      ],
      "examples": [
        "Resolve out of disk errors.",
          "Resolve file permission errors independently",
          "Write simple SQL statements."
      ],
    }, {
      "summary": "Develops new features on existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Troubleshoot system issues on an existing server",
          "Setup Vagrant development environment without assistance"
      ],
      "examples": [
        "Upgrade PHP on an existing server.",
          "Configure a MySQL server.",
          "Configure Apache virtual hosts and .htaccess settings."
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Troubleshoot and fix deployment errors.",
          "Provision a new alpha server environment for Magento 2.",
          "Resolve performance issues on a live environment."
      ],
      "examples": [
        "Investigate Capistrano scripts to fix a deployment error.",
          "Using bash scripts to provision a test server for Magento",
          "Use New Relic and strace to investigate and fix performance issues."
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Define and develop a deployment pipeline for Magento 2.",
          "Lead a live site migration to a new Magento environment.",
          "Provision the live Magento 2 environment."
      ],
      "examples": [
          "Setup a live Magento environment on MageMojo",
          "Build a deployment pipeline in Jenkins. Using Docker, Jenkins and bash scripts."
      ],
    },
    ],
  },

  "SECURITY": {
    "displayName": "Security",
    "category": "A",
    "description": "Develops expertise in secure coding practices, including PCI compliance.",
    "milestones": [{
      "summary": "Follows OWASP secure coding practices with help from the team. Gaining knowledge of secure application development.",
      "signals": [
        "Apply the OWASP coding practices when making small changes to Magento ",
          "Continually learning how to write secure Magento modules"
      ],
      "examples": [
        "Fix a cross site scripting vulnerability.",
          "Add a form key and validate the key in a Magento controller"
      ],
    }, {
      "summary": "Develops new features following OWASP secure coding practices. Gaining knowledge of PCI compliance.",
      "signals": [
        "Apply the OWASP coding practices when building a Magento module.",
          "Identify and fix a known security issue from a scan.",
          "Understands basic PCI requirements."
      ],
      "examples": [
        "Find and fix a SQL injection vulnerability.",
          "Setup the Authorize.net payment module following best practices"
      ],
    }, {
      "summary": "Develops new features following OWASP secure coding practices. Reviews code for security vulnerability. Proficient knowledge of PCI compliance.",
      "signals": [
        "Identify and fix a new security issue from a scan.",
          "Apply PCI compliance security measures",
          "Understands the PCI SAQ A and SAQ A-EP requirements"
      ],
      "examples": [
        "Identify a security issue and work with the client to define a solution.",
          "Create tools to help fix common security vulnerabilities."
      ],
    }, {
      "summary": "Teaches the OWASP secure coding practices to other engineers. Reviews code for security vulnerability.  Advanced knowledge of PCI compliance.",
      "signals": [
        "Discuss PCI compliance with a client",
          "Mentor team members on secure coding practices"
      ],
      "examples": [
        "Recommends security scanning tools",
          "Design Magento system that is PCI SAQ A-EP compliant",
          "Continuously review secure coding practices with the engineering team."
      ],
    },
    ],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Project Management",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget.\t",
    "milestones": [{
      "summary": "Effectively delivers individual tasks",
      "signals": [
        "Estimates small tasks accurately",
          "Delivers tightly-scoped projects efficiently"
      ],
      "examples": [
        "Delivered support for a product import.",
          "Delivered a new email transaction template."
      ],
    }, {
      "summary": "Effectively delivers small personal projects",
      "signals": [
        "Performs research and considers alternative approaches",
          "Manage multiple support requests across projects."
      ],
      "examples": [
        "Delivers a custom data export process.",
          "Delivers a minor version upgrade of Magento."
      ],
    }, {
      "summary": "Effectively delivers projects through a small team",
      "signals": [
        "Delegates tasks to others appropriately",
          "Integrates business needs into project planning",
          "Manages dependencies within the team."
      ],
      "examples": [
        "Completed release checklist for a well controlled release.",
          "Delivers ERP integration.",
          "Delivers a major version upgrade of Magento."
      ],
    }, {
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "signals": [
        "Manages dependencies on other projects and teams",
          "Considers external constraints and business objectives when planning",
          "Works with other teams on large projects"
      ],
      "examples": [
        "Delivered large and complex engineering project on time",
          "Deliver large Magento migration on time."
      ],
    },
    ],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "milestones": [{
      "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    },
    ],
  },

  "CRAFT": {
    "displayName": "Craft",
    "category": "B",
    "description": "Embodies and promotes practices to ensure excellent quality products and services\t",
    "milestones": [{
      "summary": "Delivers consistently good quality work",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
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
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for organizational change or product improvements",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    },
    ],
  },

  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "C",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team.",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to DEG's shared knowledge base",
      "signals": [
        "Signals"
      ],
      "examples": [
        "Examples",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
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
        "category": "C",
        "description": "Provides leadership in the engineering team. Technical Leader on Magento Team.",
        "milestones": [{
            "summary": "Builds professional relationships with coworkers.",
            "signals": [
                "Signals"
            ],
            "examples": [
                "Examples",
            ],
        }, {
            "summary": "Trusted Magento engineer on project teams. Provides technical leadership on small projects.",
            "signals": [
                "Signals"
            ],
            "examples": [
                "Examples",
            ],
        }, {
            "summary": "Trusted Magento engineer on project teams. Provides technical leadership on large complex projects. ",
            "signals": [
                "Signals"
            ],
            "examples": [
                "Examples",
            ],
        }, {
            "summary": "Provides technical leadership on large complex projects. Leads the Magento engineering team.",
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
        "category": "C",
        "description": "Inspires others and embodies DEG core values.",
        "milestones": [{
            "summary": "Does the right thing. Aims to exceed client expectations.",
            "signals": [
                "Signals"
            ],
            "examples": [
                "Examples",
            ],
        }, {
            "summary": "Embodies DEG core values. Builds relationships outside of the engineering team. Exceeds client's expectations",
            "signals": [
                "Signals"
            ],
            "examples": [
                "Examples",
            ],
        }, {
            "summary": "Promotes DEG core values within the team. Inspires others to exceed client expectations. Able to mentor team members.",
            "signals": [
                "Signals"
            ],
            "examples": [
                "Examples",
            ],
        }, {
            "summary": "Provides leadership and sets the example for the team. Builds professional relationships within the team as well as outside the team",
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
  {label: 'Associate Magento Engineer', minPoints: 0, maxPoints: 17},
  {label: 'Magento Engineer', minPoints: 18, maxPoints: 39},
  {label: 'Senior Magento Engineer', minPoints: 40},
  {label: 'Magento Team Lead', minPoints: 56}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
