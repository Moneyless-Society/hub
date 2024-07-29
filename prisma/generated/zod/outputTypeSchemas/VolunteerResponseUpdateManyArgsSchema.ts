import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerResponseUpdateManyMutationInputSchema } from '../inputTypeSchemas/VolunteerResponseUpdateManyMutationInputSchema'
import { VolunteerResponseUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VolunteerResponseUncheckedUpdateManyInputSchema'
import { VolunteerResponseWhereInputSchema } from '../inputTypeSchemas/VolunteerResponseWhereInputSchema'

export const VolunteerResponseUpdateManyArgsSchema: z.ZodType<Prisma.VolunteerResponseUpdateManyArgs> = z.object({
  data: z.union([ VolunteerResponseUpdateManyMutationInputSchema,VolunteerResponseUncheckedUpdateManyInputSchema ]),
  where: VolunteerResponseWhereInputSchema.optional(),
}).strict() ;

export default VolunteerResponseUpdateManyArgsSchema;
