import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleIncludeSchema } from '../inputTypeSchemas/CircleIncludeSchema'
import { CircleWhereUniqueInputSchema } from '../inputTypeSchemas/CircleWhereUniqueInputSchema'
import { CircleCreateInputSchema } from '../inputTypeSchemas/CircleCreateInputSchema'
import { CircleUncheckedCreateInputSchema } from '../inputTypeSchemas/CircleUncheckedCreateInputSchema'
import { CircleUpdateInputSchema } from '../inputTypeSchemas/CircleUpdateInputSchema'
import { CircleUncheckedUpdateInputSchema } from '../inputTypeSchemas/CircleUncheckedUpdateInputSchema'
import { CircleAimFindManyArgsSchema } from "../outputTypeSchemas/CircleAimFindManyArgsSchema"
import { CirclesToRolesFindManyArgsSchema } from "../outputTypeSchemas/CirclesToRolesFindManyArgsSchema"
import { CircleCountOutputTypeArgsSchema } from "../outputTypeSchemas/CircleCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CircleSelectSchema: z.ZodType<Prisma.CircleSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  mission: z.boolean().optional(),
  description: z.boolean().optional(),
  domains: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedBy: z.boolean().optional(),
  isActive: z.boolean().optional(),
  aims: z.union([z.boolean(),z.lazy(() => CircleAimFindManyArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => CirclesToRolesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CircleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CircleUpsertArgsSchema: z.ZodType<Prisma.CircleUpsertArgs> = z.object({
  select: CircleSelectSchema.optional(),
  include: CircleIncludeSchema.optional(),
  where: CircleWhereUniqueInputSchema,
  create: z.union([ CircleCreateInputSchema,CircleUncheckedCreateInputSchema ]),
  update: z.union([ CircleUpdateInputSchema,CircleUncheckedUpdateInputSchema ]),
}).strict() ;

export default CircleUpsertArgsSchema;
