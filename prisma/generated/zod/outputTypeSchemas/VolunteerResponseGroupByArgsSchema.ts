import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerResponseWhereInputSchema } from '../inputTypeSchemas/VolunteerResponseWhereInputSchema'
import { VolunteerResponseOrderByWithAggregationInputSchema } from '../inputTypeSchemas/VolunteerResponseOrderByWithAggregationInputSchema'
import { VolunteerResponseScalarFieldEnumSchema } from '../inputTypeSchemas/VolunteerResponseScalarFieldEnumSchema'
import { VolunteerResponseScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/VolunteerResponseScalarWhereWithAggregatesInputSchema'

export const VolunteerResponseGroupByArgsSchema: z.ZodType<Prisma.VolunteerResponseGroupByArgs> = z.object({
  where: VolunteerResponseWhereInputSchema.optional(),
  orderBy: z.union([ VolunteerResponseOrderByWithAggregationInputSchema.array(),VolunteerResponseOrderByWithAggregationInputSchema ]).optional(),
  by: VolunteerResponseScalarFieldEnumSchema.array(),
  having: VolunteerResponseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default VolunteerResponseGroupByArgsSchema;
