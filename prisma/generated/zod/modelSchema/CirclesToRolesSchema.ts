import { z } from 'zod';

/////////////////////////////////////////
// CIRCLES TO ROLES SCHEMA
/////////////////////////////////////////

export const CirclesToRolesSchema = z.object({
  circleId: z.number().int(),
  roleId: z.number().int(),
  incumbentId: z.string(),
  termIds: z.number().int().array(),
})

export type CirclesToRoles = z.infer<typeof CirclesToRolesSchema>

export default CirclesToRolesSchema;
