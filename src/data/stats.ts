export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  verifiable: boolean;
  qualitativeFallback?: string;
}

export const STATS: Stat[] = [
  {
    id: 'subjects',
    label: 'Subjects Covered',
    value: 12,
    suffix: '',
    verifiable: true,
    qualitativeFallback: undefined,
  },
  {
    id: 'boards',
    label: 'Boards Supported',
    value: 4,
    suffix: '',
    verifiable: true,
    qualitativeFallback: undefined,
  },
  {
    id: 'features',
    label: 'Built-in Features',
    value: 15,
    suffix: '+',
    verifiable: true,
    qualitativeFallback: undefined,
  },
  {
    id: 'launch',
    label: 'App Launch',
    value: 0,
    verifiable: false,
    qualitativeFallback: 'Launching 2026',
  },
];

export const SUBJECTS = [
  'Physics',
  'Chemistry',
  'Biology',
  'Mathematics',
  'Computer Science',
  'English',
  'Urdu',
  'Pakistan Studies',
  'Islamiat',
  'General Science',
  'Geography',
  'History',
];

export const BOARDS = ['Federal Board', 'Punjab Board', 'Sindh Board', 'KP Board'];
