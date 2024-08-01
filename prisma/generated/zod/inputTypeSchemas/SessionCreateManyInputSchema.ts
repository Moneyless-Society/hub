import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  userId: z.string()
}).strict();

export default SessionCreateManyInputSchema;
