import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicArgsSchema } from "../outputTypeSchemas/EthicArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

export const EthicsToPersonsIncludeSchema: z.ZodType<Prisma.EthicsToPersonsInclude> = z.object({
  ethic: z.union([z.boolean(),z.lazy(() => EthicArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export default EthicsToPersonsIncludeSchema;
