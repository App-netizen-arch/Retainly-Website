export interface Testimonial {
  id: string;
  name: string;
  location: string;
  gradeContext: string;
  quote: string;
  avatarInitials: string;
  subject: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ayesha Mahmood',
    location: 'Lahore',
    gradeContext: 'Matric 2025, Science Group',
    subject: 'Punjab Board',
    quote:
      'The revision planner reminded me about organic chemistry three days before my retest — I had completely forgotten that chapter. Ended up scoring 87 marks.',
    avatarInitials: 'AM',
  },
  {
    id: 't2',
    name: 'Bilal Hassan',
    location: 'Karachi',
    gradeContext: 'Matric 2025, Computer Science',
    subject: 'Sindh Board',
    quote:
      'My phone is a basic Android with 2GB RAM. I was worried it would lag, but Retainly runs completely offline and never slows down. The focus timer helped me stop wasting time on WhatsApp while studying.',
    avatarInitials: 'BH',
  },
  {
    id: 't3',
    name: 'Sana Qadir',
    location: 'Peshawar',
    gradeContext: 'Matric 2024, Biology Group',
    subject: 'KP Board',
    quote:
      'I used to keep my notes in five different notebooks and on WhatsApp with myself. Now everything is in one place — flashcards, practicals, past papers. The AI tutor answered my question about osmosis at 11 PM when I had no data.',
    avatarInitials: 'SQ',
  },
  {
    id: 't4',
    name: 'Hamza Rauf',
    location: 'Islamabad',
    gradeContext: 'Matric 2025, Science Group',
    subject: 'Federal Board',
    quote:
      'My area has very patchy internet. I downloaded everything on Wi-Fi at school, and then studied all week offline at home. The planner kept my Physics and Chemistry schedule balanced without me doing any math.',
    avatarInitials: 'HR',
  },
];
