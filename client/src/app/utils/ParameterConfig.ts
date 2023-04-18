import {IIssueProperties} from "../inter/IIsueProperties";

/**
 * Nastavení názvů a hodnot proměnných
 */
export abstract class ParameterConfig {

  static parameterProperties: IIssueProperties = {
    'status': {
      'name': 'Status',
      'categories': [
        {name: 'Resolved', value: 2},
        {name: 'Canceled', value: 1},
      ]
    },
    'priority': {
      'name': 'Priority',
      'categories': [
        {name: 'Highest', value: 2},
        {name: 'High', value: 1},
        {name: 'Medium', value: 4},
        {name: 'Low', value: 3},
      ]
    },
    'currentSupportTeam': {
      'name': 'Current Support Team',
      'categories': [
        {name: 'team-pm-banking-sw-vcps', value: 2},
        {name: 'team-pm-banking-sw-vocms', value: 4},
        {name: 'team-pm-banking-sw-vss', value: 5},
        {name: 'team-pm-banking-sw-vctees', value: 3},
        {name: 'team-pm-banking-sw-proakt', value: 1},
      ]
    },
    'currentlyAffectedNumbersOfMachines': {
      'name': 'Currently Affected Numbers Of Machines',
      'categories': [
        {name: '1', value: 1},
        {name: '2-10', value: 4},
        {name: '10-100', value: 2},
        {name: '100-1000', value: 3},
        {name: 'more than 1000', value: 5},
      ]
    },
    'frequencyOfOccurence': {
      'name': 'Frequency Of Occurence',
      'categories': [
        {name: 'once', value: 4},
        {name: 'less than once a week', value: 3},
        {name: 'once a week', value: 5},
        {name: 'daily', value: 2},
        {name: 'always', value: 1},
      ]
    },
    'impact': {
      'name': 'Impact',
      'categories': [
        {name: 'Critical', value: 1},
        {name: 'Non-critical', value: 2},
      ]
    },
    'projectPhase': {
      'name': 'Project Phase',
      'categories': [
        {name: 'Production', value: 4},
        {name: 'UAT', value: 6},
        {name: 'Pilot', value: 3},
        {name: 'Certification', value: 1},
        {name: 'SIT', value: 5},
        {name: 'Internal QA', value: 2},
      ]
    },
    'region': {
      'name': 'Region',
      'categories': [
        {name: 'EMEA', value: 2},
        {name: 'APAC', value: 1},
        {name: 'LATAM', value: 3},
        {name: 'NOA', value: 4},
      ]
    },
    'reproducibility': {
      'name': 'Reproducibility',
      'categories': [
        {name: 'yes', value: 2},
        {name: 'no', value: 1},
      ]
    },
    'urgency': {
      'name': 'Urgency',
      'categories': [
        {name: 'Highest', value: 2},
        {name: 'High', value: 1},
        {name: 'Medium', value: 4},
        {name: 'Low', value: 3},
      ]
    },
    'isBusinessPartner': {
      'name': 'Is Business Partner',
      'categories': [
        {name: 'yes', value: 2},
        {name: 'no', value: 1},
      ]
    }
  };

  /**
   * Názvy proměnných
   */
  static parameterNames: string[] = [
    'Status',
    'Priority',
    'Current Support Team',
    'Currently Affected Numbers Of Machines',
    'Frequency Of Occurence',
    'Impact',
    'Project Phase',
    'Region',
    'Reproducibility',
    'Urgency',
    'Is Business Partner',
  ];

  /**
   * Kategorie proměnných
   */
  static parameterCategories = {
    'status': [
      'Resolved',
      'Canceled',
    ],
    'priority':
      [
        'Highest',
        'High',
        'Medium',
        'Low',
      ],
    'currentSupportTeam':
      [
        'team-pm-banking-sw-vcps',
        'team-pm-banking-sw-vocms',
        'team-pm-banking-sw-vss',
        'team-pm-banking-sw-vctees',
        'team-pm-banking-sw-proakt',
      ]
    ,
    'currentlyAffectedNumbersOfMachines':
      [
        '1',
        '2-10',
        '10-100',
        '100-1000',
        'more than 1000',
      ]
    ,
    'frequencyOfOccurence':
      [
        'once',
        'less than once a week',
        'once a week',
        'daily',
        'always',
      ]
    ,
    'impact':
      [
        'Non-Critical',
        'Critical',
      ]
    ,
    'projectPhase':
      [
        'Production',
        'UAT',
        'Pilot',
        'Certification',
        'SIT',
        'Internal QA',
      ]
    ,
    'region':
      [
        'EMEA',
        'APAC',
        'LATAM',
        'NOA',
      ]
    ,
    'reproducibility':
      [
        'yes',
        'no',
      ]
    ,
    'urgency':
      [
        'Highest',
        'High',
        'Medium',
        'Low',
      ]
    ,
    'isBusinessPartner':
      [
        'yes',
        'no',
      ]
  }

  /**
   * Hodnoty proměnných
   */
  static parameterValues = {
    'status': [
      1,
      2,
    ],
    'priority': [
      3,
      4,
      2,
      1,
    ],
    'currentSupportTeam': [
      4,
      3,
      1,
      5,
      2,
    ],
    'currentlyAffectedNumbersOfMachines': [
      4,
      3,
      1,
      2,
      5,
    ],
    'frequencyOfOccurence': [
      4,
      3,
      5,
      2,
      1,
    ],
    'impact': [
      1,
      2,
    ],
    'projectPhase': [
      3,
      2,
      5,
      1,
      4,
      6,
    ],
    'region': [
      1,
      4,
      2,
      3,
    ],
    'reproducibility': [
      1,
      2,
    ],
    'urgency': [
      4,
      1,
      2,
      3,
    ],
    'isBusinessPartner': [
      2,
      1,
    ]
  }
}
