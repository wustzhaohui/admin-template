/*
 * @Author: zhaohui
 * @Date: 2021-06-18 14:45:54
 * @LastEditTime: 2021-06-20 14:26:20
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /admin-template/src/utils/index.ts
 */
export interface RouterConfigModel {
    path?: string;
    component?: any;
    auth?: boolean;
    name?: string;
    icon?: string;
    exact?: boolean;
    hidden?: boolean;
    routes?: Array<RouterConfigModel>;
}

export interface FormItem {
    name: string;
    label: string;
    type: number; //1input 2elesct 3radio 4 textarea 5datePicker 6RadioButton
    inputType?: string;
    initialValue?: any;
    placeholder?: string;
    rules: Array<any>;
    hidden?: boolean;
    disabledDate?: any;
    disabled?: boolean;
    suffix?: React.ReactNode;
    list?: FormSubList[];
}
export interface FormSubList {
    label: string;
    value: number;
    icon?: React.ReactNode | string;
}
