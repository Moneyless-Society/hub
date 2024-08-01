import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreatepronounsInputSchema } from './PersonCreatepronounsInputSchema';
import { ContactMethodSchema } from './ContactMethodSchema';

export const PersonCreateManyInputSchema: z.ZodType<Prisma.PersonCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  pronouns: z.union([ z.lazy(() => PersonCreatepronounsInputSchema),z.string().array() ]).optional(),
  bio: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  preferredContactMethod: z.lazy(() => ContactMethodSchema).optional().nullable(),
  volunteerQuestionId: z.number().int()
}).strict();

export default PersonCreateManyInputSchema;
