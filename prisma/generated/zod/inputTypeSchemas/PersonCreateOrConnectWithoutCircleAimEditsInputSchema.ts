import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutCircleAimEditsInputSchema } from './PersonCreateWithoutCircleAimEditsInputSchema';
import { PersonUncheckedCreateWithoutCircleAimEditsInputSchema } from './PersonUncheckedCreateWithoutCircleAimEditsInputSchema';

export const PersonCreateOrConnectWithoutCircleAimEditsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutCircleAimEditsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutCircleAimEditsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutCircleAimEditsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutCircleAimEditsInputSchema;
