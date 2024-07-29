import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutValuesWrittenInputSchema } from './PersonCreateWithoutValuesWrittenInputSchema';
import { PersonUncheckedCreateWithoutValuesWrittenInputSchema } from './PersonUncheckedCreateWithoutValuesWrittenInputSchema';
import { PersonCreateOrConnectWithoutValuesWrittenInputSchema } from './PersonCreateOrConnectWithoutValuesWrittenInputSchema';
import { PersonUpsertWithoutValuesWrittenInputSchema } from './PersonUpsertWithoutValuesWrittenInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutValuesWrittenInputSchema } from './PersonUpdateToOneWithWhereWithoutValuesWrittenInputSchema';
import { PersonUpdateWithoutValuesWrittenInputSchema } from './PersonUpdateWithoutValuesWrittenInputSchema';
import { PersonUncheckedUpdateWithoutValuesWrittenInputSchema } from './PersonUncheckedUpdateWithoutValuesWrittenInputSchema';

export const PersonUpdateOneWithoutValuesWrittenNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneWithoutValuesWrittenNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutValuesWrittenInputSchema),z.lazy(() => PersonUncheckedCreateWithoutValuesWrittenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutValuesWrittenInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutValuesWrittenInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutValuesWrittenInputSchema),z.lazy(() => PersonUpdateWithoutValuesWrittenInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutValuesWrittenInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneWithoutValuesWrittenNestedInputSchema;
