"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var port = 3000;
// Start server
app_1.default.listen(port, function () { return console.log("Server is listening on port i dupa " + port + "!"); });
//# sourceMappingURL=server.js.map