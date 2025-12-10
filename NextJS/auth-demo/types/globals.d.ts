export {};

export type Roles = "admin" | "moderator";

declare global{
    interface CustomJwtSessionClaims{
    metadata: {
      role?: Roles;
    };
    public_metadata?: {
        role?: Roles;
    };
    }
}