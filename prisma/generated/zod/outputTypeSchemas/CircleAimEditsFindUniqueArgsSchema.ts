import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimEditsIncludeSchema } from '../inputTypeSchemas/CircleAimEditsIncludeSchema'
import { CircleAimEditsWhereUniqueInputSchema } from '../inputTypeSchemas/CircleAimEditsWhereUniqueInputSchema'
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

export const CircleAimEditsFindUniqueArgsSchema: z.ZodType<Prisma.CircleAimEditsFindUniqueArgs> = z.object({
  select: CircleAimEditsSelectSchema.optional(),
  include: CircleAimEditsIncludeSchema.optional(),
  where: CircleAimEditsWhereUniqueInputSchema,
}).strict() ;

export default CircleAimEditsFindUniqueArgsSchema;
