import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesCreateWithoutTermsInputSchema } from './CirclesToRolesCreateWithoutTermsInputSchema';
import { CirclesToRolesUncheckedCreateWithoutTermsInputSchema } from './CirclesToRolesUncheckedCreateWithoutTermsInputSchema';

export const CirclesToRolesCreateOrConnectWithoutTermsInputSchema: z.ZodType<Prisma.CirclesToRolesCreateOrConnectWithoutTermsInput> = z.object({
  where: z.lazy(() => CirclesToRolesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutTermsInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutTermsInputSchema) ]),
}).strict();

export default CirclesToRolesCreateOrConnectWithoutTermsInputSchema;
