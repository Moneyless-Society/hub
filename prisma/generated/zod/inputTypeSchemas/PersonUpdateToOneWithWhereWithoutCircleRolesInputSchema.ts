import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutCircleRolesInputSchema } from './PersonUpdateWithoutCircleRolesInputSchema';
import { PersonUncheckedUpdateWithoutCircleRolesInputSchema } from './PersonUncheckedUpdateWithoutCircleRolesInputSchema';

export const PersonUpdateToOneWithWhereWithoutCircleRolesInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutCircleRolesInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutCircleRolesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutCircleRolesInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutCircleRolesInputSchema;
