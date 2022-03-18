import { SessionController } from '../Domain/Classes/SessionController'

const makeSut = {
  session: new SessionController(),
  email: 'mail@mail',
  password: 'secret',
  fakeToken: '2b6c1c3d-ad3e-4a40-b9c5-b0b2b0024c27'
}

describe('Session',() => {
  beforeEach(() => {
    makeSut.session = new SessionController();
  })

  it('should return create session with props correct', () => {
    const { session, email, password } = makeSut

    const resultCreateSession = session.createSession(email, password)

    expect(resultCreateSession).toHaveProperty('email')
    expect(resultCreateSession).toHaveProperty('token')
    expect(resultCreateSession).toHaveProperty('createdAt')
    expect(resultCreateSession).toHaveProperty('expiresInDays')
  })

  it('should return different and unique tokens', () => {
    const { session, email, password } = makeSut

    const SessionUno = session.createSession(email, password)

    const SessionTwo = session.createSession(email, password)

    expect(SessionUno.token).not.toEqual(SessionTwo.token)
  })

  it('should return token if email already exist', () => {
    const { session, email, password } = makeSut

    const user = session.createSession(email, password)
    const token = session.getTokenByEmail(email)

    expect(token).toEqual(user.token)
  })

  it('should return null for token if email not exist', () => {
    const { session, email } = makeSut

    const token = session.getTokenByEmail(email)

    expect(token).toBeNull()
  })

  it('should remove session for token valid', () => {
    const { session, email, password} = makeSut

    session.createSession(email, password)
    const createUserToken = session.getTokenByEmail(email)

    session.removeSession(createUserToken as string)

    const removeToken = session.getTokenByEmail(email)

    expect(removeToken).toBeNull()
  })

  it('should remove session for token not valid', () => {
    const { session, email} = makeSut

    const fakeToken = "teste"

    session.removeSession(fakeToken)

    const removeToken = session.getTokenByEmail(email)

    expect(removeToken).toBeNull()
  })

  it('should verify token valid for email exist', () => {
    const { session, email, password} = makeSut

    const user = session.createSession(email, password)
    

    const validToken = session.isValidToken(user.token, email)

    expect(validToken).toBeTruthy()
  })

  it('should verify token valid for email not exist', () => {
    const { session, email, fakeToken} = makeSut
    const validToken = session.isValidToken(fakeToken, email)

    expect(validToken).toBeFalsy()
  })


})
