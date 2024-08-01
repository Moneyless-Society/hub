import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionIncludeSchema } from '../inputTypeSchemas/EthicVersionIncludeSchema'
import { EthicVersionWhereUniqueInputSchema } from '../inputTypeSchemas/EthicVersionWhereUniqueInputSchema'
import { EthicArgsSchema } from "../outputTypeSchemas/EthicArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { EthicVersionsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/EthicVersionsToPersonsFindManyArgsSchema"
import { EthicVersionCountOutputTypeArgsSchema } from "../outputTypeSchemas/EthicVersionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EthicVersionSelectSchema: z.ZodType<Prisma.EthicVersionSelect> = z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  ethicId: z.boolean().optional(),
  submitterId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ethic: z.union([z.boolean(),z.lazy(() => EthicArgsSchema)]).optional(),
  submitter: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  responses: z.union([z.boolean(),z.lazy(() => EthicVersionsToPersonsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EthicVersionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const EthicVersionFindUniqueArgsSchema: z.ZodType<Prisma.EthicVersionFindUniqueArgs> = z.object({
  select: EthicVersionSelectSchema.optional(),
  include: EthicVersionIncludeSchema.optional(),
  where: EthicVersionWhereUniqueInputSchema,
}).strict() ;

export default EthicVersionFindUniqueArgsSchema;
