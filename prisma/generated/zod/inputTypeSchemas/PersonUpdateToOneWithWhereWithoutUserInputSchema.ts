import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutUserInputSchema } from './PersonUpdateWithoutUserInputSchema';
import { PersonUncheckedUpdateWithoutUserInputSchema } from './PersonUncheckedUpdateWithoutUserInputSchema';

export const PersonUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutUserInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutUserInputSchema;
