import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutUserInputSchema } from './PersonCreateWithoutUserInputSchema';
import { PersonUncheckedCreateWithoutUserInputSchema } from './PersonUncheckedCreateWithoutUserInputSchema';

export const PersonCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutUserInputSchema),z.lazy(() => PersonUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutUserInputSchema;
