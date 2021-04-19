import { Lazyload } from 'vant';
import {
    Tabbar,
    TabbarItem,
    NavBar,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    Image,
    Field,
    CellGroup,
    Cell,
    Button,
    Checkbox,
    CheckboxGroup,
    Icon,
    Switch,
    PullRefresh,
    List,
    Uploader,
    Picker,
    Form,
    Slider,
    Popup,
    Notify,
    Dialog
} from 'vant';

export default (Vue) => {
    Vue.prototype.$notify = Notify
    Vue.prototype.$dialog = Dialog
    Vue.use(Lazyload);
    Vue.component(Tabbar.name, Tabbar)
    Vue.component(Slider.name, Slider)
    Vue.component(TabbarItem.name, TabbarItem)
    Vue.component(NavBar.name, NavBar)
    Vue.component(Swipe.name, Swipe)
    Vue.component(SwipeItem.name, SwipeItem)
    Vue.component(Grid.name, Grid)
    Vue.component(GridItem.name, GridItem)
    Vue.component('VanImage', Image)
    Vue.component(Field.name, Field)
    Vue.component(CellGroup.name, CellGroup)
    Vue.component(Cell.name, Cell)
    Vue.component(Button.name, Button)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(CheckboxGroup.name, CheckboxGroup)
    Vue.component(Icon.name, Icon)
    Vue.component(Switch.name, Switch)
    Vue.component(PullRefresh.name, PullRefresh)
    Vue.component(List.name, List)
    Vue.component(Uploader.name, Uploader)
    Vue.component(Picker.name, Picker)
    Vue.component(Form.name, Form)
    Vue.component(Popup.name, Popup)
}
