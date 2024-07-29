import { z } from 'zod';

/////////////////////////////////////////
// ROLE TERM SCHEMA
/////////////////////////////////////////

export const RoleTermSchema = z.object({
  id: z.number().int(),
  circleId: z.number().int(),
  roleId: z.number().int(),
  holderId: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date().nullable(),
})

export type RoleTerm = z.infer<typeof RoleTermSchema>

export default RoleTermSchema;
