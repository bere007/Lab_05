// Интерфейс для данных пользователя
export interface User {
  name: string;
  email: string;
  age: number;
}

// Союзный тип для уровня навыка
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Expert';

// Интерфейс для данных о навыке
export interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
}
