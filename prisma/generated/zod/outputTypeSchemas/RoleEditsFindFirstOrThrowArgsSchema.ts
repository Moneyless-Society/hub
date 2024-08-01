import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleEditsIncludeSchema } from '../inputTypeSchemas/RoleEditsIncludeSchema'
import { RoleEditsWhereInputSchema } from '../inputTypeSchemas/RoleEditsWhereInputSchema'
import { RoleEditsOrderByWithRelationInputSchema } from '../inputTypeSchemas/RoleEditsOrderByWithRelationInputSchema'
import { RoleEditsWhereUniqueInputSchema } from '../inputTypeSchemas/RoleEditsWhereUniqueInputSchema'
import { RoleEditsScalarFieldEnumSchema } from '../inputTypeSchemas/RoleEditsScalarFieldEnumSchema'
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

export const RoleEditsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoleEditsFindFirstOrThrowArgs> = z.object({
  select: RoleEditsSelectSchema.optional(),
  include: RoleEditsIncludeSchema.optional(),
  where: RoleEditsWhereInputSchema.optional(),
  orderBy: z.union([ RoleEditsOrderByWithRelationInputSchema.array(),RoleEditsOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleEditsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleEditsScalarFieldEnumSchema,RoleEditsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default RoleEditsFindFirstOrThrowArgsSchema;
