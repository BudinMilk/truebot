function BattleStarted()
{ 	
	PartyCheck("Start");
	PartyCheck("Stop")
	battle_count++
	roundcount = 0;
	Turn++
		if (Turn == 10)
		{Turn = 0	}
} 


function MyAttack()
{	Fighting = 1
	LagTime = 0
	PartyCheck("Stop");
		Battle++
    	m = findMonster(); 
    	n = MonsterAlive(); 
			
				if (n == 6){ sk = SkillID("����");
 ts.SendAttack( ts.Character.Row , ts.Character.Col , 0 , 2, sk  ); }
	else						{sk = SkillID("�������");  
ts.SendAttack( ts.Character.Row , ts.Character.Col , 1 , 2, sk  ); }
    ts.SendAttack( ts.Character.Row , ts.Character.Col , m.Row , m.Col , sk  ); 

} 


function MyPartnerAttack(){ 
   	m = findMonster(); 
   	n = MonsterAlive(); 
		
				if (n == 6){ sk = SkillID("����");
				  ts.SendAttack( ts.CurrentPartner.Row , ts.CurrentPartner.Col , 0 , 2 , sk ); }
	else						{sk = SkillID("�������"); 
	 ts.SendAttack( ts.CurrentPartner.Row , ts.CurrentPartner.Col , 1 , 2 , sk ); }

   ts.SendAttack( ts.CurrentPartner.Row , ts.CurrentPartner.Col , m.Row , m.Col , sk ); 

} 


function BattleStoped()
{	Fighting = 0
	Battle = 0
	AutoEatFood()
	AutoContributeItems()

	AutoDropItems()
	ItemSend()
	/*************** �Ӥѭ�ҡ � �ѹ�ع˹� ************/
	CheckDisconnect();
	ViewState();
	PartyCheck("Stop");
	Battlecount()
	if (Turn == 3){SwapLuckyBadge()	}

} 


	debug("����� 5. attack.js  -- �ѹ����� !!" , 0xFF5588);