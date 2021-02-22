import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserList from "./components/User&users/UserList";
import A from './components/Mirror components/ComponentA';

const Users = [
  { name: { firstname: "Никифор", lastname: "Рогов" }, city: "Измаил", active: true },
  { name: { firstname: "Кассиан", lastname: "Савин" }, city: "Коломыя", active: false },
  { name: { firstname: "Юстин", lastname: "Шилов" }, city: "Житомир", active: false },
  { name: { firstname: "Мстислав", lastname: "Мамонтов" }, city: "Ивано-Франковск", active: true }
];

ReactDOM.render(
  <>
  <A />
  <UserList users = {Users}/>
  </>,
  document.getElementById('root')
);


