import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutVolunterResponsesImportedInputSchema } from './PersonCreateWithoutVolunterResponsesImportedInputSchema';
import { PersonUncheckedCreateWithoutVolunterResponsesImportedInputSchema } from './PersonUncheckedCreateWithoutVolunterResponsesImportedInputSchema';
import { PersonCreateOrConnectWithoutVolunterResponsesImportedInputSchema } from './PersonCreateOrConnectWithoutVolunterResponsesImportedInputSchema';
import { PersonUpsertWithoutVolunterResponsesImportedInputSchema } from './PersonUpsertWithoutVolunterResponsesImportedInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutVolunterResponsesImportedInputSchema } from './PersonUpdateToOneWithWhereWithoutVolunterResponsesImportedInputSchema';
import { PersonUpdateWithoutVolunterResponsesImportedInputSchema } from './PersonUpdateWithoutVolunterResponsesImportedInputSchema';
import { PersonUncheckedUpdateWithoutVolunterResponsesImportedInputSchema } from './PersonUncheckedUpdateWithoutVolunterResponsesImportedInputSchema';

export const PersonUpdateOneWithoutVolunterResponsesImportedNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneWithoutVolunterResponsesImportedNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutVolunterResponsesImportedInputSchema),z.lazy(() => PersonUncheckedCreateWithoutVolunterResponsesImportedInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutVolunterResponsesImportedInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutVolunterResponsesImportedInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutVolunterResponsesImportedInputSchema),z.lazy(() => PersonUpdateWithoutVolunterResponsesImportedInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutVolunterResponsesImportedInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneWithoutVolunterResponsesImportedNestedInputSchema;
