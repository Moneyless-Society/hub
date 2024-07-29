import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AvailabilityWhereInputSchema } from '../inputTypeSchemas/AvailabilityWhereInputSchema'

export const AvailabilityDeleteManyArgsSchema: z.ZodType<Prisma.AvailabilityDeleteManyArgs> = z.object({
  where: AvailabilityWhereInputSchema.optional(),
}).strict() ;

export default AvailabilityDeleteManyArgsSchema;
