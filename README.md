# Прошкина Дарья Владиславовна — сайт ветеринарного врача-невролога

Сайт-визитка с онлайн-записью на консультацию: главная страница (об авторе,
лекторская деятельность, контакты) и страница «Квалификация».

## Стек

- [Next.js](https://nextjs.org) (App Router), статический экспорт
- Tailwind CSS v4
- [Framer Motion](https://motion.dev) (`motion`) — скролл-анимации
- Кастомный шрифт **MF EVOLT** через `next/font/local`

Дизайн-система (палитра, типографика, анимации) описана в
[docs/DESIGN-REFERENCE.md](docs/DESIGN-REFERENCE.md).

## Локальная разработка

```bash
npm install
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
```

Проект собирается как полностью статический сайт (`output: "export"` в
[next.config.ts](next.config.ts)) — результат появляется в `out/`, без
Node-сервера на хостинге.

## Деплой — GitHub Pages

Настроен автодеплой через GitHub Actions
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)): при пуше в
`main` сайт собирается и публикуется на GitHub Pages. Нужно один раз включить
**Settings → Pages → Source → GitHub Actions** в репозитории.

Пока не подключён свой домен, сайт живёт по базовому пути `/proshkina`
(репозиторий `ArgonautDen/proshkina`) — адрес:
`https://argonautden.github.io/proshkina/`.

Как подключить свой домен (`proshkina-vet.ru`) позже:

1. Убрать `NEXT_PUBLIC_BASE_PATH: /proshkina` из workflow-файла.
2. Добавить файл `public/CNAME` с содержимым `proshkina-vet.ru`.
3. Настроить DNS-записи и указать домен в Settings → Pages.

Vercel для этого проекта не используется.
