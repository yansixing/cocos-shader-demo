/*
 * @Author: yansixing
 * @Date: 2019-07-30 08:22:32
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2019-09-28 11:25:01
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class spirteOutline extends cc.Component {

    // @property
    // outlineColor: string = "0xffffff";
    // @property
    // outlineSize: number = 2;
    @property
    isWhite: boolean = false;

    img: cc.Sprite = null;
    material: cc.Material;

    onLoad() {
        this.img = this.getComponent(cc.Sprite);
        this.material = this.img.getMaterial(0);
        
        this.material.effect.setProperty('isWhite', this.isWhite ? 1.0 : -1.0);
        console.log(this.material);
    }

}
