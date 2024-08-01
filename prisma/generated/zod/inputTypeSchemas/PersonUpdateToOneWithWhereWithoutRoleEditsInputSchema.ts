import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutRoleEditsInputSchema } from './PersonUpdateWithoutRoleEditsInputSchema';
import { PersonUncheckedUpdateWithoutRoleEditsInputSchema } from './PersonUncheckedUpdateWithoutRoleEditsInputSchema';

export const PersonUpdateToOneWithWhereWithoutRoleEditsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutRoleEditsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutRoleEditsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutRoleEditsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutRoleEditsInputSchema;
