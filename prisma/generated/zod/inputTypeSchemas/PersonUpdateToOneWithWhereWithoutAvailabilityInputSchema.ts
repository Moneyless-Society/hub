import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutAvailabilityInputSchema } from './PersonUpdateWithoutAvailabilityInputSchema';
import { PersonUncheckedUpdateWithoutAvailabilityInputSchema } from './PersonUncheckedUpdateWithoutAvailabilityInputSchema';

export const PersonUpdateToOneWithWhereWithoutAvailabilityInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutAvailabilityInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutAvailabilityInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutAvailabilityInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutAvailabilityInputSchema;
