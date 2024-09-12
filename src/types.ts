import { COLORS, SITUATIONS } from './constants.ts';
import { ReactNode } from 'react';

export type Color = typeof COLORS[number]
export type Situation = typeof SITUATIONS[number]

export type GroupByColor<T> = Record<Color, T>

export type Question = {
  label: string
  answers: GroupByColor<string>
  motivation: ReactNode
}
export type Questionnaire = Question[]

type ColorAdvice = {
  title: string
  content: string
}
export type ColorAttributeDescription = {
  heartUrl: string
  behaviorInLove: string
  relationshipStrength: string
  relationshipWeakness: string
  advises: ColorAdvice[]
}
export type ColorAttributes = {
  textColor: string
  title: string
  description: ColorAttributeDescription
}
export type ColorSpecificities = GroupByColor<ColorAttributes>

export type PersonalInfos = {
  email: string
  name: string
  situation: Situation
}
