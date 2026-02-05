"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fooTestOptions = fooTestOptions;
const constants_1 = require("../../../../core/shared/constants");
const errors_1 = require("../../../../core/utils/errors");
const input_1 = require("../../../../plugins/test/commands/foo/input");
async function fooTestOptions(args) {
    const { logger } = args;
    try {
        // Parse and validate args
        const validArgs = input_1.FooTestInputSchema.parse(args.args);
        const message = validArgs.message;
        logger.info(message);
        const output = {
            bar: message,
        };
        return {
            status: constants_1.Status.Success,
            outputJson: JSON.stringify(output),
        };
    }
    catch (error) {
        return {
            status: constants_1.Status.Failure,
            errorMessage: (0, errors_1.formatError)('Failed to list configuration options', error),
        };
    }
}
//# sourceMappingURL=handler.js.map