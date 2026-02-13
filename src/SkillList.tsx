import React from 'react';
import type { Skill } from './types'; // Импортируем интерфейс Skill

// Интерфейс пропсов для компонента SkillList
interface SkillListProps {
  skills: Skill[]; // Массив навыков
}

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>
          {skill.name} - {skill.level}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
