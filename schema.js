"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEMO_JSON_SCHEMA = exports.MemoDataSchema = void 0;
exports.safeParseMemoData = safeParseMemoData;
/**
 * Token Plugin State Schema
 * Single source of truth for token data structure and validation
 */
const zod_1 = require("zod");
const schemas_1 = require("../../core/schemas");
const zod_to_json_schema_1 = require("../../core/utils/zod-to-json-schema");
// Main token data schema
exports.MemoDataSchema = zod_1.z.object({
    account: schemas_1.AliasNameSchema,
    memo: zod_1.z
        .string()
        .trim()
        .min(1, 'Memo is required')
        .max(100, 'Memo should have maximum of 100 characters'),
});
// JSON Schema for manifest (automatically generated from Zod schema)
exports.MEMO_JSON_SCHEMA = (0, zod_to_json_schema_1.zodToJsonSchema)(exports.MemoDataSchema);
/**
 * Safe parse memo data (returns success/error instead of throwing)
 */
function safeParseMemoData(data) {
    return exports.MemoDataSchema.safeParse(data);
}
//# sourceMappingURL=schema.js.map