import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleEditsWhereInputSchema } from '../inputTypeSchemas/RoleEditsWhereInputSchema'

export const RoleEditsDeleteManyArgsSchema: z.ZodType<Prisma.RoleEditsDeleteManyArgs> = z.object({
  where: RoleEditsWhereInputSchema.optional(),
}).strict() ;

export default RoleEditsDeleteManyArgsSchema;
