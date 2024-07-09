function setup()
{
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];//原有陣列放全部數字
    var result = [];//開另一個空陣列

    for(var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
        
            var index = Math.floor(Math.random() * arr.length);
            if (arr[index] == 0)
                document.getElementById('cell'+ i + j).innerHTML = ' ';
            else if (arr[index] < 9)
                document.getElementById('cell'+ i + j).innerHTML = '0' + arr[index];

            result.push(arr.splice(index, 1)[0]); //舊陣列去除數字轉移到新陣列
        }
    }
    
}
function doClick(a, b){
    var con = 0;
    var blank = "";
    blank = a.toString() + b.toString() ;
        
    if (a<2 && con == 0)
    {
        var upA = a+1;
        down = upA.toString() + b.toString() ;
        if (document.getElementById("cell"+ down).innerHTML == ' ')
        {
            document.getElementById("cell"+ down).innerHTML = document.getElementById("cell"+ blank).innerHTML;
            document.getElementById("cell"+ blank).innerHTML = ' ';
            con++;
        }
            
    }
    if (a>0 && con == 0)
    {
        var downA = a-1;
        up = downA.toString() + b.toString() ;
        if (document.getElementById("cell"+ up).innerHTML == ' ')
        {
            document.getElementById("cell"+ up).innerHTML = document.getElementById("cell"+ blank).innerHTML;
            document.getElementById("cell"+ blank).innerHTML = ' ';
            con++;
        }

    }
    
    if (b<2 && con == 0)
    {
        var leftB = b+1;
        left = a.toString() + leftB.toString() ;
        if (document.getElementById("cell"+ left).innerHTML == ' ')
        {
        document.getElementById("cell"+ left).innerHTML = document.getElementById("cell"+ blank).innerHTML;
            document.getElementById("cell"+ blank).innerHTML = ' ';
            con++;
        }
            
    }
    if (b>0 && con == 0)
    {
        var rightB = b-1;
        right = a.toString() + rightB.toString() ;
        if (document.getElementById("cell"+ right).innerHTML == ' ')
        {
            document.getElementById("cell"+ right).innerHTML = document.getElementById("cell"+ blank).innerHTML;
            document.getElementById("cell"+ blank).innerHTML = ' ';
            con++;
        }
            
    }

}

function show(a, b) {

    var con = 0;
    var blank = "";
    blank = a.toString() + b.toString() ;
    if (document.getElementById("cell"+ blank).innerHTML == ' ')
    {
        document.getElementById("msg").innerHTML = "This is a blank cell!";
        con++;
    }
        

    if (a<2)
    {
        var upA = a+1;
        down = upA.toString() + b.toString() ;
        if (document.getElementById("cell"+ down).innerHTML == ' ')
        {
            document.getElementById("msg").innerHTML = "This tile can move down!";
            con++;
        }
            
    }
    if (a>0)
    {
        var downA = a-1;
        up = downA.toString() + b.toString() ;
        if (document.getElementById("cell"+ up).innerHTML == ' ')
        {
            document.getElementById("msg").innerHTML = "This tile can move up!";
            con++;
        }

    }
    
    if (b<2)
    {
        var leftB = b+1;
        left = a.toString() + leftB.toString() ;
        if (document.getElementById("cell"+ left).innerHTML == ' ')
        {
            document.getElementById("msg").innerHTML = "This tile can move left!";
            con++;
        }
            
    }
    if (b>0)
    {
        var rightB = b-1;
        right = a.toString() + rightB.toString() ;
        if (document.getElementById("cell"+ right).innerHTML == ' ')
        {
            document.getElementById("msg").innerHTML = "This tile can move right!";
            con++;
        }
            
    }

    if (con == 0)
        document.getElementById("msg").innerHTML = "Illegal move!";

}

function blank() {
    document.getElementById("msg").innerHTML = "";
}

function checkwin() {

    var index = 0;
    var count = 0;

    for(var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
        
            if (index == 0 && document.getElementById('cell'+ i + j).innerHTML == ' ')
                count++;
            else if (index < 9 && document.getElementById('cell'+ i + j).innerHTML == '0' + index)
                count++;

            index++;
        }
    }
    
    if (count == 9) win();
}

function win() {
    applause = document.getElementById("applause");
    applause.play();
    window.alert('Congratulations! You win!');
}

function switchBGM() {
    music = document.getElementById("music");

    var buttonValue = document.getElementById("musicBtn");
    if (buttonValue.innerHTML == "Play music"){
        buttonValue.innerHTML = "Pause music";
        music.play();
    }
    else{
        buttonValue.innerHTML = "Play music";
        music.pause();
    }
        
}


//測試拍手音效
function gotoLastStep(){

    var index = 0;

    for(var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
        
                document.getElementById('cell'+ i + j).innerHTML = '0' + index;

            index++;
        }
    }

    document.getElementById('cell'+ '00').innerHTML = document.getElementById('cell'+ '01').innerHTML;
    document.getElementById('cell'+ '01').innerHTML = ' ';

}
