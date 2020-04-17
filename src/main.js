import {boardTemplate} from "./components/board.js";
import {filterTemplate} from "./components/filter.js";
import {loadMoreButtonTemplate} from "./components/load-more-button.js";
import {taskEditTemplate} from "./components/task-edit.js";
import {taskTemplate} from "./components/task.js";
import {siteMenuTemplate} from "./components/site-menu.js";
import {generateTasks} from "./mock/task.js";
import {generateFilters} from "./mock/filter.js";

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

render(siteHeaderElement, siteMenuTemplate(), `beforeend`);
render(siteMainElement, filterTemplate(filters), `beforeend`);
render(siteMainElement, boardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);
render(taskListElement, taskEditTemplate(tasks[0]), `beforeend`);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(1, showingTasksCount)
  .forEach((task) => render(taskListElement, taskTemplate(task), `beforeend`));


// for (let i = 0; i < showingTasksCount; i++) {
//   render(taskListElement, taskTemplate(tasks[i]), `beforeend`);
// }

render(boardElement, loadMoreButtonTemplate(), `beforeend`);

const loadMoreButton = boardElement.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => render(taskListElement, taskTemplate(task), `beforeend`));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
