import { surpriseMePrompts } from "../constants";

export function getRandomPromts(promt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPromt = surpriseMePrompts[randomIndex];
  if (randomPromt === prompt) return getRandomPromts(promt);
  return randomPromt;
}
