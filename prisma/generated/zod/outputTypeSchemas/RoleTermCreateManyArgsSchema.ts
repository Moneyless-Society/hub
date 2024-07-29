import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleTermCreateManyInputSchema } from '../inputTypeSchemas/RoleTermCreateManyInputSchema'

export const RoleTermCreateManyArgsSchema: z.ZodType<Prisma.RoleTermCreateManyArgs> = z.object({
  data: z.union([ RoleTermCreateManyInputSchema,RoleTermCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RoleTermCreateManyArgsSchema;
