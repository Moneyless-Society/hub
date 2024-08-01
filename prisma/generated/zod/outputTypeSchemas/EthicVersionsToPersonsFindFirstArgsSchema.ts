import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionsToPersonsIncludeSchema } from '../inputTypeSchemas/EthicVersionsToPersonsIncludeSchema'
import { EthicVersionsToPersonsWhereInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsWhereInputSchema'
import { EthicVersionsToPersonsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsOrderByWithRelationInputSchema'
import { EthicVersionsToPersonsWhereUniqueInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsWhereUniqueInputSchema'
import { EthicVersionsToPersonsScalarFieldEnumSchema } from '../inputTypeSchemas/EthicVersionsToPersonsScalarFieldEnumSchema'
import { EthicVersionArgsSchema } from "../outputTypeSchemas/EthicVersionArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EthicVersionsToPersonsSelectSchema: z.ZodType<Prisma.EthicVersionsToPersonsSelect> = z.object({
  ethicVersionId: z.boolean().optional(),
  personId: z.boolean().optional(),
  consent: z.boolean().optional(),
  commentary: z.boolean().optional(),
  ethicVersion: z.union([z.boolean(),z.lazy(() => EthicVersionArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const EthicVersionsToPersonsFindFirstArgsSchema: z.ZodType<Prisma.EthicVersionsToPersonsFindFirstArgs> = z.object({
  select: EthicVersionsToPersonsSelectSchema.optional(),
  include: EthicVersionsToPersonsIncludeSchema.optional(),
  where: EthicVersionsToPersonsWhereInputSchema.optional(),
  orderBy: z.union([ EthicVersionsToPersonsOrderByWithRelationInputSchema.array(),EthicVersionsToPersonsOrderByWithRelationInputSchema ]).optional(),
  cursor: EthicVersionsToPersonsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EthicVersionsToPersonsScalarFieldEnumSchema,EthicVersionsToPersonsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default EthicVersionsToPersonsFindFirstArgsSchema;
