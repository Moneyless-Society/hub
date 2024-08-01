import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutCircleAimEditsInputSchema } from './PersonUpdateWithoutCircleAimEditsInputSchema';
import { PersonUncheckedUpdateWithoutCircleAimEditsInputSchema } from './PersonUncheckedUpdateWithoutCircleAimEditsInputSchema';

export const PersonUpdateToOneWithWhereWithoutCircleAimEditsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutCircleAimEditsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutCircleAimEditsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutCircleAimEditsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutCircleAimEditsInputSchema;
