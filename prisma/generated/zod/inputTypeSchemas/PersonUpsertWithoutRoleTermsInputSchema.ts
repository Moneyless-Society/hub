import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutRoleTermsInputSchema } from './PersonUpdateWithoutRoleTermsInputSchema';
import { PersonUncheckedUpdateWithoutRoleTermsInputSchema } from './PersonUncheckedUpdateWithoutRoleTermsInputSchema';
import { PersonCreateWithoutRoleTermsInputSchema } from './PersonCreateWithoutRoleTermsInputSchema';
import { PersonUncheckedCreateWithoutRoleTermsInputSchema } from './PersonUncheckedCreateWithoutRoleTermsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutRoleTermsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutRoleTermsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutRoleTermsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutRoleTermsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutRoleTermsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoleTermsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutRoleTermsInputSchema;
