import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleCreateManyInputSchema } from '../inputTypeSchemas/RoleCreateManyInputSchema'

export const RoleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoleCreateManyAndReturnArgs> = z.object({
  data: z.union([ RoleCreateManyInputSchema,RoleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RoleCreateManyAndReturnArgsSchema;
