import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PersonCreatepronounsInputSchema: z.ZodType<Prisma.PersonCreatepronounsInput> = z.object({
  set: z.string().array()
}).strict();

export default PersonCreatepronounsInputSchema;
