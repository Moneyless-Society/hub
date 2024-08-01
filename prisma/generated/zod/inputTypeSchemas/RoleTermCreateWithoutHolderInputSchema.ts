import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateNestedOneWithoutTermsInputSchema } from './CirclesToRolesCreateNestedOneWithoutTermsInputSchema';

export const RoleTermCreateWithoutHolderInputSchema: z.ZodType<Prisma.RoleTermCreateWithoutHolderInput> = z.object({
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable(),
  circleRole: z.lazy(() => CirclesToRolesCreateNestedOneWithoutTermsInputSchema)
}).strict();

export default RoleTermCreateWithoutHolderInputSchema;
