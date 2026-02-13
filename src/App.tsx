import React from 'react';
import UserCard from './UserCard';
import SkillList from './SkillList';
import SearchApp from './SearchApp'; // Импортируем компонент поиска
import type { User, Skill } from './types'; // Импортируем типы User и Skill из types.ts

// Примерные данные пользователей
const users: User[] = [
  { name: 'Alice', email: 'alice@mail.com', age: 25 },
  { name: 'Bob', email: 'bob@mail.com', age: 30 }
];

// Примерные данные о навыках
const skills: Skill[] = [
  { id: 1, name: 'JavaScript', level: 'Expert' },
  { id: 2, name: 'TypeScript', level: 'Intermediate' }
];

const App = () => {
  return (
    <div>
      <h1>Search Users</h1>
      <SearchApp /> {/* Вставляем компонент поиска */}
      <div>
        {users.map((user) => (
          <UserCard key={user.email} user={user}>
            <p>Bio or Status section</p>
          </UserCard>
        ))}
      </div>
      <SkillList skills={skills} /> {/* Вставляем компонент SkillList для отображения навыков */}
    </div>
  );
};

export default App;
