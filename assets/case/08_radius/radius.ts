/*
 * @Author: yansixing
 * @Date: 2019-09-28 11:26:29
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2021-05-23 20:41:22
 */

import { _decorator, Component, Sprite, Material } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('Radius')
@executeInEditMode
export default class Radius extends Component {
    @property
    radius: number = 0.2;
    img: Sprite | null = null;
    material: Material | undefined | null = null;
    time: number = 1;
    resolution = { x: 0.0, y: 0.0 };
    onLoad() {

        this.img = this.getComponent(Sprite);
        this.material = this.img?.sharedMaterial;
        this.material?.setProperty('u_edge', this.radius);

        console.log(this.material);
    }
}