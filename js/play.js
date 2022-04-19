let app = new PIXI.Application({
width:400,
height:600,
backgroundColor:0x000000
});

let polygon = new PIXI.Graphics()
.beginFill(0xffffff,1)
.drawRect(-85,195,40,10)
.drawRect(-25,195,40,10)
.drawRect(35,195,40,10)
.drawRect(95,195,40,10)
.drawRect(155,195,40,10)
.drawRect(215,195,40,10)
.drawRect(275,195,40,10)
.endFill();
polygon.x = 100;
polygon.y = 100;
app.stage.addChild(polygon)

let mX = 70;

let bar = new PIXI.Graphics()
.beginFill(0xffffff,1)
.drawRect(mX,470,40,15)
.endFill();
bar.x = 100;
bar.y = 100;
app.stage.addChild(bar)

let up = document.getElementById('app');
up.appendChild(app.view);