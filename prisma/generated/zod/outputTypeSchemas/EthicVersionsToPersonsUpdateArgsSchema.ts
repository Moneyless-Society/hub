import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionsToPersonsIncludeSchema } from '../inputTypeSchemas/EthicVersionsToPersonsIncludeSchema'
import { EthicVersionsToPersonsUpdateInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsUpdateInputSchema'
import { EthicVersionsToPersonsUncheckedUpdateInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsUncheckedUpdateInputSchema'
import { EthicVersionsToPersonsWhereUniqueInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsWhereUniqueInputSchema'
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

export const EthicVersionsToPersonsUpdateArgsSchema: z.ZodType<Prisma.EthicVersionsToPersonsUpdateArgs> = z.object({
  select: EthicVersionsToPersonsSelectSchema.optional(),
  include: EthicVersionsToPersonsIncludeSchema.optional(),
  data: z.union([ EthicVersionsToPersonsUpdateInputSchema,EthicVersionsToPersonsUncheckedUpdateInputSchema ]),
  where: EthicVersionsToPersonsWhereUniqueInputSchema,
}).strict() ;

export default EthicVersionsToPersonsUpdateArgsSchema;
