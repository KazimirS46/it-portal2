export type NavSubMenu = {
  id: number;
  title: string;
  path: string;
};

export interface RoutesType {
  id: number;
  title: string;
  path: string | null;
  submenu: NavSubMenu[] | null;
}

export const routes: RoutesType[] = [
  {
    id: 0,
    title: 'Инвесторам',
    path: null,
    submenu: [
      {
        id: 0,
        title: 'Главная',
        path: '/',
      },
      {
        id: 1,
        title: 'IT Решения',
        path: '/solutions',
      },
      {
        id: 2,
        title: 'IT Услуги',
        path: '/services',
      },
      {
        id: 3,
        title: 'Мероприятия',
        path: '/events',
      },
      {
        id: 4,
        title: 'Информация о регионе',
        path: '/about',
      },
    ],
  },
  {
    id: 1,
    title: 'IT Компаниям',
    path: '/for_companies',
    submenu: null,
  },
  {
    id: 2,
    title: 'Программистам ',
    path: null,
    submenu: [
      {
        id: 0,
        title: 'Компании',
        path: '/companies',
      },
      {
        id: 1,
        title: 'Конференции/мероприятия',
        path: '/events',
      },
    ],
  },
  {
    id: 3,
    title: 'Абитуриентам',
    path: null,
    submenu: [
      {
        id: 0,
        title: 'Вузы',
        path: '/universities',
      },
      {
        id: 1,
        title: 'Среднее проф.образование',
        path: '/secondary_education',
      },
      {
        id: 2,
        title: 'Мероприятия',
        path: '/events_for_applicants',
      },
    ],
  },
  { id: 4, title: 'Контакты', path: '/contacts', submenu: null },
];
