import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PIIIncludeSchema } from '../inputTypeSchemas/PIIIncludeSchema'
import { PIIWhereUniqueInputSchema } from '../inputTypeSchemas/PIIWhereUniqueInputSchema'
import { PIICreateInputSchema } from '../inputTypeSchemas/PIICreateInputSchema'
import { PIIUncheckedCreateInputSchema } from '../inputTypeSchemas/PIIUncheckedCreateInputSchema'
import { PIIUpdateInputSchema } from '../inputTypeSchemas/PIIUpdateInputSchema'
import { PIIUncheckedUpdateInputSchema } from '../inputTypeSchemas/PIIUncheckedUpdateInputSchema'
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

export const PIIUpsertArgsSchema: z.ZodType<Prisma.PIIUpsertArgs> = z.object({
  select: PIISelectSchema.optional(),
  include: PIIIncludeSchema.optional(),
  where: PIIWhereUniqueInputSchema,
  create: z.union([ PIICreateInputSchema,PIIUncheckedCreateInputSchema ]),
  update: z.union([ PIIUpdateInputSchema,PIIUncheckedUpdateInputSchema ]),
}).strict() ;

export default PIIUpsertArgsSchema;
