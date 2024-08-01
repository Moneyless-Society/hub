import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PIIWhereInputSchema } from '../inputTypeSchemas/PIIWhereInputSchema'

export const PIIDeleteManyArgsSchema: z.ZodType<Prisma.PIIDeleteManyArgs> = z.object({
  where: PIIWhereInputSchema.optional(),
}).strict() ;

export default PIIDeleteManyArgsSchema;
