import { z } from 'zod';

/////////////////////////////////////////
// ROLE EDITS SCHEMA
/////////////////////////////////////////

export const RoleEditsSchema = z.object({
  roleId: z.number().int(),
  editorId: z.string(),
  updatedAt: z.coerce.date(),
})

export type RoleEdits = z.infer<typeof RoleEditsSchema>

export default RoleEditsSchema;
