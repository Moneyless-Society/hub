import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesWhereInputSchema } from './CirclesToRolesWhereInputSchema';
import { CirclesToRolesUpdateWithoutTermsInputSchema } from './CirclesToRolesUpdateWithoutTermsInputSchema';
import { CirclesToRolesUncheckedUpdateWithoutTermsInputSchema } from './CirclesToRolesUncheckedUpdateWithoutTermsInputSchema';

export const CirclesToRolesUpdateToOneWithWhereWithoutTermsInputSchema: z.ZodType<Prisma.CirclesToRolesUpdateToOneWithWhereWithoutTermsInput> = z.object({
  where: z.lazy(() => CirclesToRolesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CirclesToRolesUpdateWithoutTermsInputSchema),z.lazy(() => CirclesToRolesUncheckedUpdateWithoutTermsInputSchema) ]),
}).strict();

export default CirclesToRolesUpdateToOneWithWhereWithoutTermsInputSchema;
