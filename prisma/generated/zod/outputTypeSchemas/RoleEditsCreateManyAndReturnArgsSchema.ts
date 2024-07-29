import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleEditsCreateManyInputSchema } from '../inputTypeSchemas/RoleEditsCreateManyInputSchema'

export const RoleEditsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoleEditsCreateManyAndReturnArgs> = z.object({
  data: z.union([ RoleEditsCreateManyInputSchema,RoleEditsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RoleEditsCreateManyAndReturnArgsSchema;
