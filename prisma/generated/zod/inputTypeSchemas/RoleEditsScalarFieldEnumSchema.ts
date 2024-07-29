import { z } from 'zod';

export const RoleEditsScalarFieldEnumSchema = z.enum(['roleId','editorId','updatedAt']);

export default RoleEditsScalarFieldEnumSchema;
