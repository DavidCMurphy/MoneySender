"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const native_1 = __importDefault(require("styled-components/native"));
const App_1 = require("../App");
const colors_1 = require("../Themes/colors");
const TransactonTitleText = native_1.default.Text `
    font-size: 16px;
    margin-bottom: 5px;
`;
const TransactonEmailText = native_1.default.Text `
    font-size: 12px;
`;
const TransactonAmountText = native_1.default.Text `
    font-size: 16px;
    font-weight: 600;
`;
const TransactionContainer = native_1.default.View `
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    height: 54px;
    border-bottom-color: ${colors_1.colors.lightGrey}
`;
exports.default = (props) => {
    return (react_1.default.createElement(TransactionContainer, null,
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(TransactonTitleText, null, props.name),
            react_1.default.createElement(TransactonEmailText, null, props.email)),
        react_1.default.createElement(react_native_1.View, { style: { flex: 1 } }),
        react_1.default.createElement(TransactonAmountText, null, `${App_1.currency} ${props.amount}`)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL0FjY291bnQvVHJhbnNhY3Rpb25JdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUF5QjtBQUN6QiwrQ0FBbUM7QUFFbkMsc0VBQTZDO0FBQzdDLGdDQUFpQztBQUNqQyw2Q0FBeUM7QUFFekMsTUFBTSxtQkFBbUIsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQTs7O0NBR3RDLENBQUE7QUFFRCxNQUFNLG1CQUFtQixHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFBOztDQUV0QyxDQUFBO0FBRUQsTUFBTSxvQkFBb0IsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQTs7O0NBR3ZDLENBQUE7QUFFRCxNQUFNLG9CQUFvQixHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFBOzs7OzsyQkFLWixlQUFNLENBQUMsU0FBVTtDQUM1QyxDQUFBO0FBRUQsa0JBQWUsQ0FBQyxLQUFrQixFQUFFLEVBQUU7SUFDbEMsT0FBTyxDQUFDLDhCQUFDLG9CQUFvQjtRQUN6Qiw4QkFBQyxtQkFBSTtZQUNELDhCQUFDLG1CQUFtQixRQUNkLEtBQUssQ0FBQyxJQUFJLENBQ087WUFDdkIsOEJBQUMsbUJBQW1CLFFBQ2QsS0FBSyxDQUFDLEtBQUssQ0FDTSxDQUNuQjtRQUNSLDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFJO1FBQzVCLDhCQUFDLG9CQUFvQixRQUNmLEdBQUcsY0FBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FDWCxDQUNKLENBQUMsQ0FBQTtBQUM3QixDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2RhdmlkbXVycGh5L0Rlc2t0b3AvTW9uZXlTZW5kZXIvc3JjL0FjY291bnQvVHJhbnNhY3Rpb25JdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAncmVhY3QtbmF0aXZlJ1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuLi9TZW5kL1JlZHVjZXJzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy9uYXRpdmUnXG5pbXBvcnQgeyBjdXJyZW5jeSB9IGZyb20gJy4uL0FwcCdcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL1RoZW1lcy9jb2xvcnMnXG5cbmNvbnN0IFRyYW5zYWN0b25UaXRsZVRleHQgPSBzdHlsZWQuVGV4dGBcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuYFxuXG5jb25zdCBUcmFuc2FjdG9uRW1haWxUZXh0ID0gc3R5bGVkLlRleHRgXG4gICAgZm9udC1zaXplOiAxMnB4O1xuYFxuXG5jb25zdCBUcmFuc2FjdG9uQW1vdW50VGV4dCA9IHN0eWxlZC5UZXh0YFxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuYFxuXG5jb25zdCBUcmFuc2FjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5WaWV3YFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR7IGNvbG9ycy5saWdodEdyZXkgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFRyYW5zYWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuICg8VHJhbnNhY3Rpb25Db250YWluZXI+XG4gICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgPFRyYW5zYWN0b25UaXRsZVRleHQ+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5uYW1lIH1cbiAgICAgICAgICAgIDwvIFRyYW5zYWN0b25UaXRsZVRleHQ+XG4gICAgICAgICAgICA8VHJhbnNhY3RvbkVtYWlsVGV4dD5cbiAgICAgICAgICAgICAgICB7IHByb3BzLmVtYWlsIH1cbiAgICAgICAgICAgIDwvIFRyYW5zYWN0b25FbWFpbFRleHQ+XG4gICAgICAgIDwvIFZpZXc+XG4gICAgICAgIDxWaWV3IHN0eWxlPXt7IGZsZXg6IDEgfX0gLz5cbiAgICAgICAgPFRyYW5zYWN0b25BbW91bnRUZXh0PlxuICAgICAgICAgICAgeyBgJHtjdXJyZW5jeX0gJHtwcm9wcy5hbW91bnR9YCB9XG4gICAgICAgIDwvIFRyYW5zYWN0b25BbW91bnRUZXh0PlxuICAgIDwvIFRyYW5zYWN0aW9uQ29udGFpbmVyPilcbn0iXSwidmVyc2lvbiI6M30=