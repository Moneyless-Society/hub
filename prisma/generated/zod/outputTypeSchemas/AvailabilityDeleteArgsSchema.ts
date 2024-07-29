import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AvailabilityIncludeSchema } from '../inputTypeSchemas/AvailabilityIncludeSchema'
import { AvailabilityWhereUniqueInputSchema } from '../inputTypeSchemas/AvailabilityWhereUniqueInputSchema'
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

export const AvailabilityDeleteArgsSchema: z.ZodType<Prisma.AvailabilityDeleteArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereUniqueInputSchema,
}).strict() ;

export default AvailabilityDeleteArgsSchema;
