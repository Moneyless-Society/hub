import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicsToPersonsIncludeSchema } from '../inputTypeSchemas/EthicsToPersonsIncludeSchema'
import { EthicsToPersonsWhereInputSchema } from '../inputTypeSchemas/EthicsToPersonsWhereInputSchema'
import { EthicsToPersonsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EthicsToPersonsOrderByWithRelationInputSchema'
import { EthicsToPersonsWhereUniqueInputSchema } from '../inputTypeSchemas/EthicsToPersonsWhereUniqueInputSchema'
import { EthicsToPersonsScalarFieldEnumSchema } from '../inputTypeSchemas/EthicsToPersonsScalarFieldEnumSchema'
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

export const EthicsToPersonsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EthicsToPersonsFindFirstOrThrowArgs> = z.object({
  select: EthicsToPersonsSelectSchema.optional(),
  include: EthicsToPersonsIncludeSchema.optional(),
  where: EthicsToPersonsWhereInputSchema.optional(),
  orderBy: z.union([ EthicsToPersonsOrderByWithRelationInputSchema.array(),EthicsToPersonsOrderByWithRelationInputSchema ]).optional(),
  cursor: EthicsToPersonsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EthicsToPersonsScalarFieldEnumSchema,EthicsToPersonsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default EthicsToPersonsFindFirstOrThrowArgsSchema;
