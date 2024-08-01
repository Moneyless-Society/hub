import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutUserInputSchema } from './PersonCreateWithoutUserInputSchema';
import { PersonUncheckedCreateWithoutUserInputSchema } from './PersonUncheckedCreateWithoutUserInputSchema';
import { PersonCreateOrConnectWithoutUserInputSchema } from './PersonCreateOrConnectWithoutUserInputSchema';
import { PersonUpsertWithoutUserInputSchema } from './PersonUpsertWithoutUserInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutUserInputSchema } from './PersonUpdateToOneWithWhereWithoutUserInputSchema';
import { PersonUpdateWithoutUserInputSchema } from './PersonUpdateWithoutUserInputSchema';
import { PersonUncheckedUpdateWithoutUserInputSchema } from './PersonUncheckedUpdateWithoutUserInputSchema';

export const PersonUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutUserInputSchema),z.lazy(() => PersonUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => PersonUpdateWithoutUserInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneWithoutUserNestedInputSchema;
