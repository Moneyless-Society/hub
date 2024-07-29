import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutCircleAimEditsInputSchema } from './PersonCreateWithoutCircleAimEditsInputSchema';
import { PersonUncheckedCreateWithoutCircleAimEditsInputSchema } from './PersonUncheckedCreateWithoutCircleAimEditsInputSchema';
import { PersonCreateOrConnectWithoutCircleAimEditsInputSchema } from './PersonCreateOrConnectWithoutCircleAimEditsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutCircleAimEditsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutCircleAimEditsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutCircleAimEditsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutCircleAimEditsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutCircleAimEditsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutCircleAimEditsInputSchema;
