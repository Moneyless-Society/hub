import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutRoleTermsInputSchema } from './PersonCreateWithoutRoleTermsInputSchema';
import { PersonUncheckedCreateWithoutRoleTermsInputSchema } from './PersonUncheckedCreateWithoutRoleTermsInputSchema';

export const PersonCreateOrConnectWithoutRoleTermsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutRoleTermsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutRoleTermsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoleTermsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutRoleTermsInputSchema;
