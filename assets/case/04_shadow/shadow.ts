/*
 * @Author: yansixing
 * @Date: 2019-07-30 08:22:32
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2021-05-23 16:17:42
 */

import { _decorator, Component, Sprite, Material } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Shadow')
export default class Shadow extends Component {
    // @property
    // outlineColor: string = "0xffffff";
    // @property
    // outlineSize: number = 2;
    @property
    isWhite: boolean = false;
    img: Sprite | null = null;
    material: Material | undefined | null = null;
    onLoad() {
        //this.img = this.getComponent(cc.Sprite);
        //this.material = this.img.getMaterial(0);

        //this.material.effect.setProperty('isWhite', this.isWhite ? 1.0 : -1.0);
        //console.log(this.material);
    }
}