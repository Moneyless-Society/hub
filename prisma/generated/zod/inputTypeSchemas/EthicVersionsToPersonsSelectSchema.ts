import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionArgsSchema } from "../outputTypeSchemas/EthicVersionArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

export const EthicVersionsToPersonsSelectSchema: z.ZodType<Prisma.EthicVersionsToPersonsSelect> = z.object({
  ethicVersionId: z.boolean().optional(),
  personId: z.boolean().optional(),
  consent: z.boolean().optional(),
  commentary: z.boolean().optional(),
  ethicVersion: z.union([z.boolean(),z.lazy(() => EthicVersionArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export default EthicVersionsToPersonsSelectSchema;
