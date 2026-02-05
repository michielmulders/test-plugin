"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooTestInputSchema = void 0;
const zod_1 = require("zod");
/**
 * Input schema for plugin-management add command
 * Validates arguments for adding a plugin from filesystem path
 */
exports.FooTestInputSchema = zod_1.z.object({
    message: zod_1.z
        .string()
        .max(100, 'Message should have maximum of 100 characters')
        .describe('Message to print. Max size should be 100 characters'),
});
//# sourceMappingURL=input.js.map