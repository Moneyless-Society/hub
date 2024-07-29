import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutValuesWrittenInputSchema } from './PersonUpdateWithoutValuesWrittenInputSchema';
import { PersonUncheckedUpdateWithoutValuesWrittenInputSchema } from './PersonUncheckedUpdateWithoutValuesWrittenInputSchema';

export const PersonUpdateToOneWithWhereWithoutValuesWrittenInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutValuesWrittenInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutValuesWrittenInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutValuesWrittenInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutValuesWrittenInputSchema;
