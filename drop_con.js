function SetContributeItemList(){ 
	AddContributeItemList("����Թ��") 
	AddContributeItemList("����Թ��ǧ��") 
}

//************** �����ª��� ��駢ͧ*****************
function SetDropItemList(){ 
	AddDropItemList("��ҹ����¾��") 

} 

function AutoSendItems(){ 
	SendingAllSet(896000,"�Թ������");
	SendingAllSet(896000,"�Թ���Ǥ��");
	SendingAllSet(896000,"�Թ��");
}

debug("4. Drop_Con.js  -- loaded successful !!" , 0x00AA00);