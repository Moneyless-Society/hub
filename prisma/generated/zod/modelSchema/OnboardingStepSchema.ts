import { z } from 'zod';

/////////////////////////////////////////
// ONBOARDING STEP SCHEMA
/////////////////////////////////////////

export const OnboardingStepSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullable(),
})

export type OnboardingStep = z.infer<typeof OnboardingStepSchema>

export default OnboardingStepSchema;
