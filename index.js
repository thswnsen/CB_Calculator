var gradeArr = new Array();
var UnitHide = true;
var leadershipDoctrin = 0;
var resultLeaderShip;
var leadershipArray = new Array();
const leadershipDoctrinList = 
{
    doctrinNone : 0,
    doctrin_6 : 1,
    doctrin_16 : 2,
    doctrin_18 : 3,
}


window.onload=function(){
    
    InitUnitData();
    document.getElementById('leadership').value = 700;
    onChangeLeaderShip();
    InitList();
}

UnitData = function(rank, name, leadership)
{
    this.rank = rank;
    this.name = name;
    this.leadership = leadership;
    this.leadership1 = Math.floor(leadership*0.94);
    this.leadership2 = Math.floor(leadership*0.84);
    this.leadership3 = Math.floor(leadership*0.82);
    this.doctrin = false;
}



function s1DbClicked()
{
    var target = document.getElementById('s1');
    var s2 = document.getElementById('s2')
    var opt1 = document.createElement('option');
    
    var temp = gradeArr.find((gradeArr) => {
  
        return gradeArr.name === target.options[target.selectedIndex].value;
      })

    opt1.value = target.options[target.selectedIndex].value
    opt1.innerHTML = target.options[target.selectedIndex].text
    opt1.style.backgroundColor = target.options[target.selectedIndex].style.backgroundColor;
    opt1.id = "optionItem";

    leadershipArray.push(getUnitLeaderShip(temp));

    s2.options.add(opt1);
    onChangeLeaderShip();
    removeAll(target);
    InitList();

}

function s2DbClicked()
{

    var target = document.getElementById('s2');
    var s1 = document.getElementById('s1');

    leadershipArray.splice(target.selectedIndex,1);
    onChangeLeaderShip();
    s2.options.remove(target.selectedIndex);
    removeAll(s1);
    InitList();
    
    
}

function onChangeLeaderShip()
{
    var TotalLeaderShip =  document.getElementById('leadership').value;
    
    resultLeaderShip = TotalLeaderShip - calculateUseLeaderShip();
    document.getElementById("result").innerText = resultLeaderShip;
}

function onLeaderShipChange()
{
    onChangeLeaderShip();
    removeAll(s1);
    InitList();

}


function calculateUseLeaderShip()
{
    var leadership = 0;
    for(var i=0;i<leadershipArray.length;i++)
    {
        leadership += leadershipArray[i];
    }
    return leadership;
}


function removeAll(s1)
{
    for (var i=s1.options.length-1; i>=0;i--)
    {
        s1.remove(i);
    }
}

function FindInList(value, listID)
{
    for(var i = 0; i<listID.options.length;i++)
    {
        if(listID.options[i].value == value)
        {
            return true;
        }

    }
    return false;

}
function InitUnitData()
{
    /* 5성 */
    gradeArr.push(new UnitData(5,"파발루 왕실 기사단",340));
    gradeArr.push(new UnitData(5,"배외 비마병",320));
    gradeArr.push(new UnitData(5,"관녕 철기병•진북",315));
    gradeArr.push(new UnitData(5,"신기 오천영",315));
    gradeArr.push(new UnitData(5,"진왕부 현갑 창기병",315));
    gradeArr.push(new UnitData(5,"신책 맥도병",310));
    gradeArr.push(new UnitData(5,"콜레흐 사냥꾼",310));
    gradeArr.push(new UnitData(5,"신정 선봉 무사",310));
    gradeArr.push(new UnitData(5,"헝가리 표기장군",305));
    gradeArr.push(new UnitData(5,"레티아리우스",305));
    gradeArr.push(new UnitData(5,"폴란드 윙드후사르",305));
    gradeArr.push(new UnitData(5,"바실레우스 화염 방사 호위대",300));
    gradeArr.push(new UnitData(5,"아르노 화포 포병",300));
    gradeArr.push(new UnitData(5,"예니체리 궁궐호위대",300));
    gradeArr.push(new UnitData(5,"백산흑수 철부도",300));
    gradeArr.push(new UnitData(5,"칸 케식 경비대",300));
    gradeArr.push(new UnitData(5,"란슬롯 기사",295));
    gradeArr.push(new UnitData(5,"바랑기안 가드",290));
    gradeArr.push(new UnitData(5,"어쌔신",295));
    gradeArr.push(new UnitData(5,"몰타 기사",295));
    gradeArr.push(new UnitData(5,"파주 석궁 기병영",295));
    gradeArr.push(new UnitData(5,"사나다 적비대",295));
    gradeArr.push(new UnitData(5,"마케도니아 방진",290));
    gradeArr.push(new UnitData(5,"관녕 철기병",285));
    gradeArr.push(new UnitData(5,"시그룬 호위대",280));
    gradeArr.push(new UnitData(5,"불랑기 화승총병",280));
    gradeArr.push(new UnitData(5,"아필린 방패석궁병",280));
    
 
    /* 4성 */

    gradeArr.push(new UnitData(4,"득도 승려",250));
    gradeArr.push(new UnitData(4,"비엔나 화승총 근위군",245));
    gradeArr.push(new UnitData(4,"노밀 화승총영",245));
    gradeArr.push(new UnitData(4,"바이킹 광전사",245));
    gradeArr.push(new UnitData(4,"무르밀로 검투사",245));
    gradeArr.push(new UnitData(4,"유림 표기장군영",245));
    gradeArr.push(new UnitData(4,"브리튼 장궁수",245));
    gradeArr.push(new UnitData(4,"진충 장창영",240));
    gradeArr.push(new UnitData(4,"요동 중갑대",240));
    gradeArr.push(new UnitData(4,"양양 투창 사사",240));
    gradeArr.push(new UnitData(4,"몰타 충성 경비대",240));
    gradeArr.push(new UnitData(4,"클레이모어 고원 검사",235));
    gradeArr.push(new UnitData(4,"작센 설원 창기병",235));
    gradeArr.push(new UnitData(4,"몰타 원정 기사",235));
    gradeArr.push(new UnitData(4,"천웅 신궁영",235));
    gradeArr.push(new UnitData(4,"베네치아 도심 창병",235));
    gradeArr.push(new UnitData(4,"사헬 낙타병",235));
    gradeArr.push(new UnitData(4,"천책부 당무위",235));
    gradeArr.push(new UnitData(4,"몰타 도보전 기사",235));
    gradeArr.push(new UnitData(4,"황야의 도끼 투척수",230));
    gradeArr.push(new UnitData(4,"무위 철인대",230));
    gradeArr.push(new UnitData(4,"신정 요새 기사단",230));
    gradeArr.push(new UnitData(4,"스위스 영광 할버드병",230));
    gradeArr.push(new UnitData(4,"라고냐 투창병",230));
    gradeArr.push(new UnitData(4,"헤임달 친위대",230));
    gradeArr.push(new UnitData(4,"사치도 여무사",225));
    gradeArr.push(new UnitData(4,"갤러해드 철위",225));
    gradeArr.push(new UnitData(4,"작센 창기병",225));
    gradeArr.push(new UnitData(4,"정원 패도 기병",225));
    gradeArr.push(new UnitData(4,"달단 돌진 사사",225));
    gradeArr.push(new UnitData(4,"오스만 검방패병",225));
    gradeArr.push(new UnitData(4,"파라곤 의장대",225));
    gradeArr.push(new UnitData(4,"시파히 기병",215));
    gradeArr.push(new UnitData(4,"몰타 창방패병 경비대",215));
    gradeArr.push(new UnitData(4,"오랑캐 매의 기사",215));
    gradeArr.push(new UnitData(4,"다네가시마 철포수",205));
    gradeArr.push(new UnitData(4,"헤타이로이",205));
    gradeArr.push(new UnitData(4,"백군 수비대",200));


    /* 3성 */
    gradeArr.push(new UnitData(3,"베데빌 레인저",195));
    gradeArr.push(new UnitData(3,"예니체리 장총부대",180));
    gradeArr.push(new UnitData(3,"우림 좌위 사성영",180));
    gradeArr.push(new UnitData(3,"다르다넬 불화살 사수",180));
    gradeArr.push(new UnitData(3,"바르호 사냥꾼",180));
    gradeArr.push(new UnitData(3,"변방 수비대",180));
    gradeArr.push(new UnitData(3,"파주 연노영",175));
    gradeArr.push(new UnitData(3,"바실레우스 화염병 투척수",175));
    gradeArr.push(new UnitData(3,"척가군 돌격대",170));
    gradeArr.push(new UnitData(3,"사막 비도 전사",170));
    gradeArr.push(new UnitData(3,"후스 지원 화승총수",170));
    gradeArr.push(new UnitData(3,"성마리아 수호자 궁수",165));
    gradeArr.push(new UnitData(3,"디마카에리",165));
    gradeArr.push(new UnitData(3,"펜릴 늑대 전사",165));
    gradeArr.push(new UnitData(3,"스위스 알파인 할버드병",165));
    gradeArr.push(new UnitData(3,"스위스 할버드병",165));
    gradeArr.push(new UnitData(3,"유가 창병",165));
    gradeArr.push(new UnitData(3,"갈리아 십자궁수",160));
    gradeArr.push(new UnitData(3,"팔레르모 검방패병",160));
    gradeArr.push(new UnitData(3,"비령군",160));
    gradeArr.push(new UnitData(3,"비화군",155));
    gradeArr.push(new UnitData(3,"파주 사성영",155));
    gradeArr.push(new UnitData(3,"몰타 검방패병 시종",155));
    gradeArr.push(new UnitData(3,"내만 호위대",150));
    gradeArr.push(new UnitData(3,"우림 우위 사성영",150));
    gradeArr.push(new UnitData(3,"엘모 천신 해머",150));
    gradeArr.push(new UnitData(3,"후라이보 무사",145));
    gradeArr.push(new UnitData(3,"영서 수도사",145));
    gradeArr.push(new UnitData(3,"걸안 바투르",140));
    gradeArr.push(new UnitData(3,"경기 철위영",130));
    gradeArr.push(new UnitData(3,"치도 승병",125));
    gradeArr.push(new UnitData(3,"캐틀란 백파이퍼",90));
    gradeArr.push(new UnitData(3,"로도스 투척수",80));
    gradeArr.push(new UnitData(3,"진원 화승총병",80));
    gradeArr.push(new UnitData(3,"천동 투창 장사",80));
    gradeArr.push(new UnitData(3,"신무 거대 방패 진영",80));
    gradeArr.push(new UnitData(3,"천동 장창병",80));
    gradeArr.push(new UnitData(3,"파발루 아카데미 의무대",60));
   
    /* 2성 */
    gradeArr.push(new UnitData(2,"양주 표기 장군",120));
    gradeArr.push(new UnitData(2,"청원 화승총영",120));
    gradeArr.push(new UnitData(2,"호위 등갑대",115));
    gradeArr.push(new UnitData(2,"노르만 기사 시종",115));
    gradeArr.push(new UnitData(2,"노르만 석궁수",110));
    gradeArr.push(new UnitData(2,"청서 창병 부대",110));
    gradeArr.push(new UnitData(2,"천등 궁술영",110));
    gradeArr.push(new UnitData(2,"바이에른 투창병",105));
    gradeArr.push(new UnitData(2,"하황 향군",105));
    gradeArr.push(new UnitData(2,"몰타 창방패병",105));
    gradeArr.push(new UnitData(2,"낭산소 도순병",100));
    gradeArr.push(new UnitData(2,"파주 장창영",95));
    gradeArr.push(new UnitData(2,"게르만 소도시 궁수",90));
    gradeArr.push(new UnitData(2,"고밀 궁마대",90));
    gradeArr.push(new UnitData(2,"천동 신궁수",60));

    /* 1성 */
    gradeArr.push(new UnitData(1,"귀향 패수",80));
    gradeArr.push(new UnitData(1,"의오 단련",65));
    gradeArr.push(new UnitData(1,"저지대 장창병",55));
    gradeArr.push(new UnitData(1,"웨일스 서민 궁수",50));
    gradeArr.push(new UnitData(1,"전서 단련 궁수",45));
    gradeArr.push(new UnitData(1,"밀라노 민병대",40));
    gradeArr.push(new UnitData(1,"갈리아 소작농",40));
    gradeArr.push(new UnitData(1,"백월 산민",40));
    gradeArr.push(new UnitData(1,"감주 변경 주민",30));
    gradeArr.push(new UnitData(1,"제노아 장인 부대",30));

}



/*
유닛 리스트 초기화
*/
function InitList()
{
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');


    for(i=0;i<gradeArr.length;i++)
    {   
        var opt1 = document.createElement('option');
        opt1.value = gradeArr[i].name;
        
        opt1.innerHTML = `${gradeArr[i].name} (${getUnitLeaderShip(gradeArr[i])})`
        opt1.id = "optionItem";

        if(gradeArr[i].rank == 5)
        {
            opt1.style.backgroundColor = '#ffcc66'
        }
        else if(gradeArr[i].rank == 4)
        {
            opt1.style.backgroundColor = '#9966ff'
        }
        else if(gradeArr[i].rank == 3)
        {
            opt1.style.backgroundColor = '#0099ff'
        }
        else if(gradeArr[i].rank == 2)
        {
            opt1.style.backgroundColor = '#33ff66'
        }
        else
        {
            opt1.style.backgroundColor = '#bbbbbb'
        }

        if(UnitHide)
        {
            if(getUnitLeaderShip(gradeArr[i])> resultLeaderShip)
            {
                continue;
            }

        }
        /* s2 리스트의 길이가 0보다 크면, 해당 리스트에 Value가 없으면 추가 */
        if(s2.options.length>0)
        {
          if(!FindInList(opt1.value,s2))
          {
            s1.options.add(opt1);
          }
        }
        else
        {
            s1.options.add(opt1);
        }
    }
}

function getDoctrin()  
{
   
    
    var dropBox = document.getElementById("DoctrinSelect");
    var selectValue = dropBox.options[dropBox.selectedIndex].value;
    
    switch(selectValue) {
        case 'Doctrin6':  
            leadershipDoctrin = leadershipDoctrinList.doctrin_6;
            break
      
        case 'Doctrin16':  
            leadershipDoctrin = leadershipDoctrinList.doctrin_16;
            break

        case 'Doctrin18':  
            leadershipDoctrin = leadershipDoctrinList.doctrin_18;
            break
      
        default:
            leadershipDoctrin = leadershipDoctrinList.doctrinNone;
            break
    }
    

    var s1 = document.getElementById('s1');
    removeAll(s1);
    InitList();
  }

  
function getHideUnit(event)  
{
    if(event.target.checked)  {
        UnitHide = true;
    }else {
        UnitHide = false;
    }

    var s1 = document.getElementById('s1');
    removeAll(s1);
    InitList();
  }

  function getUnitLeaderShip(unitData)
  {

    var leadershipData;


    switch(leadershipDoctrin) {
        case leadershipDoctrinList.doctrin_6:  
            leadershipData = unitData.leadership1;
            break
      
        case leadershipDoctrinList.doctrin_16:  
            leadershipData = unitData.leadership2;
            break

        case leadershipDoctrinList.doctrin_18:  
            leadershipData = unitData.leadership3;
            break
      
        default:
            leadershipData = unitData.leadership;
            break
    }


    return leadershipData;

  }


