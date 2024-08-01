import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AvailabilityIncludeSchema } from '../inputTypeSchemas/AvailabilityIncludeSchema'
import { AvailabilityWhereInputSchema } from '../inputTypeSchemas/AvailabilityWhereInputSchema'
import { AvailabilityOrderByWithRelationInputSchema } from '../inputTypeSchemas/AvailabilityOrderByWithRelationInputSchema'
import { AvailabilityWhereUniqueInputSchema } from '../inputTypeSchemas/AvailabilityWhereUniqueInputSchema'
import { AvailabilityScalarFieldEnumSchema } from '../inputTypeSchemas/AvailabilityScalarFieldEnumSchema'
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AvailabilitySelectSchema: z.ZodType<Prisma.AvailabilitySelect> = z.object({
  id: z.boolean().optional(),
  personId: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  status: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const AvailabilityFindManyArgsSchema: z.ZodType<Prisma.AvailabilityFindManyArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithRelationInputSchema.array(),AvailabilityOrderByWithRelationInputSchema ]).optional(),
  cursor: AvailabilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AvailabilityScalarFieldEnumSchema,AvailabilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default AvailabilityFindManyArgsSchema;
