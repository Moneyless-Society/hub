import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonCountOutputTypeSelectSchema } from './PersonCountOutputTypeSelectSchema';

export const PersonCountOutputTypeArgsSchema: z.ZodType<Prisma.PersonCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PersonCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PersonCountOutputTypeSelectSchema;
