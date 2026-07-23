export interface JourneyStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'j1',
    step: 1,
    title: 'Choose Subject',
    description: 'Pick your board and subjects — Federal, Punjab, Sindh, or KP.',
  },
  {
    id: 'j2',
    step: 2,
    title: 'Study Chapter',
    description: 'Work through board-mapped chapters at your own pace.',
  },
  {
    id: 'j3',
    step: 3,
    title: 'Watch Lecture',
    description: 'Access curated video links and resources per chapter.',
  },
  {
    id: 'j4',
    step: 4,
    title: 'Take Notes',
    description: 'Write notes or scan textbook pages with OCR.',
  },
  {
    id: 'j5',
    step: 5,
    title: 'Take a Quiz',
    description: 'Test chapter understanding with short auto-generated quizzes.',
  },
  {
    id: 'j6',
    step: 6,
    title: 'Flashcards',
    description: 'Drill key terms with auto-generated recall cards.',
  },
  {
    id: 'j7',
    step: 7,
    title: 'Scheduled Revision',
    description: 'The planner resurfaces chapters right before you forget.',
  },
  {
    id: 'j8',
    step: 8,
    title: 'Exam Ready',
    description: 'Track weak topics, practice past papers, and walk in confident.',
  },
];
