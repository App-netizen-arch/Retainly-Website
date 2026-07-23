export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-free',
    question: 'Is Retainly free to use?',
    answer:
      'Yes. Core features — the study planner, offline mode, flashcards, focus timer, and board syllabus — are completely free. Optional cloud backup and advanced AI features will be available on a premium tier when they launch.',
  },
  {
    id: 'faq-offline',
    question: 'Does it work without internet?',
    answer:
      'Fully. Every core feature — planning, revision, flashcards, focus timer, OCR scanner, and PDF reader — works with zero internet connection. You only need Wi-Fi once to download the app and any optional cloud backups.',
  },
  {
    id: 'faq-boards',
    question: 'Which boards are supported?',
    answer:
      'Retainly currently supports Federal Board, Punjab Board, Sindh Board, and Khyber Pakhtunkhwa (KP) Board for Matric (9th and 10th grade). Balochistan Board support is on the roadmap for an upcoming release.',
  },
  {
    id: 'faq-ai',
    question: 'Do I need to use the AI features?',
    answer:
      'No. The AI study planner and AI tutor are optional. You can use Retainly as a fully manual planner — set your own schedule, add your own notes, and track your own progress. AI assists; it does not take over.',
  },
  {
    id: 'faq-backup',
    question: 'Can I back up my data?',
    answer:
      'Your data is stored locally on your device and never lost as long as you have the app installed. An optional cloud backup feature is coming soon, which will let you restore your notes, flashcards, and progress if you switch phones.',
  },
  {
    id: 'faq-low-end',
    question: 'Will it run on a basic or low-end phone?',
    answer:
      'Yes. Retainly is built to run on entry-level Android devices with as little as 2GB RAM. The offline-first architecture means there are no heavy network calls slowing things down. The app has been tested on budget phones common in Pakistan.',
  },
  {
    id: 'faq-privacy',
    question: 'How is my data kept private?',
    answer:
      'By default, all your notes, flashcards, and progress stay entirely on your device — nothing is sent to any server. If you choose to enable cloud backup in a future update, you will be fully informed of what is synced and can delete it at any time.',
  },
];
