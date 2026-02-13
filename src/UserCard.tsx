import React from 'react';
import type { User } from './types'; // Импортируем интерфейс User

// Интерфейс пропсов для компонента UserCard
interface UserCardProps {
  user: User; // Тип для пропса user
  isActive?: boolean; // Опциональный проп
  children: React.ReactNode; // Проп для содержимого
}

// Компонент UserCard
const UserCard = ({ user, isActive = true, children }: UserCardProps) => {
  return (
    <div style={{ opacity: isActive ? 1 : 0.5 }}>
      <h2>{user.name}</h2>
      <p>{user.email} | Age: {user.age}</p>
      {children}
    </div>
  );
};

export default UserCard;
