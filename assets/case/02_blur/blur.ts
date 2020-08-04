/*
 * @Author: yansixing
 * @Date: 2019-07-30 08:22:32
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2020-08-03 17:55:46
 */
import { Utils } from "../../utils/utils";

const { ccclass, property,executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class Blur extends cc.Component {

    // @property
    // enabled: boolean = true;
    // @property
    // outlineColor: string = "0xffffff";
    // @property
    // outlineSize: number = 2;

    img: cc.Sprite = null;
    material: cc.Material;

    onLoad() {

        this.img = this.getComponent(cc.Sprite);
        this.material = this.img.getMaterial(0);

        // resolution
        this.material.effect.setProperty('resolution', new cc.Vec2(this.img.node.width, this.img.node.height));
        // // blurRadius
        // this.material.effect.setProperty('blurRadius', 5);
        // // sampleNum
        // this.material.effect.setProperty('sampleNum', 4);
        console.log(this.material);
    }



}
