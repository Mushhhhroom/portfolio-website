// Your resume lists "Organization, Leadership, or Volunteer Experience" instead of formal employment.
// We'll surface this section to highlight your leadership and volunteer work professionally.
export const experience = [
 {
 id: 1,
 role: 'Cinema Ticketing System (Capstone Projects)',
 organization: "Young Achievers' School of Caloocan INC.",
 period: '2022 — 2023',
 location: 'Caloocan City',
 description:
 'This desktop application, built with VB.NET and Microsoft Access, is designed to streamline the movie ticketing process for box-office staff. It eliminates double-booking and slow queues by offering a visual seat selection interface, automated billing, and an easy-to-use dashboard for managing showtimes and tracking daily sales.The goal of this desktop program, which was made with Microsoft Access and VB.NET, is to make it easier for box office workers to purchase movie tickets. By providing a visual seat selection interface, automated billing, and an intuitive dashboard for controlling showtimes and monitoring daily sales, it gets rid of double booking and long lines.',
 responsibilities: [
 'Tech Stack: VB.NET (Windows Forms), Microsoft Access, OleDb Data Provider, SQL',
 'Received the MVP Award (S.Y. 2022 — 2023)',
 ],
 technologies: [],
 },
 {
 id: 2,
 role: 'Active Board of Programmer Officer',
 organization: 'Junior Philippines Society — Quezon City University Chapter',
 period: '2023 — Present',
 location: 'Quezon City University',
 description:
 'Active board member of the Junior Philippines Society (JPCS) program committee at QCU, contributing to programming initiatives and student-led tech activities.',
 responsibilities: [
 'Participate in programming and tech community events',
 'Support student-led software development initiatives',
 ],
 technologies: [],
 },
];

export const hasExperience = experience.length > 0;
