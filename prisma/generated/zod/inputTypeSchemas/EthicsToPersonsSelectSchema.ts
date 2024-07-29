import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicArgsSchema } from "../outputTypeSchemas/EthicArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

export const EthicsToPersonsSelectSchema: z.ZodType<Prisma.EthicsToPersonsSelect> = z.object({
  ethicId: z.boolean().optional(),
  personId: z.boolean().optional(),
  ranking: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ethic: z.union([z.boolean(),z.lazy(() => EthicArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export default EthicsToPersonsSelectSchema;
