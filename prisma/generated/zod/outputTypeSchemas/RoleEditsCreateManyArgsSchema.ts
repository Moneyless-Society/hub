import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleEditsCreateManyInputSchema } from '../inputTypeSchemas/RoleEditsCreateManyInputSchema'

export const RoleEditsCreateManyArgsSchema: z.ZodType<Prisma.RoleEditsCreateManyArgs> = z.object({
  data: z.union([ RoleEditsCreateManyInputSchema,RoleEditsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RoleEditsCreateManyArgsSchema;
