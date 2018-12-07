# react-native-dropdown-select
下拉框组件

###  安装组件：
npm i --save react-native-dropdown-select

### 展示ui图
![下拉框展示图](https://thumbnail0.baidupcs.com/thumbnail/d93d3eadba1126392992a85a3a297c2f?fid=2334753321-250528-642919755627711&time=1544076000&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-4wGz0VK4RgWae7IJYAGASf9owlQ%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=7876038701528004203&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video)
![下拉框展示图](https://thumbnail0.baidupcs.com/thumbnail/f85de594b9d654e20bcee4722d70bd3f?fid=2334753321-250528-714535652839784&time=1544140800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-%2Fzi%2FsTtIRJDdOjLJoV4565xLet0%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=7893807274390999315&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video)

### 使用（这些ui组件的详细方法参数、作用、属性，可查看源文件，里面有详细注释）
```javascript
import {
DropdownBox,
ButtonImage,
Button,
PickDropdown
} from "react-native-dropdown-select";

/**
单选
**/
<PickDropdown options={this.state.typesList}
              style={styles.dropdwon}
              onSelect={(v)=>this.onSelectDrop(v)}
              defaultValue={"请选择客户"}/>

/**
多选
**/
<PickDropdown options={this.state.typesList}
              multiple={true}
              style={styles.dropdwon}
              onSelect={(v)=>this.onSelectDrop(v)}
              defaultValue={"请选择客户"}/>

/**
图片按钮
**/
<ButtonImage icon={TriangleDown}
             disabled={disabled}
             style={[styles.searchIcon,{
                      width:this.getStyle().height == undefined
                      ? this.getStyle(styles.searchIcon).height
                        : this.styles.height,
                          height:this.styles.height,
                     }]}
             iconStyle={[
                        {
                            width:this.styles.height,
                            height:this.styles.height,
                         },
                          styles.icon,
                          this.getIconStyle()
                      ]}
              onPress={this._onBtnImgPress}/>

/**
按钮
**/
<Button style={styles.multipleBtn}
        textStyle={styles.multipleBtnText}
        onPress={()=>this._onMultiplePress()}
        text={"确定"}/>

```

### DropdownBox 详解
<img src="https://github.com/sohobloo/react-native-modal-dropdown/blob/master/docs/demo_1.gif?raw=true" width = "160" height = "287.5" alt="Demo 1"/><img src="https://github.com/sohobloo/react-native-modal-dropdown/blob/master/docs/demo_2.gif?raw=true" width = "160" height = "287.5" alt="Demo 2"/><img src="https://github.com/sohobloo/react-native-modal-dropdown/blob/master/docs/demo_3.gif?raw=true" width = "160" height = "287.5" alt="Demo 3"/>
You can also render your option row and row separator by implement `renderRow` and `renderSeparator` function.

##### DropdownBox自定义样式属性
Give the style props as your choice:
- `style`: Change the style of the button (basic mode) / container (wrapper mode).
- `textStyle`: Change the style of text of the button. *Invalid in wrapper mode.*
- `dropdownStyle`: Change the style of dropdown container.
- `multiple`: Change the style of dropdown container.

##### DropdownBox的api属性
属性                | 类型     | 可选 | 默认值   | 描述
------------------- | -------- | -------- | --------- | -----------
`disabled`          | bool     | Yes      | false     | disable / enable the component.
`defaultIndex`      | number   | Yes      | -1        | Init selected index. `-1`: None is selected. **This only change the highlight of the dropdown row, you have to give a `defaultValue` to change the init text.**
`defaultValue`      | string   | Yes      | Please select... | Init text of the button. **Invalid in wrapper mode.**
`options`           | array    | Yes      |           | Options. **The dropdown will show a loading indicator if `options` is `null`/`undefined`.**
`animated`          | bool     | Yes      | true      | Disable / enable fade animation.
`showsVerticalScrollIndicator` | bool | Yes | true    | Show / hide vertical scroll indicator.
`style`             | object   | Yes      |           | Style of the button.
`textStyle`         | object   | Yes      |           | Style of the button text. **Invalid in wrapper mode.**
`dropdownStyle`     | object   | Yes      |           | Style of the dropdown list.
`dropdownTextStyle` | object   | Yes      |           | Style of the dropdown option text.
`dropdownTextHighlightStyle`   | object | Yes      |  | Style of the dropdown selected option text.
`adjustFrame`       | func     | Yes      |           | This is a callback after the frame of the dropdown have been calculated and before showing. You will receive a style object as argument with some of the props like `width` `height` `top` `left` and `right`. Change them to appropriate values that accord with your requirement and **make the new style as the return value of this function**.
`renderRow`         | func     | Yes      |           | Customize render option rows: `function(option,index,isSelected)` **Will render a default row if `null`/`undefined`.**
`renderSeparator`   | func     | Yes      |           | Customize render dropdown list separators. **Will render a default thin gray line if `null`/`undefined`.**
`renderButtonText`  | func     | Yes      |           | Use this to extract and return text from option object. This text will show on button after option selected. **Invalid in wrapper mode.**
`onDropdownWillShow`| func     | Yes      |           | Trigger when dropdown will show by touching the button. **Return `false` can cancel the event.**
`onDropdownWillHide`| func     | Yes      |           | Trigger when dropdown will hide by touching the button. **Return `false` can cancel the event.**
`onSelect`          | func     | Yes      |           | Trigger when option row touched with selected `index` and `value`. **Return `false` can cancel the event.**
`accessible`          | bool     | Yes      | true    | Set accessibility of dropdown modal and dropdown rows
`keyboardShouldPersistTaps`    | enum('always', 'never', 'handled') | Yes | 'never' | See react-native `ScrollView` props
`multiple`    | bool | Yes | false | Sets single or multiple selections

##### DropdownBox的方法
方法            |  描述
----------------- |  -----------
`show()`          |  Show the dropdown. **Won't trigger `onDropdownWillShow`.**
`hide()`          |  Hide the dropdown. **Won't trigger `onDropdownWillHide`.**
`select(idx)`     |  Select the specified option of the `idx`. Select `-1` will reset it to display `defaultValue`. **Won't trigger `onSelect`.**



### 欢迎交流
欢迎提问交流；若有bug，请添加bug截图或代码片段，以便更快更好的解决问题。<br>
欢迎大家一起交流

### [我的博客](http://blog.sina.com.cn/s/articlelist_6078695441_0_1.html)

