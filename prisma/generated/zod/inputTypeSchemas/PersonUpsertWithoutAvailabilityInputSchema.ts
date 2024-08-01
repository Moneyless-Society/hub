import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutAvailabilityInputSchema } from './PersonUpdateWithoutAvailabilityInputSchema';
import { PersonUncheckedUpdateWithoutAvailabilityInputSchema } from './PersonUncheckedUpdateWithoutAvailabilityInputSchema';
import { PersonCreateWithoutAvailabilityInputSchema } from './PersonCreateWithoutAvailabilityInputSchema';
import { PersonUncheckedCreateWithoutAvailabilityInputSchema } from './PersonUncheckedCreateWithoutAvailabilityInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutAvailabilityInputSchema: z.ZodType<Prisma.PersonUpsertWithoutAvailabilityInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutAvailabilityInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutAvailabilityInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutAvailabilityInputSchema),z.lazy(() => PersonUncheckedCreateWithoutAvailabilityInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutAvailabilityInputSchema;
