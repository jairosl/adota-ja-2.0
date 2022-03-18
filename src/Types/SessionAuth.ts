export interface SessionAuth {
  token: string;
  email: string;
  createdAt: Date;
  expiresInDays: number;
}
