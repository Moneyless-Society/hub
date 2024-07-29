import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutRoleTermsInputSchema } from './PersonUpdateWithoutRoleTermsInputSchema';
import { PersonUncheckedUpdateWithoutRoleTermsInputSchema } from './PersonUncheckedUpdateWithoutRoleTermsInputSchema';

export const PersonUpdateToOneWithWhereWithoutRoleTermsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutRoleTermsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutRoleTermsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutRoleTermsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutRoleTermsInputSchema;
