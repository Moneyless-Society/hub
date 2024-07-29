import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationTokenCreateManyInputSchema } from '../inputTypeSchemas/VerificationTokenCreateManyInputSchema'

export const VerificationTokenCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyAndReturnArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default VerificationTokenCreateManyAndReturnArgsSchema;
