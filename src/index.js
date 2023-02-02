/**
 * Todo
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} content
 * @property {boolean} completed
 * @property {string} category
 * @property {string[]} [tags]
 */

/**
 * Todos
 * @type {Todo[]}
 */
const todos = [];

/**
 * 할 일을 추가하는 함수
 * @function createTodo
 * @author jiin9999 <cji3604@gmail.com>
 * @param {Object} obj
 * @param {string} obj.content
 * @param {category} obj.category
 * @param {string[]} obj.tags
 * @param {Todo[]} todos
 */
const createTodo = ({ content, category, tags }, todos) => {};

/**
 * 모든 할 일을 조회하는 함수
 * @description ID를 전달하면 ID와 일치하는 할 일을 조회할 수 있다.
 * @function readTodo
 * @author jiin9999 <cji3604@gmail.com>
 * @param {number} [id] id
 */
const readTodo = (id) => {};

/**
 * 할 일의 ID를 제외한 모든 속성을 수정하는 함수
 * @function updateTodo
 * @author jiin9999 <cji3604@gmail.com>
 * @param {Object} Todo
 * @param {Todo[]} todos
 */
const updateTodo = (Todo, todos) => {};

/**
 * ID를 기반으로 특정 할 일을 제거하는 함수
 * @description ID를 전달하지 않으면 모든 할 일을 제거할 수 있다.
 * @function deleteTodoById
 * @author jiin9999 <cji3604@gmail.com>
 * @param {string} id
 * @param {Todo[]} todos
 */
const deleteTodoById = (id, todos) => {};

/**
 * ID를 기반으로 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @description tags를 전달하지 않으면 모든 태그를 제거할 수 있다.
 * @function deleteTagInTodo
 * @author jiin9999 <cji3604@gmail.com>
 * @param {Object} obj
 * @param {string} obj.id
 * @param {string[]} obj.tags
 * @param {Todo[]} todos
 */
const deleteTagInTodo = ({ id, tags }, todos) => {};
