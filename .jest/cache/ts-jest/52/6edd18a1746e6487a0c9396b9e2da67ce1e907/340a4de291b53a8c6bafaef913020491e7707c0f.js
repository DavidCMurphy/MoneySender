"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = __importDefault(require("styled-components/native"));
const colors_1 = require("./colors");
exports.SectionTitle = native_1.default.Text `
    font-size: 32px;
    font-family: Alverata;
    color: ${colors_1.colors.title};
    margin-top: 10px;
`;
exports.Container = native_1.default.View `
    flex: 1
    align-items: center;
    justify-content: center;
`;
exports.InnerContainer = native_1.default.View `
    width: 70%;
    height: 100%;
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL1RoZW1lcy9TaGFyZWRTdHlsZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0VBQTZDO0FBQzdDLHFDQUFpQztBQUVwQixRQUFBLFlBQVksR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQTs7O2FBR3pCLGVBQU0sQ0FBQyxLQUFNOztDQUUxQixDQUFBO0FBRVksUUFBQSxTQUFTLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUE7Ozs7Q0FJbkMsQ0FBQTtBQUNZLFFBQUEsY0FBYyxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFBOzs7Q0FHeEMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvZGF2aWRtdXJwaHkvRGVza3RvcC9Nb25leVNlbmRlci9zcmMvVGhlbWVzL1NoYXJlZFN0eWxlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy9uYXRpdmUnXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbG9ycydcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZC5UZXh0YFxuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LWZhbWlseTogQWx2ZXJhdGE7XG4gICAgY29sb3I6ICR7IGNvbG9ycy50aXRsZSB9O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuVmlld2BcbiAgICBmbGV4OiAxXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcbmV4cG9ydCBjb25zdCBJbm5lckNvbnRhaW5lciA9IHN0eWxlZC5WaWV3YFxuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuYCJdLCJ2ZXJzaW9uIjozfQ==