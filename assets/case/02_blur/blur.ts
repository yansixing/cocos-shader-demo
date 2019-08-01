import { Utils } from "../../utils/utils";

const { ccclass, property } = cc._decorator;

@ccclass
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
        window.onblur = function () {
            cc.game.pause();
            // AudioPlayer.pauseMusic();
        }
        window.onfocus = function () {
            cc.game.resume();
            // AudioPlayer.resumeMusic();
        }

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
