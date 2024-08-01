import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutRoleEditsInputSchema } from './PersonCreateWithoutRoleEditsInputSchema';
import { PersonUncheckedCreateWithoutRoleEditsInputSchema } from './PersonUncheckedCreateWithoutRoleEditsInputSchema';
import { PersonCreateOrConnectWithoutRoleEditsInputSchema } from './PersonCreateOrConnectWithoutRoleEditsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutRoleEditsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutRoleEditsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutRoleEditsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoleEditsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutRoleEditsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutRoleEditsInputSchema;
