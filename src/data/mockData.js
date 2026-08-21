const seeds = [
  ['Amina Okafor', '0803 412 9081', 184500, 3, 'NEW', 'Untouched', 'No contact yet', 0, 'Contact now', 'blue'],
  ['Chinedu Okoro', '0816 782 1140', 76000, 12, 'PRO', 'Follow-up overdue', 'Follow-up overdue', 3, 'Follow up today', 'amber'],
  ['Yusuf Abdullahi', '0705 119 6204', 312000, 34, 'PTP', 'PTP due today', '₦45,000 due today', 2, 'Review PTP', 'indigo'],
  ['Ngozi Okafor', '0902 648 3317', 42000, 67, 'PRO', 'Broken PTP', 'Promise missed by 2 days', 5, 'Contact urgently', 'red'],
  ['Tunde Adebayo', '0806 240 1859', 96500, 1, 'NEW', 'Untouched', 'No contact yet', 0, 'Contact now', 'blue'],
  ['Emeka Obi', '0810 573 4491', 128000, 21, 'PTP', 'Partial repayment', '₦20,000 received', 4, 'Follow up Friday', 'green'],
  ['Folake Adeyemi', '0704 228 7740', 235000, 8, 'PRO', 'Follow-up due', 'Due today at 2:00 PM', 2, 'Contact borrower', 'amber'],
  ['Ibrahim Musa', '0802 900 1184', 51000, 4, 'NEW', 'Untouched', 'No contact yet', 0, 'Contact now', 'blue'],
  ['Blessing Eze', '0814 613 2902', 89500, 18, 'PTP', 'Active PTP', '₦30,000 due Aug 24', 3, 'Monitor PTP', 'indigo'],
  ['Seyi Balogun', '0901 875 3406', 640000, 73, 'PRO', 'Broken PTP', 'Promise missed by 5 days', 6, 'Contact urgently', 'red'],
  ['Hauwa Bello', '0805 321 7790', 142000, 29, 'PTP', 'Partial repayment', '₦15,000 received', 3, 'Follow up tomorrow', 'green'],
  ['David Nwosu', '0706 502 1881', 78000, 2, 'NEW', 'Untouched', 'No contact yet', 0, 'Contact now', 'blue'],
  ['Adaeze Nnamani', '0812 434 9901', 204000, 44, 'PRO', 'Follow-up overdue', 'Overdue by 1 day', 4, 'Follow up today', 'amber'],
  ['Musa Garba', '0906 718 2630', 56000, 11, 'PTP', 'PTP due today', '₦20,000 due today', 2, 'Review PTP', 'indigo'],
  ['Rashidat Lawal', '0809 188 4722', 118000, 6, 'PRO', 'Wrong number', 'Verify alternate number', 3, 'Update contact', 'red'],
  ['Kunle Ajayi', '0816 442 8071', 93000, 16, 'PRO', 'Refused repayment', 'Refused on last contact', 4, 'Escalate case', 'red'],
  ['Grace Udo', '0703 612 4478', 33000, 1, 'NEW', 'Untouched', 'No contact yet', 0, 'Contact now', 'blue'],
  ['Peter Ibe', '0807 218 3620', 274000, 38, 'PTP', 'Active PTP', '₦85,000 due Aug 26', 4, 'Monitor PTP', 'indigo'],
  ['Maryam Sani', '0903 530 1192', 67000, 9, 'PRO', 'Follow-up due', 'Due today at 11:30 AM', 2, 'Contact borrower', 'amber'],
  ['Oluwaseun Fashola', '0813 905 6618', 156000, 61, 'PRO', 'Broken PTP', 'Promise missed by 3 days', 5, 'Contact urgently', 'red'],
  ['Nneka Chukwu', '0804 740 2981', 48500, 5, 'NEW', 'Untouched', 'No contact yet', 0, 'Contact now', 'blue'],
  ['Abdulrahman Yusuf', '0708 611 7290', 187000, 25, 'PTP', 'Partial repayment', '₦40,000 received', 3, 'Follow up Friday', 'green'],
  ['Ifeoma Eze', '0902 304 5167', 112000, 14, 'PRO', 'Follow-up overdue', 'Follow-up overdue', 4, 'Follow up today', 'amber'],
  ['Samuel Adekunle', '0811 772 0834', 390000, 52, 'PRO', 'Active PTP', '₦100,000 due Aug 22', 5, 'Monitor PTP', 'indigo'],
  ['Zainab Ibrahim', '0808 149 6321', 72000, 7, 'NEW', 'Untouched', 'No contact yet', 0, 'Contact now', 'blue'],
  ['Victor Okechukwu', '0705 811 2049', 26000, 3, 'NEW', 'No answer', 'Tried twice today', 2, 'Try again tomorrow', 'amber'],
  ['Esther Nwachukwu', '0815 661 4702', 145000, 32, 'PTP', 'PTP due today', '₦50,000 due today', 3, 'Review PTP', 'indigo'],
  ['Babatunde Oni', '0905 442 7810', 218000, 81, 'PRO', 'Refused repayment', 'Requested supervisor review', 7, 'Escalate case', 'red'],
  ['Sarah Bassey', '0806 119 3357', 83500, 10, 'PRO', 'Follow-up due', 'Due tomorrow at 9:00 AM', 2, 'Schedule contact', 'amber'],
  ['Ikenna Obi', '0810 485 9926', 99000, 19, 'PTP', 'Active PTP', '₦25,000 due Aug 25', 3, 'Monitor PTP', 'indigo'],
  ['Khadija Ahmed', '0701 638 2210', 41000, 2, 'NEW', 'Untouched', 'No contact yet', 0, 'Contact now', 'blue'],
  ['Taiwo Akinyemi', '0803 777 1064', 176000, 47, 'PRO', 'Follow-up overdue', 'Overdue by 3 days', 5, 'Follow up today', 'amber'],
  ['Micheal Eze', '0907 210 8445', 132000, 23, 'PTP', 'Partial repayment', '₦12,000 received', 4, 'Follow up Friday', 'green'],
  ['Hadiza Sule', '0814 300 6188', 680000, 95, 'PRO', 'Broken PTP', 'Promise missed by 8 days', 8, 'Contact urgently', 'red'],
  ['Femi Oladipo', '0802 811 4703', 57000, 4, 'NEW', 'No answer', 'No answer yesterday', 1, 'Contact again', 'amber'],
  ['Janet Etim', '0704 991 6052', 102000, 13, 'PRO', 'Follow-up due', 'Due today at 4:30 PM', 2, 'Contact borrower', 'amber'],
  ['Uche Mba', '0812 620 3154', 286000, 36, 'PTP', 'Active PTP', '₦60,000 due Aug 23', 4, 'Monitor PTP', 'indigo'],
  ['Aisha Mohammed', '0901 126 7480', 47000, 1, 'NEW', 'Untouched', 'No contact yet', 0, 'Contact now', 'blue'],
  ['Rotimi Ojo', '0809 304 2288', 153000, 58, 'PRO', 'Partial repayment', '₦30,000 received', 5, 'Follow up tomorrow', 'green'],
  ['Caroline Akpan', '0816 233 5071', 88000, 27, 'PRO', 'Follow-up overdue', 'Overdue by 1 day', 3, 'Follow up today', 'amber'],
]

export const mockCases = seeds.map(([name, phone, balance, dpd, status, state, reason, attempts, next, tone], index) => {
  const initials = name.split(' ').map((part) => part[0]).join('').slice(0, 2)
  return { id: `case-${index + 1}`, initials, name, phone, balance, dpd, status, state, reason, attempts, next, tone, loan: `KV-${String(10482 - index * 17).padStart(5, '0')}`, last: attempts ? `${index % 2 ? 'Yesterday' : 'Aug 19'}, ${10 + index % 8}:15 AM` : '—', assignedAgentId: 'agent-1', originalPrincipal: balance + Math.round(balance * .42), amountRepaid: Math.round(balance * .42), createdAt: '2026-08-01' }
})

export const mockUsers = [
  { id: 'agent-1', name: 'Kemi Afolabi', email: 'agent@kyvo.test', role: 'COLLECTIONS_AGENT', team: 'Lagos Central', initials: 'KA' },
  { id: 'agent-2', name: 'Chisom Eze', email: 'chisom@kyvo.test', role: 'COLLECTIONS_AGENT', team: 'Lagos Central', initials: 'CE' },
  { id: 'supervisor-1', name: 'Kunle Adeyemi', email: 'supervisor@kyvo.test', role: 'SUPERVISOR', team: 'Lagos Central', initials: 'KU' },
]
