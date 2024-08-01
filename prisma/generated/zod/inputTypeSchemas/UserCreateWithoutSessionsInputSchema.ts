import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateNestedOneWithoutUserInputSchema } from './PersonCreateNestedOneWithoutUserInputSchema';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  person: z.lazy(() => PersonCreateNestedOneWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutSessionsInputSchema;
