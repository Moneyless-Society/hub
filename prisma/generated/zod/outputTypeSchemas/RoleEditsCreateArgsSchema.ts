import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleEditsIncludeSchema } from '../inputTypeSchemas/RoleEditsIncludeSchema'
import { RoleEditsCreateInputSchema } from '../inputTypeSchemas/RoleEditsCreateInputSchema'
import { RoleEditsUncheckedCreateInputSchema } from '../inputTypeSchemas/RoleEditsUncheckedCreateInputSchema'
import { RoleArgsSchema } from "../outputTypeSchemas/RoleArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoleEditsSelectSchema: z.ZodType<Prisma.RoleEditsSelect> = z.object({
  roleId: z.boolean().optional(),
  editorId: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  role: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
  editor: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const RoleEditsCreateArgsSchema: z.ZodType<Prisma.RoleEditsCreateArgs> = z.object({
  select: RoleEditsSelectSchema.optional(),
  include: RoleEditsIncludeSchema.optional(),
  data: z.union([ RoleEditsCreateInputSchema,RoleEditsUncheckedCreateInputSchema ]),
}).strict() ;

export default RoleEditsCreateArgsSchema;
