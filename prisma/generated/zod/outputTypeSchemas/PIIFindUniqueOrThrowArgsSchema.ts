import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PIIIncludeSchema } from '../inputTypeSchemas/PIIIncludeSchema'
import { PIIWhereUniqueInputSchema } from '../inputTypeSchemas/PIIWhereUniqueInputSchema'
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

export const PIIFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PIIFindUniqueOrThrowArgs> = z.object({
  select: PIISelectSchema.optional(),
  include: PIIIncludeSchema.optional(),
  where: PIIWhereUniqueInputSchema,
}).strict() ;

export default PIIFindUniqueOrThrowArgsSchema;
