import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutCircleAimEditsInputSchema } from './PersonCreateWithoutCircleAimEditsInputSchema';
import { PersonUncheckedCreateWithoutCircleAimEditsInputSchema } from './PersonUncheckedCreateWithoutCircleAimEditsInputSchema';
import { PersonCreateOrConnectWithoutCircleAimEditsInputSchema } from './PersonCreateOrConnectWithoutCircleAimEditsInputSchema';
import { PersonUpsertWithoutCircleAimEditsInputSchema } from './PersonUpsertWithoutCircleAimEditsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutCircleAimEditsInputSchema } from './PersonUpdateToOneWithWhereWithoutCircleAimEditsInputSchema';
import { PersonUpdateWithoutCircleAimEditsInputSchema } from './PersonUpdateWithoutCircleAimEditsInputSchema';
import { PersonUncheckedUpdateWithoutCircleAimEditsInputSchema } from './PersonUncheckedUpdateWithoutCircleAimEditsInputSchema';

export const PersonUpdateOneWithoutCircleAimEditsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneWithoutCircleAimEditsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutCircleAimEditsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutCircleAimEditsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutCircleAimEditsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutCircleAimEditsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutCircleAimEditsInputSchema),z.lazy(() => PersonUpdateWithoutCircleAimEditsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutCircleAimEditsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneWithoutCircleAimEditsNestedInputSchema;
