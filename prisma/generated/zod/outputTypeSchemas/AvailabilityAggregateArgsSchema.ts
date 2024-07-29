import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AvailabilityWhereInputSchema } from '../inputTypeSchemas/AvailabilityWhereInputSchema'
import { AvailabilityOrderByWithRelationInputSchema } from '../inputTypeSchemas/AvailabilityOrderByWithRelationInputSchema'
import { AvailabilityWhereUniqueInputSchema } from '../inputTypeSchemas/AvailabilityWhereUniqueInputSchema'

export const AvailabilityAggregateArgsSchema: z.ZodType<Prisma.AvailabilityAggregateArgs> = z.object({
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithRelationInputSchema.array(),AvailabilityOrderByWithRelationInputSchema ]).optional(),
  cursor: AvailabilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AvailabilityAggregateArgsSchema;
