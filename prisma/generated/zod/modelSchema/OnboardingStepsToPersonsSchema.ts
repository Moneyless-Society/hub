import { z } from 'zod';

/////////////////////////////////////////
// ONBOARDING STEPS TO PERSONS SCHEMA
/////////////////////////////////////////

export const OnboardingStepsToPersonsSchema = z.object({
  stepId: z.number().int(),
  personId: z.string(),
  complete: z.boolean(),
  doesOnboarding: z.boolean(),
})

export type OnboardingStepsToPersons = z.infer<typeof OnboardingStepsToPersonsSchema>

export default OnboardingStepsToPersonsSchema;
