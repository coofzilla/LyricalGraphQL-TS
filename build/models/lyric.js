"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lyric = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const LyricSchema = new mongoose_1.Schema({
    song: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "song",
    },
    likes: { type: Number, default: 0 },
    content: { type: String },
});
LyricSchema.statics.like = async function (id) {
    // const Lyric = mongoose.model("lyric");
    const lyric = await exports.Lyric.findById(id);
    ++lyric.likes;
    return await lyric.save();
};
exports.Lyric = mongoose_1.default.model("lyric", LyricSchema);
