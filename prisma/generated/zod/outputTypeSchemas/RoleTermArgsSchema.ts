import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleTermSelectSchema } from '../inputTypeSchemas/RoleTermSelectSchema';
import { RoleTermIncludeSchema } from '../inputTypeSchemas/RoleTermIncludeSchema';

export const RoleTermArgsSchema: z.ZodType<Prisma.RoleTermDefaultArgs> = z.object({
  select: z.lazy(() => RoleTermSelectSchema).optional(),
  include: z.lazy(() => RoleTermIncludeSchema).optional(),
}).strict();

export default RoleTermArgsSchema;
