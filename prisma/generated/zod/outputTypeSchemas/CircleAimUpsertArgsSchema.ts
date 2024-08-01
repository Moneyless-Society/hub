import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimIncludeSchema } from '../inputTypeSchemas/CircleAimIncludeSchema'
import { CircleAimWhereUniqueInputSchema } from '../inputTypeSchemas/CircleAimWhereUniqueInputSchema'
import { CircleAimCreateInputSchema } from '../inputTypeSchemas/CircleAimCreateInputSchema'
import { CircleAimUncheckedCreateInputSchema } from '../inputTypeSchemas/CircleAimUncheckedCreateInputSchema'
import { CircleAimUpdateInputSchema } from '../inputTypeSchemas/CircleAimUpdateInputSchema'
import { CircleAimUncheckedUpdateInputSchema } from '../inputTypeSchemas/CircleAimUncheckedUpdateInputSchema'
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

export const CircleAimUpsertArgsSchema: z.ZodType<Prisma.CircleAimUpsertArgs> = z.object({
  select: CircleAimSelectSchema.optional(),
  include: CircleAimIncludeSchema.optional(),
  where: CircleAimWhereUniqueInputSchema,
  create: z.union([ CircleAimCreateInputSchema,CircleAimUncheckedCreateInputSchema ]),
  update: z.union([ CircleAimUpdateInputSchema,CircleAimUncheckedUpdateInputSchema ]),
}).strict() ;

export default CircleAimUpsertArgsSchema;
