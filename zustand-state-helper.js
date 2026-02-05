"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZustandMemoStateHelper = void 0;
const errors_1 = require("../../core/utils/errors");
const manifest_1 = require("./manifest");
const schema_1 = require("./schema");
class ZustandMemoStateHelper {
    constructor(state, logger) {
        this.state = state;
        this.logger = logger;
    }
    /**
     * Save a token to the state
     */
    saveMemo(accountId, memoData) {
        try {
            this.logger.debug(`[MEMO STATE] Saving memo ${accountId} to state`);
            const validation = (0, schema_1.safeParseMemoData)(memoData);
            if (!validation.success) {
                const errors = validation.error.issues
                    .map((e) => `${e.path.join('.')}: ${e.message}`)
                    .join(', ');
                throw new Error(`Invalid memo data: ${errors}`);
            }
            // Use the state service to save data in the memo namespace
            this.state.set(manifest_1.MEMO_NAMESPACE, accountId, memoData);
            this.logger.debug(`[MEMO STATE] Successfully saved message for ${accountId}`);
        }
        catch (error) {
            this.logger.error(`[MEMO STATE] Failed to save memo for ${accountId}: ${(0, errors_1.toErrorMessage)(error)}`);
            throw error;
        }
    }
    /**
     * Get a memo from the state
     */
    getMemo(account) {
        try {
            this.logger.debug(`[MEMO STATE] Getting memo ${account} from state`);
            const memoData = this.state.get(manifest_1.MEMO_NAMESPACE, account);
            if (memoData) {
                this.logger.debug(`[MEMO STATE] Found memo ${account} in state`);
                return memoData;
            }
            else {
                this.logger.debug(`[MEMO STATE] Memo ${account} not found in state`);
                return null;
            }
        }
        catch (error) {
            this.logger.error(`[MEMO STATE] Failed to get memo ${account}: ${(0, errors_1.toErrorMessage)(error)}`);
            throw error;
        }
    }
}
exports.ZustandMemoStateHelper = ZustandMemoStateHelper;
//# sourceMappingURL=zustand-state-helper.js.map