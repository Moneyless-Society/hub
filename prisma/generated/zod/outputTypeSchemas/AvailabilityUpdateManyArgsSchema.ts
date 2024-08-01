import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AvailabilityUpdateManyMutationInputSchema } from '../inputTypeSchemas/AvailabilityUpdateManyMutationInputSchema'
import { AvailabilityUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AvailabilityUncheckedUpdateManyInputSchema'
import { AvailabilityWhereInputSchema } from '../inputTypeSchemas/AvailabilityWhereInputSchema'

export const AvailabilityUpdateManyArgsSchema: z.ZodType<Prisma.AvailabilityUpdateManyArgs> = z.object({
  data: z.union([ AvailabilityUpdateManyMutationInputSchema,AvailabilityUncheckedUpdateManyInputSchema ]),
  where: AvailabilityWhereInputSchema.optional(),
}).strict() ;

export default AvailabilityUpdateManyArgsSchema;
