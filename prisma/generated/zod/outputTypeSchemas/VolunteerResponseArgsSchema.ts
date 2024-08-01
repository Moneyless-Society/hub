import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerResponseSelectSchema } from '../inputTypeSchemas/VolunteerResponseSelectSchema';
import { VolunteerResponseIncludeSchema } from '../inputTypeSchemas/VolunteerResponseIncludeSchema';

export const VolunteerResponseArgsSchema: z.ZodType<Prisma.VolunteerResponseDefaultArgs> = z.object({
  select: z.lazy(() => VolunteerResponseSelectSchema).optional(),
  include: z.lazy(() => VolunteerResponseIncludeSchema).optional(),
}).strict();

export default VolunteerResponseArgsSchema;
