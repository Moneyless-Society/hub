import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutCircleRolesInputSchema } from './PersonCreateWithoutCircleRolesInputSchema';
import { PersonUncheckedCreateWithoutCircleRolesInputSchema } from './PersonUncheckedCreateWithoutCircleRolesInputSchema';

export const PersonCreateOrConnectWithoutCircleRolesInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutCircleRolesInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutCircleRolesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutCircleRolesInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutCircleRolesInputSchema;
