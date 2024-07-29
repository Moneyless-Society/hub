import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AvailabilityIncludeSchema } from '../inputTypeSchemas/AvailabilityIncludeSchema'
import { AvailabilityCreateInputSchema } from '../inputTypeSchemas/AvailabilityCreateInputSchema'
import { AvailabilityUncheckedCreateInputSchema } from '../inputTypeSchemas/AvailabilityUncheckedCreateInputSchema'
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

export const AvailabilityCreateArgsSchema: z.ZodType<Prisma.AvailabilityCreateArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  data: z.union([ AvailabilityCreateInputSchema,AvailabilityUncheckedCreateInputSchema ]),
}).strict() ;

export default AvailabilityCreateArgsSchema;
