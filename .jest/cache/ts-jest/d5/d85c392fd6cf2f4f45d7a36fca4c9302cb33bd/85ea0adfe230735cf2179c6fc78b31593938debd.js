"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const colors_1 = require("./colors");
exports.SectionTitle = styled_components_1.default.Text `
    font-size: 32px;
    font-family: Alverata;
    color: ${colors_1.colors.title};
    margin-top: 10px;
`;
exports.Container = styled_components_1.default.View `
    flex: 1
    align-items: center;
    justify-content: center;
`;
exports.InnerContainer = styled_components_1.default.View `
    width: 70%;
    height: 100%;
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL1RoZW1lcy9TaGFyZWRTdHlsZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMEVBQXNDO0FBQ3RDLHFDQUFpQztBQUVwQixRQUFBLFlBQVksR0FBRywyQkFBTSxDQUFDLElBQUksQ0FBQTs7O2FBR3pCLGVBQU0sQ0FBQyxLQUFNOztDQUUxQixDQUFBO0FBRVksUUFBQSxTQUFTLEdBQUcsMkJBQU0sQ0FBQyxJQUFJLENBQUE7Ozs7Q0FJbkMsQ0FBQTtBQUNZLFFBQUEsY0FBYyxHQUFHLDJCQUFNLENBQUMsSUFBSSxDQUFBOzs7Q0FHeEMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvZGF2aWRtdXJwaHkvRGVza3RvcC9Nb25leVNlbmRlci9zcmMvVGhlbWVzL1NoYXJlZFN0eWxlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29sb3JzJ1xuXG5leHBvcnQgY29uc3QgU2VjdGlvblRpdGxlID0gc3R5bGVkLlRleHRgXG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBBbHZlcmF0YTtcbiAgICBjb2xvcjogJHsgY29sb3JzLnRpdGxlIH07XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5WaWV3YFxuICAgIGZsZXg6IDFcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuZXhwb3J0IGNvbnN0IElubmVyQ29udGFpbmVyID0gc3R5bGVkLlZpZXdgXG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5gIl0sInZlcnNpb24iOjN9