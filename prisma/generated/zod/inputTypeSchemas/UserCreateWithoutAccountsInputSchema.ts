import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateNestedOneWithoutUserInputSchema } from './PersonCreateNestedOneWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  person: z.lazy(() => PersonCreateNestedOneWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutAccountsInputSchema;
