import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutRoleEditsInputSchema } from './PersonCreateWithoutRoleEditsInputSchema';
import { PersonUncheckedCreateWithoutRoleEditsInputSchema } from './PersonUncheckedCreateWithoutRoleEditsInputSchema';

export const PersonCreateOrConnectWithoutRoleEditsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutRoleEditsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutRoleEditsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoleEditsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutRoleEditsInputSchema;
