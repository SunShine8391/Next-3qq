import { imagePaths } from "./image-paths";
import { AssessmentItem, AssessmentStep4Item } from "./type";

export const RecentAssessmentLists = [
  { head: "COGNITION", description: "SLUMS" },
  { head: "Z00.00", description: "Physical Examination" },
  { head: "Z01.89", description: "Diagnostic Tests" },
];

export const AssessmentList: AssessmentItem[] = [
  { label: "Jill bought candies.", value: 1 },
  { label: "Jill has a dog as a pet.", value: 2 },
  { label: "Jill took a cab.", value: 3 },
];

export const AssessmentStep4List: AssessmentStep4Item[] = [
  { imagePath: imagePaths.chicken, label: "Chicken", value: "Chicken" },
  { imagePath: imagePaths.horse, label: "Horse", value: "Horse" },
  { imagePath: imagePaths.dog, label: "Dog", value: "Dog" },
];
