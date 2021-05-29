export interface LoginResponse{
  succeeded: boolean,
  isLockedOut: boolean,
  isNotAllowed: boolean,
  requiresTwoFactor: boolean
}