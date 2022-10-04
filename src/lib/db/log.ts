/* eslint-disable */
// @ts-nocheck
// @see https://github.com/brianc/node-postgres/issues/433#issuecomment-392589589
const Query = require("pg").Query;
const submit = Query.prototype.submit;
Query.prototype.submit = function () {
  const text = this.text;
  const values = this.values || [];
  const query = text.replace(/\$([0-9]+)/g, (m, v) =>
    JSON.stringify(values[parseInt(v) - 1])
  );
  console.log(query);
  submit.apply(this, arguments);
};
