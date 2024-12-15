function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5V7wDcmQUti":
        Script1();
        break;
      case "6Xd11dNTTaJ":
        Script2();
        break;
      case "6BjjRke7pKB":
        Script3();
        break;
      case "6leHuAvWSUY":
        Script4();
        break;
      case "6OZNkQZ4d3f":
        Script5();
        break;
      case "6V1YIdr9x1T":
        Script6();
        break;
      case "5sxXlBMgx1t":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";

audio.load();

audio.play();

audio.volume=0.5;
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.4;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.6;
}

function Script6()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.8;
}

function Script7()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 1.0;
}

