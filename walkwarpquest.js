//************ ��ǹ ������ / �Թ / ⴴ��ҹ *************
function NpcWalkThenDialog(DialogId){ 
	debug("WalkThen Dialog "+DialogId,0x0000FF) 
}

function NpcHiddenDialog(){
	debug("NpcHiddenDialog ",0x0000FF)
}

function NpcDialogMenu(DialogId){ 
	debug("Menu "+DialogId,0x0000FF) 
	if (DialogId == 5){
		ts.SelectChoice(1);
		ts.SendEnd();
	}
} 
function NpcDialog(DialogId){ 
	debug("Dialog "+DialogId,0x0000FF) 
    if (ts.DialogId==15657) // ⡧�����¹��
    {
        ts.CancelQuest(); // ������� click npc 99 *2����

        ts.ClickOnNPC(1); // ������������
    } else {
        ts.SendEnd();
    }
} 

function warpFinish(){ 
} 

function OnTimer(){ 
	if (state == "walk" ){
		if((ts.Character.x != 1942) || (ts.Character.y != 1495)) { 
			ts.walk(1942,1495); 
		} else {
			ts.walk(2302,1775); 
		} 
	}
} 

function Start(){ 
		debug("Start Delay",0xEE2222)
		frm.cdelay(10)
		debug("End Delay",0xEE2222)
//	state = "walk"
//	Timer.Interval = 1500
//	Timer.Enabled = true
} 

function Stop(){ 
//	Timer.Enabled = false
} 

//********** �ѧ���蹷��ӧҹ������Դ�˵��ó� ************
function onPlayerWalk( uid , x , y ){ 
} 

function onWalk(x,y){ 
	debug("Walking to "+x +","+y,0xEE2222) 
} 

function onNPCAppear(npcmapid,  x,  y){ 
	if ((ts.Character.x - x >= 50 || ts.Character.x - x <= 50) && (ts.Character.y - y >= 50 || ts.Character.y - y <= 50)){ 
		debug("NPCID near is "+ npcmapid, 0xFF9933) 
		ts.ClickOnNPC(npcmapid) 
		ts.ClickOnNPC(npcmapid) 
	} 
} 

function PlayerOnline( playerid ){ 
// �Դ�������� playerid online ����� 

var strName = ""
	
	strName = getPlayerName(playerid);
	//debug("Player = " + strName + " is Online")


}

function OnPrivateMsg(PlayerName , Msg){ 
// �Դ������դ���ЫԺ����

	if ((Msg=="GM") && ( 
		(PlayerName=="XCroSs") 
		|| (PlayerName=="FlameRuby") 
		|| (PlayerName=="�Ҿѹ��") 
		|| (PlayerName=="��˭��") )){
		ts.Disconect();
	}
}

function getCurrentTime(){
	var time = new Date();
	h = time.getHours();
	m = time.getMinutes();
	s = time.getSeconds();
	return h + ":" + m + ":" + s
}

function PlayerAppearInMap( playerid , x , y ){ 
// �Դ�������� playerid ������ map
}


debug("3. WalkWarpQuest.js  -- loaded successful !!" , 0x00AA00);