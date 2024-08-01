import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutUserInputSchema } from './PersonUpdateWithoutUserInputSchema';
import { PersonUncheckedUpdateWithoutUserInputSchema } from './PersonUncheckedUpdateWithoutUserInputSchema';
import { PersonCreateWithoutUserInputSchema } from './PersonCreateWithoutUserInputSchema';
import { PersonUncheckedCreateWithoutUserInputSchema } from './PersonUncheckedCreateWithoutUserInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutUserInputSchema: z.ZodType<Prisma.PersonUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutUserInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutUserInputSchema),z.lazy(() => PersonUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutUserInputSchema;
