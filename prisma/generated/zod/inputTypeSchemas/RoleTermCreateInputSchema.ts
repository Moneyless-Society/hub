import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateNestedOneWithoutTermsInputSchema } from './CirclesToRolesCreateNestedOneWithoutTermsInputSchema';
import { PersonCreateNestedOneWithoutRoleTermsInputSchema } from './PersonCreateNestedOneWithoutRoleTermsInputSchema';

export const RoleTermCreateInputSchema: z.ZodType<Prisma.RoleTermCreateInput> = z.object({
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable(),
  circleRole: z.lazy(() => CirclesToRolesCreateNestedOneWithoutTermsInputSchema),
  holder: z.lazy(() => PersonCreateNestedOneWithoutRoleTermsInputSchema)
}).strict();

export default RoleTermCreateInputSchema;
