import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutCircleRolesInputSchema } from './PersonCreateWithoutCircleRolesInputSchema';
import { PersonUncheckedCreateWithoutCircleRolesInputSchema } from './PersonUncheckedCreateWithoutCircleRolesInputSchema';
import { PersonCreateOrConnectWithoutCircleRolesInputSchema } from './PersonCreateOrConnectWithoutCircleRolesInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutCircleRolesInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutCircleRolesInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutCircleRolesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutCircleRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutCircleRolesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutCircleRolesInputSchema;
