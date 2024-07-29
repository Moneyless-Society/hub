import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSelectSchema } from '../inputTypeSchemas/RoleSelectSchema';
import { RoleIncludeSchema } from '../inputTypeSchemas/RoleIncludeSchema';

export const RoleArgsSchema: z.ZodType<Prisma.RoleDefaultArgs> = z.object({
  select: z.lazy(() => RoleSelectSchema).optional(),
  include: z.lazy(() => RoleIncludeSchema).optional(),
}).strict();

export default RoleArgsSchema;
