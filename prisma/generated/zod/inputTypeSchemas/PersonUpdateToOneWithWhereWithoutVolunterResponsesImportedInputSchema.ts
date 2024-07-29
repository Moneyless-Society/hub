import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutVolunterResponsesImportedInputSchema } from './PersonUpdateWithoutVolunterResponsesImportedInputSchema';
import { PersonUncheckedUpdateWithoutVolunterResponsesImportedInputSchema } from './PersonUncheckedUpdateWithoutVolunterResponsesImportedInputSchema';

export const PersonUpdateToOneWithWhereWithoutVolunterResponsesImportedInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutVolunterResponsesImportedInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutVolunterResponsesImportedInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutVolunterResponsesImportedInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutVolunterResponsesImportedInputSchema;
