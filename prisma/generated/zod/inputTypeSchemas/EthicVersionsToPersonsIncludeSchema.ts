import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionArgsSchema } from "../outputTypeSchemas/EthicVersionArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

export const EthicVersionsToPersonsIncludeSchema: z.ZodType<Prisma.EthicVersionsToPersonsInclude> = z.object({
  ethicVersion: z.union([z.boolean(),z.lazy(() => EthicVersionArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export default EthicVersionsToPersonsIncludeSchema;
