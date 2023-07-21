"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
const message = ({ response, code, info = 'ok', data }) => {
    return response.status(code).json({
        info,
        data
    });
};
exports.message = message;
//# sourceMappingURL=msg.response.js.map