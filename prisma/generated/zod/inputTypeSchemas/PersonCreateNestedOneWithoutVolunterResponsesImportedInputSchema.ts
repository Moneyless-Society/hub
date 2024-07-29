import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutVolunterResponsesImportedInputSchema } from './PersonCreateWithoutVolunterResponsesImportedInputSchema';
import { PersonUncheckedCreateWithoutVolunterResponsesImportedInputSchema } from './PersonUncheckedCreateWithoutVolunterResponsesImportedInputSchema';
import { PersonCreateOrConnectWithoutVolunterResponsesImportedInputSchema } from './PersonCreateOrConnectWithoutVolunterResponsesImportedInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutVolunterResponsesImportedInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutVolunterResponsesImportedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutVolunterResponsesImportedInputSchema),z.lazy(() => PersonUncheckedCreateWithoutVolunterResponsesImportedInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutVolunterResponsesImportedInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutVolunterResponsesImportedInputSchema;
