"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testPluginManifest = exports.MEMO_NAMESPACE = void 0;
const shared_types_1 = require("../../core/types/shared.types");
const memo_1 = require("../../plugins/test/commands/memo");
const output_1 = require("../../plugins/test/commands/memo/output");
const foo_1 = require("./commands/foo");
exports.MEMO_NAMESPACE = 'memo-memos';
exports.testPluginManifest = {
    name: 'test',
    version: '1.0.0',
    displayName: 'Test Plugin',
    description: 'For integration plugin',
    commands: [
        {
            name: 'foo',
            summary: 'Foo Test',
            description: 'Does nothing, integration test only for plugin registration',
            options: [
                {
                    name: 'message',
                    short: 'm',
                    type: shared_types_1.OptionType.STRING,
                    required: true,
                    description: 'Message to print. Max size should be 100 characters',
                },
            ],
            handler: foo_1.fooTestOptions,
            output: {
                schema: foo_1.FooTestOutputSchema,
                humanTemplate: foo_1.FOO_TEST_TEMPLATE,
            },
        },
        {
            name: 'memo',
            summary: 'Memo create ',
            description: 'Add simple memo for account present in store. One for an account',
            options: [
                {
                    name: 'account',
                    short: 'a',
                    type: shared_types_1.OptionType.STRING,
                    required: true,
                    description: 'Account alias present in state',
                },
                {
                    name: 'memo',
                    short: 'm',
                    type: shared_types_1.OptionType.STRING,
                    required: true,
                    description: 'Memo for an account. Max size should be 100 characters',
                },
            ],
            handler: memo_1.createMemo,
            output: {
                schema: output_1.MemoTestOutputSchema,
                humanTemplate: memo_1.MEMO_TEST_TEMPLATE,
            },
        },
    ],
};
exports.default = exports.testPluginManifest;
//# sourceMappingURL=manifest.js.map