import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicIncludeSchema } from '../inputTypeSchemas/EthicIncludeSchema'
import { EthicWhereUniqueInputSchema } from '../inputTypeSchemas/EthicWhereUniqueInputSchema'
import { EthicCreateInputSchema } from '../inputTypeSchemas/EthicCreateInputSchema'
import { EthicUncheckedCreateInputSchema } from '../inputTypeSchemas/EthicUncheckedCreateInputSchema'
import { EthicUpdateInputSchema } from '../inputTypeSchemas/EthicUpdateInputSchema'
import { EthicUncheckedUpdateInputSchema } from '../inputTypeSchemas/EthicUncheckedUpdateInputSchema'
import { EthicVersionFindManyArgsSchema } from "../outputTypeSchemas/EthicVersionFindManyArgsSchema"
import { EthicsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/EthicsToPersonsFindManyArgsSchema"
import { EthicCountOutputTypeArgsSchema } from "../outputTypeSchemas/EthicCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EthicSelectSchema: z.ZodType<Prisma.EthicSelect> = z.object({
  id: z.boolean().optional(),
  shortName: z.boolean().optional(),
  activeId: z.boolean().optional(),
  coreValue: z.boolean().optional(),
  versions: z.union([z.boolean(),z.lazy(() => EthicVersionFindManyArgsSchema)]).optional(),
  responses: z.union([z.boolean(),z.lazy(() => EthicsToPersonsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EthicCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const EthicUpsertArgsSchema: z.ZodType<Prisma.EthicUpsertArgs> = z.object({
  select: EthicSelectSchema.optional(),
  include: EthicIncludeSchema.optional(),
  where: EthicWhereUniqueInputSchema,
  create: z.union([ EthicCreateInputSchema,EthicUncheckedCreateInputSchema ]),
  update: z.union([ EthicUpdateInputSchema,EthicUncheckedUpdateInputSchema ]),
}).strict() ;

export default EthicUpsertArgsSchema;
