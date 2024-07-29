import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerResponseWhereInputSchema } from '../inputTypeSchemas/VolunteerResponseWhereInputSchema'
import { VolunteerResponseOrderByWithRelationInputSchema } from '../inputTypeSchemas/VolunteerResponseOrderByWithRelationInputSchema'
import { VolunteerResponseWhereUniqueInputSchema } from '../inputTypeSchemas/VolunteerResponseWhereUniqueInputSchema'

export const VolunteerResponseAggregateArgsSchema: z.ZodType<Prisma.VolunteerResponseAggregateArgs> = z.object({
  where: VolunteerResponseWhereInputSchema.optional(),
  orderBy: z.union([ VolunteerResponseOrderByWithRelationInputSchema.array(),VolunteerResponseOrderByWithRelationInputSchema ]).optional(),
  cursor: VolunteerResponseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default VolunteerResponseAggregateArgsSchema;
