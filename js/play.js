const sleep = (ms) => new Promise(r => setTimeout(r, ms));
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
    let gamestart = false;
    
    
      /*if(e.key === ' ' || e.key === '　'){
          if (gamestart == false){
              gamestart = true;
          }
        }*/
//   function startgame() {
  /*      pong.x = pong.x + 10
    }*/

    /*
    const gameoption = document.gameoption;
    const num = gameoption.selectedIndex;
    const str = gameoption.options[num].value;
    */


    document.addEventListener('keypress', keypress_ivent);
    
    function keypress_ivent(e) {
        if(e.key === 'a' || e.key === 'A'){
        if(bar.x > -70){
        bar.x = bar.x-10;
      }
    }
        if(e.key === 'd' || e.key === 'D'){
        if(bar.x < 290){
        bar.x = bar.x+10;
      }
    }
      /*if(e.key === ' ' || e.key === '　'){
          if (gamestart == false){
              gamestart = true;
          }
        }*/
      return false;
    }


    var gamep = false;

    function startgame() {
      gamep = true;
    }
    
    let pong = new PIXI.Graphics()
    .beginFill(0xffffff,1)
    .drawCircle(8, 8, 8)
    pong.x = 180;
    pong.y = 290;
    if(gamep=true){
      let i = 1;
      while (i > 0) {
        async function hoge() {
          await sleep(5000);
          pong.x = pong.x + 10
        }
      }
    }
    app.stage.addChild(pong)

    
    let bar = new PIXI.Graphics()
    .beginFill(0xffffff,1)
    .drawRect(mX,470,40,15)
    .endFill();
    bar.x = 100;
    bar.y = 100;
    app.stage.addChild(bar)
    
    let cpubar = new PIXI.Graphics()
    .beginFill(0xffffff,1)
    .drawRect(mX,470,40,15)
    .endFill();
    cpubar.x = 100;
    cpubar.y = -460;
    app.stage.addChild(cpubar)
    
    let up = document.getElementById('app');
    up.appendChild(app.view);
