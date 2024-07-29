import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutUserInputSchema } from './PersonCreateWithoutUserInputSchema';
import { PersonUncheckedCreateWithoutUserInputSchema } from './PersonUncheckedCreateWithoutUserInputSchema';
import { PersonCreateOrConnectWithoutUserInputSchema } from './PersonCreateOrConnectWithoutUserInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutUserInputSchema),z.lazy(() => PersonUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutUserInputSchema;
