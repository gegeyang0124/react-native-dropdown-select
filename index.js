import Button from "./lib/Button";
import DropdownBox from "./lib/DropdownBox";
import ButtonImage from "./lib/ButtonImage";
import PickDropdown from "./lib/PickDropdown";

const ui = {
    get Button() {
        return Button;
    },
    get DropdownBox() {
        return DropdownBox;
    },
    get PickDropdown() {
        return PickDropdown;
    },
    get ButtonImage() {
        return ButtonImage;
    },
};
module.exports = ui;