/*
 * @Author: yansixing
 * @Date: 2019-08-27 16:17:43
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2021-05-23 17:17:34
 */

import { _decorator, Component, Sprite, Material } from 'cc';
const { ccclass, property,executeInEditMode } = _decorator;

@ccclass('GaussBlur')
@executeInEditMode
export default class GaussBlur extends Component {
    // @property
    bluramount: number = 0.03;
    img: Sprite | null = null;
    material: Material | undefined | null = null;
    onLoad() {
        //this.img = this.getComponent(cc.Sprite);
        //this.material = this.img.getMaterial(0);

        //this.material.effect.setProperty('bluramount', this.bluramount);
        //console.log(this.material);
    }
}