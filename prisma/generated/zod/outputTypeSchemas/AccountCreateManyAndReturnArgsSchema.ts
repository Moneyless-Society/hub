import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountCreateManyInputSchema } from '../inputTypeSchemas/AccountCreateManyInputSchema'

export const AccountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountCreateManyAndReturnArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AccountCreateManyAndReturnArgsSchema;
