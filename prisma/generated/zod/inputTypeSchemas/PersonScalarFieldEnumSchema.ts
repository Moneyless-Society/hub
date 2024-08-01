import { z } from 'zod';

export const PersonScalarFieldEnumSchema = z.enum(['id','name','pronouns','bio','createdAt','updatedAt','isActive','preferredContactMethod','volunteerQuestionId']);

export default PersonScalarFieldEnumSchema;
