import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleTermWhereInputSchema } from '../inputTypeSchemas/RoleTermWhereInputSchema'

export const RoleTermDeleteManyArgsSchema: z.ZodType<Prisma.RoleTermDeleteManyArgs> = z.object({
  where: RoleTermWhereInputSchema.optional(),
}).strict() ;

export default RoleTermDeleteManyArgsSchema;
