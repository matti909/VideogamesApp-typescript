"use strict";

var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./routes/index.route"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use('/', _index.default);
app.get('/', (_req, res) => {
  res.json({
    message: 'hello world'
  });
});
app.listen(4000, () => {
  console.log('Server running OK!!');
});