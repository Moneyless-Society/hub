import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutValueResponsesInputSchema } from './PersonUpdateWithoutValueResponsesInputSchema';
import { PersonUncheckedUpdateWithoutValueResponsesInputSchema } from './PersonUncheckedUpdateWithoutValueResponsesInputSchema';
import { PersonCreateWithoutValueResponsesInputSchema } from './PersonCreateWithoutValueResponsesInputSchema';
import { PersonUncheckedCreateWithoutValueResponsesInputSchema } from './PersonUncheckedCreateWithoutValueResponsesInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutValueResponsesInputSchema: z.ZodType<Prisma.PersonUpsertWithoutValueResponsesInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutValueResponsesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutValueResponsesInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutValueResponsesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutValueResponsesInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutValueResponsesInputSchema;
