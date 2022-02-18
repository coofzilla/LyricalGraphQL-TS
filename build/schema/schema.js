"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const root_query_type_1 = __importDefault(require("./root_query_type"));
exports.schema = new graphql_1.GraphQLSchema({
    query: root_query_type_1.default,
});
