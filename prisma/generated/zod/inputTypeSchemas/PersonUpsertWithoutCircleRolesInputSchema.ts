import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutCircleRolesInputSchema } from './PersonUpdateWithoutCircleRolesInputSchema';
import { PersonUncheckedUpdateWithoutCircleRolesInputSchema } from './PersonUncheckedUpdateWithoutCircleRolesInputSchema';
import { PersonCreateWithoutCircleRolesInputSchema } from './PersonCreateWithoutCircleRolesInputSchema';
import { PersonUncheckedCreateWithoutCircleRolesInputSchema } from './PersonUncheckedCreateWithoutCircleRolesInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutCircleRolesInputSchema: z.ZodType<Prisma.PersonUpsertWithoutCircleRolesInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutCircleRolesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutCircleRolesInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutCircleRolesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutCircleRolesInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutCircleRolesInputSchema;
