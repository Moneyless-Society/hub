import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleArgsSchema } from "../outputTypeSchemas/RoleArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

export const RoleEditsIncludeSchema: z.ZodType<Prisma.RoleEditsInclude> = z.object({
  role: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
  editor: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export default RoleEditsIncludeSchema;
