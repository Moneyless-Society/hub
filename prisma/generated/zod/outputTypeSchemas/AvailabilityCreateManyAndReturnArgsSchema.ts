import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AvailabilityCreateManyInputSchema } from '../inputTypeSchemas/AvailabilityCreateManyInputSchema'

export const AvailabilityCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AvailabilityCreateManyAndReturnArgs> = z.object({
  data: z.union([ AvailabilityCreateManyInputSchema,AvailabilityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AvailabilityCreateManyAndReturnArgsSchema;
