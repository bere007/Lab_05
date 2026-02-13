import React from 'react';
import UserCard from './UserCard';
import SkillList from './SkillList';
import type { User, Skill } from './types';

const users: User[] = [
  { name: 'Alice', email: 'alice@mail.com', age: 25 },
  { name: 'Bob', email: 'bob@mail.com', age: 30 }
];

const skills: Skill[] = [
  { id: 1, name: 'JavaScript', level: 'Expert' },
  { id: 2, name: 'TypeScript', level: 'Intermediate' },
  { id: 3, name: 'React', level: 'Expert' }
];

const App = () => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.email} user={user}>
          <p>Bio or Status section</p>
        </UserCard>
      ))}
      <SkillList skills={skills} />
    </div>
  );
};

export default App;
