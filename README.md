# SOLVT.AI UI-Library

## Установка
1. Убедитесь, что файл **.npmrc** содержит необходимые настройки:
```
registry=https://registry.npmjs.org/
@solvt-ai:registry=https://npm.pkg.github.com/
```
2. Установите библиотеку компонентов
```
npm i @solvt-ai/ui-library@latest
```

## Использование
На текущий момент все компоненты доступны прямо из пакета:
```
import { Button, ButtonIntent, ButtonSize, ButtonProps } from '@solvt-ai/ui-library';
import { Input, InputType, InputSize, InputProps } from '@solvt-ai/ui-library';
```
Для отображения стилей, необходимо в верхнеуровневом компоненте (например, src/index.tsx) подключить css:
```
import '@solvt-ai/ui-library/dist/esm/index.css';
```

## Обновление библиотеки
1. Переключаемся на новую ветку:
```
git checkout -b '<prefix>/<jira_ticket>_<short_description>'
```
 
- `prefix` - feature/hotfix/release/support/version (см. gitflow)
- `jira_ticket` - тикет и номер из жиры
- `short_description` - короткое описание задачи

2. Произвести изменения кодовой базы
3. Обновить версию package.json на мажорную или минорную
4. Создаем Pull-request
5. После мержа, необходимо вручную выполнить обновление сторибука на gh-pages:
```
npm run deploy-storybook
```
6. Убедиться, что gh-pages и git workflows прошли без ошибок 
