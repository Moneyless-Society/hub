import { z } from 'zod';

export const RoleTermScalarFieldEnumSchema = z.enum(['id','circleId','roleId','holderId','start','end']);

export default RoleTermScalarFieldEnumSchema;
