import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimEditsIncludeSchema } from '../inputTypeSchemas/CircleAimEditsIncludeSchema'
import { CircleAimEditsWhereInputSchema } from '../inputTypeSchemas/CircleAimEditsWhereInputSchema'
import { CircleAimEditsOrderByWithRelationInputSchema } from '../inputTypeSchemas/CircleAimEditsOrderByWithRelationInputSchema'
import { CircleAimEditsWhereUniqueInputSchema } from '../inputTypeSchemas/CircleAimEditsWhereUniqueInputSchema'
import { CircleAimEditsScalarFieldEnumSchema } from '../inputTypeSchemas/CircleAimEditsScalarFieldEnumSchema'
import { CircleAimArgsSchema } from "../outputTypeSchemas/CircleAimArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CircleAimEditsSelectSchema: z.ZodType<Prisma.CircleAimEditsSelect> = z.object({
  id: z.boolean().optional(),
  circleAimId: z.boolean().optional(),
  editorId: z.boolean().optional(),
  circleAim: z.union([z.boolean(),z.lazy(() => CircleAimArgsSchema)]).optional(),
  editor: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const CircleAimEditsFindFirstArgsSchema: z.ZodType<Prisma.CircleAimEditsFindFirstArgs> = z.object({
  select: CircleAimEditsSelectSchema.optional(),
  include: CircleAimEditsIncludeSchema.optional(),
  where: CircleAimEditsWhereInputSchema.optional(),
  orderBy: z.union([ CircleAimEditsOrderByWithRelationInputSchema.array(),CircleAimEditsOrderByWithRelationInputSchema ]).optional(),
  cursor: CircleAimEditsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CircleAimEditsScalarFieldEnumSchema,CircleAimEditsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CircleAimEditsFindFirstArgsSchema;
