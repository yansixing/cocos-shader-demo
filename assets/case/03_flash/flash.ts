/*
 * @Author: yansixing
 * @Date: 2019-07-30 08:22:32
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2020-08-03 18:01:43
 */

import { _decorator, Component, Sprite, Material } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

import { Utils } from "../../utils/utils";
// @executeInEditMode

@ccclass('Flash')
export default class Flash extends Component {
    // @property
    // enabled: boolean = true;
    // @property
    // outlineColor: string = "0xffffff";
    // @property
    // outlineSize: number = 2;
    img: Sprite | null = null;
    material: Material;
    startTime: number = Date.now();
    time: number = 0;
    onLoad() {

        //this.img = this.getComponent(cc.Sprite);
        //this.material = this.img.getMaterial(0);

        //console.log(this.material);
    }
    update() {
        //this.time = (Date.now() - this.startTime) / 1000;
        //this.material.effect.setProperty('time', this.time);
    }
}

/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// /*
//  * @Author: yansixing
//  * @Date: 2019-07-30 08:22:32
//  * @Github: https://github.com/yansixing
//  * @LastEditTime: 2020-08-03 18:01:43
//  */
// import { Utils } from "../../utils/utils";
// 
// const { ccclass, property, executeInEditMode } = cc._decorator;
// 
// @ccclass
// // @executeInEditMode
// export default class Flash extends cc.Component {
// 
//     // @property
//     // enabled: boolean = true;
//     // @property
//     // outlineColor: string = "0xffffff";
//     // @property
//     // outlineSize: number = 2;
// 
//     img: cc.Sprite = null;
//     material: cc.Material;
//     startTime: number = Date.now();
//     time: number = 0;
// 
//     onLoad() {
// 
//         this.img = this.getComponent(cc.Sprite);
//         this.material = this.img.getMaterial(0);
// 
//         console.log(this.material);
//     }
// 
//     update() {
//         this.time = (Date.now() - this.startTime) / 1000;
//         this.material.effect.setProperty('time', this.time);
//     }
// 
// }
