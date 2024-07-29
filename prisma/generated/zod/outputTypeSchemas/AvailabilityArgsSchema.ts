import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AvailabilitySelectSchema } from '../inputTypeSchemas/AvailabilitySelectSchema';
import { AvailabilityIncludeSchema } from '../inputTypeSchemas/AvailabilityIncludeSchema';

export const AvailabilityArgsSchema: z.ZodType<Prisma.AvailabilityDefaultArgs> = z.object({
  select: z.lazy(() => AvailabilitySelectSchema).optional(),
  include: z.lazy(() => AvailabilityIncludeSchema).optional(),
}).strict();

export default AvailabilityArgsSchema;
