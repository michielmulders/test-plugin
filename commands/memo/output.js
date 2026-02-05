"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEMO_TEST_TEMPLATE = exports.MemoTestOutputSchema = void 0;
const zod_1 = require("zod");
const schemas_1 = require("../../../../core/schemas");
exports.MemoTestOutputSchema = zod_1.z.object({
    memo: zod_1.z.string().describe('Memo for an account'),
    account: schemas_1.AliasNameSchema.describe('Account alias'),
});
exports.MEMO_TEST_TEMPLATE = `
📝 Memo {{memo}} saved for an account {{account}}
`.trim();
//# sourceMappingURL=output.js.map