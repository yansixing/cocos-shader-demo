/*
 * @Author: yansixing
 * @Date: 2019-07-30 08:22:32
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2021-05-23 16:11:42
 */

import { _decorator, Component, Sprite, Material } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('Flash')
@executeInEditMode
export default class Flash extends Component {
    // @property
    // enabled: boolean = true;
    // @property
    // outlineColor: string = "0xffffff";
    // @property
    // outlineSize: number = 2;
    img: Sprite | null = null;
    material: Material | undefined | null = null;
    startTime: number = Date.now();
    time: number = 0;
    onLoad() {

        this.img = this.getComponent(Sprite);
        this.material = this.img?.sharedMaterial;

        //console.log(this.material);
    }
    update() {
        this.time = (Date.now() - this.startTime) / 1000;
        this.material?.setProperty("time", this.time);
        // this.material?.effect?.setProperty('time', this.time);
    }
}