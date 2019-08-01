import { Utils } from "../../utils/utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class spirteOutline extends cc.Component {

    @property
    outlineColor: string = "0xffffff";
    @property
    outlineSize: number = 2;

    img: cc.Sprite = null;
    material: cc.Material;

    onLoad() {
        this.img = this.getComponent(cc.Sprite);
        this.material = this.img.getMaterial(0);

        let { b, g, r } = Utils.hexToRGB(parseInt(this.outlineColor, 16));
        // outlineColor
        this.material.effect.setProperty('outlineColor', new cc.Vec3(r / 255, g / 255, b / 255));
        // textureSize
        this.material.effect.setProperty('textureSize', new cc.Vec2(this.img.node.width, this.img.node.height));
        // outlineSize
        this.material.effect.setProperty('outlineSize', this.outlineSize);
        console.log(this.material);
    }

}
