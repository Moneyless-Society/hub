import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionFindManyArgsSchema } from "../outputTypeSchemas/EthicVersionFindManyArgsSchema"
import { EthicsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/EthicsToPersonsFindManyArgsSchema"
import { EthicCountOutputTypeArgsSchema } from "../outputTypeSchemas/EthicCountOutputTypeArgsSchema"

export const EthicIncludeSchema: z.ZodType<Prisma.EthicInclude> = z.object({
  versions: z.union([z.boolean(),z.lazy(() => EthicVersionFindManyArgsSchema)]).optional(),
  responses: z.union([z.boolean(),z.lazy(() => EthicsToPersonsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EthicCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default EthicIncludeSchema;
