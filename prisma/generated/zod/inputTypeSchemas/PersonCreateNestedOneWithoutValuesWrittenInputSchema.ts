import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutValuesWrittenInputSchema } from './PersonCreateWithoutValuesWrittenInputSchema';
import { PersonUncheckedCreateWithoutValuesWrittenInputSchema } from './PersonUncheckedCreateWithoutValuesWrittenInputSchema';
import { PersonCreateOrConnectWithoutValuesWrittenInputSchema } from './PersonCreateOrConnectWithoutValuesWrittenInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutValuesWrittenInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutValuesWrittenInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutValuesWrittenInputSchema),z.lazy(() => PersonUncheckedCreateWithoutValuesWrittenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutValuesWrittenInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutValuesWrittenInputSchema;
