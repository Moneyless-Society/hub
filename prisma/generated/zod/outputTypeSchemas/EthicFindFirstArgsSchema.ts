import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicIncludeSchema } from '../inputTypeSchemas/EthicIncludeSchema'
import { EthicWhereInputSchema } from '../inputTypeSchemas/EthicWhereInputSchema'
import { EthicOrderByWithRelationInputSchema } from '../inputTypeSchemas/EthicOrderByWithRelationInputSchema'
import { EthicWhereUniqueInputSchema } from '../inputTypeSchemas/EthicWhereUniqueInputSchema'
import { EthicScalarFieldEnumSchema } from '../inputTypeSchemas/EthicScalarFieldEnumSchema'
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

export const EthicFindFirstArgsSchema: z.ZodType<Prisma.EthicFindFirstArgs> = z.object({
  select: EthicSelectSchema.optional(),
  include: EthicIncludeSchema.optional(),
  where: EthicWhereInputSchema.optional(),
  orderBy: z.union([ EthicOrderByWithRelationInputSchema.array(),EthicOrderByWithRelationInputSchema ]).optional(),
  cursor: EthicWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EthicScalarFieldEnumSchema,EthicScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default EthicFindFirstArgsSchema;
