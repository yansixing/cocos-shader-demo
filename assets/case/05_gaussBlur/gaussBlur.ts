
const { ccclass, property } = cc._decorator;

@ccclass
export default class spirteOutline extends cc.Component {

    // @property
    bluramount: number = 0.03;

    img: cc.Sprite = null;
    material: cc.Material;

    onLoad() {
        this.img = this.getComponent(cc.Sprite);
        this.material = this.img.getMaterial(0);

        this.material.effect.setProperty('bluramount', this.bluramount);
        console.log(this.material);
    }

}
