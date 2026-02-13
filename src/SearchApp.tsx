import React, { useState } from 'react';
import type { User } from './types'; // Импортируем интерфейс User из types.ts

// Примерные данные пользователей
const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "charlie@mail.com", age: 35 },
  { name: "David", email: "david@mail.com", age: 40 },
  { name: "Eve", email: "eve@mail.com", age: 22 }
];

const SearchApp = () => {
  const [users] = useState<User[]>(INITIAL_DATA); // Состояние для всех пользователей
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA); // Состояние для отфильтрованных пользователей
  const [searchTerm, setSearchTerm] = useState(""); // Состояние для поиска

  // Обработчик для поля поиска
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value; // Получаем значение из поля поиска
    setSearchTerm(term);
    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase()) // Фильтруем пользователей по имени
      )
    );
  };

  // Обработчик для кнопки очистки
  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSearchTerm(""); // Очищаем поле поиска
    setFilteredUsers(users); // Восстанавливаем всех пользователей
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch} // Обработчик поиска
        placeholder="Search users"
      />
      <button onClick={handleClear}>Clear</button> {/* Кнопка очистки */}
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.email}>
              {user.name} - {user.email}
            </li>
          ))
        ) : (
          <li>No results found</li> // Сообщение, если нет результатов
        )}
      </ul>
    </div>
  );
};

export default SearchApp;
