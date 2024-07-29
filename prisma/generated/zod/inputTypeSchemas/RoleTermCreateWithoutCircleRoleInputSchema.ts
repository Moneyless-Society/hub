import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateNestedOneWithoutRoleTermsInputSchema } from './PersonCreateNestedOneWithoutRoleTermsInputSchema';

export const RoleTermCreateWithoutCircleRoleInputSchema: z.ZodType<Prisma.RoleTermCreateWithoutCircleRoleInput> = z.object({
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional().nullable(),
  holder: z.lazy(() => PersonCreateNestedOneWithoutRoleTermsInputSchema)
}).strict();

export default RoleTermCreateWithoutCircleRoleInputSchema;
