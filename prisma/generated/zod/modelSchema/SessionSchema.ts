import { z } from 'zod';

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string().cuid(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  userId: z.string(),
})

export type Session = z.infer<typeof SessionSchema>

export default SessionSchema;
