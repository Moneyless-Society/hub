import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutCircleAimEditsInputSchema } from './PersonUpdateWithoutCircleAimEditsInputSchema';
import { PersonUncheckedUpdateWithoutCircleAimEditsInputSchema } from './PersonUncheckedUpdateWithoutCircleAimEditsInputSchema';
import { PersonCreateWithoutCircleAimEditsInputSchema } from './PersonCreateWithoutCircleAimEditsInputSchema';
import { PersonUncheckedCreateWithoutCircleAimEditsInputSchema } from './PersonUncheckedCreateWithoutCircleAimEditsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutCircleAimEditsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutCircleAimEditsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutCircleAimEditsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutCircleAimEditsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutCircleAimEditsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutCircleAimEditsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutCircleAimEditsInputSchema;
