const { default: actionsTypesAuthors } = require("../actionTypes/authorsAT");

const authorsAction = {
  initAuthors: () => ({ type: actionsTypesAuthors.INIT_AUTHORS_START })
}

export default authorsAction;
