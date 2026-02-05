"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testPluginManifest = exports.createMemo = exports.fooTestOptions = void 0;
/**
 * Config Plugin Index
 * Exports the config plugin manifest
 */
var foo_1 = require("./commands/foo");
Object.defineProperty(exports, "fooTestOptions", { enumerable: true, get: function () { return foo_1.fooTestOptions; } });
var memo_1 = require("./commands/memo");
Object.defineProperty(exports, "createMemo", { enumerable: true, get: function () { return memo_1.createMemo; } });
var manifest_1 = require("./manifest");
Object.defineProperty(exports, "testPluginManifest", { enumerable: true, get: function () { return manifest_1.testPluginManifest; } });
//# sourceMappingURL=index.js.map