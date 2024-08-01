import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutVolunterResponsesImportedInputSchema } from './PersonUpdateWithoutVolunterResponsesImportedInputSchema';
import { PersonUncheckedUpdateWithoutVolunterResponsesImportedInputSchema } from './PersonUncheckedUpdateWithoutVolunterResponsesImportedInputSchema';
import { PersonCreateWithoutVolunterResponsesImportedInputSchema } from './PersonCreateWithoutVolunterResponsesImportedInputSchema';
import { PersonUncheckedCreateWithoutVolunterResponsesImportedInputSchema } from './PersonUncheckedCreateWithoutVolunterResponsesImportedInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutVolunterResponsesImportedInputSchema: z.ZodType<Prisma.PersonUpsertWithoutVolunterResponsesImportedInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutVolunterResponsesImportedInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutVolunterResponsesImportedInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutVolunterResponsesImportedInputSchema),z.lazy(() => PersonUncheckedCreateWithoutVolunterResponsesImportedInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutVolunterResponsesImportedInputSchema;
