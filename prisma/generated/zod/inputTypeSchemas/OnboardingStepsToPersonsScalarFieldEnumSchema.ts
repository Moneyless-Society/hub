import { z } from 'zod';

export const OnboardingStepsToPersonsScalarFieldEnumSchema = z.enum(['stepId','personId','complete','doesOnboarding']);

export default OnboardingStepsToPersonsScalarFieldEnumSchema;
