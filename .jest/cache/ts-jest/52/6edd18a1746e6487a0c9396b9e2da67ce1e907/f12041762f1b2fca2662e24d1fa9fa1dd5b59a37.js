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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL1RoZW1lcy9TaGFyZWRTdHlsZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0VBQThDO0FBQzlDLHFDQUFrQztBQUVyQixRQUFBLFlBQVksR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQTs7O1dBRzVCLGVBQU0sQ0FBQyxLQUFLOztDQUV0QixDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUE7Ozs7Q0FJbkMsQ0FBQztBQUVXLFFBQUEsY0FBYyxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFBOzs7Q0FHeEMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvZGF2aWRtdXJwaHkvRGVza3RvcC9Nb25leVNlbmRlci9zcmMvVGhlbWVzL1NoYXJlZFN0eWxlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlXCI7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi9jb2xvcnNcIjtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZC5UZXh0YFxuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiBBbHZlcmF0YTtcbiAgY29sb3I6ICR7Y29sb3JzLnRpdGxlfTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuVmlld2BcbiAgICBmbGV4OiAxXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbm5lckNvbnRhaW5lciA9IHN0eWxlZC5WaWV3YFxuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuIl0sInZlcnNpb24iOjN9