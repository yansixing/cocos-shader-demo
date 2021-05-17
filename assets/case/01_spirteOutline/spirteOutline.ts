/*
 * @Author: yansixing
 * @Date: 2019-07-30 08:22:32
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2021-05-17 20:02:34
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