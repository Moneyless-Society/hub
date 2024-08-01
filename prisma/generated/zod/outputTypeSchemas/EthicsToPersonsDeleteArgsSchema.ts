import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicsToPersonsIncludeSchema } from '../inputTypeSchemas/EthicsToPersonsIncludeSchema'
import { EthicsToPersonsWhereUniqueInputSchema } from '../inputTypeSchemas/EthicsToPersonsWhereUniqueInputSchema'
import { EthicArgsSchema } from "../outputTypeSchemas/EthicArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EthicsToPersonsSelectSchema: z.ZodType<Prisma.EthicsToPersonsSelect> = z.object({
  ethicId: z.boolean().optional(),
  personId: z.boolean().optional(),
  ranking: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ethic: z.union([z.boolean(),z.lazy(() => EthicArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const EthicsToPersonsDeleteArgsSchema: z.ZodType<Prisma.EthicsToPersonsDeleteArgs> = z.object({
  select: EthicsToPersonsSelectSchema.optional(),
  include: EthicsToPersonsIncludeSchema.optional(),
  where: EthicsToPersonsWhereUniqueInputSchema,
}).strict() ;

export default EthicsToPersonsDeleteArgsSchema;
