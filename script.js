// *********************************
//TrueBot script for v3.0.1
//Modify by X CroSs
//Date 24/10/05 : 6.52am
//**********************************
var ghost_count = 0; 
var battle_count = 0; 
var roundcount = 0; 
var party_count = 0;
var state = "";
var DisconnectFlag = 0.3; 

var hpFractionEat = 0.9;	//�ͷ��������Թ��������ʹ���¡��� 70%
var spFractionEat = 0.9;
var hpFraction = 0.99;		//�ͷ�СԹ�֧ 95% �ͧ���ʹ��ԧ
var spFraction = 0.99;
var skillHealId = 0;		//0,1,2,3  	// 0 �Դ�����Ź͡�ҡ �����ʡ�������; 1 ���դ׹��ѧ; 2.�ѡ�ҺҴ��;3.�ش�ʹ�ѡ��
var HealAmt = 115;		//�����ç�ͧʡ�����
var DisconFai = 20;		//��ҫ��͹��¡��ҹ�����Ѵ
var avoild9amFlag = 1;	// ��������� ��ͺͷ����͹ 9 ���������� 1=��� 0=�����

function MyAttack(){ 
	state="fight"
	var MyChar = ts.Character 
	var Warrior = ts.CurrentPartner 
	//Monster = SelectF1Target() 
	Monster = findMonster()
	var n = MonsterAlive()  
	// if(NPC.Item(onpc.uID).charname != "���"){  // �����������˹�
	//	BasicAttack(MyChar, Monster, "�ź˹�"); 
	//} else {
		BasicAttack(MyChar, Monster, "�������"); 
	//}

	//ts.SendAttack(MyChar.Row, MyChar.Col, 0, 5, SkillID("�ѹ��Թ"))
} 

function MyPartnerAttack(){ 
	var MyChar = ts.Character 
	var Warrior = ts.CurrentPartner 
	//Monster = SelectF1Target() 
	Monster = findMonster() 
	var n = MonsterAlive()  
	// if(NPC.Item(onpc.uID).charname != "���"){  // �����������˹�
	//	BasicAttack(Warrior, Monster, "�ź˹�"); 
	//} else {
		BasicAttack(Warrior, Monster, "�������"); 
	//}

}

function BattleStoped(){ 

	//**********�觢ͧẺ�Թ 2 �ش************
	//SendingDupeSet("�Ѥ�շ��¿��1","���䫫�");
	// ********* �Ӥѭ�ҡ � �ѹ�ع˹� ***********
	CheckDisconnect();

	// ******** �Թ hp/sp + ��Ź͡�ҡ**********
	AutoEatFood()

	//********** ��ԨҤ + ��駢ͧ **************** 
	AutoDropItems();
	AutoContributeItems();
	AutoSendItems();
	ViewState();
	state = "walk"

	//ts.ClickOnNPC(1)
} 



LoadWaypoint("w1.txt")

function OnTimer() {
	waypoint_walk()
	//debug("x x",0x0000FF)
}

function InitBot(){ 
	// ******** �Թ hp/sp + ��Ź͡�ҡ**********
	AutoEatFood();

	//***** ��Ǩ�ͺ���ʹ + �����١��͹�����
	CheckDisconnect();

	//***** ��駤����ª��� �ͧ ��ͻ + ��ԨҤ
	SetContributeItemList();
	SetDropItemList();

	// ***** �ҡ script �١ �Т�� ��ͤ��������������
	debug("5. Script.js  -- loaded successful !!" , 0x00AA00);
	debug("=== Successfull loading all scripts. ===" , 0x0000AA);

} 

InitBot()


