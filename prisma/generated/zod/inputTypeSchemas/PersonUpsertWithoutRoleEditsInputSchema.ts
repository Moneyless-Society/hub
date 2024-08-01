import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutRoleEditsInputSchema } from './PersonUpdateWithoutRoleEditsInputSchema';
import { PersonUncheckedUpdateWithoutRoleEditsInputSchema } from './PersonUncheckedUpdateWithoutRoleEditsInputSchema';
import { PersonCreateWithoutRoleEditsInputSchema } from './PersonCreateWithoutRoleEditsInputSchema';
import { PersonUncheckedCreateWithoutRoleEditsInputSchema } from './PersonUncheckedCreateWithoutRoleEditsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutRoleEditsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutRoleEditsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutRoleEditsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutRoleEditsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutRoleEditsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoleEditsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutRoleEditsInputSchema;
