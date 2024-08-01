import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutRoleTermsInputSchema } from './PersonCreateWithoutRoleTermsInputSchema';
import { PersonUncheckedCreateWithoutRoleTermsInputSchema } from './PersonUncheckedCreateWithoutRoleTermsInputSchema';
import { PersonCreateOrConnectWithoutRoleTermsInputSchema } from './PersonCreateOrConnectWithoutRoleTermsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutRoleTermsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutRoleTermsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutRoleTermsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoleTermsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutRoleTermsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutRoleTermsInputSchema;
