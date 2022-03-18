import { SessionAuth } from "../Types/SessionAuth";

export interface Session {

  createSession(email: string, password: string): SessionAuth;
  removeSession(token: string): void;
  getTokenByEmail(email: string): string | null;
  isValidToken(token: string, email: string): boolean;
}
