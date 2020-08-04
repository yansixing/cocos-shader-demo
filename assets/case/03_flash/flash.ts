/*
 * @Author: yansixing
 * @Date: 2019-07-30 08:22:32
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2020-08-03 18:01:43
 */
import { Utils } from "../../utils/utils";

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
// @executeInEditMode
export default class Flash extends cc.Component {

    // @property
    // enabled: boolean = true;
    // @property
    // outlineColor: string = "0xffffff";
    // @property
    // outlineSize: number = 2;

    img: cc.Sprite = null;
    material: cc.Material;
    startTime: number = Date.now();
    time: number = 0;

    onLoad() {

        this.img = this.getComponent(cc.Sprite);
        this.material = this.img.getMaterial(0);

        console.log(this.material);
    }

    update() {
        this.time = (Date.now() - this.startTime) / 1000;
        this.material.effect.setProperty('time', this.time);
    }

}
