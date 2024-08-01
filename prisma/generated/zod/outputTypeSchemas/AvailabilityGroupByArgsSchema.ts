import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AvailabilityWhereInputSchema } from '../inputTypeSchemas/AvailabilityWhereInputSchema'
import { AvailabilityOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AvailabilityOrderByWithAggregationInputSchema'
import { AvailabilityScalarFieldEnumSchema } from '../inputTypeSchemas/AvailabilityScalarFieldEnumSchema'
import { AvailabilityScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AvailabilityScalarWhereWithAggregatesInputSchema'

export const AvailabilityGroupByArgsSchema: z.ZodType<Prisma.AvailabilityGroupByArgs> = z.object({
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithAggregationInputSchema.array(),AvailabilityOrderByWithAggregationInputSchema ]).optional(),
  by: AvailabilityScalarFieldEnumSchema.array(),
  having: AvailabilityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AvailabilityGroupByArgsSchema;
