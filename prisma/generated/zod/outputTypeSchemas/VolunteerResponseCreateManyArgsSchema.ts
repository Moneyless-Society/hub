import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerResponseCreateManyInputSchema } from '../inputTypeSchemas/VolunteerResponseCreateManyInputSchema'

export const VolunteerResponseCreateManyArgsSchema: z.ZodType<Prisma.VolunteerResponseCreateManyArgs> = z.object({
  data: z.union([ VolunteerResponseCreateManyInputSchema,VolunteerResponseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default VolunteerResponseCreateManyArgsSchema;
