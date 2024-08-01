import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutValueResponsesInputSchema } from './PersonCreateWithoutValueResponsesInputSchema';
import { PersonUncheckedCreateWithoutValueResponsesInputSchema } from './PersonUncheckedCreateWithoutValueResponsesInputSchema';
import { PersonCreateOrConnectWithoutValueResponsesInputSchema } from './PersonCreateOrConnectWithoutValueResponsesInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutValueResponsesInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutValueResponsesInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutValueResponsesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutValueResponsesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutValueResponsesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutValueResponsesInputSchema;
