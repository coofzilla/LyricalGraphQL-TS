"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const root_query_type_1 = __importDefault(require("./root_query_type"));
const mutations_1 = __importDefault(require("./mutations"));
exports.schema = new graphql_1.GraphQLSchema({
    query: root_query_type_1.default,
    mutation: mutations_1.default,
});
