/*
 * @Author: yansixing
 * @Date: 2019-07-30 08:22:32
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2021-05-13 23:06:07
 */

import { _decorator, Component, Sprite, Material, Vec4 } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

import { Utils } from "../../utils/utils";

@ccclass('SpirteOutline')
@executeInEditMode
export default class SpirteOutline extends Component {
    @property
    outlineColor: string = "0xffffff";
    @property
    outlineSize: number = 2;
    img: Sprite | null = null;
    material: Material | null = null;
    onLoad() {
        this.img = this.getComponent(Sprite);
        console.log(this.img?.sharedMaterial);
        // # outlineColor:   { value: [1.0, 1.0, 1.0, 1.0], editor: { type: color } }
        // # textureSize:    { value: [300.0, 200.0] }
        // # outlineSize:    { value: 5.0 }
        // this.material = 
        // this.img?.sharedMaterial?.setProperty('outlineSize', 20);

        //let { b, g, r } = Utils.hexToRGB(parseInt(this.outlineColor, 16));
        // outlineColor
        //this.material.effect.setProperty('outlineColor', new cc.Vec3(r / 255, g / 255, b / 255));
        // textureSize
        //this.material.effect.setProperty('textureSize', new cc.Vec2(this.img.node.width, this.img.node.height));
        // outlineSize
        //this.material.effect.setProperty('outlineSize', this.outlineSize);
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
//  * @LastEditTime: 2020-08-03 17:43:00
//  */
// import { Utils } from "../../utils/utils";
// 
// const { ccclass, property, executeInEditMode } = cc._decorator;
// 
// @ccclass
// @executeInEditMode
// export default class spirteOutline extends cc.Component {
// 
//     @property
//     outlineColor: string = "0xffffff";
//     @property
//     outlineSize: number = 2;
// 
//     img: cc.Sprite = null;
//     material: cc.Material;
// 
//     onLoad() {
//         this.img = this.getComponent(cc.Sprite);
//         this.material = this.img.getMaterial(0);
// 
//         let { b, g, r } = Utils.hexToRGB(parseInt(this.outlineColor, 16));
//         // outlineColor
//         this.material.effect.setProperty('outlineColor', new cc.Vec3(r / 255, g / 255, b / 255));
//         // textureSize
//         this.material.effect.setProperty('textureSize', new cc.Vec2(this.img.node.width, this.img.node.height));
//         // outlineSize
//         this.material.effect.setProperty('outlineSize', this.outlineSize);
//         console.log(this.material);
//     }
// 
// }
