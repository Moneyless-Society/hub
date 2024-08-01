import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleTermCreateManyInputSchema } from '../inputTypeSchemas/RoleTermCreateManyInputSchema'

export const RoleTermCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoleTermCreateManyAndReturnArgs> = z.object({
  data: z.union([ RoleTermCreateManyInputSchema,RoleTermCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RoleTermCreateManyAndReturnArgsSchema;
