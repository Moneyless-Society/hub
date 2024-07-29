import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutValuesWrittenInputSchema } from './PersonCreateWithoutValuesWrittenInputSchema';
import { PersonUncheckedCreateWithoutValuesWrittenInputSchema } from './PersonUncheckedCreateWithoutValuesWrittenInputSchema';

export const PersonCreateOrConnectWithoutValuesWrittenInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutValuesWrittenInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutValuesWrittenInputSchema),z.lazy(() => PersonUncheckedCreateWithoutValuesWrittenInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutValuesWrittenInputSchema;
