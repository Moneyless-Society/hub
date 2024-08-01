import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCreateManyInputSchema } from '../inputTypeSchemas/SessionCreateManyInputSchema'

export const SessionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SessionCreateManyAndReturnArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SessionCreateManyAndReturnArgsSchema;
