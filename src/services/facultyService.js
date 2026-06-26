import facultyData from '@/data/faculty.json';

export async function getLeadership() {
  return facultyData.leadership;
}

export async function getManagementCommittee() {
  return facultyData.management;
}

export async function getPrincipal() {
  return facultyData.leadership.find((p) => p.role === 'Principal') || null;
}

export async function getChairman() {
  return facultyData.leadership.find((p) => p.role === 'Chairman') || null;
}
