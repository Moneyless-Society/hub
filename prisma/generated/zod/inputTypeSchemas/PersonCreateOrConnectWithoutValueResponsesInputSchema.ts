import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutValueResponsesInputSchema } from './PersonCreateWithoutValueResponsesInputSchema';
import { PersonUncheckedCreateWithoutValueResponsesInputSchema } from './PersonUncheckedCreateWithoutValueResponsesInputSchema';

export const PersonCreateOrConnectWithoutValueResponsesInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutValueResponsesInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutValueResponsesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutValueResponsesInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutValueResponsesInputSchema;
