import {siteMenuTemplate} from "./components/site-menu.js";
import {filterTemplate} from "./components/filter.js";
import {taskTemplate} from "./components/task.js";
import {taskEditTemplate} from "./components/task-edit.js";
import {loadMoreButtonTemplate} from "./components/load-more-button.js";
import {boardTemplate} from "./components/board.js";

const TASK_COUNT = 3;


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, siteMenuTemplate(), `beforeend`);
render(siteMainElement, filterTemplate(), `beforeend`);
render(siteMainElement, boardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);
render(taskListElement, taskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, taskTemplate(), `beforeend`);
}

render(boardElement, loadMoreButtonTemplate(), `beforeend`);
