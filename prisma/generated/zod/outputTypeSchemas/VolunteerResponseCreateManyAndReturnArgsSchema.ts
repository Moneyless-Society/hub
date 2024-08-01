import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerResponseCreateManyInputSchema } from '../inputTypeSchemas/VolunteerResponseCreateManyInputSchema'

export const VolunteerResponseCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VolunteerResponseCreateManyAndReturnArgs> = z.object({
  data: z.union([ VolunteerResponseCreateManyInputSchema,VolunteerResponseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default VolunteerResponseCreateManyAndReturnArgsSchema;
