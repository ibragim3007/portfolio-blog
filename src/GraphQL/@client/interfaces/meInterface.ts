export interface MeInterface {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  createDate: Date;
  lastOnline: Date;
}

export type Role = 'USER' | 'ADMIN' | 'TESTER';
