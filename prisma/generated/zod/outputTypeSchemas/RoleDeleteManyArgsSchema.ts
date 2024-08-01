import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleWhereInputSchema } from '../inputTypeSchemas/RoleWhereInputSchema'

export const RoleDeleteManyArgsSchema: z.ZodType<Prisma.RoleDeleteManyArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
}).strict() ;

export default RoleDeleteManyArgsSchema;
