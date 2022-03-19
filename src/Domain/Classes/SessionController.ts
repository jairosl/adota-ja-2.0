import { Session } from "../../Entities/Session";
import { SessionAuth } from "../../Types/SessionAuth";
import { v4 as uuidv4, validate } from 'uuid';

export class SessionController implements Session {
  private sessions: Array<SessionAuth> = []

  createSession(email: string, password: string): SessionAuth { 

    const dataSession: SessionAuth = { 
      email,
      token: uuidv4(),
      createdAt: new Date(),
      expiresInDays: 1,
    }

    this.sessions.push(dataSession);

    return dataSession;
  }

  removeSession(token: string): void {
    const filterRemoveToken = this.sessions
      .filter(session => session.token !== token)
    
    this.sessions = filterRemoveToken;
    
  }

  getTokenByEmail(email: string): string | null {
    const emailAlreadyExists = this.sessions
      .filter(session => session.email === email)[0];
    
    if (!emailAlreadyExists) return null;
    
    return emailAlreadyExists.token;
  }

  isValidToken(token: string, email: string): boolean {
    const tokenExist = this.getTokenByEmail(email)
    
    return validate(token) && !!tokenExist && token === tokenExist;
  }

}
