import { z } from 'zod';

export const CircleScalarFieldEnumSchema = z.enum(['id','name','mission','description','domains','createdAt','updatedBy','isActive']);

export default CircleScalarFieldEnumSchema;
