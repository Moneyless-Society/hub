import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutValuesWrittenInputSchema } from './PersonUpdateWithoutValuesWrittenInputSchema';
import { PersonUncheckedUpdateWithoutValuesWrittenInputSchema } from './PersonUncheckedUpdateWithoutValuesWrittenInputSchema';
import { PersonCreateWithoutValuesWrittenInputSchema } from './PersonCreateWithoutValuesWrittenInputSchema';
import { PersonUncheckedCreateWithoutValuesWrittenInputSchema } from './PersonUncheckedCreateWithoutValuesWrittenInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutValuesWrittenInputSchema: z.ZodType<Prisma.PersonUpsertWithoutValuesWrittenInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutValuesWrittenInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutValuesWrittenInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutValuesWrittenInputSchema),z.lazy(() => PersonUncheckedCreateWithoutValuesWrittenInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutValuesWrittenInputSchema;
