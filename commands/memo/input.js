"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoTestInputSchema = void 0;
const zod_1 = require("zod");
const schemas_1 = require("../../../../core/schemas");
/**
 * Input schema for plugin-management add command
 * Validates arguments for adding a plugin from filesystem path
 */
exports.MemoTestInputSchema = zod_1.z.object({
    memo: zod_1.z
        .string()
        .max(100, 'Memo should have maximum of 100 characters')
        .describe('Memo to save for an account. Max size should be 100 characters'),
    account: schemas_1.AliasNameSchema.describe('Alias for memo.'),
});
//# sourceMappingURL=input.js.map