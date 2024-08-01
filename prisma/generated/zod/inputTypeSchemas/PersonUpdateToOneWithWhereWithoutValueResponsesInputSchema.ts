import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutValueResponsesInputSchema } from './PersonUpdateWithoutValueResponsesInputSchema';
import { PersonUncheckedUpdateWithoutValueResponsesInputSchema } from './PersonUncheckedUpdateWithoutValueResponsesInputSchema';

export const PersonUpdateToOneWithWhereWithoutValueResponsesInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutValueResponsesInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutValueResponsesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutValueResponsesInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutValueResponsesInputSchema;
