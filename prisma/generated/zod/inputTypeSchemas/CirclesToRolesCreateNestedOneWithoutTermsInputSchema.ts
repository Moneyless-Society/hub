import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateWithoutTermsInputSchema } from './CirclesToRolesCreateWithoutTermsInputSchema';
import { CirclesToRolesUncheckedCreateWithoutTermsInputSchema } from './CirclesToRolesUncheckedCreateWithoutTermsInputSchema';
import { CirclesToRolesCreateOrConnectWithoutTermsInputSchema } from './CirclesToRolesCreateOrConnectWithoutTermsInputSchema';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';

export const CirclesToRolesCreateNestedOneWithoutTermsInputSchema: z.ZodType<Prisma.CirclesToRolesCreateNestedOneWithoutTermsInput> = z.object({
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutTermsInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutTermsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CirclesToRolesCreateOrConnectWithoutTermsInputSchema).optional(),
  connect: z.lazy(() => CirclesToRolesWhereUniqueInputSchema).optional()
}).strict();

export default CirclesToRolesCreateNestedOneWithoutTermsInputSchema;
