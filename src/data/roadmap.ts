export interface RoadmapItem {
  id: string;
  title: string;
  status: 'shipped' | 'coming-soon';
}

export const ROADMAP: RoadmapItem[] = [
  { id: 'r1', title: 'Study Planner', status: 'shipped' },
  { id: 'r2', title: 'Offline Mode', status: 'shipped' },
  { id: 'r3', title: 'AI Study Planning', status: 'shipped' },
  { id: 'r4', title: 'OCR Scanner', status: 'shipped' },
  { id: 'r5', title: 'Flashcard Generator', status: 'shipped' },
  { id: 'r6', title: 'Focus Timer', status: 'shipped' },
  { id: 'r7', title: 'Video Library', status: 'coming-soon' },
  { id: 'r8', title: 'Teacher Dashboard', status: 'coming-soon' },
  { id: 'r9', title: 'Past Paper AI Grading', status: 'coming-soon' },
  { id: 'r10', title: 'Study Groups', status: 'coming-soon' },
];
