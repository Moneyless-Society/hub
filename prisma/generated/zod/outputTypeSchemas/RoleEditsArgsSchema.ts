import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleEditsSelectSchema } from '../inputTypeSchemas/RoleEditsSelectSchema';
import { RoleEditsIncludeSchema } from '../inputTypeSchemas/RoleEditsIncludeSchema';

export const RoleEditsArgsSchema: z.ZodType<Prisma.RoleEditsDefaultArgs> = z.object({
  select: z.lazy(() => RoleEditsSelectSchema).optional(),
  include: z.lazy(() => RoleEditsIncludeSchema).optional(),
}).strict();

export default RoleEditsArgsSchema;
