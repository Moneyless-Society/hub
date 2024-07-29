import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleEditsIncludeSchema } from '../inputTypeSchemas/RoleEditsIncludeSchema'
import { RoleEditsWhereUniqueInputSchema } from '../inputTypeSchemas/RoleEditsWhereUniqueInputSchema'
import { RoleEditsCreateInputSchema } from '../inputTypeSchemas/RoleEditsCreateInputSchema'
import { RoleEditsUncheckedCreateInputSchema } from '../inputTypeSchemas/RoleEditsUncheckedCreateInputSchema'
import { RoleEditsUpdateInputSchema } from '../inputTypeSchemas/RoleEditsUpdateInputSchema'
import { RoleEditsUncheckedUpdateInputSchema } from '../inputTypeSchemas/RoleEditsUncheckedUpdateInputSchema'
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

export const RoleEditsUpsertArgsSchema: z.ZodType<Prisma.RoleEditsUpsertArgs> = z.object({
  select: RoleEditsSelectSchema.optional(),
  include: RoleEditsIncludeSchema.optional(),
  where: RoleEditsWhereUniqueInputSchema,
  create: z.union([ RoleEditsCreateInputSchema,RoleEditsUncheckedCreateInputSchema ]),
  update: z.union([ RoleEditsUpdateInputSchema,RoleEditsUncheckedUpdateInputSchema ]),
}).strict() ;

export default RoleEditsUpsertArgsSchema;
