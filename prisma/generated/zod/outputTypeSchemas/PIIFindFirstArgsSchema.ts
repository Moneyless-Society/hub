import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PIIIncludeSchema } from '../inputTypeSchemas/PIIIncludeSchema'
import { PIIWhereInputSchema } from '../inputTypeSchemas/PIIWhereInputSchema'
import { PIIOrderByWithRelationInputSchema } from '../inputTypeSchemas/PIIOrderByWithRelationInputSchema'
import { PIIWhereUniqueInputSchema } from '../inputTypeSchemas/PIIWhereUniqueInputSchema'
import { PIIScalarFieldEnumSchema } from '../inputTypeSchemas/PIIScalarFieldEnumSchema'
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PIISelectSchema: z.ZodType<Prisma.PIISelect> = z.object({
  id: z.boolean().optional(),
  personId: z.boolean().optional(),
  legalFirstName: z.boolean().optional(),
  legalLastName: z.boolean().optional(),
  address: z.boolean().optional(),
  phoneNumber: z.boolean().optional(),
  discord: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const PIIFindFirstArgsSchema: z.ZodType<Prisma.PIIFindFirstArgs> = z.object({
  select: PIISelectSchema.optional(),
  include: PIIIncludeSchema.optional(),
  where: PIIWhereInputSchema.optional(),
  orderBy: z.union([ PIIOrderByWithRelationInputSchema.array(),PIIOrderByWithRelationInputSchema ]).optional(),
  cursor: PIIWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PIIScalarFieldEnumSchema,PIIScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PIIFindFirstArgsSchema;
