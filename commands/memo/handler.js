"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMemo = createMemo;
const constants_1 = require("../../../../core/shared/constants");
const errors_1 = require("../../../../core/utils/errors");
const input_1 = require("../../../../plugins/test/commands/memo/input");
const zustand_state_helper_1 = require("../../../../plugins/test/zustand-state-helper");
async function createMemo(args) {
    const { api, logger } = args;
    const memoState = new zustand_state_helper_1.ZustandMemoStateHelper(api.state, logger);
    try {
        // Parse and validate args
        const validArgs = input_1.MemoTestInputSchema.parse(args.args);
        const memo = validArgs.memo;
        const accountAlias = validArgs.account;
        const currentNetwork = api.network.getCurrentNetwork();
        const account = api.alias.resolve(accountAlias, 'account', currentNetwork);
        if (!account) {
            throw new Error(`Failed to create memo for an account. Missing account in state ${accountAlias}`);
        }
        const existingMemo = memoState.getMemo(accountAlias);
        if (existingMemo) {
            throw new Error(`Memo already existing for an account ${accountAlias}`);
        }
        const memoData = {
            account: account.alias,
            memo: memo,
        };
        memoState.saveMemo(account.alias, memoData);
        const output = {
            memo,
            account: account.alias,
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