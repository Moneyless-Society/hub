import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimIncludeSchema } from '../inputTypeSchemas/CircleAimIncludeSchema'
import { CircleAimWhereInputSchema } from '../inputTypeSchemas/CircleAimWhereInputSchema'
import { CircleAimOrderByWithRelationInputSchema } from '../inputTypeSchemas/CircleAimOrderByWithRelationInputSchema'
import { CircleAimWhereUniqueInputSchema } from '../inputTypeSchemas/CircleAimWhereUniqueInputSchema'
import { CircleAimScalarFieldEnumSchema } from '../inputTypeSchemas/CircleAimScalarFieldEnumSchema'
import { CircleArgsSchema } from "../outputTypeSchemas/CircleArgsSchema"
import { CircleAimEditsFindManyArgsSchema } from "../outputTypeSchemas/CircleAimEditsFindManyArgsSchema"
import { CircleAimCountOutputTypeArgsSchema } from "../outputTypeSchemas/CircleAimCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CircleAimSelectSchema: z.ZodType<Prisma.CircleAimSelect> = z.object({
  id: z.boolean().optional(),
  circleId: z.boolean().optional(),
  text: z.boolean().optional(),
  isActive: z.boolean().optional(),
  circle: z.union([z.boolean(),z.lazy(() => CircleArgsSchema)]).optional(),
  edits: z.union([z.boolean(),z.lazy(() => CircleAimEditsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CircleAimCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CircleAimFindManyArgsSchema: z.ZodType<Prisma.CircleAimFindManyArgs> = z.object({
  select: CircleAimSelectSchema.optional(),
  include: CircleAimIncludeSchema.optional(),
  where: CircleAimWhereInputSchema.optional(),
  orderBy: z.union([ CircleAimOrderByWithRelationInputSchema.array(),CircleAimOrderByWithRelationInputSchema ]).optional(),
  cursor: CircleAimWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CircleAimScalarFieldEnumSchema,CircleAimScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CircleAimFindManyArgsSchema;
