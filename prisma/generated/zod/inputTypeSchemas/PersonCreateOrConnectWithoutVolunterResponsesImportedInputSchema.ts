import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutVolunterResponsesImportedInputSchema } from './PersonCreateWithoutVolunterResponsesImportedInputSchema';
import { PersonUncheckedCreateWithoutVolunterResponsesImportedInputSchema } from './PersonUncheckedCreateWithoutVolunterResponsesImportedInputSchema';

export const PersonCreateOrConnectWithoutVolunterResponsesImportedInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutVolunterResponsesImportedInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutVolunterResponsesImportedInputSchema),z.lazy(() => PersonUncheckedCreateWithoutVolunterResponsesImportedInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutVolunterResponsesImportedInputSchema;
