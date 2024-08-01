import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutAvailabilityInputSchema } from './PersonCreateWithoutAvailabilityInputSchema';
import { PersonUncheckedCreateWithoutAvailabilityInputSchema } from './PersonUncheckedCreateWithoutAvailabilityInputSchema';
import { PersonCreateOrConnectWithoutAvailabilityInputSchema } from './PersonCreateOrConnectWithoutAvailabilityInputSchema';
import { PersonUpsertWithoutAvailabilityInputSchema } from './PersonUpsertWithoutAvailabilityInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutAvailabilityInputSchema } from './PersonUpdateToOneWithWhereWithoutAvailabilityInputSchema';
import { PersonUpdateWithoutAvailabilityInputSchema } from './PersonUpdateWithoutAvailabilityInputSchema';
import { PersonUncheckedUpdateWithoutAvailabilityInputSchema } from './PersonUncheckedUpdateWithoutAvailabilityInputSchema';

export const PersonUpdateOneRequiredWithoutAvailabilityNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutAvailabilityNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutAvailabilityInputSchema),z.lazy(() => PersonUncheckedCreateWithoutAvailabilityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutAvailabilityInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutAvailabilityInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutAvailabilityInputSchema),z.lazy(() => PersonUpdateWithoutAvailabilityInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutAvailabilityInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutAvailabilityNestedInputSchema;
