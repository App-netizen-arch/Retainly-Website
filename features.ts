import {
  Sparkles,
  WifiOff,
  BookMarked,
  RotateCcw,
  Timer,
  Layers,
  BarChart3,
  FileClock,
  FlaskConical,
  MessageCircleQuestion,
  FileText,
  ScanText,
  Library,
  Moon,
  UploadCloud,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  flagship: boolean;
}

export const FEATURES: Feature[] = [
  {
    id: 'ai-planner',
    title: 'AI Study Planner',
    description: 'Auto-builds a personalized revision schedule from your syllabus.',
    icon: Sparkles,
    flagship: true,
  },
  {
    id: 'offline',
    title: 'Offline First',
    description: 'Every feature works with zero internet connection.',
    icon: WifiOff,
    flagship: true,
  },
  {
    id: 'board-syllabus',
    title: 'Board-Aware Syllabus',
    description: 'Matched to Federal, Punjab, Sindh, and KP board curricula.',
    icon: BookMarked,
    flagship: true,
  },
  {
    id: 'smart-revision',
    title: 'Smart Revision',
    description: 'Resurfaces topics right before you\'re likely to forget them.',
    icon: RotateCcw,
    flagship: true,
  },
  {
    id: 'focus-timer',
    title: 'Focus Timer',
    description: 'Pomodoro-style sessions tuned for study stamina.',
    icon: Timer,
    flagship: true,
  },
  {
    id: 'flashcards',
    title: 'Flashcards',
    description: 'Auto-generated from your notes for quick recall drills.',
    icon: Layers,
    flagship: true,
  },
  {
    id: 'analytics',
    title: 'Study Analytics',
    description: 'See time spent, weak chapters, and streaks at a glance.',
    icon: BarChart3,
    flagship: false,
  },
  {
    id: 'past-papers',
    title: 'Past Paper Tracking',
    description: 'Practice real past papers with progress tracking.',
    icon: FileClock,
    flagship: false,
  },
  {
    id: 'practicals',
    title: 'Practical Records',
    description: 'Log lab work and practicals per subject.',
    icon: FlaskConical,
    flagship: false,
  },
  {
    id: 'ai-tutor',
    title: 'AI Tutor',
    description: 'Ask doubts and get instant, syllabus-aligned explanations.',
    icon: MessageCircleQuestion,
    flagship: false,
  },
  {
    id: 'pdf-reader',
    title: 'PDF Reader',
    description: 'Built-in reader with highlighting and note-taking.',
    icon: FileText,
    flagship: false,
  },
  {
    id: 'ocr',
    title: 'OCR Scanner',
    description: 'Turn photographed textbook pages into searchable notes.',
    icon: ScanText,
    flagship: false,
  },
  {
    id: 'resource-hub',
    title: 'Resource Hub',
    description: 'Curated notes, guides, and video links per chapter.',
    icon: Library,
    flagship: false,
  },
  {
    id: 'dark-mode',
    title: 'Dark Mode',
    description: 'Easy on the eyes for late-night revision sessions.',
    icon: Moon,
    flagship: false,
  },
  {
    id: 'cloud-backup',
    title: 'Cloud Backup',
    description: 'Optional sync so your progress is never lost.',
    icon: UploadCloud,
    flagship: false,
  },
];
