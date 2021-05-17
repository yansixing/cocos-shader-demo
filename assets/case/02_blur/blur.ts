/*
 * @Author: yansixing
 * @Date: 2019-07-30 08:22:32
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2021-05-17 20:01:01
 */

import { _decorator, Component, Sprite, Material } from 'cc';
const { ccclass, property,executeInEditMode } = _decorator;

import { Utils } from "../../utils/utils";

@ccclass('Blur')
@executeInEditMode
export default class Blur extends Component {
    // @property
    // enabled: boolean = true;
    // @property
    // outlineColor: string = "0xffffff";
    // @property
    // outlineSize: number = 2;
    img: Sprite | null = null;
    material: Material | null = null;
    onLoad() {

        this.img = this.getComponent(Sprite);
        console.log(this.img?.sharedMaterial);

        // resolution
        //this.material.effect.setProperty('resolution', new cc.Vec2(this.img.node.width, this.img.node.height));
        // // blurRadius
        // this.material.effect.setProperty('blurRadius', 5);
        // // sampleNum
        // this.material.effect.setProperty('sampleNum', 4);
        //console.log(this.material);
    }
}

/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// /*
//  * @Author: yansixing
//  * @Date: 2019-07-30 08:22:32
//  * @Github: https://github.com/yansixing
//  * @LastEditTime: 2020-08-03 17:55:46
//  */
// import { Utils } from "../../utils/utils";
// 
// const { ccclass, property,executeInEditMode } = cc._decorator;
// 
// @ccclass
// @executeInEditMode
// export default class Blur extends cc.Component {
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
// 
//     onLoad() {
// 
//         this.img = this.getComponent(cc.Sprite);
//         this.material = this.img.getMaterial(0);
// 
//         // resolution
//         this.material.effect.setProperty('resolution', new cc.Vec2(this.img.node.width, this.img.node.height));
//         // // blurRadius
//         // this.material.effect.setProperty('blurRadius', 5);
//         // // sampleNum
//         // this.material.effect.setProperty('sampleNum', 4);
//         console.log(this.material);
//     }
// 
// 
// 
// }
