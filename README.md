## Имитация рабочего стола с использованием React DND

Стек:
* React
* Typescript

### Проблемы React DND
1. Редактируемые элементы (input, textarea) лишаются возможности редактирования при добавлении useDrag  
Временно решается заменой на элемент с атрибутом contentEditable, но React начинает засыпать предупреждениями консоль  
Данная проблема отмечена в issue и не решена за 2 года.
2. Плохая настройка DragPreviewImage. При установке заглушки в виде прозрачного изображения может самопроизвольно сброситься