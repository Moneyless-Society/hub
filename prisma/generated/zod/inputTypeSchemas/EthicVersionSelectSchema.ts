import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicArgsSchema } from "../outputTypeSchemas/EthicArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { EthicVersionsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/EthicVersionsToPersonsFindManyArgsSchema"
import { EthicVersionCountOutputTypeArgsSchema } from "../outputTypeSchemas/EthicVersionCountOutputTypeArgsSchema"

export const EthicVersionSelectSchema: z.ZodType<Prisma.EthicVersionSelect> = z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  ethicId: z.boolean().optional(),
  submitterId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ethic: z.union([z.boolean(),z.lazy(() => EthicArgsSchema)]).optional(),
  submitter: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  responses: z.union([z.boolean(),z.lazy(() => EthicVersionsToPersonsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EthicVersionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default EthicVersionSelectSchema;
