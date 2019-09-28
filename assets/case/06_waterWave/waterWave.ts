/*
 * @Author: yansixing
 * @Date: 2019-08-27 16:17:43
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2019-09-28 11:25:10
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class waterWave extends cc.Component {

    @property(cc.SpriteFrame)
    map: cc.SpriteFrame = null;

    // @property
    bluramount: number = 0.03;

    img: cc.Sprite = null;
    material: cc.Material;
    time: number = 0;
    startTime: number = Date.now();
    resolution = { x: 0.0, y: 0.0 };

    onLoad() {
        window.onblur = function () {
            cc.game.pause();
        }
        window.onfocus = function () {
            cc.game.resume();
        }

        this.img = this.getComponent(cc.Sprite);
        this.material = this.img.getMaterial(0);
        let mapTexture2D = this.map.getTexture().getImpl();
        console.log(mapTexture2D);
        // this.material["_effect"]["_properties"]["map"]["value"] = mapTexture2D;

        console.log(this.material);
    }

    update() {
        this.time = (Date.now() - this.startTime) / 1000;
        this.material.effect.setProperty('u_time', this.time);

    }


}
