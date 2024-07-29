import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerResponseWhereInputSchema } from '../inputTypeSchemas/VolunteerResponseWhereInputSchema'

export const VolunteerResponseDeleteManyArgsSchema: z.ZodType<Prisma.VolunteerResponseDeleteManyArgs> = z.object({
  where: VolunteerResponseWhereInputSchema.optional(),
}).strict() ;

export default VolunteerResponseDeleteManyArgsSchema;
