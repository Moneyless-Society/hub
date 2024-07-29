import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesUpdateWithoutTermsInputSchema } from './CirclesToRolesUpdateWithoutTermsInputSchema';
import { CirclesToRolesUncheckedUpdateWithoutTermsInputSchema } from './CirclesToRolesUncheckedUpdateWithoutTermsInputSchema';
import { CirclesToRolesCreateWithoutTermsInputSchema } from './CirclesToRolesCreateWithoutTermsInputSchema';
import { CirclesToRolesUncheckedCreateWithoutTermsInputSchema } from './CirclesToRolesUncheckedCreateWithoutTermsInputSchema';
import { CirclesToRolesWhereInputSchema } from './CirclesToRolesWhereInputSchema';

export const CirclesToRolesUpsertWithoutTermsInputSchema: z.ZodType<Prisma.CirclesToRolesUpsertWithoutTermsInput> = z.object({
  update: z.union([ z.lazy(() => CirclesToRolesUpdateWithoutTermsInputSchema),z.lazy(() => CirclesToRolesUncheckedUpdateWithoutTermsInputSchema) ]),
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutTermsInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutTermsInputSchema) ]),
  where: z.lazy(() => CirclesToRolesWhereInputSchema).optional()
}).strict();

export default CirclesToRolesUpsertWithoutTermsInputSchema;
